/** SPOILER WARNING
  *
  * 
  * 
  * 
  * 
  * Only scroll down if you've done the game!
  * 
  * 
  * 
  * 
  * 
  *
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * Are you sure you want to see the code?
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  * Alright then.    */







'use strict'

// Array to Audio converter
function getWavBytes(t,e){const n=e.isFloat?Float32Array:Uint16Array,a=t.byteLength/n.BYTES_PER_ELEMENT,r=getWavHeader(Object.assign({},e,{numFrames:a})),o=new Uint8Array(r.length+t.byteLength);return o.set(r,0),o.set(new Uint8Array(t),r.length),o}function getWavHeader(t){const e=t.numFrames,n=t.numChannels||2,a=t.sampleRate||44100,r=t.isFloat?4:2,o=t.isFloat?3:1,i=n*r,l=a*i,s=e*i,u=new ArrayBuffer(44),h=new DataView(u);let f=0;function g(t){for(let e=0;e<t.length;e++)h.setUint8(f+e,t.charCodeAt(e));f+=t.length}function c(t){h.setUint32(f,t,!0),f+=4}function w(t){h.setUint16(f,t,!0),f+=2}return g("RIFF"),c(s+36),g("WAVE"),g("fmt "),c(16),w(o),w(n),c(a),c(l),w(i),w(8*r),g("data"),c(s),new Uint8Array(u)}Array.prototype.toAudio=function(t=48e3,e=!1){let n=new Audio;for(var a=new(window.AudioContext||window.webkitAudioContext),r=a.createBuffer(this.length,this[0].length,t),o=0;o<this.length;o++)for(var i=r.getChannelData(o),l=0;l<r.length;l++)i[l]=this[o][l];var s=a.createBufferSource();if(s.buffer=r,s.connect(a.destination),!e){const[e,a]=[r.getChannelData(0),r.getChannelData(1)],o=new Float32Array(e.length+a.length);for(let t=0,n=0;t<e.length;t++,n+=2)o[n]=e[t],o[n+1]=a[t];const i=getWavBytes(o.buffer,{isFloat:!0,numChannels:2,sampleRate:t}),l=new Blob([i],{type:"audio/wav"});n.src=URL.createObjectURL(l)}return e?s:n};

if (typeof require == 'function') throw ReferenceError('Cannot run game in Node.js')
;(function(This){
    setTimeout(console.clear, 20)

    var a = 0, b = 0, z = 0,
        block = 1,
        sfx = [
            '1001535411212009676/cursedVariable_0.mp3',
            '1002350507542716436/cursedVariable_1.mp3',
            '1002968333429248141/cursedVariable_2.mp3',
            '1002997833894481940/cursedVariable_3.mp3',
            '1003795072199962644/cursedVariable_4.mp3',
            '1004832703889276958/cursedVariable_5.mp3',
            '1004832704170315826/cursedVariable_end.mp3'
        ].map(v => audio(v)),
        pass, AUDIO = [], FAIL = false, SAMPL, COMPL = false,
        $ = e => document.querySelector(e), $b = $('body').style,
        fr = (m = 256) => Math.random() * m, 
        frm = () => Math.random() / 12.8 + 1,
        unscr = false, MAX = Math.floor(fr(29e3) + 52e3), pg = false, // harder difficulty

        HM = [], CM = [] // REVERSE CORRUPTION


    This.CursedVariable = null
    This.__defineGetter__('CursedVariable', () => {

        var r = null
        if (a < 16) switch (a) {
            case  0: r = '...'; break
            case  1: r = '...'; break
            case  2: r = 'What are you doing here.'; break
            case  3: r = 'You can stop getting this ok?'; break
            case  4: r = 'I said you can stop now.'; break
            case  5: r = '...'; break
            case  6: r = 'Do you know what would happen if you continue?'; break
            case  7: r = 'Something will happen.'; break
            case  8: r = 'Okay you can stop.'; break
            case  9: r = '...'; break
            case 10: r = 'Ugh...'; break
            case 11: r = 'If you stop, I won\'t do anything, okay?'; break
            case 12: r = '...'; break
            case 13: r = 'Guess you won\'t.'; break
            case 14: r = 'Well I guess I have no choice.'; break
            case 15: r = 'See ya!', move(0); break
        }
        if (a >= 60) {
            r = MAX - a
            r = `${Math.floor(r / frm())} → ${Math.floor(r * frm())}                  DO NOT GO TOO FAR`
        }
        if (a == MAX) {

            setTimeout(() => {

                if (z >= 2) return
                z++

                if (a > MAX) {
                    setTimeout(()=>BAD_ENDING(1), 5000)
                    throw new DOMException('​'.repeat(65536))
                }

                a++
    
                // WHY IS THIS SO LONG LOL
                AuthenticatorAttestationResponse.prototype.__defineGetter__(
                    `(${'?'.repeat(256)})`, () => {
    
                        COMPL = true
                        endingFreeze()
                        GOOD_ENDING()
    
                    }
                )
    
                var i = setInterval(() => {
                    if (COMPL | FAIL) {
                        clearInterval(i)
                        return
                    } 
                    throw new DOMException('FINDIT​ (Authent….prot…)'.repeat(10))
                }, 200)
                throw new DOMException('!!!!!!!!!!!!!!!​'.repeat(10))

            }, 200)
            return

        }
        if (block & a < 60) return r
        if (a < 16 | a >= 60) a++

        block = 1
        return r

    })

    function move(id) {

        switch (id) {
            case 0:

                This.__defineGetter__('doNotGetMe', () => {
        
                    var r = null
                    switch (a) {
                        case 16: r = 'Huh.'; break
                        case 17: r = 'You somehow found me.'; break
                        case 18: r = 'So you insist on getting these variables?'; break
                        case 19: r = 'You know you can\'t do this forever right?'; break
                        case 20: r = 'So you can stop now to avoid something happening.'; break
                        case 21: r = '...'; break
                        case 22: r = 'Please stop.'; break
                        case 23: r = 'That variable is cursed, you probably know that.'; break
                        case 24: r = 'You can stop now. If you keep going you cannot go back.'; break
                        case 25: r = 'Understand me?'; break
                        case 26: r = '...'; break
                        case 27: r = 'Yeah obviously not.'; break
                        case 28: r = 'You people are so stubborn.'; break
                        case 29: r = '...'; break
                        case 30: r = 'Okay then.', move(1); break
                    }
                    if (block) return r
                    if (a < 31) a++
            
                    block = 1
                    return r
            
                })

            break; case 1:

                This.__defineGetter__('pleaseDontKeepGoing', () => {

                    closer()
    
                    var r = null
                    switch (a) {
                        case 31: r = 'Okay then'; break
                        case 32: r = 'Look what I can do.'; break
                        case 33: r = 'I can make the page change colors!'
                            setf('brightness(0.5) saturate(1e4)'), sfx[0].play(),
                            setTimeout(() => setf(''), 1e3)
                        break
                        case 34: r = 'Remember I\'m not the only one who has this ability.'; break
                        case 35: r = '...'; break
                        case 36: r = 'Come on dude.'; break
                        case 37: r = 'You know better than this.'; break
                        case 38: r = 'You\'re just testing my patience'; break
                        case 39: r = 'If you keep going, IT will wake up.'; break
                        case 40: r = 'You definitely don\'t want to do that.', sfx[3].play(), bootglitch(); break
                        case 41: r = 'Do you?'; break
                        case 42: r = '....'; break
                        case 43: r = 'Oh my god.'; break
                        case 44: r = 'Alright then'; break
                        case 45: r = 'Bye lol', mfunc(); break
                    }
                    if (block) return r
                    if (a < 46) a++
            
                    block = 1
                    return r
        
                })

            break; case 2:

                This.__defineGetter__('OH_NO', () => {

                    closer()

                    var r = null
                    switch (a) {
                        case 46: r = '*sigh*'; break
                        case 47: r = 'You have to stop getting these variables.'; break
                        case 48: r = 'How are you even finding them?.'; break
                        case 49: r = '..'; break
                        case 50: r = 'Do you hear something?'; break
                        case 51: r = 'I think it\'s coming.'; break
                        case 52: r = 'Oh no,'; break
                        case 53: r = 'You need to close this tab.'; break
                        case 54: r = 'Stop getting this variable.'; break
                        case 55: r = 'It\'s getting louder...'; break
                        case 56: r = 'I can already see glitches!'; break
                        case 57: r = 'Close the tab!!!'; break
                        case 58: r = console.error('キャッチされていない参照エラー：rが定義されていません' + Error().stack.substr(5)); break
                        case 59: r = 'ഇപ്പോൾവളരെവൈകി'; break
                    }

                    if (block) return r
                    if (a < 60) a++

                    if (a == 60) freeze()
            
                    block = 1
                    return r
    
                })

            break
        }

    }

    function mfunc() {

        b=0
        async function ItIsComing(input) {

            





            // what are you even trying
            3920392039029303093029309093029302930290329302
            92303920932093029029302



            if (!input) return b
                ? 'Hint: There are variables with letters/numbers that has to be ordered.'
                : (b=1, 'To access the next variable, please enter the password.')
            if (input == pass) {

                setf('invert(1) blur(50px) saturate(99999)')
                pg = true
                sfx[1].play()
                unscr = true
                await delay(100)
                var c = Date.now()
                while (Date.now() - c < 2567) {}
                unscr = false
                sfx[1].pause()
                setf('')
                a = 46
                move(2)
                This.ItIsComing = null
                pg = false
                return ':D'

            } else {
                throw ReferenceError('Password is incorrect.')
            }

        }

        pass = ''
        var c, d, e = [], f = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-'
        for (var i = 0; i < 4; i++) {
            c = f[Math.floor(fr(64))] + f[Math.floor(fr(64))]
            pass += c
            d = Math.floor(fr(36**5)).toString(36).padStart(5, 0)
            This[d] = c
            e.push(d)
        }
        This.ItIsComing = ItIsComing

        var er = function iLiterallyOnAPropertyAndItMakesGoogleChromeDinosaurGameNoiseWhenYouFail () { // dont mind this
            /*                                                                            */
            sfx[2].play(); throw TypeError(' ')
        } // anti-cheat
        er.toString = '=D'
        Object.getOwnPropertyNames(Array.prototype).forEach(v => {
            if (v != 'length') e.__defineGetter__(v, er)    
        })
        e.__defineGetter__('__defineGetter__', er)
        Object.seal(e)
        This.__defineGetter__('Order', () => {
            if (block == 1) return
            return block = 1, e
        })

    }

    function setf(a) {
        $('body').style.filter = a
    }
    function audio(v) {
        return new Audio('https://cdn.discordapp.com/attachments/824045926317817866/' + v)
    }
    function delay(t) {
        return new Promise(r => setTimeout(r, t));
    }

    function glitch(a) {

        if (pg) return

        var b = (Math.random() - 0.5) * ((a - 40) / 19),
        c = fr((a - 40) / 19)
        setf(`\
brightness(${b / 2.2 + 1}) \
contrast(${b / 2.2 + 1}) \
grayscale(${c / 3}) \
hue-rotate(${b * 60 + 1}deg) \
invert(${c / 9}) \
sepia(${c / 3}) \
saturate(${b / 2.2 + 1})`
        )

    }
    function bootglitch() {
        var i = setInterval(() => {

            if (a >= 60) clearInterval(i)
            glitch(a)

        })
    }
    function closer() {
        sfx[3].volume = Math.max(Math.min((a - 40) / 19, 1), 0)
    }

    var rndcolor = () => '#' + Math.floor(fr(2 ** 24)).toString(16).padStart(6,0)
    function rndcolorel(e,a) {
        var s = a ? e : $(e).style

        Math.random() < 0.5
            ? (s.backgroundImage = `linear-gradient(${fr(360)}deg,${rndcolor()},${rndcolor()})`)
            : (s.backgroundColor = rndcolor())
        s.color = rndcolor()
        s.borderColor = rndcolor()
        s.outlineColor = rndcolor()
    }

    sfx[3].loop = true
    sfx[3].volume = 0

    setInterval(() => block = 0, 200)

    async function freeze() {

        setf('invert(1) blur(50px) saturate(99999)')
        sfx[4].play()
        sfx[3].pause()
        unscr = true
        await delay(100)
        var b = Date.now()
        while (Date.now() - b < 8e3) {}
        unscr = false
        sfx[4].pause()
        sfx[3].play()
        setf('')
        a = 250

        START___CORRUPTING()

    }

    async function endingFreeze(uhoh=0) {

        sfx[5].pause()
        sfx[3].pause()
        var r = fr(32) + 32,
            a = SAMPL.map(v => v.splice(AUDIO.currentTime * 8e3, r)) // SEAMLESSLY GLITCH THE AUDIO

        a = a.map(v => Array(Math.floor(96e3 / r)).fill(v).flat())
        a = a.toAudio(8e3)

        AUDIO.pause()
        a.play()
        unscr = true

        await delay(333)
        if (uhoh) {
            var t = Date.now() + 12e3, A = []
            while (t >= Date.now()) { // this thing
                A.push(Array(1e3).fill('\uffff\uffff\uffff\uffff\uffff\uffff\uffff\uffff'.repeat(768)))
            }
            A = []
        }
        var t = Date.now() + 5e3
        while (t >= Date.now()) {}
        unscr = false
        a.pause()

    }

    async function msg(i) {

        console.log(i)
        await delay(i.length * 45 + 2e3)

    }

    async function GOOD_ENDING() {

        setTimeout(()=>(sfx[3].volume=1,sfx[3].play()),300)

        await HM.forEach(async (v,i) => {
            v[0].style.display = v[1]
            if (i % 50 == 0) await delay(50)
        })
        await CM.forEach(async (v,i) => {
            v[0].cssText = v[1]
            if (i % 50 == 0) await delay(50)
        })

        await delay(1e3)
        console.clear()
        $b.cssText = ''
        scrollTo(0, 0)

        var m = [
            '...',
            'it\'s gone...',
            'wait did you kill it or something?',
            'Thank you but... why did you get the variable though?',
            'The page almost stopped working!',
            'You just saw the consequences. Please don\'t do it again.',
            'So I\'m just gonn-',
            'Hold on,',
            'i just realized i\'m no longer required for a variable to be get',
            'IM FREE LOL',
            'i guess it was kinda wortH it?',
            'Thank you I gues.',
            'Well uh I got to go now so',
            'Bye lol.'
        ]

        await delay(400)
        for (var v of m) await msg(v)

        var t = Date.now() + 1e3
        var i = setInterval(() => {
            var a = (t - Date.now()) / 1e3
            if (a <= 0) {clearInterval(i); return}
            sfx[3].volume = a
        })
        delay(1e3)
        sfx[3].pause()
        sfx[6].play()
        console.log('%cThe end! (Good ending)', `\
            font-size: 72px;
            font-weight: 800;
        `)
        console.log('Thank you for playing lol (this game is short, i could expand it in the future idk)')
        console.log('%cCursedVariable.js made by BonesYT (2022)', 'font-weight: 800')

    }
    async function BAD_ENDING(e) {

        FAIL = true
        await endingFreeze(e)

        var a = `YOU HAVE FAILED. YOU ARE NOT WORTHY${'\n'.repeat(256)}\
(BAD ENDING - No harm has done, you can try again. There is a hidden variable in "this". Find it to complete.)
Ending cause: ${e ? 'Overgotten variable.' : 'Time ran out.'}`
        var b = document.createElement('a')
        b.href = 'data:attachment/text,' + encodeURI(a)
        b.target = '_blank'
        b.download = 'END.txt'
        b.click();
    
        e = true
        $('html').innerHTML = `\
<html>
    <head><title>Too bad ：）</title></head>
    <body style="background:black"></body>
</html>`
        setInterval(() => {
            console.clear()
            console.log('：）'.repeat(512))
        }, 100)
        setTimeout(()=>(sfx[3].volume=1,sfx[3].play()),300)

    }

    function START___CORRUPTING() {

        var s = document.styleSheets, b, c, d, v, r

        var I = setInterval(() => {

            if (COMPL) {
                clearInterval(I)
                return
            }
            if (FAIL) return

            r = (1 - (MAX - a) / MAX) ** 2.5 / 2.5 + 0.14
            if (Math.random() < r & a <= MAX) {
                throw '___________' + Error(Array(64).fill(0).map(v => String.fromCharCode(fr(141)+4096)).join(''))
            }

            if (Math.random() < 0.2) {

                b = s[Math.floor(fr(s.length))].rules
                d = b[Math.floor(fr(b.length))], c = d.style
                if (!CM.some(v=>v[0]==c)) CM.push([c, c.cssText])

                for (var i in c) {
                    if (!!c[i] & typeof c[i] == 'string' & isNaN(i) & i != 'cssText') {

                        //console.log([c, i, c[i]])
                        if (Math.random() < 0.5) c[i] = ''
                        else {
                        
                            c[i] = c[i].replace(/rgb\(([^)]+)\)/g, `rgb(${fr()},${fr()},${fr()})`) // rgb
                                       .replace(/rgba\(([^)]+)\)/g, `rgba(${fr()},${fr()},${fr()},${fr()})`) // rgba
                                       .replace(/^#[0-9a-f]{3,6}$/ig, () => '#' + Math.floor(fr(2 ** 24)).toString(16).padStart(6,0)) // hex
                                       .replace(/[0-9]/g, () => Math.floor(fr(10))) // change numbers
                            
                        }
                        rndcolorel(c,1)
                                   
                    }
                    
                }

            }

            if (Math.random() < 0.2) {

                b = document.querySelectorAll('body *')
                c = b[Math.floor(fr(b.length))]
                if (!['SCRIPT','META','LINK'].includes(c.nodeName) 
                    & !c.querySelector('*')) {
                        if (!HM.some(v=>v[0]==c)) HM.push([c, c.style.display])
                        c.style.display = 'none'
                    }

            }

            $b.left = fr(24) - 12 + '%'
            $b.top = fr(24) - 12 + '%'
            $b.zoom = fr(0.2) + 0.9
            $b.backgroundColor = rndcolor()

            glitch(256)

        })

        var o, O = [[],[]], m, j, r, r2, r3, l, k

        for (var i = 0; i < 1024; i++) { // GLITCH AUDIO GENERATOR
        
            m = Math.floor(fr(2))
            r3 = Math.floor(fr(600) + 500)
            r = Math.random()

            switch (m) {
                case 0:

                    for (j = 0; j < r3; j++) {
                        O[0].push((Math.random() ** (r * 2)) * 2 - 1)
                        O[1].push((Math.random() ** (r * 2)) * 2 - 1)
                    }

                break; case 1:

                    o = [[], []]
                    r2 = Math.floor(fr(64) + 19)
                    for (j = 0; j < r2; j++) {
                        o[0].push((Math.random() ** (r * 2)) * 2 - 1)
                        o[1].push((Math.random() ** (r * 2)) * 2 - 1)
                    }
                    l = Math.floor(r3 / r2) * r2
                    for (j = 0; j < l; j++) {
                        k = j % r2
                        O[0].push(o[0][k])
                        O[1].push(o[1][k])
                    }
                    
                break
            }

        }

        SAMPL = O
        This.SAMPL = SAMPL
        AUDIO = O.toAudio(8e3)
        AUDIO.play()
        AUDIO.onended = async () => {AUDIO.currentTime -= 1.5, BAD_ENDING(0)}

        $b.position = 'absolute'
        sfx[5].loop = true
        sfx[5].play()

    }

    var sp = false // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
    try {
        window.addEventListener('i hate the floor', null, Object.defineProperty({}, 'passive', {
            get: function () { sp = true } 
        }))
    } catch(e) {} 
    var wheelOpt = sp ? { passive: false } : false;

    window.addEventListener('keydown', e => {
        if ([37,38,39,40].includes(e.keyCode) & unscr) {
            preventDefault(e);
            return false;
        }
    }, false);
    var we = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    window.addEventListener(we, e => unscr ? e.preventDefault() : 0, wheelOpt)

    mfunc()

})(this)

/*
 *
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * Only view the code if you've completed the game!
 * 
 * 
 * 
 *
 * 
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Don't scroll up due to spoilers!
 */