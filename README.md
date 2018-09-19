# Angular default avatar
AngularJS directive to show an user avatar. Set a default avatar with initials if user has not avatar image.


### Demo
See the [demo page](https://aitorrodriguez990.github.io/ng-default-avatar/) with directive working.


## Table of content

- [Install](#install)
  - [Manual](#manual)
  - [Bower](#bower)
- [Usage](#usage)
  - [Fields](#fields)
- [Changelog](#changelog)
- [Copyright](#copyright)


<a name="install"></a>
## Install

<a name="manual"></a>
### Manual

Download lastest release from [here](https://github.com/AitorRodriguez990/ng-default-avatar/releases/latest).

<a name="bower"></a>
### Bower

Install bower package:

```bash
bower install --save ng-default-avatar
```

Include the following files in your app:

```html
<script src="bower_components/ng-default-avatar/default-avatar.js"></script>
```

Add, if you want, the stylesheet too:

```html
<link rel="stylesheet" href="bower_components/ng-default-avatar/default-avatar.css">
```

Add `ngDefaultAvatar` to your app's dependencies:

```javascript
angular.module('myApplication', ['ngDefaultAvatar']);
```


<a name="usage"></a>
## Usage

```html
<default-avatar name="Name" surname="Surname" image="UrlPath"></default-avatar>
```

<a name="fields"></a>
### Fields

#### **name (string)**

User name. Default value is `?`.

#### **surname (string)** - Optional

User surname. Default value is an empty string.

#### **image (string)** - Optional

User image. Default value is an empty string.


<a name="changelog"></a>
## Changelog

### v1.0
* Package available to install by Bower

### v0.3
* Add default values

### v0.2
* Improve files structure, directive's code and demo template

### v0.1
* First preview of directive with fields *name*, *surname* and *image*
* Demo page


<a name="copyright"></a>
## Copyright
Copyright (c) 2016-Present Aitor Rodríguez - [Front End Factory](http://www.frontendfactory.es). Directive licensed under the MIT License.
