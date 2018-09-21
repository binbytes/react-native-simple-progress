
# react-native-simple-progress

Easy to use and full customized horizontal progressbar.

## Installation

`$ npm install react-native-simple-progress --save`

## Usage

```js
import Progress from 'react-native-simple-progress';

<Progress 
	progress={10} 
	height={24} 
	progressColor={'#3B7FD2'}
	borderColor={'#CCC'}
	borderRadius={25} />
```

### Properties

| Prop | Description | Default |
|---|---|---|
|**`progress`**|Progress of whatever the indicator is indicating. A number between 0 and 100. |`0`|
|**`height`**|Hight of Progressbar. |`24`|
|**`progressColor`**|Fill color of the indicator. |`#3B7FD2`|
|**`borderWidth`**|Width of outer border, set to `0` to remove. |`1`|
|**`borderColor`**|Color of outer border. |`#CCC`|
|**`borderRadius`**|Radius of outer border. |`25`|


![Progress](https://github.com/binbytes/react-native-simple-progress/blob/master/screenshot/progress.gif)