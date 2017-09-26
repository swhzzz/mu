(function(window){var svgSprite='<svg><symbol id="icon-heart" viewBox="0 0 1025 1024"><path d="M736.008223 65.9C736.008223 65.9 736.008223 65.9 736.008223 65.9c-90.5 0-171.2 43.7-224 112-52.8-68.3-133.5-112-224-112C129.108223 65.9-1.191777 203.4 0.008223 369.8c0.7 93.9 42.4 177.6 107.3 232.4 3.1 2.6 6.1 5.3 9.1 8 40.7 36.5 298.1 272.2 374.4 339.9 6.1 5.4 13.7 8.1 21.2 8.1 7.6 0 15.2-2.7 21.2-8.1 69.5-61.7 290.6-265.1 381.7-346.4 66.2-55 108.7-139.8 109.1-235C1024.608223 202 895.208223 65.9 736.008223 65.9z"  ></path></symbol><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M625.536739 166.218379 299.701933 492.053183C289.704512 502.050605 289.704512 518.259629 299.701933 528.257051L625.536739 854.091853C635.53416 864.08928 651.743181 864.08928 661.740608 854.091853 671.738029 844.094432 671.738029 827.885408 661.740608 817.887987L335.905801 492.053183 335.905801 528.257051 661.740608 202.422246C671.738029 192.424824 671.738029 176.215801 661.740608 166.218379 651.743181 156.220957 635.53416 156.220957 625.536739 166.218379L625.536739 166.218379Z"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"  ></path><path d="M555.8272 564.6336L450.56 634.88V389.12l184.32 122.88-42.5984 28.4672 32.1536 22.9376L696.32 512 409.6 307.2v409.6l179.6096-128.4096-33.3824-23.7568z"  ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M40.96 512A471.04 471.04 0 1 0 512 40.96 471.04 471.04 0 0 0 40.96 512z m40.96 0a430.08 430.08 0 1 1 430.08 430.08A430.08 430.08 0 0 1 81.92 512z"  ></path><path d="M593.92 389.12h40.96v327.68h-40.96zM593.92 307.2h40.96v40.96h-40.96z"  ></path><path d="M327.68 307.2v409.6l286.72-204.8z m40.96 327.68V389.12l184.32 122.88z"  ></path></symbol><symbol id="icon-icon-3" viewBox="0 0 1024 1024"><path d="M798.72 512a204.8 204.8 0 0 0-204.8-204.8v40.96a163.84 163.84 0 0 1 0 327.68v40.96a204.8 204.8 0 0 0 204.8-204.8z"  ></path><path d="M593.92 163.84v40.96a307.2 307.2 0 1 1 0 614.4v40.96a348.16 348.16 0 1 0 0-696.32zM532.48 102.4v-2.2528a40.96 40.96 0 0 0-49.3568 6.3488L282.0096 307.2h58.1632l157.2864-157.2864A20.48 20.48 0 0 1 512 143.36v737.28a20.48 20.48 0 0 1-14.5408-5.9392L340.3776 716.8H143.36a20.48 20.48 0 0 1-20.48-20.48V327.68a20.48 20.48 0 0 1 20.48-20.48h138.6496l40.96-40.96H122.88a40.96 40.96 0 0 0-40.96 40.96v409.6a40.96 40.96 0 0 0 40.96 40.96h200.704l159.3344 159.3344a40.96 40.96 0 0 0 49.3568 6.3488V921.6a20.48 20.48 0 0 0 20.48-20.48V122.88A20.48 20.48 0 0 0 532.48 102.4z"  ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"  ></path><path d="M389.12 389.12h40.96v327.68h-40.96zM389.12 307.2h40.96v40.96h-40.96z"  ></path><path d="M409.6 512l286.72 204.8V307.2z m61.44 0l184.32-122.88v245.76z"  ></path></symbol><symbol id="icon-pause" viewBox="0 0 1024 1024"><path d="M512 40.96a471.04 471.04 0 1 0 471.04 471.04A471.04 471.04 0 0 0 512 40.96z m0 901.12a430.08 430.08 0 1 1 430.08-430.08 430.08 430.08 0 0 1-430.08 430.08z"  ></path><path d="M593.92 307.2h40.96v409.6h-40.96zM389.12 389.12h40.96v327.68h-40.96zM389.12 307.2h40.96v40.96h-40.96z"  ></path></symbol><symbol id="icon-single-cycle" viewBox="0 0 1024 1024"><path d="M81.92 552.96a245.76 245.76 0 0 1 245.76-245.76h122.88v-40.96h-122.88a286.72 286.72 0 1 0 0 573.44h61.44v-40.96h-61.44A245.76 245.76 0 0 1 81.92 552.96zM614.4 266.24v40.96a245.76 245.76 0 0 1 20.48 490.496v40.96A286.72 286.72 0 0 0 614.4 266.24zM430.08 798.72h163.84v40.96h-163.84zM512 266.24h61.44v40.96h-61.44z"  ></path><path d="M491.52 593.92h40.96v245.76h-40.96zM450.56 593.92h40.96v40.96h-40.96zM433.9712 301.2608l-86.8352-86.8352a20.48 20.48 0 0 1 28.8768-28.8768l86.8352 86.8352a20.48 20.48 0 0 1-28.8768 28.8768z"  ></path></symbol><symbol id="icon-list-cycle" viewBox="0 0 1024 1024"><path d="M552.96 268.6976h61.44v40.96h-61.44z"  ></path><path d="M655.36 268.6976v40.96a245.76 245.76 0 0 1 0 491.52H368.64a245.76 245.76 0 0 1 0-491.52h122.88v-40.96h-122.88a286.72 286.72 0 0 0 0 573.44h286.72a286.72 286.72 0 0 0 0-573.44z"  ></path><path d="M474.9312 303.7184l-86.8352-86.8352a20.48 20.48 0 1 1 28.8768-28.8768l86.8352 86.8352a20.48 20.48 0 0 1-28.8768 28.8768zM409.6 412.0576h286.72a20.48 20.48 0 0 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM409.6 555.4176h286.72a20.48 20.48 0 0 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM409.6 678.2976h286.72a20.48 20.48 0 1 1 0 40.96H409.6a20.48 20.48 0 0 1 0-40.96zM327.68 412.0576a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48zM327.68 555.4176a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48zM327.68 678.2976a20.48 20.48 0 1 1-20.48 20.48 20.48 20.48 0 0 1 20.48-20.48z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M675.84 198.0416a348.16 348.16 0 1 0 0 491.52 348.16 348.16 0 0 0 0-491.52z m-28.8768 463.2576a307.2 307.2 0 1 1 0-434.3808 307.2 307.2 0 0 1 0 434.3808z"  ></path><path d="M675.84 661.2992a20.48 20.48 0 0 1 28.8768 0l231.8336 231.8336A20.48 20.48 0 1 1 907.4688 921.6L675.84 690.3808a20.48 20.48 0 0 1 0-29.0816zM574.464 299.4176zM574.464 589.0048v-0.2048 0.2048zM266.24 435.6096h-40.96a206.6432 206.6432 0 0 0 5.9392 59.392l39.5264-10.6496a165.2736 165.2736 0 0 1-4.5056-48.7424zM284.8768 299.4176a202.3424 202.3424 0 0 0-53.6576 95.4368h42.5984a162.2016 162.2016 0 0 1 193.3312-109.568l10.6496-39.5264a204.8 204.8 0 0 0-192.9216 53.6576z"  ></path></symbol><symbol id="icon-random" viewBox="0 0 1024 1024"><path d="M747.52 309.4528a245.76 245.76 0 0 0-245.76 245.76v14.7456c-15.7696 38.912-17.408 56.7296-29.2864 68.1984a286.72 286.72 0 0 1-257.4336 162.816h-20.48v-40.96h20.48a245.76 245.76 0 0 0 239.2064-190.2592c2.4576-3.6864 4.5056-7.5776 6.7584-11.264s0-2.048 0-3.2768a286.72 286.72 0 0 1 286.72-286.72h61.44v40.96zM794.4192 721.5104l-87.04 86.2208a20.48 20.48 0 0 0 0 28.672 20.48 20.48 0 0 0 29.0816 0l87.04-86.2208a20.48 20.48 0 0 0 0-28.672 20.48 20.48 0 0 0-29.0816 0z"  ></path><path d="M792.576 303.5136l-86.8352-86.8352a20.48 20.48 0 1 1 28.8768-28.8768l86.8352 86.8352a20.48 20.48 0 0 1-28.8768 28.8768zM749.1584 715.5712A245.76 245.76 0 0 1 502.784 471.04v-14.7456c-15.7696-38.5024-17.6128-56.32-29.2864-67.7888a286.72 286.72 0 0 0-197.632-155.0336v40.96a245.76 245.76 0 0 1 178.7904 181.248c2.4576 3.6864 4.5056 7.5776 6.7584 11.264s0 2.048 0 3.072a286.72 286.72 0 0 0 286.72 284.672h61.44v-40.96zM235.52 228.352h-40.96v40.96h40.96z"  ></path></symbol><symbol id="icon-me" viewBox="0 0 1024 1024"><path d="M159.9488 803.2256a243.3024 243.3024 0 0 0-12.9024 46.6944h40.96a203.1616 203.1616 0 0 1 11.0592-36.2496zM677.0688 649.0112a266.24 266.24 0 1 0-330.1376 0 245.76 245.76 0 0 0-168.96 116.5312l40.96 11.0592A204.8 204.8 0 0 1 389.12 686.08h40.96v-36.0448a225.28 225.28 0 0 1-51.2-28.2624l-2.6624-2.048a225.28 225.28 0 0 1-30.5152-27.8528l-3.8912-4.3008-7.168-8.8064-4.9152-6.5536-5.9392-8.3968q-4.7104-6.9632-8.8064-14.336l-3.6864-6.9632c-1.8432-3.4816-3.4816-7.168-5.12-10.8544l-3.072-7.168a179.2 179.2 0 0 1-4.9152-13.5168l-1.6384-4.7104c-1.8432-6.144-3.4816-12.4928-4.9152-18.8416 0-1.8432 0-3.6864-1.024-5.5296q-1.4336-7.3728-2.2528-15.1552v-5.9392c0-6.7584-1.024-13.7216-1.024-20.48a225.28 225.28 0 0 1 202.3424-224.0512 228.7616 228.7616 0 0 1 46.08 0A225.28 225.28 0 0 1 655.36 266.24a225.28 225.28 0 0 1 50.5856 59.392 223.4368 223.4368 0 0 1 30.3104 91.3408A227.9424 227.9424 0 0 1 737.28 440.32c0 6.9632 0 13.7216-1.024 20.48v5.9392c0 1.8432-1.4336 10.0352-2.2528 14.9504s0 3.8912-1.024 5.7344c-1.4336 6.3488-2.8672 12.6976-4.9152 18.8416l-1.6384 4.7104c-1.4336 4.5056-3.072 9.0112-4.9152 13.5168L716.8 532.48c-1.6384 3.6864-3.2768 7.168-5.12 10.6496l-3.6864 7.168q-4.096 7.3728-8.8064 14.336l-5.9392 8.3968-4.7104 6.3488-7.168 8.8064-3.8912 4.3008a225.28 225.28 0 0 1-30.5152 28.0576l-2.6624 2.048A225.28 225.28 0 0 1 593.92 650.0352v36.0448h40.96a204.8 204.8 0 0 1 200.704 163.84h40.96a245.76 245.76 0 0 0-199.4752-200.9088z"  ></path></symbol><symbol id="icon-collection" viewBox="0 0 1024 1024"><path d="M143.36 491.52h286.72a20.48 20.48 0 0 1 0 40.96H143.36a20.48 20.48 0 0 1 0-40.96z"  ></path><path d="M491.52 901.12H122.88a40.96 40.96 0 0 1-40.96-40.96V122.88a40.96 40.96 0 0 1 40.96-40.96h614.4a40.96 40.96 0 0 1 40.96 40.96v389.12h40.96V122.88a81.92 81.92 0 0 0-81.92-81.92H122.88a81.92 81.92 0 0 0-81.92 81.92v737.28a81.92 81.92 0 0 0 81.92 81.92h368.64z"  ></path><path d="M163.84 307.2H143.36a20.48 20.48 0 0 0 0 40.96h20.48zM716.8 307.2H204.8v40.96h512a20.48 20.48 0 0 0 0-40.96zM889.856 574.464c-105.0624-63.8976-173.2608 57.344-173.2608 57.344s-68.4032-121.0368-173.2608-57.344c-182.0672 110.592 175.104 369.8688 175.104 369.8688s353.4848-259.072 171.4176-369.8688zM716.8 868.5568s-257.4336-180.8384-150.1184-243.0976c81.92-47.9232 149.504 84.7872 149.504 84.7872s44.2368-132.7104 148.6848-86.8352C962.56 683.008 716.8 868.5568 716.8 868.5568z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M204.8 552.96h204.8a20.48 20.48 0 0 1 0 40.96H204.8a20.48 20.48 0 0 1 0-40.96z"  ></path><path d="M143.36 921.6a40.96 40.96 0 0 1-40.96-40.96V143.36a40.96 40.96 0 0 1 40.96-40.96h614.4a40.96 40.96 0 0 1 40.96 40.96v327.68h40.96V143.36a81.92 81.92 0 0 0-81.92-81.92H143.36a81.92 81.92 0 0 0-81.92 81.92v737.28a81.92 81.92 0 0 0 81.92 81.92h327.68v-40.96z"  ></path><path d="M737.28 512a225.28 225.28 0 1 0 225.28 225.28 225.28 225.28 0 0 0-225.28-225.28z m0 409.6a184.32 184.32 0 1 1 184.32-184.32 184.32 184.32 0 0 1-184.32 184.32z"  ></path><path d="M771.2768 660.6848Q634.88 584.0896 634.88 737.28t136.6016 76.5952q136.192-76.5952-0.2048-153.1904z m-13.5168 122.88Q675.84 829.44 675.84 737.28t81.92-46.08q81.92 46.08 0 92.16zM225.28 307.2h-20.48a20.48 20.48 0 0 0 0 40.96h20.48zM696.32 307.2H266.24v40.96h430.08a20.48 20.48 0 0 0 0-40.96z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)