
<!-- Project title -->
# Image Processing API

<!-- Add buttons here -->

<!-- Describe your project in brief -->
An API for processing images implemented as part of the **Advanced Web Development Track** offered by **egFWD Initiative** through **Udacity**.

This project was structured from scratch, with ZERO starter files.

# Table of contents

- [Image Processing API](#image-processing-api)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Development](#development)
  - [Architecture](#architecture)
  - [API Endpoints](#api-endpoints)
    - [1. /api/resize?{queryParameters}](#1-apiresizequeryparameters)
    - [2. /api/grayscale?{queryParameters}](#2-apigrayscalequeryparameters)
    - [3. /api/threshold?{queryParameters}](#3-apithresholdqueryparameters)
    - [4. /api/negative?{queryParameters}](#4-apinegativequeryparameters)
  - [API Functionality](#api-functionality)
  - [Installed NPM Packages](#installed-npm-packages)
    - [Production Packages](#production-packages)
    - [Development Packages](#development-packages)
- [Useful Resources](#useful-resources)

# Installation

[(Back to top)](#table-of-contents)

To use this project, you need to follow the commands below:

1. Clone the repository into your local machine:

   ```bash
   git clone https://github.com/ibrahimelmokhtar/ts-image-processing-api.git
   ```

2. Redirect inside the cloned repository:

    ```bash
    cd ts-image-processing-api/
    ```

3. Install the required packages:

   ```bash
   npm install
   ```

4. *For applying configured styling*, run the following commands:
   - *Prettier styling*:

        ```bash
        npm run prettier
        ```

   - *ESLint styling*:

        ```bash
        npm run lint
        ```

5. *For working on the development phase*, run the following commands:
   - *Live debugging while development*:

        ```bash
        npm run server
        ```

   - *Jasmine Testing*:

        ```bash
        npm run test
        ```

6. *For working with the production phase*, run the following commands:

   - *Build the project*:

        ```bash
        npm run build
        ```

        Then, *Run the compiled server*:

        ```bash
        node build/server.js
        ```

   - OR simply, *Start the server with one command*:

        ```bash
        npm run start
        ```

7. Open the local website on `http://127.0.0.1:5000/api/{processType}?{queryParameters}`, more information about {processType} and {queryParameters} will be explained in [API Endpoints](#api-endpoints)

# Development

[(Back to top)](#table-of-contents)
This section will explain **how the code works** and **how everything is put together.**

## Architecture

[(Back to top)](#table-of-contents)

This project has the structure shown below:

```ts
├─── images/
    ├─── encenadaport.jpg
    ├─── fjord.jpg
    ├─── icelandwaterfall.jpg
    ├─── palmtunnel.jpg
    ├─── santamonica.jpg
├─── spec/
    ├─── support/
        ├─── jasmine.json
├─── src/
    ├─── middlewares/
        ├─── validator.middleware.ts
    ├─── modules/
        ├─── dir-exists.ts
        ├─── img-collect-names.ts
        ├─── img-create-name.ts
        ├─── img-exists.ts
        ├─── process-grayscale.ts
        ├─── process-negative.ts
        ├─── process-resize.ts
        ├─── process-threshold.ts
    ├─── routes/
        ├─── api/
            ├─── grayscale.route.ts
            ├─── negative.route.ts
            ├─── resize.route.ts
            ├─── threshold.route.ts
        ├─── index.ts
    ├─── schemas/
        ├─── grayscale.schema.ts
        ├─── negative.schema.ts
        ├─── resize.schema.ts
        ├─── threshold.schema.ts
    ├─── server/
        ├─── server.config.ts
    ├─── tests/
        ├─── helpers/
            ├─── reporter.ts
        ├─── dir-exists.spec.ts
        ├─── img-collect-names.spec.ts
        ├─── img-create-name.spec.ts
        ├─── img-exists.spec.ts
        ├─── server.spec.ts
    ├─── server.ts
├─── .eslintrc
├─── .gitignore
├─── .prettierrc
├─── package.json
├─── README.md
├─── tsconfig.json
```

## API Endpoints

[(Back to top)](#table-of-contents)

This API has **FOUR** endpoints using the `GET` method as explained below:

### 1. /api/resize?{queryParameters}

```ts
/api/resize?filename={value}&width={value}&height={value}
```

The user can pass a specific image name, desired width and desired height. After query validation, this API will use these parameters to apply **`resize`** operation on this image. `queryParameters` explained:

   1. **`filename`**: specific image to be processed, with some specifications:
      - pass *`filename`* only, **without** any file extension.
      - the image **MUST** be in the *`images/`* directory.
   2. **`width`**: desired width of the processed image, with some specifications:
      - pass a **number** between **100** and **1000**
   3. **`height`**: desired height of the processed image, with some specifications:
      - pass a **number** between **100** and **1000**

For example:

```js
http://127.0.0.1:5000/api/resize?filename=encenadaport&width=500&height=800
```

This request will return an image `encenadaport_resize_w500_h800` with `.jpg` as the file extension.

### 2. /api/grayscale?{queryParameters}

[(Back to top)](#table-of-contents)

```ts
/api/grayscale?filename={value}
```

The user can pass a specific image name. After query validation, this API will use this parameter to apply **`grayscale`** operation on this image. `queryParameters` explained:

   1. **`filename`**: specific image to be processed. with some specifications:
      - pass *`filename`* only, **without** any file extension.
      - the image **MUST** be in the *`images/`* directory.

For example:

```ts
http://127.0.0.1:5000/api/grayscale?filename=fjord
```

This request will return an image `fjord_grayscale` with `.jpg` as the file extension.

### 3. /api/threshold?{queryParameters}

[(Back to top)](#table-of-contents)

```ts
/api/threshold?filename={value}&threshold={value}
```

The user can pass a specific image name and desired threshold level. After query validation, this API will use these parameters to apply **`threshold`** operation on this image. `queryParameters` explained:

   1. **`filename`**: specific image to be processed, with some specifications:
      - pass *`filename`* only, **without** any file extension.
      - the image **MUST** be in the *`images/`* directory.
   2. **`threshold`**: desired threshold level of the processed image, with some specifications:
      - pass a **number** between **0** and **255**

For example:

```ts
http://127.0.0.1:5000/api/threshold?filename=palmtunnel&threshold=200
```

This request will return an image `palmtunnel_threshold_th200` with `.jpg` as the file extension.

### 4. /api/negative?{queryParameters}

[(Back to top)](#table-of-contents)

```ts
/api/negative?filename={value}
```

The user can pass a specific image name. After query validation, this API will use this parameter to apply **`negative`** operation on this image. `queryParameters` explained:

   1. **`filename`**: specific image to be processed. with some specifications:
      - pass *`filename`* only, **without** any file extension.
      - the image **MUST** be in the *`images/`* directory.

For example:

```ts
http://127.0.0.1:5000/api/negative?filename=santamonica
```

This request will return an image `santamonica_negative` with `.jpg` as the file extension.

## API Functionality

[(Back to top)](#table-of-contents)

1. Place images to be processed inside `images/` directory with `.jpg` format.
   - *NOTE*:
     - The server will figure out the available images automatically.
     - Currently available images: *encenadaport*, *fjord*, *icelandwaterfall*, *palmtunnel*, and *santamonica*.

2. Call one of the available [API endpoints](#api-endpoints) with its query parameters.
3. Apply query validation rules on the called request.
   - If validation failed:
     - Send specific error back based on the failure type.
4. Construct processed image filename depending on the applied process.
5. Check `out/` directory existence.
   - If not found:
     - Create an empty `out/` directory.
6. Check the existence of a previously processed image with the same query parameters.
   - if found:
     - no additional processing will be applied.
   - if not found:
     - apply the desired processing operation on the original image.
     - Store processed image at `out/` directory.
7. Send the processed image back as a response to the called request.

## Installed NPM Packages

[(Back to top)](#table-of-contents)

These packages are required to run this project smoothly without any errors.

### Production Packages

These packages can be found in the `"dependencies"` object inside the `package.json` file.

- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework.
- [express-validator](https://www.npmjs.com/package/express-validator) - Express middleware for the validator module.
- [sharp](https://www.npmjs.com/package/sharp) - High-performance Node.js image processing.
- [fs](https://www.npmjs.com/package/fs) - Enables interacting with the file system.
- [path](https://www.npmjs.com/package/path) - Node.JS path module.

### Development Packages

These packages can be found in the `"devDependencies"` object inside the `package.json` file.

- [typescript](https://www.npmjs.com/package/typescript) - TypeScript is a language for application scale JavaScript development.
- [ts-node](https://www.npmjs.com/package/ts-node) - TypeScript execution environment and REPL for node.js, with source map support.
- [nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during the development of a node.js app.
- [prettier](https://www.npmjs.com/package/prettier) - Prettier is an opinionated code formatter.
- [eslint](https://www.npmjs.com/package/eslint) - An AST-based pattern checker for JavaScript.
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs prettier as an eslint rule.
- [jasmine](https://www.npmjs.com/package/jasmine) - CLI for Jasmine, a simple JavaScript testing framework for browsers and Node.
- [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter) - Spec reporter for jasmine behavior-driven development framework.
- [supertest](https://www.npmjs.com/package/supertest) - SuperAgent driven library for testing HTTP servers.

# Useful Resources

[(Back to top)](#table-of-contents)

- [Documentation: Prettier Options](https://prettier.io/docs/en/options.html)
- [Documentation: ESLint Configuring Rules](https://eslint.org/docs/user-guide/configuring/rules#configuring-rules)
- [Documentation: Jasmine Module](https://jasmine.github.io/setup/nodejs.html)
- [Documentation: Express-Validator Module](https://express-validator.github.io/docs/)
- [Documentation: Sharp Module](https://sharp.pixelplumbing.com/)
- [Youtube Video: Use Express-Validator Module with NodeJs](https://www.youtube.com/watch?v=7i7xmwowwCY)
- [Youtube Video: Use Sharp Module with NodeJs](https://www.youtube.com/watch?v=WtuJLcBvxI0)
- [Article: How to use Code Blocks within Markdown Files](https://rdmd.readme.io/docs/code-blocks)
