## Usage


### As Html Code:
```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="myID" d=""/></svg>
```

### As Plugin Code:

```
<!-- JavaScript -->
<script src="/js/tweenMax.js"></script>
<script src="/js/wavify.js"></script> 
<script src="/js/index.javascript.js"></script> 
```


or



```
<!-- jQuery -->
<script src="/js/jquery.1.10.1.js"></script>
<script src="/js/tweenMax.js"></script>
<script src="/js/wavify.js"></script>
<script src="/js/jquery.wavify.js"></script>
<script src="/js/index.jquery.js"></script> 
```

### Config
```
<!-- JavaScript Config Code -->
var waveOne = wavify(document.querySelector('#wave-one'), {
  height: 80,
  bones: 4,
  amplitude: 60,
  color: "#F1F1F1",
  speed: .15
});

<!-- jQuery Config Code -->
$("#wave-one").wavify({
  height: 80,
  bones: 4,
  amplitude: 60,
  color: "#f1f1f1",
  speed: .15
})
```


## Other
Wavify：（https://github.com/peacepostman/wavify）
TweenMax：（https://greensock.com/tweenmax） | （https://www.tweenmax.com.cn)
jQuery：（https://jquery.com）
