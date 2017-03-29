# react-native-pin-code
A simple pin code component

![example with blur background](https://media.giphy.com/media/xUPGcffB0VeaMd6DSM/giphy.gif)
![a simple example](https://media.giphy.com/media/3oKIPsotgoJ8ZGEr5u/giphy.gif)

## props

|        code       | number                    | pin code                       | required |                                                                                                                                                                                                                                 |
|:-----------------:|---------------------------|--------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| success           | function                  | call on success                | required |                                                                                                                                                                                                                                 |
| text              | string                    | text to display as title       |          | 'Pin code.'                                                                                                                                                                                                                     |
| error             | string                    | text to display on error       |          | 'Bad pin code.'                                                                                                                                                                                                                 |
| number            | number                    | number of pin input to display |          | 4                                                                                                                                                                                                                               |
| containerStyle    | object, StyleSheet object | container style                |          | {,height,: 150,,width,: width - 30,,backgroundColor : '#FFF',}                                                                                                                                                                  |
| containerPinStyle | object, StyleSheet object | pin container style            |          | {,width,: width - 30,,height,: 40,,flexDirection,: 'row',,justifyContent,: 'space-around',,alignItems,: 'center',,marginTop,: 20,,},                                                                                            |
| pinStyle          | object, StyleSheet object | pin style                      |          | {,backgroundColor : '#F0F0F0',,textAlign,: 'center',,flex,: 1,,marginLeft,: 20,,marginRight,: 20,,borderRadius,: 5,,shadowColor,: '#000000',,shadowOffset,: {,width,: 1,,height : 1,},,shadowRadius,: 5,,shadowOpacity : 0.4,}, |
| textStyle         | object, StyleSheet object | text style                     |          | {,textAlign,: 'center',,color,: 'gray',,fontSize,: 20,,marginTop,: 30,},                                                                                                                                                        |
| errorStyle        | object, StyleSheet object | error text style               |          | {,textAlign,: 'center',,color,: 'red',,paddingTop,: 10,}                                                                                                                                                                        |
