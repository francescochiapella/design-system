(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1491:function(n,e){n.exports=function(n){var e={literal:"true false null"},i=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={end:",",endsWithParent:!0,excludeEnd:!0,contains:i,keywords:e},a={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/})],illegal:"\\S"},t={begin:"\\[",end:"\\]",contains:[n.inherit(l)],illegal:"\\S"};return i.splice(i.length,0,a,t),{contains:i,keywords:e,illegal:"\\S"}}}}]);