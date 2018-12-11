import axios from "axios";
import Vuex from 'vuex';
import Vue from 'vue';
import config from '../config/game.config.json'
Vue.use(Vuex);
var x;
export const store = new Vuex.Store({
    
/*
states:
game_ready_state: game started. you can play now, tick tock motherfucker
*/
    state: {
        button_state: true,
        game_finished: null,
        game_status: null, // won or lost
        found_pairs : [],
        game_words: '0',
        words_hard: ['consider',
            'minute',
            'accord',
            'evident',
            'practice',
            'intend',
            'concern',
            'commit',
            'issue',
            'approach',
            'establish',
            'utter',
            'conduct',
            'engage',
            'obtain',
            'scarce',
            'policy',
            'straight',
            'stock',
            'apparent',
            'property',
            'fancy',
            'concept',
            'court',
            'appoint',
            'passage',
            'vain',
            'instance',
            'coast',
            'project',
            'commission',
            'constant',
            'circumstances',
            'constitute',
            'level',
            'affect',
            'institute',
            'render',
            'appeal',
            'generate',
            'theory',
            'range',
            'campaign',
            'league',
            'labor',
            'confer',
            'grant',
            'dwell',
            'entertain',
            'contract',
            'earnest',
            'yield',
            'wander',
            'insist',
            'knight',
            'convince',
            'inspire',
            'convention',
            'skill',
            'harry',
            'financial',
            'reflect',
            'novel',
            'furnish',
            'compel',
            'venture',
            'territory',
            'temper',
            'bent',
            'intimate',
            'undertake',
            'majority',
            'assert',
            'crew',
            'chamber',
            'humble',
            'scheme',
            'keen',
            'liberal',
            'despair',
            'tide',
            'attitude',
            'justify',
            'flag',
            'merit',
            'manifest',
            'notion',
            'scale',
            'formal',
            'resource',
            'persist',
            'contempt',
            'tour',
            'plead',
            'weigh',
            'mode',
            'distinction',
            'inclined',
            'attribute',
            'exert',
            'oppress',
            'contend',
            'stake',
            'toil',
            'perish',
            'disposition',
            'rail',
            'cardinal',
            'boast',
            'advocate',
            'bestow',
            'allege',
            'notwithstanding',
            'lofty',
            'multitude',
            'steep',
            'heed',
            'modest',
            'partial',
            'apt',
            'esteem',
            'credible',
            'provoke',
            'tread',
            'ascertain',
            'fare',
            'cede',
            'perpetual',
            'decree',
            'contrive',
            'derived',
            'elaborate',
            'substantial',
            'frontier',
            'facile',
            'cite',
            'warrant',
            'sob',
            'rider',
            'dense',
            'afflict',
            'flourish',
            'ordain',
            'pious',
            'vex',
            'gravity',
            'suspended',
            'conspicuous',
            'retort',
            'jet',
            'bolt',
            'assent',
            'purse',
            'plus',
            'sanction',
            'proceeding',
            'exalt',
            'siege',
            'malice',
            'extravagant',
            'wax',
            'throng',
            'venerate',
            'assail',
            'sublime',
            'exploit',
            'exertion',
            'kindle',
            'endow',
            'imposed',
            'humiliate',
            'suffrage',
            'ensue',
            'brook',
            'gale',
            'muse',
            'satire',
            'intrigue',
            'indication',
            'dispatch',
            'cower',
            'wont',
            'tract',
            'canon',
            'impel',
            'latitude',
            'vacate',
            'undertaking',
            'slay',
            'predecessor',
            'delicacy',
            'forsake',
            'beseech',
            'philosophical',
            'grove',
            'frustrate',
            'illustrious',
            'device',
            'pomp',
            'entreat',
            'impart',
            'propriety',
            'consecrate',
            'proceeds',
            'fathom',
            'objective',
            'clad',
            'partisan',
            'faction',
            'contrived',
            'venerable',
            'restrained',
            'besiege',
            'manifestation',
            'rebuke',
            'insurgent',
            'rhetoric',
            'scrupulous',
            'ratify',
            'stump',
            'discreet',
            'imposing',
            'wistful',
            'mortify',
            'ripple',
            'premise',
            'subside',
            'adverse',
            'caprice',
            'muster',
            'comprehensive',
            'accede',
            'fervent',
            'cohere',
            'tribunal',
            'austere',
            'recovering',
            'stratum',
            'conscientious',
            'arbitrary',
            'exasperate',
            'conjure',
            'ominous',
            'edifice',
            'elude',
            'pervade',
            'foster',
            'admonish',
            'repeal',
            'retiring',
            'incidental',
            'acquiesce',
            'slew',
            'usurp',
            'sentinel',
            'precision',
            'depose',
            'wanton',
            'odium',
            'precept',
            'deference',
            'fray',
            'candid',
            'enduring',
            'impertinent',
            'bland',
            'insinuate',
            'nominal',
            'suppliant',
            'languid',
            'rave',
            'monetary',
            'headlong',
            'infallible',
            'coax',
            'explicate',
            'gaunt',
            'morbid',
            'ranging',
            'pacify',
            'pastoral',
            'dogged',
            'ebb',
            'aide',
            'appease',
            'stipulate',
            'recourse',
            'constrained',
            'bate',
            'aversion',
            'conceit',
            'loath',
            'rampart',
            'extort',
            'tarry',
            'perpetrate',
            'decorum',
            'luxuriant',
            'cant',
            'enjoin',
            'avarice',
            'edict',
            'disconcert',
            'symmetry',
            'capitulate',
            'arbitrate',
            'cleave',
            'append',
            'visage',
            'horde',
            'parable',
            'chastise',
            'foil',
            'veritable',
            'grapple',
            'gentry',
            'pall',
            'maxim',
            'projection',
            'prowess',
            'dingy',
            'semblance',
            'tout',
            'fortitude',
            'asunder',
            'rout',
            'staid',
            'beguile',
            'purport',
            'deprave',
            'bequeath',
            'enigma',
            'assiduous',
            'vassal',
            'quail',
            'outskirts',
            'bulwark',
            'swerve',
            'gird',
            'betrothed',
            'prospective',
            'advert',
            'peremptory',
            'rudiment',
            'deduce',
            'halting',
            'ignominy',
            'ideology',
            'pallid',
            'chagrin',
            'obtrude',
            'audacious',
            'construe',
            'ford',
            'repast',
            'stint',
            'fresco',
            'dutiful',
            'hew',
            'parity',
            'affable',
            'interminable',
            'pillage',
            'foreboding',
            'rend',
            'livelihood',
            'deign',
            'capricious',
            'stupendous',
            'chaff',
            'innate',
            'reverie',
            'wrangle',
            'crevice',
            'ostensible',
            'craven',
            'vestige',
            'plumb',
            'reticent',
            'propensity',
            'chide',
            'espouse',
            'raiment',
            'intrepid',
            'seemly',
            'allay',
            'fitful',
            'erode',
            'unaffected',
            'canto',
            'docile',
            'patronize',
            'teem',
            'estrange',
            'spat',
            'warble',
            'mien',
            'sate',
            'constituency',
            'patrician',
            'parry',
            'practitioner',
            'ravel',
            'infest',
            'actuate',
            'surly',
            'convalesce',
            'demoralize',
            'devolve',
            'alacrity',
            'waive',
            'unwonted',
            'seethe',
            'scrutinize',
            'diffident',
            'execrate',
            'implacable',
            'pique',
            'mite',
            'encumber',
            'uncouth',
            'petulant',
            'expiate',
            'cavalier',
            'banter',
            'bluster',
            'debase',
            'retainer',
            'subjugate',
            'extol',
            'fraught',
            'august',
            'fissure',
            'knoll',
            'callous',
            'inculcate',
            'nettle',
            'blanch',
            'inscrutable',
            'tenacious',
            'thrall',
            'exigency',
            'disconsolate',
            'impetus',
            'imposition',
            'auspices',
            'sonorous',
            'exploitation',
            'bane',
            'dint',
            'ignominious',
            'amicable',
            'onset',
            'conservatory',
            'zenith',
            'voluble',
            'yeoman',
            'levity',
            'rapt',
            'sultry',
            'pinion',
            'axiom',
            'descry',
            'retinue',
            'functionary',
            'imbibe',
            'diversified',
            'maraud',
            'grudging',
            'partiality',
            'philology',
            'wry',
            'caucus',
            'permeate',
            'propitious',
            'salient',
            'propitiate',
            'excise',
            'betoken',
            'palatable',
            'upbraid',
            'renegade',
            'hoary',
            'pedantic',
            'coy',
            'troth',
            'encroachment',
            'belie',
            'armada',
            'succor',
            'imperturbable',
            'irresolute',
            'knack',
            'unseemly',
            'accentuate',
            'divulge',
            'brawn',
            'burnish',
            'palpitate',
            'promiscuous',
            'dissemble',
            'flotilla',
            'invective',
            'hermitage',
            'despoil',
            'sully',
            'malevolent',
            'irksome',
            'prattle',
            'subaltern',
            'welt',
            'wreak',
            'tenable',
            'inimitable',
            'depredation',
            'amalgamate',
            'immutable',
            'proxy',
            'dote',
            'reactionary',
            'rationalism',
            'endue',
            'discriminating',
            'brooch',
            'pert',
            'disembark',
            'aria',
            'trappings',
            'abet',
            'clandestine',
            'distend',
            'glib',
            'pucker',
            'rejoinder',
            'spangle',
            'blighted',
            'nicety',
            'aggrieve',
            'vestment',
            'urbane',
            'defray',
            'spectral',
            'munificent',
            'dictum',
            'fad',
            'scabbard',
            'adulterate',
            'beleaguer',
            'gripe',
            'remission',
            'exorbitant',
            'invocation',
            'cajole',
            'inclusive',
            'interdict',
            'abase',
            'obviate',
            'hurtle',
            'unanimity',
            'mettle',
            'interpolate',
            'surreptitious',
            'dissimulate',
            'ruse',
            'specious',
            'revulsion',
            'hale',
            'palliate',
            'obtuse',
            'querulous',
            'vagary',
            'incipient',
            'obdurate',
            'grovel',
            'refractory',
            'dregs',
            'ascendancy',
            'supercilious',
            'pundit',
            'commiserate',
            'alcove',
            'assay',
            'parochial',
            'conjugal',
            'abjure',
            'frieze',
            'ornate',
            'inflammatory',
            'machination',
            'mendicant',
            'meander',
            'bullion',
            'diffidence',
            'makeshift',
            'husbandry',
            'podium',
            'dearth',
            'granary',
            'whet',
            'imposture',
            'diadem',
            'fallow',
            'hubbub',
            'dispassionate',
            'harrowing',
            'askance',
            'lancet',
            'rankle',
            'ramify',
            'gainsay',
            'polity',
            'credence',
            'indemnify',
            'ingratiate',
            'declivity',
            'importunate',
            'passe',
            'whittle',
            'repine',
            'flay',
            'larder',
            'threadbare',
            'grisly',
            'untoward',
            'idiosyncrasy',
            'quip',
            'blatant',
            'stanch',
            'incongruity',
            'perfidious',
            'platitude',
            'revelry',
            'delve',
            'extenuate',
            'polemic',
            'enrapture',
            'virtuoso',
            'glower',
            'mundane',
            'fatuous',
            'incorrigible',
            'postulate',
            'gist',
            'vociferous',
            'purvey',
            'baleful',
            'gibe',
            'dyspeptic',
            'prude',
            'luminary',
            'amenable',
            'willful',
            'overbearing',
            'dais',
            'automate',
            'enervate',
            'wheedle',
            'gusto',
            'bouillon',
            'omniscient',
            'apostate',
            'carrion',
            'emolument',
            'ungainly',
            'impiety',
            'decadence',
            'homily',
            'avocation',
            'circumvent',
            'syllogism',
            'collation',
            'haggle',
            'waylay',
            'savant',
            'cohort',
            'unction',
            'adjure',
            'acrimony',
            'clarion',
            'turbid',
            'cupidity',
            'disaffected',
            'preternatural',
            'eschew',
            'expatiate',
            'didactic',
            'sinuous',
            'rancor',
            'puissant',
            'homespun',
            'embroil',
            'pathological',
            'resonant',
            'libretto',
            'flail',
            'bandy',
            'gratis',
            'upshot',
            'aphorism',
            'redoubtable',
            'corpulent',
            'benighted',
            'sententious',
            'cabal',
            'paraphernalia',
            'vitiate',
            'adulation',
            'quaff',
            'unassuming',
            'libertine',
            'maul',
            'adage',
            'expostulation',
            'tawdry',
            'trite',
            'hireling',
            'ensconce',
            'egregious',
            'cogent',
            'incisive',
            'errant',
            'sedulous',
            'incandescent',
            'derelict',
            'entomology',
            'execrable',
            'sluice',
            'moot',
            'evanescent',
            'vat',
            'dapper',
            'asperity',
            'flair',
            'mote',
            'circumspect',
            'inimical',
            'apropos',
            'gruel',
            'gentility',
            'disapprobation',
            'cameo',
            'gouge',
            'oratorio',
            'inclement',
            'scintilla',
            'confluence',
            'squalor',
            'stricture',
            'emblazon',
            'augury',
            'abut',
            'banal',
            'congeal',
            'pilfer',
            'malcontent',
            'sublimate',
            'eugenic',
            'lineament',
            'firebrand',
            'fiasco',
            'foolhardy',
            'retrench',
            'ulterior',
            'equable',
            'inured',
            'invidious',
            'unmitigated',
            'concomitant',
            'cozen',
            'phlegmatic',
            'dormer',
            'pontifical',
            'disport',
            'apologist',
            'abeyance',
            'enclave',
            'improvident',
            'disquisition',
            'categorical',
            'placate',
            'redolent',
            'felicitous',
            'gusty',
            'natty',
            'pacifist',
            'buxom',
            'heyday',
            'herculean',
            'burgeon',
            'crone',
            'prognosticate',
            'lout',
            'simper',
            'iniquitous',
            'rile',
            'sentient',
            'garish',
            'readjustment',
            'erstwhile',
            'aquiline',
            'bilious',
            'vilify',
            'nuance',
            'gawk',
            'refectory',
            'palatial',
            'mincing',
            'trenchant',
            'emboss',
            'proletarian',
            'careen',
            'debacle',
            'sycophant',
            'crabbed',
            'archetype',
            'cryptic',
            'penchant',
            'bauble',
            'mountebank',
            'fawning',
            'hummock',
            'apotheosis',
            'discretionary',
            'pithy',
            'comport',
            'checkered',
            'ambrosia',
            'factious',
            'disgorge',
            'filch',
            'wraith',
            'demonstrable',
            'pertinacious',
            'emend',
            'laggard',
            'waffle',
            'loquacious',
            'venial',
            'peon',
            'effulgence',
            'lode',
            'fanfare',
            'dilettante',
            'pusillanimous',
            'ingrained',
            'quagmire',
            'reprobation',
            'mannered',
            'squeamish',
            'proclivity',
            'miserly',
            'vapid',
            'mercurial',
            'perspicuous',
            'nonplus',
            'enamor',
            'hackneyed',
            'spate',
            'pedagogue',
            'acme',
            'masticate',
            'sinecure',
            'indite',
            'emetic',
            'temporize',
            'unimpeachable',
            'genesis',
            'mordant',
            'smattering',
            'suavity',
            'stentorian',
            'junket',
            'appurtenance',
            'nostrum',
            'immure',
            'astringent',
            'unfaltering',
            'tutelage',
            'testator',
            'elysian',
            'fulminate',
            'fractious',
            'pummel',
            'manumit',
            'unexceptionable',
            'triumvirate',
            'sybarite',
            'jibe',
            'magisterial',
            'roseate',
            'obloquy',
            'hoodwink',
            'striate',
            'arrogate',
            'rarefied',
            'chary',
            'credo',
            'superannuated',
            'impolitic',
            'aspersion',
            'abysmal',
            'poignancy',
            'stilted',
            'effete',
            'provender',
            'endemic',
            'jocund',
            'procedural',
            'rakish',
            'skittish',
            'peroration',
            'nonentity',
            'abstemious',
            'viscid',
            'doggerel',
            'sleight',
            'rubric',
            'plenitude',
            'rebus',
            'wizened',
            'whorl',
            'fracas',
            'iconoclast',
            'saturnine',
            'madrigal',
            'discursive',
            'zealot',
            'moribund',
            'modicum',
            'connotation',
            'adventitious',
            'recondite',
            'zephyr',
            'countermand',
            'captious',
            'cognate',
            'forebear',
            'cadaverous',
            'foist',
            'dotage',
            'nexus',
            'choleric',
            'garble',
            'bucolic',
            'denouement',
            'animus',
            'overweening',
            'tyro',
            'preen',
            'largesse',
            'retentive',
            'unconscionable',
            'badinage',
            'insensate',
            'sherbet',
            'beatific',
            'bemuse',
            'microcosm',
            'factitious',
            'gestate',
            'traduce',
            'sextant',
            'coiffure',
            'malleable',
            'rococo',
            'fructify',
            'nihilist',
            'ellipsis',
            'accolade',
            'codicil',
            'roil',
            'grandiloquent',
            'inconsequential',
            'effervescence',
            'stultify',
            'tureen',
            'pellucid',
            'euphony',
            'apocryphal',
            'veracious',
            'pendulous',
            'exegesis',
            'effluvium',
            'apposite',
            'viscous',
            'misanthrope',
            'vintner',
            'halcyon',
            'anthropomorphic',
            'turgid',
            'malaise',
            'polemical',
            'gadfly',
            'atavism',
            'contusion',
            'parsimonious',
            'dulcet',
            'reprise',
            'anodyne',
            'bemused',
        ],
        game_ready_state: false
    },

    // getters
    getters: {
        timeout: state => state.timeout,
        game_words: state => state.game_words,
        get_button_state: state => state.game_words,
        game_status: state => state.game_status,
        button_state: state => state.button_state,
        game_finished: state => state.game_finished,
        game_ready_state: state => state.game_ready_state,
    },

    // mutations
    mutations: {
        buttonState(state, bool){
            state.button_state = bool
        },
        add_found_pair(state, pair_id){
            state.found_pairs.push(pair_id)
        },
        save_game_words(state, res) {
            state.game_words = res
        },
    },

    // actions
    actions: {
        check_finish({commit, state}){
            if(state.found_pairs.length == config.default.numberOfPairs){
                state.game_finished = true
                state.game_status = true // won
                clearInterval(x);
            }
        },
        add_found_pair({commit, dispatch}, pair_id){
            commit('add_found_pair', pair_id)
            dispatch('check_finish')
        },
        finish({commit,state,dispatch}, data){
            state.game_finished = true
            if(state.found_pairs.length == 6){
                state.game_status = true // won
            }else{
                state.game_status = false; //lost
            }
        },
        countdown() {
            let countDownTime = config.default.timeout;
            let el = document.getElementById("countdown")
            el.innerHTML = countDownTime;
            x = setInterval(function () {
                --countDownTime;
                el.innerHTML = countDownTime
                if (countDownTime == 0) {
                    clearInterval(x)
                    window.dispatchEvent(new Event('end'));
                }
            }, 1000);
        },
        hacume({commit,state,dispatch}, data) {
            // let x = setInterval(() => {
            //     if(state.game_words.length != config.default.numberOfCards){
            //         state.game_words += '0';
            //     }
            // }, 50);

            state.game_ready_state = true;
            state.game_finished = null;
            state.game_status = null;
            state.game_words = '';
            state.found_pairs = [];
            let promises = [];
            let response = [];
            let c = 1;
            for (let i = 0; i < config.default.numberOfPairs; i++) {
                const rd = Math.floor(Math.random() * 1000);
                let key = state.words_hard[rd]
                // let key = 'justify'
                response.push({
                    id: c,
                    p_id: i + 1,
                    key
                })
                c++;
                promises.push(hit_api(key, i))
            }
            Promise.all(promises).then(res => {
                for (let i = 0; i < config.default.numberOfPairs; i++) {
                    res[i].id = c
                    c++;
                    response.push(res[i])
                }
                commit('save_game_words', shuffle(response))
                state.game_ready_state = true
                clearInterval(x);  
                window.dispatchEvent(new Event('start'));
                dispatch('countdown')
            })


            function url(key) {
                return `https://api.wordnik.com/v4/word.json/${key}/definitions?limit=200&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=bdc7a844dda214d7b942a0622ef0d47ee6c4a6acb836dc532`
            }
            async function hit_api(key, i) {
                return new Promise(async (resolve, rej) => {
                    let res = await axios.get(url(key))
                    res = res.data;
                    let l = res.length
                    let index = 0;
                    for (let i = 1; i < l; i++) {
                        index = (res[i].text && res[i].text.length < res[0].text.length) ? i : index
                    }
                    let def = res[index].text.replace('.', '').replace(/\s*\(.*?\)\s*/g, '')
                    if (def.length > 10)
                        def = def.split(';')[0]
                    let $l = def.length
                    let arr = def.split(" ")
                    let style = '';
                    if ($l < arr.length * 6 && arr.length < 3) {
                        let perc = 100 - Math.ceil((arr.length / 2) - 1) * 6;
                        if (perc < 65)
                            perc = 65;
                        style = 'style="font-size:' + perc + '%;"'
                    } else if (arr.length > 10) {
                        let perc = 100 - Math.ceil((arr.length / 2) - 1) * 7;
                        if (perc < 65)
                            perc = 65;
                        style = 'style="font-size:' + perc + '%;padding:0 8px;"'
                    } else if (arr.length > 2) {
                        let perc = 100 - Math.ceil((arr.length / 2) - 1) * 6;
                        if (perc < 65)
                            perc = 65;
                        style = 'style="font-size:' + perc + '%;"'
                    }
                    resolve({
                        p_id: i + 1,
                        key: '<p ' + style + '>' + def + '</p>'
                    })
                })
            }

            function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
            
        }


    },
})