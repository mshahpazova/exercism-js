/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  free(text) {
    return this.api.fetch(text).then((translation) => translation.translation);
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  batch(texts) {
    if (texts.length === 0) {
      return Promise.reject(new BatchIsEmpty());
    }
    return Promise.all(texts.map((text) => this.free(text)));
    // let translationsPromises = texts.map((text) => this.free(text));

    // return new Promise(function (resolve, reject) {
    //   let translations = [];
    //   return translationsPromises[0].then((text) => {
    //     return translationsPromises[1].then((text2) => {
    //       resolve([text, text2]);
    // return [text, text2];
    // });
    // });
    //   let promiseError;
    //   for (let promise of traslationsPromises) {
    //     promise
    //       .then((dat a) => translations.push(data))
    //       .catch((error) => (promiseError = error));
    //   }
    //   resolve(translations);
    //   reject(promiseError);
    // });
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    const makeRequest = (text) =>
      new Promise((resolve, reject) => {
        this.api.request(text, (error) => (error ? reject(error) : resolve()));
      });
    let retryCount = 0;
    function handleError(error) {
      if (retryCount < 2) {
        retryCount++;
        return makeRequest(text).catch(handleError);
      } else {
        return Promise.reject(error);
      }
    }
    return makeRequest(text).then().catch(handleError);
    // return makeRequest(text).catch((error) =>
    // makeRequest(text).catch((error) => makeRequest(text))
    // );

    // let errorCount = 0;
    // let lastError = null;
    // while (errorCount < 2) {
    //   console.log(errorCount);
    //   this.api.request(text, (error) => (lastError = error));
    //   if (!lastError) {
    //     return Promise.resolve();
    //   } else {
    //     errorCount++;
    //   }
    // }
    // return Promise.reject(lastError);
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string|void>}
   */
  premium(text, minimumQuality) {
    const makeRequest = () => {
      return this.api.fetch(text).then((translation) => {
        if (translation.quality < minimumQuality) {
          throw new QualityThresholdNotMet(translation.translation);
        }
        return translation.translation;
      });
    };

    return makeRequest().catch((error) => {
      if (error instanceof QualityThresholdNotMet) {
        throw error;
      }
      return this.request(text).then(makeRequest);
    });
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}

/**
 * Requests the service for some text to be translated.
 *
 * Note: the request service is flaky, and it may take up to three times for
 *       it to accept the request.
 *
 * @param {string} text
 * @returns {Promise<void>}
 */
async function request(text) {
  const makeRequest = (text) =>
    new Promise((resolve, reject) => {
      this.api.request(text, (error) => (error ? reject(error) : resolve()));
    });
  let retryCount = 0;
  function handleError(error) {
    if (retryCount < 2) {
      retryCount++;
      return makeRequest(text).catch(handleError);
    } else {
      return Promise.reject(error);
    }
  }
  try {
    let result = await makeRequest(text);
    return result;
  } catch {
    handleError();
  }
}
