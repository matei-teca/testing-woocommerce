(()=>{var e,t={666:(e,t,l)=>{"use strict";l.r(t);var o=l(5271),r=l(4981),n=l(9196),i=l(2175),a=l(9307),c=l(9818);const s=({blocks:e,findCondition:t})=>{for(const l of e){if(t(l))return l;if(l.innerBlocks){const e=s({blocks:l.innerBlocks,findCondition:t});if(e)return e}}};var u=l(3135);const m=e=>{switch(e){case"bottom":case"off":return{type:"flex",orientation:"vertical"};default:return{type:"flex",flexWrap:"nowrap"}}},p=e=>"lock"===e?{lock:{move:!0,remove:!0}}:{lock:{}},d=(e,t)=>{if(void 0!==t){const l={...t,attributes:{...t.attributes,...e}};(0,c.dispatch)("core/block-editor").updateBlock(t.clientId,l)}},g=({blocks:e,lockBlocks:t})=>{for(const l of e)d(p(t?"lock":"unlock"),l)},h=(e,t)=>{const l=(0,c.select)("core/block-editor").getBlock(t);null==l||l.innerBlocks.forEach((t=>{"core/group"===t.name&&d({layout:m(e)},t)}))},w=e=>{var t;return`wc-block-product-gallery--has-next-previous-buttons-${null===(t=(0,u.P)(e))||void 0===t?void 0:t.classname}`};var b=l(5609),f=l(5736),v=l(8203),k=l(2742),C=l(1735);const E=({attributes:e,setAttributes:t,context:l})=>{const{cropImages:o,hoverZoom:r,fullScreenOnClick:a}=e,{productGalleryClientId:c,pagerDisplayMode:s,nextPreviousButtonsPosition:u,thumbnailsNumberOfThumbnails:m,thumbnailsPosition:p}=l;return(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(b.PanelBody,{title:(0,f.__)("Gallery Navigation","woocommerce")},(0,n.createElement)(k.y,{context:{productGalleryClientId:c,pagerDisplayMode:s}}),(0,n.createElement)(C.f,{context:{productGalleryClientId:c,nextPreviousButtonsPosition:u}}),(0,n.createElement)(v.M,{context:{productGalleryClientId:c,thumbnailsNumberOfThumbnails:m,thumbnailsPosition:p}})),(0,n.createElement)(b.PanelBody,{title:(0,f.__)("Media Settings","woocommerce")},(0,n.createElement)(b.ToggleControl,{label:(0,f.__)("Crop images to fit","woocommerce"),help:(0,f.__)("Images will be cropped to fit within a square space.","woocommerce"),checked:o,onChange:()=>t({cropImages:!o})}),(0,n.createElement)(b.ToggleControl,{label:(0,f.__)("Zoom while hovering","woocommerce"),help:(0,f.__)("While hovering the large image will zoom in by 30%.","woocommerce"),checked:r,onChange:()=>t({hoverZoom:!r})}),(0,n.createElement)(b.ToggleControl,{label:(0,f.__)("Full-screen when clicked","woocommerce"),help:(0,f.__)("Clicking on the large image will open a full-screen gallery experience.","woocommerce"),checked:a,onChange:()=>t({fullScreenOnClick:!a})})))},y=[["core/group",{layout:{type:"flex",flexWrap:"nowrap"}},[["woocommerce/product-gallery-thumbnails",p("lock")],["core/group",{layout:{type:"flex",orientation:"vertical",justifyContent:"center"},...p("lock")},[["woocommerce/product-gallery-large-image",p("lock"),[["woocommerce/product-sale-badge",{align:"right",style:{spacing:{margin:{top:"4px",right:"4px",bottom:"4px",left:"4px"}}},lock:{move:!0}}],["woocommerce/product-gallery-large-image-next-previous",{layout:{type:"flex",verticalAlignment:"bottom"},lock:{move:!0,remove:!0}}]]],["woocommerce/product-gallery-pager",{lock:{move:!0,remove:!0}}]]]]]];var x=l(4184),_=l.n(x);const L=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery","version":"1.0.0","title":"Product Gallery","description":"Showcase your products relevant images and media.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"multiple":false,"interactivity":true},"textdomain":"woocommerce","usesContext":["postId"],"providesContext":{"thumbnailsPosition":"thumbnailsPosition","thumbnailsNumberOfThumbnails":"thumbnailsNumberOfThumbnails","productGalleryClientId":"productGalleryClientId","nextPreviousButtonsPosition":"nextPreviousButtonsPosition","pagerDisplayMode":"pagerDisplayMode","hoverZoom":"hoverZoom","fullScreenOnClick":"fullScreenOnClick"},"attributes":{"thumbnailsPosition":{"type":"string","default":"left"},"thumbnailsNumberOfThumbnails":{"type":"number","default":3},"pagerDisplayMode":{"type":"string","default":"dots"},"productGalleryClientId":{"type":"string","default":""},"cropImages":{"type":"boolean","default":false},"hoverZoom":{"type":"boolean","default":true},"fullScreenOnClick":{"type":"boolean","default":true},"nextPreviousButtonsPosition":{"type":"string","default":"insideTheImage"},"mode":{"type":"string","default":"standard"}},"viewScript":"wc-product-gallery-frontend","example":{}}');l(7554),l(7170),l(7565),l(9282),(0,o.EU)()&&(0,r.registerBlockType)(L,{icon:()=>(0,n.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M19 3H5C4.4 3 4 3.4 4 4V11C4 11.5 4.4 12 5 12H19C19.5 12 20 11.6 20 11V4C20 3.4 19.6 3 19 3ZM5.5 10.5V10.1L7.3 8.8L8.6 9.6C8.9 9.8 9.3 9.8 9.5 9.5L11 8.1L13.4 10.5H5.5ZM18.5 10.5H15.6L11.6 6.5C11.3 6.2 10.8 6.2 10.5 6.5L8.9 8L7.7 7.2C7.4 7 7.1 7 6.8 7.2L5.5 8.2V4.5H18.5V10.5Z",fill:"currentColor"}),(0,n.createElement)("rect",{x:"4.75",y:"15.5",width:"5",height:"4.5",rx:"1",stroke:"currentColor",strokeWidth:"1.5",fill:"none"}),(0,n.createElement)("rect",{x:"12.25",y:"15.5",width:"5",height:"4.5",rx:"1",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})),edit:({clientId:e,attributes:t,setAttributes:l})=>{const o=(0,i.useBlockProps)({className:w(t.nextPreviousButtonsPosition)}),{currentTemplateId:r,templateType:u}=(0,c.useSelect)((e=>({currentTemplateId:e("core/edit-site").getEditedPostId(),templateType:e("core/edit-site").getEditedPostType()})),[]);return(0,a.useEffect)((()=>{const o=((e,t)=>"wp_template_part"===t&&e.includes("product-gallery")?"full":"standard")(r,u);l({...t,mode:o,productGalleryClientId:e}),((e,t)=>{const{getBlock:l,getBlockRootClientId:o,getBlockIndex:r}=(0,c.select)("core/block-editor"),{moveBlockToPosition:n}=(0,c.dispatch)("core/block-editor"),i=l(t);if(i){const l=i.innerBlocks.length?i.innerBlocks[0].attributes.layout:null,a=s({blocks:[i],findCondition:e=>"woocommerce/product-gallery-thumbnails"===e.name}),c=s({blocks:[i],findCondition(e){var t;return Boolean(null===(t=e.innerBlocks)||void 0===t?void 0:t.find((e=>"woocommerce/product-gallery-large-image"===e.name)))}}),u=r((null==c?void 0:c.clientId)||""),p=r((null==a?void 0:a.clientId)||"");if(c&&a&&-1!==u&&-1!==p){g({blocks:[a,c],lockBlocks:!1});const{thumbnailsPosition:r}=e;if(h(r,t),h(r,i.innerBlocks[0].clientId),l){const e=m(r).orientation;d({layout:{...l,orientation:e}},i.innerBlocks[0])}(("bottom"===r||"right"===r)&&p<u||"left"===r&&p>u)&&n(a.clientId,o(a.clientId)||void 0,o(c.clientId)||void 0,u),g({blocks:[a,c],lockBlocks:!0})}}})(t,e)}),[l,t,e,r,u]),(0,n.createElement)("div",{...o},(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(E,{attributes:t,setAttributes:l,context:{productGalleryClientId:e,pagerDisplayMode:t.pagerDisplayMode,thumbnailsPosition:t.thumbnailsPosition,thumbnailsNumberOfThumbnails:t.thumbnailsNumberOfThumbnails,nextPreviousButtonsPosition:t.nextPreviousButtonsPosition}})),(0,n.createElement)(i.InnerBlocks,{allowedBlocks:["woocommerce/product-gallery-large-image","woocommerce/product-gallery-thumbnails"],templateLock:!1,template:y}))},save:({attributes:e})=>{const t=i.useBlockProps.save({className:_()("wc-block-product-gallery",w(e.nextPreviousButtonsPosition))}),l=i.useInnerBlocksProps.save(t);return(0,n.createElement)("div",{...l})}})},7485:(e,t,l)=>{"use strict";l.d(t,{JO:()=>n,MW:()=>i,Zg:()=>u,_o:()=>a,mL:()=>s,qv:()=>m,xt:()=>c});var o=l(9196),r=l(444);const n=()=>(0,o.createElement)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.22448 1.5L1.5 6.81504V11.7072L5.12953 9.06066C5.38061 8.87758 5.71858 8.86829 5.97934 9.0373L8.90601 10.9342L12.4772 7.46225C12.7683 7.17925 13.2317 7.17925 13.5228 7.46225L16.5 10.3568V2C16.5 1.72386 16.2761 1.5 16 1.5H6.22448ZM1.5 13.5636V16C1.5 16.2761 1.72386 16.5 2 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V12.4032L16.4772 12.4266L13 9.04603L9.52279 12.4266C9.27191 12.6706 8.88569 12.7086 8.59206 12.5183L5.59643 10.5766L1.5 13.5636ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z",fill:"#1E1E1E"})),i=()=>(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"49",height:"48",viewBox:"0 0 49 48",fill:"none",className:"wc-block-product-gallery-large-image-next-previous-right--inside-image"},(0,o.createElement)("g",{filter:"url(#filter0_b_397_11354)"},(0,o.createElement)("rect",{x:"0.5",width:"48",height:"48",rx:"5",fill:"black",fillOpacity:"0.5"}),(0,o.createElement)("path",{d:"M21.7001 12L19.3 14L28.5 24L19.3 34L21.7001 36L32.5 24L21.7001 12Z",fill:"white"})),(0,o.createElement)("defs",null,(0,o.createElement)("filter",{id:"filter0_b_397_11354",x:"-9.5",y:"-10",width:"68",height:"68",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},(0,o.createElement)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,o.createElement)("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:"5"}),(0,o.createElement)("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_397_11354"}),(0,o.createElement)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_397_11354",result:"shape"})))),a=()=>(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"49",height:"48",viewBox:"0 0 49 48",fill:"none",className:"wc-block-product-gallery-large-image-next-previous-left--inside-image"},(0,o.createElement)("g",{filter:"url(#filter0_b_397_11356)"},(0,o.createElement)("rect",{x:"0.5",width:"48",height:"48",rx:"5",fill:"black",fillOpacity:"0.5"}),(0,o.createElement)("path",{d:"M28.1 12L30.5 14L21.3 24L30.5 34L28.1 36L17.3 24L28.1 12Z",fill:"white"})),(0,o.createElement)("defs",null,(0,o.createElement)("filter",{id:"filter0_b_397_11356",x:"-9.5",y:"-10",width:"68",height:"68",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},(0,o.createElement)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,o.createElement)("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:"5"}),(0,o.createElement)("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_397_11356"}),(0,o.createElement)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_397_11356",result:"shape"})))),c=()=>(0,o.createElement)(r.SVG,{width:"22",height:"38",viewBox:"0 0 22 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"wc-block-product-gallery-large-image-next-previous-right--outside-image"},(0,o.createElement)("path",{d:"M4.56666 0L0.766663 3.16667L15.3333 19L0.766663 34.8333L4.56666 38L21.6667 19L4.56666 0Z",fill:"black"})),s=()=>(0,o.createElement)(r.SVG,{width:"22",height:"38",viewBox:"0 0 22 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"wc-block-product-gallery-large-image-next-previous-left--outside-image"},(0,o.createElement)("path",{d:"M17.7 0L21.5 3.16667L6.93334 19L21.5 34.8333L17.7 38L0.600002 19L17.7 0Z",fill:"black"})),u=()=>(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"18",viewBox:"0 0 30 18",fill:"none"},(0,o.createElement)("path",{d:"M4.525 8.8L6.825 6.5L5.825 5.5L3.525 7.8C2.825 8.5 2.825 9.6 3.525 10.3L5.825 12.6L6.925 11.5L4.625 9.2C4.425 9.1 4.425 8.9 4.525 8.8Z",fill:"currentColor"}),(0,o.createElement)("path",{d:"M25.4 8.8L23.1 6.5L24.1 5.5L26.4 7.8C27.1 8.5 27.1 9.6 26.4 10.3L24.1 12.6L23 11.5L25.3 9.2C25.5 9.1 25.5 8.9 25.4 8.8Z",fill:"currentColor"}),(0,o.createElement)("rect",{x:"0.75",y:"0.75",width:"28.5",height:"16.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"})),m=()=>(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"38",height:"18",viewBox:"0 0 38 18",fill:"none"},(0,o.createElement)("path",{d:"M1.525 8.3L5.825 4L4.825 3L0.525 7.3C-0.175 8 -0.175 9.1 0.525 9.8L4.825 14.1L5.925 13L1.625 8.7C1.425 8.6 1.425 8.4 1.525 8.3Z",fill:"currentColor"}),(0,o.createElement)("path",{d:"M37.325 7.3L33.025 3L31.925 4.1L36.2251 8.4C36.3251 8.5 36.3251 8.7 36.2251 8.8L31.925 13.1L33.025 14.2L37.325 9.9C38.025 9.1 38.025 8 37.325 7.3Z",fill:"currentColor"}),(0,o.createElement)("path",{d:"M25.925 0H11.925C10.825 0 9.92505 0.9 9.92505 2V16C9.92505 17.1 10.825 18 11.925 18H25.925C27.025 18 27.925 17.1 27.925 16V2C27.925 0.9 27.025 0 25.925 0ZM11.925 1.5H25.925C26.225 1.5 26.425 1.7 26.425 2V10.4L23.425 7.5C23.125 7.2 22.625 7.2 22.425 7.5L18.825 11L15.925 9C15.625 8.8 15.325 8.8 15.125 9L11.525 11.6V2C11.425 1.7 11.625 1.5 11.925 1.5ZM25.925 16.5H11.925C11.625 16.5 11.425 16.3 11.425 16V13.6L15.525 10.6L18.525 12.5C18.825 12.7 19.225 12.7 19.425 12.4L22.925 9L26.425 12.4V16C26.425 16.3 26.225 16.5 25.925 16.5Z",fill:"currentColor"}))},7170:(e,t,l)=>{"use strict";var o=l(4981),r=l(5271),n=l(9196),i=l(2175),a=l(9307),c=l(5609),s=l(4184),u=l.n(s),m=(l(251),l(1735)),p=l(3135);const d=e=>{switch(e){case"top":return"flex-start";case"center":return"center";default:return"flex-end"}},g=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-large-image-next-previous","version":"1.0.0","title":"Next/Previous Buttons","description":"Dispaly next and previous buttons.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["nextPreviousButtonsPosition","productGalleryClientId","postId"],"textdomain":"woocommerce","supports":{"layout":{"default":{"type":"flex","verticalAlignment":"bottom"},"allowVerticalAlignment":true,"allowJustification":false,"allowOrientation":false,"allowInheriting":false}},"ancestor":["woocommerce/product-gallery-large-image"]}');var h=l(7485);(0,r.EU)()&&(0,o.registerBlockType)(g,{icon:h.JO,edit:({attributes:e,context:t})=>{var l;const o=(0,i.useBlockProps)({style:{width:"100%",alignItems:d(null===(l=e.layout)||void 0===l?void 0:l.verticalAlignment)},className:u()("wc-block-editor-product-gallery-large-image-next-previous","wc-block-product-gallery-large-image-next-previous")}),r=(0,a.useMemo)((()=>(0,p.P)(t.nextPreviousButtonsPosition)),[t.nextPreviousButtonsPosition]);return(0,n.createElement)("div",{...o},(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(c.PanelBody,null,(0,n.createElement)(m.f,{context:t}))),(0,n.createElement)("div",{className:u()("wc-block-product-gallery-large-image-next-previous-container",`wc-block-product-gallery-large-image-next-previous--${null==r?void 0:r.classname}`)},(null==r?void 0:r.PrevButtonImage)&&(0,n.createElement)(r.PrevButtonImage,null),(null==r?void 0:r.NextButtonImage)&&(0,n.createElement)(r.NextButtonImage,null)))},save:()=>(0,n.createElement)("div",{...i.useBlockProps.save()})})},1735:(e,t,l)=>{"use strict";l.d(t,{f:()=>p});var o=l(9196),r=l(5736),n=l(9818),i=l(2175),a=l(5609);let c=function(e){return e.off="off",e.insideTheImage="insideTheImage",e.outsideTheImage="outsideTheImage",e}({});var s=l(7485);const u={[c.insideTheImage]:(0,o.createElement)(s.Zg,null),[c.outsideTheImage]:(0,o.createElement)(s.qv,null)},m=e=>{switch(e){case c.insideTheImage:return(0,r.__)("Next and previous buttons will appear inside the large image.","woocommerce");case c.outsideTheImage:return(0,r.__)("Next and previous buttons will appear on outside the large image.","woocommerce");default:return(0,r.__)("No next or previous button will be displayed.","woocommerce")}},p=({context:e})=>{const{productGalleryClientId:t,nextPreviousButtonsPosition:l}=e,{updateBlockAttributes:s}=(0,n.useDispatch)(i.store);return(0,o.createElement)(a.__experimentalToggleGroupControl,{label:(0,r.__)("Next/Prev Buttons","woocommerce"),className:"wc-block-editor-product-gallery-large-image-next-previous-settings",style:{width:"100%"},onChange:e=>s(t,{nextPreviousButtonsPosition:e}),help:m(l),value:l},(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.off,label:(0,r.__)("Off","woocommerce")}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.insideTheImage,label:u.insideTheImage}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.outsideTheImage,label:u.outsideTheImage}))}},3135:(e,t,l)=>{"use strict";l.d(t,{P:()=>r});var o=l(7485);const r=e=>{switch(e){case"insideTheImage":return{PrevButtonImage:o._o,NextButtonImage:o.MW,classname:"inside-image"};case"outsideTheImage":return{PrevButtonImage:o.mL,NextButtonImage:o.xt,classname:"outside-image"};default:return null}}},4283:(e,t,l)=>{"use strict";l.d(t,{e:()=>o});let o=function(e){return e.DIGITS="digits",e.DOTS="dots",e.OFF="off",e}({})},4634:(e,t,l)=>{"use strict";l.d(t,{$_:()=>a,j5:()=>s,jW:()=>c,oc:()=>n,xT:()=>i});var o=l(9196),r=l(444);const n=()=>(0,o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.00018 11L7.00018 11L7.00018 13H5.00018V11ZM11.0002 11L13.0002 11V13H11.0002V11ZM17.0002 11L19.0002 11V13H17.0002V11Z",fill:"currentColor"})),i=(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},(0,o.createElement)("circle",{cx:"6",cy:"6",r:"6",fill:"black",fillOpacity:"0.2"})),a=(0,o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},(0,o.createElement)("circle",{cx:"6",cy:"6",r:"6",fill:"black"})),c=()=>(0,o.createElement)(r.SVG,{width:"80",height:"36",viewBox:"0 0 80 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("circle",{cx:"32.6665",cy:"18",r:"3",fill:"currentColor"}),(0,o.createElement)("circle",{cx:"40.6665",cy:"18",r:"2.25",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("circle",{cx:"48.6665",cy:"18",r:"2.25",stroke:"currentColor",strokeWidth:"1.5"})),s=()=>(0,o.createElement)(r.SVG,{width:"80",height:"36",viewBox:"0 0 80 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M30.1417 22H31.9288V14.9541H30.1417L28.3497 16.1748V17.7178L30.0489 16.5703H30.1417V22ZM36.9771 22H41.7231V21.0674H38.4663V20.9697L39.9604 19.4805C41.2397 18.2109 41.6108 17.5957 41.6108 16.7949V16.7803C41.6108 15.6182 40.644 14.7832 39.3306 14.7832C37.9146 14.7832 36.9185 15.6914 36.9136 16.9805L36.9233 16.9902H37.9487L37.9536 16.9756C37.9536 16.2041 38.481 15.6865 39.272 15.6865C40.0435 15.6865 40.5171 16.1943 40.5171 16.8828V16.8975C40.5171 17.4688 40.2485 17.8301 39.3159 18.8018L36.9771 21.2578V22ZM48.7392 22.1318C50.2333 22.1318 51.2929 21.2627 51.2929 20.0518V20.042C51.2929 19.0557 50.5995 18.4307 49.5644 18.3379V18.3135C50.4237 18.1328 51.0487 17.5469 51.0487 16.6729V16.6631C51.0487 15.5742 50.1308 14.8223 48.7294 14.8223C47.3524 14.8223 46.4149 15.6084 46.3075 16.7949L46.3026 16.8486H47.328L47.3329 16.7998C47.4013 16.1357 47.9481 15.7207 48.7294 15.7207C49.5253 15.7207 49.9843 16.1211 49.9843 16.8047V16.8145C49.9843 17.4688 49.4374 17.9424 48.6317 17.9424H47.8065V18.792H48.6659C49.6034 18.792 50.1796 19.2363 50.1796 20.0322V20.042C50.1796 20.7354 49.5985 21.2188 48.7392 21.2188C47.8651 21.2188 47.2743 20.7695 47.206 20.1299L47.2011 20.0811H46.1562L46.161 20.1396C46.2538 21.3066 47.2353 22.1318 48.7392 22.1318Z",fill:"currentColor"}))},7565:(e,t,l)=>{"use strict";var o=l(4981),r=l(5271),n=l(4634),i=l(9196),a=l(1984),c=l(2175),s=l(5609),u=l(4184),m=l.n(u),p=l(2742),d=l(4283);const g=()=>{const e=Array.from({length:4},((e,t)=>{const l=0===t;return(0,i.createElement)("li",{className:"wc-block-editor-product-gallery-pager__item "+(l?"is-active":""),key:t},t+1)}));return(0,i.createElement)("ul",{className:"wc-block-editor-product-gallery-pager__pager"},e)},h=e=>{const{iconClass:t}=e,l=Array.from({length:3},((e,l)=>{const o=0===l?n.$_:n.xT;return(0,i.createElement)("li",{key:l},(0,i.createElement)(a.Z,{className:t,icon:o,size:12}))}));return(0,i.createElement)("ul",{className:"wc-block-editor-product-gallery-pager__pager"},l)},w=e=>{const{pagerDisplayMode:t}=e;switch(t){case d.e.DOTS:return(0,i.createElement)(h,null);case d.e.DIGITS:return(0,i.createElement)(g,null);case d.e.OFF:return null;default:return(0,i.createElement)(h,null)}},b=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-pager","version":"1.0.0","title":"Pager","description":"Display the gallery pager.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"usesContext":["pagerDisplayMode","productGalleryClientId","thumbnailsNumberOfThumbnails","postId"]}');l(6802),(0,r.EU)()&&(0,o.registerBlockType)(b,{icon:n.oc,edit:e=>{const{context:t}=e,l=(0,c.useBlockProps)({className:m()("wc-block-editor-product-gallery-pager","wc-block-product-gallery-pager")});return(0,i.createElement)("div",{...l},(0,i.createElement)(c.InspectorControls,null,(0,i.createElement)(s.PanelBody,null,(0,i.createElement)(p.y,{context:t}))),(0,i.createElement)(w,{pagerDisplayMode:t.pagerDisplayMode}))},save:()=>null})},2742:(e,t,l)=>{"use strict";l.d(t,{y:()=>m});var o=l(9196),r=l(2175),n=l(9818),i=l(5736),a=l(5609),c=l(4283),s=l(4634);const u=e=>{switch(e){case c.e.DIGITS:return(0,i.__)("A list of numbers will show to indicate the number of items.","woocommerce");case c.e.DOTS:return(0,i.__)("A series of dots will show to indicate the number of items.","woocommerce");default:return(0,i.__)("No pager will be displayed.","woocommerce")}},m=({context:e})=>{const{productGalleryClientId:t,pagerDisplayMode:l}=e,{updateBlockAttributes:m}=(0,n.useDispatch)(r.store);return(0,o.createElement)(a.__experimentalToggleGroupControl,{label:(0,i.__)("Pager","woocommerce"),style:{width:"100%"},onChange:e=>{m(t,{pagerDisplayMode:e})},help:u(l),value:l},(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.e.OFF,label:(0,i.__)("Off","woocommerce")}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.e.DOTS,label:(0,o.createElement)(s.jW,null)}),(0,o.createElement)(a.__experimentalToggleGroupControlOption,{value:c.e.DIGITS,label:(0,o.createElement)(s.j5,null)}))}},8203:(e,t,l)=>{"use strict";l.d(t,{M:()=>h});var o=l(9196),r=l(2175),n=l(5736),i=l(1984),a=l(444);const c=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 24",fill:"none"},(0,o.createElement)("g",{clipPath:"url(#clip0_420_11645)"},(0,o.createElement)("path",{d:"M22.5 3H10.5C9.4 3 8.5 3.9 8.5 5V19C8.5 20.1 9.4 21 10.5 21H22.5C23.6 21 24.5 20.1 24.5 19V5C24.5 3.9 23.6 3 22.5 3ZM10.5 4.5H22.5C22.8 4.5 23 4.7 23 5V13.4L21 10.5C20.7 10.2 20.2 10.2 20 10.5L16.4 14L13.5 12C13.2 11.8 12.9 11.8 12.7 12L10.1 14.6V5C10 4.7 10.2 4.5 10.5 4.5ZM22.5 19.5H10.5C10.2 19.5 10 19.3 10 19V16.6L13.1 13.6L16.1 15.5C16.4 15.7 16.8 15.7 17 15.4L20.5 12L23 15.4V19C23 19.3 22.8 19.5 22.5 19.5Z",fill:"currentColor"}),(0,o.createElement)("rect",{x:"1.25",y:"3.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("rect",{x:"1.25",y:"10.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"})),(0,o.createElement)("defs",null,(0,o.createElement)("clipPath",{id:"clip0_420_11645"},(0,o.createElement)("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.5)"})))),s=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"},(0,o.createElement)("path",{d:"M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM5 4.5H19C19.3 4.5 19.5 4.7 19.5 5V8.4L16.5 5.5C16.2 5.2 15.7 5.2 15.5 5.5L11.9 9L9 7C8.7 6.8 8.4 6.8 8.2 7L4.6 9.6V5C4.5 4.7 4.7 4.5 5 4.5ZM19 12.5H5C4.7 12.5 4.5 12.3 4.5 12V11.6L8.6 8.6L11.6 10.5C11.9 10.7 12.3 10.7 12.5 10.4L16 7L19.5 10.4V12C19.5 12.3 19.3 12.5 19 12.5Z",fill:"currentColor"}),(0,o.createElement)("rect",{x:"6.25",y:"15.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("rect",{x:"13.25",y:"15.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"})),u=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 24",fill:"none"},(0,o.createElement)("g",{clipPath:"url(#clip0_420_11656)"},(0,o.createElement)("path",{d:"M14.5 3H2.5C1.4 3 0.5 3.9 0.5 5V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V5C16.5 3.9 15.6 3 14.5 3ZM2.5 4.5H14.5C14.8 4.5 15 4.7 15 5V13.4L13 10.5C12.7 10.2 12.2 10.2 12 10.5L8.4 14L5.5 12C5.2 11.8 4.9 11.8 4.7 12L2.1 14.6V5C2 4.7 2.2 4.5 2.5 4.5ZM14.5 19.5H2.5C2.2 19.5 2 19.3 2 19V16.6L5.1 13.6L8.1 15.5C8.4 15.7 8.8 15.7 9 15.4L12.5 12L15 15.4V19C15 19.3 14.8 19.5 14.5 19.5Z",fill:"currentColor"}),(0,o.createElement)("rect",{x:"19.25",y:"3.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"}),(0,o.createElement)("rect",{x:"19.25",y:"10.75",width:"4.5",height:"4.5",rx:"1.25",stroke:"currentColor",strokeWidth:"1.5"})),(0,o.createElement)("defs",null,(0,o.createElement)("clipPath",{id:"clip0_420_11656"},(0,o.createElement)("rect",{width:"24",height:"24",fill:"currentColor",transform:"translate(0.5)"}))));var m=l(9818),p=l(5609),d=l(9777);const g={[d.M.OFF]:(0,n.__)("No thumbnails will be displayed.","woocommerce"),[d.M.LEFT]:(0,n.__)("A strip of small images will appear to the left of the main gallery image.","woocommerce"),[d.M.BOTTOM]:(0,n.__)("A strip of small images will appear below the main gallery image.","woocommerce"),[d.M.RIGHT]:(0,n.__)("A strip of small images will appear to the right of the main gallery image.","woocommerce")},h=({context:e})=>{const{productGalleryClientId:t}=e,{updateBlockAttributes:l}=(0,m.useDispatch)(r.store);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.__experimentalToggleGroupControl,{className:"wc-block-editor-product-gallery-thumbnails__position-toggle",isBlock:!0,label:(0,n.__)("Thumbnails","woocommerce"),value:e.thumbnailsPosition,help:g[e.thumbnailsPosition],onChange:e=>l(t,{thumbnailsPosition:e})},(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:d.M.OFF,label:(0,n.__)("Off","woocommerce")}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:d.M.LEFT,label:(0,o.createElement)(i.Z,{size:32,icon:c})}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:d.M.BOTTOM,label:(0,o.createElement)(i.Z,{size:32,icon:s})}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:d.M.RIGHT,label:(0,o.createElement)(i.Z,{size:32,icon:u})})),e.thumbnailsPosition!==d.M.OFF&&(0,o.createElement)(p.RangeControl,{label:(0,n.__)("Number of Thumbnails","woocommerce"),value:e.thumbnailsNumberOfThumbnails,onChange:e=>l(t,{thumbnailsNumberOfThumbnails:e}),help:(0,n.__)("Choose how many thumbnails (2-8) will display. If more images exist, a “View all” button will display.","woocommerce"),max:8,min:2}))}},9777:(e,t,l)=>{"use strict";l.d(t,{M:()=>o});let o=function(e){return e.OFF="off",e.LEFT="left",e.BOTTOM="bottom",e.RIGHT="right",e}({})},9282:(e,t,l)=>{"use strict";var o=l(4981),r=l(5271),n=l(9196);var i=l(2175),a=l(5609),c=l(4184),s=l.n(c),u=(l(5770),l(8203)),m=l(9777);const p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-thumbnails","version":"1.0.0","title":"Thumbnails","description":"Display the Thumbnails of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["postId","thumbnailsPosition","thumbnailsNumberOfThumbnails","productGalleryClientId"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"supports":{"spacing":{"margin":true,"__experimentalDefaultControls":{"margin":true}}}}');(0,r.EU)()&&(0,o.registerBlockType)(p,{icon:()=>(0,n.createElement)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.375 1.5H1.625C1.55596 1.5 1.5 1.55596 1.5 1.625V9.87895L4.35871 8.33965C4.5696 8.22609 4.82204 8.22009 5.03808 8.3235L7.42329 9.46513L10.3126 7.39076C10.574 7.20308 10.926 7.20308 11.1874 7.39076L13.5 9.05108V1.625C13.5 1.55596 13.444 1.5 13.375 1.5ZM13.5 10.8976L10.75 8.92328L7.93741 10.9426C7.71497 11.1023 7.42319 11.1281 7.1762 11.0098L4.73428 9.84105L1.5 11.5826V13.375C1.5 13.444 1.55596 13.5 1.625 13.5H13.375C13.444 13.5 13.5 13.444 13.5 13.375V10.8976ZM1.625 0C0.727537 0 0 0.727538 0 1.625V13.375C0 14.2725 0.727538 15 1.625 15H13.375C14.2725 15 15 14.2725 15 13.375V1.625C15 0.727537 14.2725 0 13.375 0H1.625ZM17.25 5V16C17.25 16.6909 16.6909 17.25 16.0011 17.25H3V18.75H16.0011C17.5204 18.75 18.75 17.5183 18.75 16V5H17.25Z",fill:"#1E1E1E"})),edit:({attributes:e,setAttributes:t,context:l})=>{const o=(0,i.useBlockProps)({className:"wc-block-product-gallery-thumbnails"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{...o},(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(a.PanelBody,null,(0,n.createElement)(u.M,{attributes:e,setAttributes:t,context:l}))),(0,n.createElement)(a.Disabled,null,(0,n.createElement)((()=>l.thumbnailsPosition!==m.M.OFF?(0,n.createElement)("div",{className:s()("wc-block-editor-product-gallery-thumbnails",`wc-block-editor-product-gallery-thumbnails--${l.thumbnailsPosition}`)},[...Array(l.thumbnailsNumberOfThumbnails).keys()].map((e=>(0,n.createElement)("img",{key:e,src:`${r.td}block-placeholders/product-image-gallery.svg`,alt:"Placeholder"})))):null),null))))},save:()=>null})},7530:(e,t,l)=>{"use strict";l.d(t,{Lo:()=>a,td:()=>i});var o,r=l(4617);const n=(0,r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=n.pluginUrl+"images/",a=(n.pluginUrl,n.buildPhase),c=(null===(o=r.STORE_PAGES.shop)||void 0===o||o.permalink,r.STORE_PAGES.checkout.id,r.STORE_PAGES.checkout.permalink,r.STORE_PAGES.privacy.permalink,r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink,r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id,r.STORE_PAGES.cart.permalink,r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:(0,r.getSetting)("wpLoginUrl","/wp-login.php"),(0,r.getSetting)("localPickupEnabled",!1),(0,r.getSetting)("countries",{})),s=(0,r.getSetting)("countryData",{});Object.fromEntries(Object.keys(s).filter((e=>!0===s[e].allowBilling)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(s).filter((e=>!0===s[e].allowBilling)).map((e=>[e,s[e].states||[]]))),Object.fromEntries(Object.keys(s).filter((e=>!0===s[e].allowShipping)).map((e=>[e,c[e]||""]))),Object.fromEntries(Object.keys(s).filter((e=>!0===s[e].allowShipping)).map((e=>[e,s[e].states||[]]))),Object.fromEntries(Object.keys(s).map((e=>[e,s[e].locale||[]])))},4478:(e,t,l)=>{"use strict";l.d(t,{EU:()=>r}),l(4981);var o=l(7530);const r=()=>o.Lo>2},5271:(e,t,l)=>{"use strict";l.d(t,{EU:()=>r.EU,td:()=>o.td});var o=l(7530),r=l(4478)},251:()=>{},6802:()=>{},5770:()=>{},7554:()=>{},9196:e=>{"use strict";e.exports=window.React},4617:e=>{"use strict";e.exports=window.wc.wcSettings},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},l={};function o(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,r,n)=>{if(!l){var i=1/0;for(u=0;u<e.length;u++){for(var[l,r,n]=e[u],a=!0,c=0;c<l.length;c++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](l[c])))?l.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,r,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=4062,(()=>{var e={4062:0,4123:0,5609:0,8641:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var r,n,[i,a,c]=l,s=0;if(i.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(l);s<i.length;s++)n=i[s],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},l=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=o.O(void 0,[2869],(()=>o(666)));r=o.O(r),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-gallery"]=r})();