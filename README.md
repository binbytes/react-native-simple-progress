
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


![enter image description here](https://lh3.googleusercontent.com/HEukX4DT9v4fkr4NSbGGPtqpdnUAU3YDF6zHn7yIovc_LYWsksk9rbIi4Cl2WlPj0qaLE8CckeAmc6UeiDFL4ZmW3MrkMB-Vc3Hnt9dQFeGD85UmodfRutkgc7chH9uk1-JF7TWza_b0qgPQvn7oqOPz2QQAZ1f_I93VBmOCi3zO4o9uxDkBGwVrhbvzMO2-7axzfrQeSB8q4CY39kJUvS6_YThmHM4VNJqjLPOM5mxZnP8CSDP9YXKsAnb2CgFaKy5XTmZv3uEN4b5rHzu3qX4vqiOToQxzkrQ1JMT1chEb7V8IAYGei1DBghwLO5CmFJpBHDdkIsTLYNcq9G64WlnOwylp2YFwg9RkEYapx_vE-nEdm5LvW9YwUEdnVn-V9en8kolalNZvNn8LPVC4p6Iuep23plhdCsw3Br6kNpfvCtnASHC3nBF1sJF_hqEggvJBCOcmpGoaBcYHSgaAeEGzI1VrUCAJZ7iAN8rrXBfIVbY8beXvZWNEc51oWv8aj5dMHA-KoOvyW6vVDKjznbSdx9filtkJztvUCqMMzGhTm7enUGFYN7WYp7h23beOJwsqo86k1_qTEhfCPxcCJI4YpDapLMYbvlZE6GA=w320-h510-no)