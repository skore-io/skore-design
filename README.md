# Skore-design :purple_heart:

<br/>

### What is Skore-design?

Skore-design is a react based component library and design system for the all new Skore One.

<br/>

### Why Skore-design?

Skore-design increases our design consistency, helps designers and devs understand components behaviours/layout and tests all in one place.

<br/>
<br/>

# Usage (Local) :rocket:

After you have cloned this repo, install the dependencies with:

```
npm install
```

<br/>

### Running Storybook

Now you can start the application running:

```
npm run start
```

Open `http://localhost:6006` in your browser. You will see the storybook with all the documented components.
Now you can create react components for consumption and document it in Storybook.

<br/>

### Linting and Testing

Keep in mind that your pull requests won't complete if your linting and tests fails. Don't forget to add tests to your components.

```
npm run lint
```
```
npm run test
```

<br/>
<br/>

# Usage (Plugin) :electric_plug:

<br/>

### How to test and use the new/updated component in SkoreOne without publishing the lib:

In this case, you will be working in 2 different repositories. One is the app and the other is the lib(skore-design).
__Ex: Skore-one-front && Skore-design.__
Let's say Skore-one-front is (A) and Skore-design is (B), then follow these 3 steps:
<br/>

1 - At the root of **repo A**, run the following command:
```
cd ./node_modules/react && yarn link && cd ../../
```
<br/>

2 - At the root of **repo B (this repo)**, run the script:
```
npm run local-link
```
<br/>

3 - Back on **repo A**, run the command:
```
yarn link '@skore-io/skore-design'
```
<br/>

4 - Import the component from the linked lib in your react component (certifique-se que o pacote esteja como dependência no package.json):
```
import { componentName } from '@skore-io/skore-design'
```
<br/>

5 - Use the component:
```
...
  <componentName myProp={propValue}/>
...
```
<br/>
If you have any doubt, watch the videos in the Videos section.

<br/>
<br/>

### How to install and use the lib from NPM:

1 - Create a ".npmrc" file in the root of the project with the following registry:
```
npm login --registry=https://npm.pkg.github.com
```
<br/>

2 - Generate a [personal access token](https://github.com/settings/tokens) with `repo` and `write:packages` scopes. Then login to npm with your username, token and email:
```
npm login --registry=https://npm.pkg.github.com
```
<br/>

3 - Install the lib:
```
npm install @skore-io/skore-design
```
<br/>

4 - Import a Skore-design component:
```
import { componentName } from '@skore-io/skore-design'
```
<br/>

5 - Use the component:
```
...
  <componentName myProp={propValue}/>
...
```

<br/>
<br/>

# Videos :clapper:

<br/>

**:gear: Setup:** https://drive.google.com/file/d/1ix8wmbZLD-GF_817CqpDyW5DoVlLAF54/view?usp=sharing
<br/>

**:information_source: Introduction:** https://drive.google.com/file/d/1SBsJuyYJIXoMPNYGoMxG9NU9ZgCj0UjZ/view?usp=sharing
<br/>

**:hammer: Creating a React component:** https://drive.google.com/file/d/1jKYW5MjGmEikY7inaP8XRJRNW_eblK8n/view?usp=sharing
<br/>

**:world_map: Instancing a Storybook component:** https://drive.google.com/file/d/1fNW32_uS39aSPtV9inEMu75yGo0ijRLO/view?usp=sharing
<br/>

**:mechanical_arm: Deploy:** https://drive.google.com/file/d/1WgJKe7xpP5hVeV3jnLW-k3W2B-ZR9F0F/view?usp=sharing
<br/>

**:link: Local linking:** https://drive.google.com/file/d/1bXGCrpb0_GEQOhIgJxafmxPqRZB3Wwdk/view?usp=sharing
