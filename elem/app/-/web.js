"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_easing_value(initial, target, t, fn = $$.$me_easing.linear) {
            return initial + (target - initial) * fn(t);
        }
        $$.$me_easing_value = $me_easing_value;
        $$.$me_easing = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => t * (2 - t),
            easeInOutQuad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (--t) * t * t + 1,
            easeInOutCubic: (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => 1 - (--t) * t * t * t,
            easeInOutQuart: (t) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => 1 + (--t) * t * t * t * t,
            easeInOutQuint: (t) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//easing.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let isArray = Array.isArray;
        let keyList = Object.keys;
        let hasProp = Object.prototype.hasOwnProperty;
        function $me_equal(a, b) {
            if (a === b)
                return true;
            if (a && b && typeof a == 'object' && typeof b == 'object') {
                const arrA = isArray(a), arrB = isArray(b);
                if (arrA != arrB)
                    return false;
                if (arrA && arrB) {
                    const length = a.length;
                    if (length != b.length)
                        return false;
                    for (let i = length; i-- !== 0;)
                        if (!$me_equal(a[i], b[i]))
                            return false;
                    return true;
                }
                const setA = a instanceof Set, setB = b instanceof Set;
                if (setA != setB)
                    return false;
                if (setA && setB) {
                    if (a.size != b.size)
                        return false;
                    let iter = a.keys();
                    let next = iter.next();
                    while (!next.done) {
                        if (!b.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    iter = b.keys();
                    next = iter.next();
                    while (!next.done) {
                        if (!a.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    return true;
                }
                const mapA = a instanceof Map, mapB = b instanceof Map;
                if (mapA != mapB)
                    return false;
                if (mapA && mapB)
                    return $me_equal([...a], [...b]);
                const dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA != dateB)
                    return false;
                if (dateA && dateB)
                    return a.getTime() == b.getTime();
                const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA != regexpB)
                    return false;
                if (regexpA && regexpB)
                    return a.toString() == b.toString();
                const keys = keyList(a);
                const length = keys.length;
                if (length !== keyList(b).length)
                    return false;
                for (let i = length; i-- !== 0;)
                    if (!hasProp.call(b, keys[i]))
                        return false;
                for (let i = length; i-- !== 0;) {
                    const key = keys[i];
                    if (!$me_equal(a[key], b[key]))
                        return false;
                }
                return true;
            }
            return a !== a && b !== b;
        }
        $$.$me_equal = $me_equal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//equal.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_word_plural(count, word1, word2_4, word5more) {
            if (word5more === undefined) {
                word5more = word2_4;
            }
            let result = word5more;
            const decimal = Math.floor(count / 10) % 10;
            if (decimal != 1) {
                const unit = count % 10;
                if (unit == 1) {
                    result = word1;
                }
                else if (unit >= 2 && unit <= 4) {
                    result = word2_4;
                }
            }
            return result;
        }
        $$.$me_word_plural = $me_word_plural;
        $$.$me_throw_silent = false;
        function $me_throw(msg, ...p) {
            if (!$$.$me_throw_silent)
                console.error.apply(console, [msg, ...p]);
            throw new Error(msg);
        }
        $$.$me_throw = $me_throw;
        $$.$me_rect = () => ({ left: 0, top: 0, right: 0, bottom: 0 });
        $$.$me_rect_width = (rect) => rect.right - rect.left;
        $$.$me_rect_height = (rect) => rect.bottom - rect.top;
        $$.$me_pos = () => ({ left: 0, top: 0 });
        function $me_point_in_rect(x, y, rect) {
            const result = rect.left < x && x < rect.right &&
                rect.top < y && y < rect.bottom &&
                true;
            return result;
        }
        $$.$me_point_in_rect = $me_point_in_rect;
        function $me_point_in_rect_offset(x, y, offsetRect, clientRect) {
            x -= clientRect.left;
            y -= clientRect.top;
            const result = offsetRect && clientRect &&
                offsetRect.left < x && x < offsetRect.right &&
                offsetRect.top < y && y < offsetRect.bottom &&
                true;
            return result;
        }
        $$.$me_point_in_rect_offset = $me_point_in_rect_offset;
        $$.$me_enum_names = (val) => {
            if (_enum_names_cache.has(val))
                return _enum_names_cache.get(val);
            const result = Object.keys(val).filter(key => typeof val[key] == 'number');
            _enum_names_cache.set(val, result);
            return result;
        };
        const _enum_names_cache = new Map();
        $$.$me_enum_values = (val) => {
            if (_enum_values_cache.has(val))
                return _enum_values_cache.get(val);
            const result = Object.keys(val).reduce((result, key) => {
                const n = +key;
                if (Number.isFinite(n))
                    result.push(n);
                return result;
            }, Array());
            _enum_values_cache.set(val, result);
            return result;
        };
        const _enum_values_cache = new Map();
        $$.$me_enum_pairs = (val) => {
            if (_enum_pairs_cache.has(val))
                return _enum_pairs_cache.get(val);
            const result = $$.$me_enum_values(val).map(value => [value, val[value]]);
            _enum_pairs_cache.set(val, result);
            return result;
        };
        const _enum_pairs_cache = new Map();
        let $me_rect_sides_enum;
        (function ($me_rect_sides_enum) {
            $me_rect_sides_enum[$me_rect_sides_enum["left"] = 0] = "left";
            $me_rect_sides_enum[$me_rect_sides_enum["top"] = 1] = "top";
            $me_rect_sides_enum[$me_rect_sides_enum["right"] = 2] = "right";
            $me_rect_sides_enum[$me_rect_sides_enum["bottom"] = 3] = "bottom";
        })($me_rect_sides_enum = $$.$me_rect_sides_enum || ($$.$me_rect_sides_enum = {}));
        function $me_align_correction(align, correction) {
            return (align == 0 ? 0 : correction() / align);
        }
        $$.$me_align_correction = $me_align_correction;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//me.js.map
;
"use strict";
//async_complete.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_atom2_async(p, add = true) {
            if (p !== void 0) {
                add_to_queue(p, $$._me_atom2_async_raf_queue, add ? null :
                    (pa, pb) => pa.fn ===
                        pb.fn);
            }
            else if (_raf == null) {
                _raf = requestAnimationFrame(t => {
                    _raf = null;
                    const start = performance.now();
                    const deadline = start + 14;
                    for (const { fn } of $$._me_atom2_async_raf_queue)
                        fn(t);
                    {
                        const stat = new Map();
                        const len = _me_atom2_async_ric_queue.length;
                        let i = 0;
                        let last_now;
                        const start = performance.now();
                        for (; performance.now() < deadline && i < len; i++) {
                            const { fn, name } = _me_atom2_async_ric_queue[i];
                            const start = performance.now();
                            const [count, pre] = fn(deadline, start, t + performance.now() - start);
                            $me_atom2_async_stat_update(stat, name, count, pre, performance.now() - start);
                            if (count)
                                i = -1;
                        }
                        if (i < len)
                            $me_atom2_async();
                        $me_atom2_async_stat_show(stat, start, 'IDLE_CALLBACK');
                    }
                });
            }
        }
        $$.$me_atom2_async = $me_atom2_async;
        let _raf;
        $$._me_atom2_async_raf_queue = Array();
        function $me_atom2_async_stat_update(stat, name, count, pre, timing) {
            if (!(count || timing > 1 || pre > 1))
                return;
            const has = stat.has(name);
            const si = has ? stat.get(name) : { count: 0, pre: 0, timing: 0 };
            si.pre += pre;
            si.count += count;
            si.timing += timing;
            if (!has)
                stat.set(name, si);
        }
        $$.$me_atom2_async_stat_update = $me_atom2_async_stat_update;
        function $me_atom2_async_stat_show(stat, start, name) {
            if (!stat.size)
                return;
            const atom_stat = $$.a.root().by_path_s('/.#stat');
            if (typeof atom_stat === 'string')
                return;
            const thresholds = atom_stat.value();
            if (!thresholds)
                return;
            const timing = +(performance.now() - start).toFixed(1);
            if (timing < thresholds[0])
                return;
            const result = [{ name, timing }];
            if (thresholds.length >= 3 && timing > thresholds[2]) {
                console.error({ name, timing });
            }
            else if (thresholds.length >= 2 && timing > thresholds[1]) {
                console.warn({ name, timing });
            }
            for (const [name, si] of stat) {
                const item = {
                    name,
                    timing: +si.timing.toFixed(1),
                };
                const pre = +si.pre.toFixed(1);
                if (pre)
                    item.timing = `${item.timing} (-${pre} => ${(item.timing - pre).toFixed(1)})`;
                if (si.count) {
                    item.count = si.count;
                    item.per = (si.timing - si.pre) / si.count;
                }
                result.push(item);
            }
            console.table(result);
        }
        $$.$me_atom2_async_stat_show = $me_atom2_async_stat_show;
        function add_to_queue(p, queue, equal) {
            if (equal) {
                const len = queue.length;
                for (let i = len - 1; i >= 0; i--)
                    if (equal(p, queue[i]))
                        queue.splice(i, 1);
            }
            else {
                let i = p.order != null ? 0 : queue.length;
                if (p.order != null)
                    while (i < queue.length &&
                        queue[i].order != null &&
                        p.order >= queue[i++].order) { }
                queue.splice(i, 0, p);
            }
        }
        function $me_atom2_async_ric(p) {
            if (p !== void 0) {
                add_to_queue(p, _me_atom2_async_ric_queue);
            }
            else {
                $me_atom2_async();
            }
        }
        $$.$me_atom2_async_ric = $me_atom2_async_ric;
        let _me_atom2_async_ric_queue = Array();
        function $me_atom2_async_multi_origin(p) {
            const _default = p.default;
            let _need_flush = false;
            let prev;
            const _flush = () => {
                if (!_need_flush)
                    return;
                p.flush(_value.val, prev, _value);
                prev = _value.val;
                _need_flush = false;
            };
            const raf_order = p.raf_order;
            if (raf_order !== void 0)
                $me_atom2_async({ fn: _flush, order: raf_order });
            let _value;
            return function (p) {
                let same_origin;
                let same_val;
                let is_default;
                if ((p !== void 0) && (_value === void 0 ||
                    ($$.$me_equal(p.origin, _value.origin) ? !$$.$me_equal(p.val, _value.val) : !$$.$me_equal(p.val, _default)))) {
                    _value = { origin: p.origin, val: p.val };
                    _need_flush = true;
                    if (raf_order === void 0 && p.immediatly === false)
                        $$.$me_throw('immediatly can not be false whilst raf_order is not set');
                    if (raf_order === void 0 || p.immediatly) {
                        _flush();
                    }
                    else {
                        $me_atom2_async();
                    }
                }
                return _value ? _value.val : _default;
            };
        }
        $$.$me_atom2_async_multi_origin = $me_atom2_async_multi_origin;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//async.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_path {
            constructor(p) {
                this.ent = p.ent;
                const isRoot = p.ent === $$.$me_atom2_entity_enum.root;
                this.tail = isRoot ? '' : p.tail;
                this.path = isRoot ? null : p.path;
            }
            get 'toString()'() {
                return this.toString();
            }
            static fromString(s, pos = 0, keys) {
                let idx_key = 0;
                const err = (msg) => `${msg} in '${s}' at pos ${pos}`;
                let path;
                let ent;
                while (pos < s.length) {
                    const ent_prev = ent;
                    let ch = s.slice(pos, pos + 1);
                    ent = $$.$me_atom2_path_ent2prefix.indexOf(ch);
                    const expected = ent_prev == $$.$me_atom2_entity_enum.prop && (ent === $$.$me_atom2_entity_enum.control ||
                        ent === $$.$me_atom2_entity_enum.elem) ? `"${$$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.prop]}"` :
                        ent < 0 ||
                            ent === $$.$me_atom2_entity_enum.root && pos ||
                            ent === $$.$me_atom2_entity_enum.key ? $$.$me_atom2_path_ent2prefix
                            .filter((val, idx) => idx > $$.$me_atom2_entity_enum.key)
                            .reduce((result, val, idx, arr) => result +
                            (!idx ? '' :
                                idx < arr.length - 1 ? `, ` :
                                    ` or `) +
                            `"${val}"`, '') :
                            '';
                    if (expected)
                        return err(`${expected} is expected instead of "${ch}"`);
                    pos++;
                    let pos_next = indexOf(s, pos, ...$$.$me_atom2_path_ent2prefix, ']');
                    let tail = s.slice(pos, pos_next);
                    if (!tail && ent !== $$.$me_atom2_entity_enum.root) {
                        if (ent === $$.$me_atom2_entity_enum.prop && ((ch = s.slice(pos_next, pos_next + 1)) == $$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.control] ||
                            ch == $$.$me_atom2_path_ent2prefix[$$.$me_atom2_entity_enum.elem])) {
                            tail = s.slice(pos, pos_next = indexOf(s, pos_next + 1, ...$$.$me_atom2_path_ent2prefix, ']'));
                        }
                        else {
                            return err(`${$$.$me_atom2_entity_enum[ent]} name must not be empty`);
                        }
                    }
                    pos = pos_next;
                    path = new $me_atom2_path({ ent, tail, path });
                    if (pos < s.length) {
                        ch = s.slice(pos, pos + 1);
                        if (ch === ']') {
                            return err(`"]" without preceding "[" found`);
                        }
                        else
                            while (ch === '[') {
                                const pos_next = indexOf(s, pos + 1, ']');
                                if (pos_next === s.length)
                                    return err(`not found "]" for "["`);
                                let tail;
                                if (pos_next - pos < 2) {
                                    tail = keys.key[idx_key++];
                                }
                                else {
                                    tail = s.slice(pos + 1, pos_next);
                                }
                                if (!tail)
                                    tail = keys.key[idx_key++];
                                const ent = $$.$me_atom2_entity_enum.key;
                                path = new $me_atom2_path({ ent, tail, path });
                                pos = pos_next + 1;
                                if (pos >= s.length)
                                    break;
                                ch = s.slice(pos, pos + 1);
                            }
                    }
                }
                return path;
            }
            toString(...paths) {
                paths.push(this);
                const arr = Array();
                for (let path of paths.reverse()) {
                    arr.push(path);
                    while (path = path.path)
                        arr.push(path);
                }
                const result = arr
                    .reverse()
                    .reduce((result, item, idx) => result +
                    $$.$me_atom2_path_ent2prefix[item.ent] +
                    item.tail +
                    ent2suffix[item.ent] +
                    '', '');
                return result;
            }
        }
        $$.$me_atom2_path = $me_atom2_path;
        $$.$me_atom2_path_ent2prefix = ['/', '[', '.', '^', '@'];
        const ent2suffix = ['', ']', '', '', ''];
        $$.$me_atom2_path_ch_parent = '<';
        function indexOf(s, from, ...ch_seek_for) {
            const len = s.length;
            const len_ch_seek_for = ch_seek_for.length;
            for (let i = from; i < len; i++) {
                const ch = s.slice(i, i + 1);
                for (let j = 0; j < len_ch_seek_for; j++)
                    if (ch === ch_seek_for[j])
                        return i;
            }
            return len;
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//path.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $me_atom2_entity_enum;
        (function ($me_atom2_entity_enum) {
            $me_atom2_entity_enum[$me_atom2_entity_enum["root"] = 0] = "root";
            $me_atom2_entity_enum[$me_atom2_entity_enum["key"] = 1] = "key";
            $me_atom2_entity_enum[$me_atom2_entity_enum["prop"] = 2] = "prop";
            $me_atom2_entity_enum[$me_atom2_entity_enum["control"] = 3] = "control";
            $me_atom2_entity_enum[$me_atom2_entity_enum["elem"] = 4] = "elem";
        })($me_atom2_entity_enum = $$.$me_atom2_entity_enum || ($$.$me_atom2_entity_enum = {}));
        class $me_atom2_entity {
            constructor(p) {
                const pp = { ent: p.ent };
                const isRoot = p.ent === $me_atom2_entity_enum.root;
                if (isRoot) {
                    this._active = true;
                }
                else {
                    pp.tail = p.tail;
                    pp.path = p.parent && p.parent.path || $me_atom2_entity.root().path;
                }
                this.path = new $$.$me_atom2_path(pp);
                this.fn_active = p.fn_active;
                if (!isRoot) {
                    const parent = this.parent();
                    const enitites = parent._entities || (parent._entities = {});
                    const ent_name = $me_atom2_entity_enum[p.ent];
                    const enitites_of_type = enitites[ent_name] || (enitites[ent_name] = {});
                    if (enitites_of_type[p.tail])
                        $$.$me_throw(`${parent.path} already has ${ent_name} '${p.tail}'`);
                    enitites_of_type[p.tail] = this;
                    this._active = parent._active;
                }
                this.met(this.path.ent, this.path.tail);
            }
            static root() {
                if (!$me_atom2_entity._root)
                    $me_atom2_entity._root = new $me_atom2_entity({ ent: $me_atom2_entity_enum.root });
                return $me_atom2_entity._root;
            }
            static by_path_s(s) {
                return $me_atom2_entity.root().by_path_s(s);
            }
            static by_path(path) {
                return $me_atom2_entity.root().by_path(path);
            }
            destroy() {
                if (this.path.ent === $me_atom2_entity_enum.root)
                    $$.$me_throw(`can not destroy root`);
                if (this._entities) {
                    this.active(false);
                    for (const ent_name in this._entities) {
                        const enitites_of_type = this._entities[ent_name];
                        for (const name in enitites_of_type)
                            enitites_of_type[name].destroy();
                    }
                }
                const ent_name = $me_atom2_entity_enum[this.path.ent];
                const parent = this.parent();
                if (parent) {
                    if (parent._entities[ent_name]) {
                        delete parent._entities[ent_name][this.path.tail];
                    }
                    else {
                        $$.$me_throw(this.name(), parent.name(), parent._entities, this._descendant(0).name());
                    }
                }
                else {
                    $$.$me_throw(this.name());
                }
                this._parent_cache = null;
            }
            by_path_s(s, keys) {
                let parent = this;
                let n = 0;
                let ch = s.slice(0, 1);
                if (ch === $$.$me_atom2_path_ent2prefix[$me_atom2_entity_enum.root]) {
                    parent = $me_atom2_entity.root();
                    n = 1;
                }
                else if (ch === $$.$me_atom2_path_ch_parent) {
                    while (true) {
                        n++;
                        ch = s.slice(n, n + 1);
                        if (n >= s.length || ch !== $$.$me_atom2_path_ch_parent)
                            break;
                    }
                    parent = this._descendant(n - 1, true);
                    if (typeof parent === 'string')
                        $$.$me_throw(`${s}: ${parent}`);
                }
                const path = $$.$me_atom2_path.fromString(s, n, keys);
                if (typeof path === 'string')
                    $$.$me_throw(`${s}: ${path}`);
                const result = parent.by_path(path) || path.toString(parent.path);
                return result;
            }
            by_path(path) {
                let result = null;
                if (!path) {
                    result = this;
                }
                else if (path.ent === $me_atom2_entity_enum.root) {
                    result = $me_atom2_entity.root();
                }
                else {
                    const entity_parent = !path.path ? this : this.by_path(path.path);
                    if (entity_parent) {
                        const enitites = entity_parent._entities;
                        if (enitites) {
                            const ent_name = $me_atom2_entity_enum[path.ent];
                            const enitites_of_type = enitites[ent_name];
                            result = enitites_of_type && enitites_of_type[path.tail];
                        }
                    }
                }
                return result;
            }
            active(val) {
                if (void 0 !== val) {
                    val = val && (this.path.ent === $me_atom2_entity_enum.root || this.parent()._active);
                    if (val !== this._active) {
                        this._active = val;
                        for (const ent_name in this._entities) {
                            const enitites_of_type = this._entities[ent_name];
                            for (const name in enitites_of_type)
                                enitites_of_type[name].active(val);
                        }
                        if (val && this.fn_active)
                            this.fn_active();
                    }
                }
                return this._active;
            }
            parent(skip_keys = false) {
                const ret = this._descendant(0, skip_keys);
                if (!ret)
                    $$.$me_throw('no parent', this);
                if (typeof ret == 'string')
                    $$.$me_throw(ret, this);
                return ret;
            }
            name() {
                return this.path.toString();
            }
            props(props, pp) {
                const prop_defined = {};
                if (props) {
                    const src = Array.isArray(props) ?
                        props :
                        [props];
                    let idx = 0;
                    const len = src.length;
                    for (const props of src) {
                        if (props)
                            for (const tail in props)
                                if (props[tail])
                                    if (void 0 === prop_defined[tail]) {
                                        const prop_def = props[tail];
                                        const p = {
                                            parent: this,
                                            tail,
                                        };
                                        let def_atom;
                                        if (pp && pp.def)
                                            def_atom = pp.def({ tail, idx, len, prop_defined, prop_def, p });
                                        if (def_atom === void 0)
                                            def_atom = $$.$me_atom2_prop_def_prepare(prop_def, p);
                                        $$.$me_atom2._to_def.push(def_atom);
                                        this.wait($me_atom2_entity_enum.prop, tail);
                                        prop_defined[tail] = idx;
                                    }
                                    else if (pp && pp.dup) {
                                        pp.dup({ tail, idx, len, prop_defined, src });
                                    }
                        idx++;
                    }
                }
                return prop_defined;
            }
            get 'parent()'() {
                return this.parent();
            }
            get 'name()'() {
                return this.name();
            }
            _descendant(level, skip_keys = false) {
                let cache_key;
                if (level === 0 && this._parent_cache && this._parent_cache[cache_key = skip_keys + '']) {
                    return this._parent_cache[cache_key];
                }
                let path = this.path;
                let i = level + 1;
                for (; i > 0 && path.ent !== $me_atom2_entity_enum.root; i--) {
                    if (!skip_keys || path.ent !== $me_atom2_entity_enum.key) {
                        path = path.path;
                    }
                    else {
                        while (path.ent === $me_atom2_entity_enum.key)
                            path = path.path;
                        path = path.path;
                    }
                }
                if (i > 0)
                    return `'${this.path}'._descendant(${!level ? '' : level}) is out of range (no parent above root)`;
                const result = $me_atom2_entity.root().by_path(path);
                if (result == null)
                    return `entity '${path}' not found`;
                if (level === 0) {
                    if (!this._parent_cache)
                        this._parent_cache = {};
                    this._parent_cache[cache_key || skip_keys + ''] = result;
                }
                return result;
            }
            wait(ent, tail) {
                if (!this._waiting_for)
                    this._waiting_for = new Map();
                if (!this._waiting_for.has(ent))
                    this._waiting_for.set(ent, new Set());
                this._waiting_for.get(ent).add(tail);
                if (this.path.ent !== $me_atom2_entity_enum.root)
                    this.parent().wait(this.path.ent, this.path.tail);
                this.active(false);
            }
            met(ent, tail) {
                if (this._waiting_for) {
                    if (this._waiting_for.has(ent)) {
                        const ss = this._waiting_for.get(ent);
                        ss.delete(tail);
                        if (!ss.size)
                            this._waiting_for.delete(ent);
                        if (!this._waiting_for.size)
                            this._waiting_for = null;
                    }
                }
                if (!this._waiting_for) {
                    if (this.path.ent !== $me_atom2_entity_enum.root)
                        this.parent().met(this.path.ent, this.path.tail);
                    $me_atom2_entity._to_activate.add(this.path);
                    $$.$me_atom2_async();
                }
            }
            static activate_entities() {
                const root = $me_atom2_entity.root();
                for (const path of $me_atom2_entity._to_activate) {
                    const entity = root.by_path(path);
                    if (entity && !entity._waiting_for)
                        entity.active(true);
                }
                const count = $me_atom2_entity._to_activate.size;
                $me_atom2_entity._to_activate.clear();
                return count;
            }
        }
        $me_atom2_entity._to_activate = new Set();
        $$.$me_atom2_entity = $me_atom2_entity;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//entity.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_atom2_prop_masters = (masters, fn_compute) => ({ masters, fn_compute });
        $$.$me_atom2_prop = (masters, fn_compute, fn_apply) => {
            if (!masters)
                $$.$me_throw('!masters');
            const result = Array.isArray(masters) ||
                typeof masters.fn_compute === 'function' ?
                {
                    masters,
                    fn_compute,
                    fn_apply
                } :
                Object.assign({}, masters, { fn_compute,
                    fn_apply });
            return result;
        };
        function $me_atom2_prop_def_prepare(prop_def, p) {
            if (!prop_def)
                $$.$me_throw(`prop_def is null`);
            const pp = typeof prop_def === 'string' ? {
                masters: [prop_def],
            } :
                typeof prop_def === 'function' ? {
                    masters: [],
                    fn_compute: prop_def,
                } : Object.assign({}, prop_def, { masters: Array.isArray(prop_def.masters) ?
                        [...prop_def.masters] :
                        prop_def.masters });
            if (pp.masters) {
                const len = pp.masters.length;
                for (let i = 0; i < len; i++)
                    if (!pp.masters[i])
                        console.error(p.tail, pp.masters, i);
            }
            if (pp.fn_apply && p.fn_apply)
                $$.$me_throw(`fn_apply collision for ${p.tail}`, p.fn_apply, pp.fn_apply);
            pp.fn_apply = pp.fn_apply || p.fn_apply;
            return Object.assign({}, p, pp);
        }
        $$.$me_atom2_prop_def_prepare = $me_atom2_prop_def_prepare;
        $$.$me_atom2_prop_compute_fn_and = (initial) => (p) => p.masters.reduce((result, val) => result && val, initial === void 0 ? true : initial);
        $$.$me_atom2_prop_compute_fn_mul = (initial) => (p) => p.masters.reduce((result, val) => result * val, initial === void 0 ? 1 : initial);
        $$.$me_atom2_prop_compute_fn_sum = (initial) => (p) => p.masters.reduce((result, val) => result + val, initial === void 0 ? 0 : initial);
        function $me_atom2_prop_same_def(prop_def, props) {
            const result = {};
            for (const prop of props)
                result[prop] = prop_def;
            return result;
        }
        $$.$me_atom2_prop_same_def = $me_atom2_prop_same_def;
        function $me_atom2_prop_same_fn_compute(fn_compute, props, fn_apply_props) {
            const result = {};
            for (const prop in props)
                result[prop] = $$.$me_atom2_prop(props[prop], fn_compute, fn_apply_props && fn_apply_props[prop]);
            return result;
        }
        $$.$me_atom2_prop_same_fn_compute = $me_atom2_prop_same_fn_compute;
        function $me_atom2_prop_cascade(prop_def, prop, cascade_def) {
            const result = {};
            cascade_helper(result, prop_def, prop, cascade_def);
            return result;
        }
        $$.$me_atom2_prop_cascade = $me_atom2_prop_cascade;
        function cascade_helper(result, prop_def, prop, cascade_def) {
            result[prop] = prop_def;
            if (typeof cascade_def === 'string') {
                result[cascade_def] = '.' + prop;
            }
            else if (Array.isArray(cascade_def)) {
                const arr = cascade_def;
                for (let i = 0; i < arr.length; i++) {
                    const item = arr[i];
                    if (typeof item === 'string') {
                        result[item] = '.' + prop;
                    }
                    else if (Array.isArray(item)) {
                        const item_as_arr = item;
                        if (!item_as_arr.length)
                            $$.$me_throw(`arr[${i}] is empty Array`, arr);
                        if (typeof item_as_arr[0] != 'string')
                            $$.$me_throw(`arr[${i}][0] is not string`, arr);
                        if (item_as_arr.length == 1) {
                            result[item_as_arr[0]] = '.' + prop;
                        }
                        else {
                            if (item_as_arr.length > 2)
                                $$.$me_throw(`arr[${i}] is too long Array: length (${item_as_arr.length}) > 2`, arr);
                            if (typeof item_as_arr[1] != 'string' && !Array.isArray(item_as_arr[1]))
                                $$.$me_throw(`arr[${i}][1] is nor string, neither Array, but ${item_as_arr[1]}`, arr);
                            cascade_helper(result, '.' + prop, item_as_arr[0], item_as_arr[1]);
                        }
                    }
                }
            }
            else
                $$.$me_throw('cascade_def is nor string, neither Array', cascade_def);
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//prop.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2 extends $$.$me_atom2_entity {
            constructor(p) {
                super(Object.assign({}, p, { ent: p.is_key ?
                        $$.$me_atom2_entity_enum.key :
                        $$.$me_atom2_entity_enum.prop, fn_active: () => {
                        if (this.fn_apply && this._state === false) {
                            $me_atom2.to_update.add(this.path);
                            $$.$me_atom2_async();
                        }
                    } }));
                this._descendant_level = p.descendant_level || 0;
                this._fn_key_idx_changed = p.fn_key_idx_changed;
                if (p.keys && p.keys.length) {
                    const self = this;
                    const pp = p;
                    this.fn_compute = pp.fn_compute;
                    const atom = new $me_atom2({
                        descendant_level: 1,
                        tail: '#keys',
                        parent: self,
                        masters: p.keys.slice(0, 1),
                        fn_compute: ({ masters: [key] }) => key,
                        fn_apply: ({ val, prev }) => {
                            let ss_curr;
                            let ss_prev;
                            const ent = $$.$me_atom2_entity_enum.key;
                            if (prev) {
                                ss_curr = new Set(val);
                                for (const tail of prev)
                                    if (!ss_curr.has(tail)) {
                                        const atom = this.by_path(new $$.$me_atom2_path({ ent, tail }));
                                        console.warn('TODO: replace .by_path() to _entities', atom);
                                        if (atom)
                                            atom.destroy();
                                    }
                            }
                            if (val) {
                                ss_prev = new Set(prev);
                                for (const tail of val)
                                    if (!ss_prev.has(tail))
                                        new $me_atom2(Object.assign({}, p, { descendant_level: 1, tail, is_key: true, keys: p.keys.slice(1), parent: self }));
                            }
                            if (prev && val) {
                                for (const tail of ss_curr) {
                                    if (ss_prev.has(tail)) {
                                        const idx_prev = prev.indexOf(tail);
                                        const idx_curr = val.indexOf(tail);
                                        if (idx_prev != idx_curr) {
                                            const atom = this.by_path(new $$.$me_atom2_path({ ent, tail }));
                                            console.warn('TODO: replace .by_path() to _entities', atom);
                                            if (atom)
                                                atom._key_idx_changed({
                                                    key: [tail],
                                                    change: { idx_curr, idx_prev, i_key: 0 }
                                                });
                                        }
                                    }
                                }
                            }
                        }
                    });
                    this._key_gen = atom;
                }
                else {
                    this.fn_apply = p.fn_apply;
                    const pp = p;
                    this.fn_compute = pp.fn_compute;
                    if (pp.masters && (!Array.isArray(pp.masters) || pp.masters.length)) {
                        if (Array.isArray(pp.masters)) {
                            this.masters = pp.masters;
                        }
                        else {
                            const atom = new $me_atom2({
                                descendant_level: 1,
                                tail: '#masters',
                                parent: this,
                                masters: pp.masters.masters,
                                fn_compute: (p) => {
                                    const masters = pp.masters.fn_compute(p);
                                    if (!Array.isArray(masters))
                                        $$.$me_throw(`atom '${atom.name()}'.fn_compute() expected to return string[] instead of`, masters);
                                    return masters;
                                },
                                fn_apply: ({ val, prev }) => {
                                    if (Array.isArray(prev))
                                        this.unregister_as_slave(prev);
                                    this._masters_store = null;
                                },
                            });
                            atom.add_slave(this);
                            this.masters = atom;
                        }
                    }
                }
                this.set_state(false);
                const name = this.name();
                const sp = $me_atom2._waiting_for_atom_def[name];
                if (!sp)
                    return;
                for (const [path, master] of sp) {
                    const atom = $$.$me_atom2_entity.root().by_path(path);
                    if (typeof atom !== 'string')
                        this.add_slave(atom, master);
                }
                delete $me_atom2._waiting_for_atom_def[name];
            }
            state() { return this._state; }
            slaves() { return this._slaves; }
            static update_atoms(deadline, last_now) {
                const pre = performance.now() - last_now;
                let count = 0;
                while ($me_atom2.to_update.size) {
                    let atoms_to_update = new Set();
                    for (const tail of $me_atom2._update_order)
                        if ($me_atom2._prepare_atoms_to_update(atoms_to_update, tail, deadline))
                            break;
                    for (let atom of atoms_to_update) {
                        if (performance.now() < deadline)
                            break;
                        atom.update();
                        $me_atom2.to_update.delete(atom.path);
                    }
                    count += atoms_to_update.size;
                }
                return [count, pre];
            }
            static _prepare_atoms_to_update(atoms_to_update, tail, deadline) {
                for (const path of $me_atom2.to_update) {
                    if (performance.now() < deadline)
                        break;
                    const atom = $$.$me_atom2_entity.root().by_path(path);
                    if (!atom) {
                        $me_atom2.to_update.delete(path);
                    }
                    else if ((!tail || atom.path.tail === tail))
                        if (atom.active()) {
                            atoms_to_update.add(atom);
                        }
                        else {
                        }
                }
                return atoms_to_update.size;
            }
            key_enum() {
                const result = [];
                let atom = this;
                while (atom._key_gen) {
                    const key_enum = atom._key_gen.value();
                    result.push(key_enum);
                    atom = atom._entities.key[key_enum[0]];
                }
                return result;
            }
            _masters() {
                const masters = this.masters;
                return (Array.isArray(masters) ? masters :
                    masters instanceof $me_atom2 ? masters.value() :
                        []);
            }
            get 'masters()'() {
                return this._masters().map(name_atom => this.by_path_s(name_atom));
            }
            get 'slaves()'() {
                return !this._slaves ? null : [...this._slaves].map(path => $me_atom2.root().by_path(path));
            }
            get 'state()'() {
                return this.get_state_helper(this._state);
            }
            by_path_s(s, keys) {
                const descendant = this._descendant(this._descendant_level);
                if (typeof descendant === 'string')
                    $$.$me_throw(descendant);
                return descendant.by_path_s(s, keys || this._key_provider());
            }
            get_state_helper(state) {
                if (typeof state === 'boolean' || state instanceof Error)
                    return false;
                const result = {};
                const ma = state;
                result[waiting_for_sym] = ma[waiting_for_sym];
                for (const name_master in ma)
                    result[name_master] = this.get_state_helper(ma[name_master]);
                return result;
            }
            get 'fn_compute()'() {
                return this._compute();
            }
            get 'fn_apply()'() {
                return this._state === true ? this._apply(this._value, true) : new Error(`this._state is ${this._state}`);
            }
            get 'update()'() {
                return this.update();
            }
            unregister_as_slave(masters) {
                if (Array.isArray(masters))
                    for (const name_master of masters) {
                        const atom_master = this.by_path_s(name_master);
                        if (typeof atom_master !== 'string') {
                            atom_master.rm_slave(this);
                        }
                        else {
                            const ms = $me_atom2._waiting_for_atom_def;
                            let name_master = atom_master;
                            const ss = ms[name_master];
                            if (!ss)
                                continue;
                            ss.delete(this.path);
                            if (!ss.size)
                                delete ms[name_master];
                            this.no_wait_for_master(name_master);
                        }
                    }
            }
            wait_for_atom_def(waiting_for, master) {
                {
                    const ms = $me_atom2._waiting_for_atom_def;
                    const ss = ms[waiting_for] || (ms[waiting_for] = new Map());
                    ss.set(this.path, master);
                }
                {
                    const state = typeof this._state === 'boolean' || this._state instanceof Error ?
                        (this._state = {}) :
                        this._state;
                    const ss = state[waiting_for_sym] || (state[waiting_for_sym] = new Set());
                    ss.add(waiting_for);
                    return state;
                }
            }
            add_slave(atom_slave, master) {
                if (!this._slaves)
                    this._slaves = new Set();
                this._slaves.add(atom_slave.path);
                if (master !== void 0) {
                    atom_slave.no_wait_for_master(this.name());
                    const store = atom_slave._masters_store || (atom_slave._masters_store = {});
                    store[master] = this;
                }
                atom_slave.set_state_slave(this._state, this.name());
            }
            no_wait_for_master(name_master) {
                if (typeof this._state === 'boolean' || this._state instanceof Error)
                    return;
                const ma = this._state;
                const ss = ma[waiting_for_sym];
                if (ss) {
                    ss.delete(name_master);
                    if (!ss.size)
                        delete ma[waiting_for_sym];
                    if (!Object.keys(ma).length)
                        this._state = true;
                }
            }
            rm_slave(atom_slave) {
                if (this._slaves) {
                    this._slaves.delete(atom_slave.path);
                    if (!this._slaves.size)
                        this._slaves = null;
                    atom_slave.set_state_slave(false, this.name());
                    atom_slave._masters_store = null;
                }
            }
            value(val, force = false) {
                if (val === void 0 && this._state === true)
                    return this._value;
                if (!this.active() ||
                    $me_atom2._cyclic_dependency)
                    return null;
                this.update(val, force);
                return ($me_atom2._cyclic_dependency || this._state !== true ?
                    null :
                    this._value);
            }
            static is_valid_value(val) {
                return !(val == null || Number.isNaN(val));
            }
            update(val, force = false) {
                if (!this.active() ||
                    $me_atom2._cyclic_dependency ||
                    this._state !== false && val === void 0)
                    return;
                let just_set_anim = false;
                const helper = (val) => {
                    let result;
                    if (val instanceof $me_atom2_anim_class) {
                        const anim = val._anim;
                        if (!$me_atom2.is_valid_value(anim.to)) {
                            result = null;
                        }
                        else {
                            if (!$me_atom2.is_valid_value(anim.from)) {
                                const value = typeof this._state == 'boolean' ? this._value : null;
                                anim.from = ($me_atom2.is_valid_value(value) ? value : anim.to);
                            }
                            if (just_set_anim = (anim.delay > 0 || !$$.$me_equal(anim.from, anim.to))) {
                                $me_atom2.anim_to_play.set(this.path, Object.assign({}, anim, { value: anim.from }));
                                $$.$me_atom2_async();
                            }
                            if (anim.delay <= 0)
                                result = anim.from;
                        }
                    }
                    else {
                        result = val;
                    }
                    return result;
                };
                const true_set = val !== void 0;
                if (val === void 0) {
                    const compute_result = this._compute();
                    if (!compute_result)
                        return;
                    const { ret, state } = compute_result;
                    if (state !== void 0) {
                        this.set_state(state);
                        return;
                    }
                    val = ret;
                }
                const next_value = helper(val);
                if (next_value !== void 0) {
                    if (!just_set_anim)
                        $me_atom2.anim_to_play.delete(this.path);
                    this.set_value(next_value, true_set, force);
                }
            }
            set_value(next_value, true_set = true, force = false) {
                const prev_value = this._value;
                next_value = this._apply(next_value, force);
                const state = $me_atom2.is_valid_value(this._value = next_value) || (true_set && (this.fn_compute || this.masters) ? false :
                    new Error(`${this.name()} got ${next_value}`));
                if (state !== this._state ||
                    this._state === true && (force || !$$.$me_equal(prev_value, next_value)))
                    this.set_state(state);
            }
            _compute() {
                return this.update_helper('compute', () => {
                    let master_values;
                    const fn_compute = this.fn_compute;
                    let masters;
                    if (this.masters) {
                        let ma;
                        masters = Array.isArray(this.masters) ? this.masters : (ma = this.masters).value();
                        if (ma) {
                            if (ma._state !== true)
                                return { state: ma._state };
                            if (this._state !== false)
                                return null;
                        }
                        let state;
                        let store = this._masters_store;
                        if (!store) {
                            for (const master of masters) {
                                const atom_master = this.by_path_s(master, this._key_provider());
                                if (typeof atom_master === 'string') {
                                    state = this.wait_for_atom_def(atom_master, master);
                                }
                                else {
                                    atom_master.add_slave(this, master);
                                }
                            }
                            if (state)
                                return { state };
                            store = this._masters_store;
                        }
                        master_values = Array(masters.length);
                        let not_ready = false;
                        for (let i = 0; i < masters.length; i++) {
                            const name_master = masters[i];
                            const atom_master = store[name_master];
                            if (!atom_master)
                                $$.$me_throw(`${this.name()}: no .store[${name_master}]`);
                            master_values[i] = atom_master.value();
                            if (atom_master._state !== true) {
                                if (!state)
                                    state = {};
                                state[atom_master.name()] = atom_master._state;
                            }
                        }
                        if (state)
                            return { state };
                        if (!fn_compute)
                            return {
                                ret: (master_values.length == 1 ? master_values[0] : master_values)
                            };
                    }
                    if (!fn_compute)
                        return { ret: void 0 };
                    const result = {};
                    const key_provider_ret = this._key_provider() || {};
                    try {
                        result.ret = fn_compute(Object.assign({ atom: this, prev: this._value, len: !master_values ? 0 : master_values.length, masters: master_values, m: !master_values ? null : $me_atom2._provider_gen(masters, master_values, 'masters') }, key_provider_ret));
                    }
                    catch (e) {
                        console.error(e);
                        result.state = e;
                    }
                    return result;
                });
            }
            _key_provider() {
                if (this.path.tail === '#masters')
                    return this.parent()._key_provider();
                if (this.path.ent !== $$.$me_atom2_entity_enum.key)
                    return null;
                if (this._key_provider_cache)
                    return this._key_provider_cache;
                const result = { len_key: 0 };
                let atom = this;
                let key_enum;
                let key;
                let keys;
                while (atom.path.ent === $$.$me_atom2_entity_enum.key) {
                    result.len_key++;
                    if (!key)
                        key = Array();
                    if (!keys)
                        keys = Array();
                    if (!key_enum)
                        key_enum = Array();
                    key.unshift(atom.path.tail);
                    atom = atom.parent();
                    keys = atom._key_gen.masters.concat(keys);
                    const key_name = atom._key_gen.masters[0];
                    const masters_store = atom._key_gen._masters_store;
                    if (masters_store) {
                        key_enum = [masters_store[key_name].value()].concat(key_enum);
                    }
                    else {
                    }
                }
                if (result.len_key) {
                    result.key = key;
                    result.keys = keys;
                    result.key_enum = key_enum;
                    result.k = $me_atom2._provider_gen(keys, key, 'keys');
                    result.ks = $me_atom2._provider_gen(keys, key_enum, 'keys');
                }
                return (this._key_provider_cache = result);
            }
            static _provider_gen(names, values, title) {
                return (idx) => {
                    let i;
                    if (typeof idx === 'number') {
                        i = idx;
                        if (!(Number.isFinite(i) && 0 <= i && i < values.length))
                            $$.$me_throw(`${$$.a.curr.name()}: idx=${i} is out of ${title} range`, names);
                    }
                    else {
                        i = names.indexOf(idx);
                        if (i < 0)
                            $$.$me_throw(`${$$.a.curr.name()}: no '${idx}' among ${title}`, names);
                    }
                    return values[i];
                };
            }
            destroy() {
                if (this._slaves)
                    for (let path of this._slaves) {
                        const atom = $$.$me_atom2_entity.root().by_path(path);
                        if (atom)
                            this.rm_slave(atom);
                    }
                this.unregister_as_slave(this._masters());
                super.destroy();
            }
            _apply(next_value, force = false) {
                const fn_apply = this.fn_apply;
                if (fn_apply && (force || !$$.$me_equal(next_value, this._value))) {
                    this._value_last_applied = next_value;
                    const prev = this._value;
                    this._value = next_value;
                    this.update_helper('apply', () => {
                        const keys = this._key_provider() || {};
                        const ret = fn_apply(Object.assign({ atom: this, prev, val: next_value }, keys));
                        if (ret !== void 0)
                            next_value = ret;
                        return null;
                    });
                }
                return next_value;
            }
            update_helper(update_kind, fn) {
                const ss = $me_atom2._update_atoms[update_kind];
                if (ss.has(this.path)) {
                    $me_atom2._cyclic_dependency = true;
                    console.error(`Циклическая ${update_kind}-зависимость`, [this.path.toString()].concat([...$me_atom2._update_atoms[update_kind]]
                        .map(item => item[0].toString())
                        .reverse()));
                    return null;
                }
                ss.set(this.path, true);
                const prev = $$.a.curr;
                $$.a.curr = this;
                const ret = fn();
                $$.a.curr = prev;
                ss.delete(this.path);
                return ret;
            }
            set_state(val) {
                if ($me_atom2._cyclic_dependency)
                    return;
                this.set_state_helper(val);
                const state2spread = typeof val === 'boolean' ? false : this._state;
                $me_atom2._spread_atoms.set(this, val);
                this.spread_state(state2spread);
                $me_atom2._spread_atoms.delete(this);
            }
            spread_state(val) {
                if (!this._slaves)
                    return;
                for (let path_slave of this._slaves) {
                    const atom_slave = $$.$me_atom2_entity.root().by_path(path_slave);
                    if (typeof atom_slave === 'string') {
                        this._slaves.delete(path_slave);
                        continue;
                    }
                    atom_slave.set_state_slave(val, this.name());
                }
            }
            set_state_slave(val, name_master) {
                if ($me_atom2._spread_atoms.has(this)) {
                    $me_atom2._cyclic_dependency = true;
                    $$.$me_throw('Циклическая spread-зависомость', [[this.name(), val]].concat([...$me_atom2._spread_atoms].map(item => [item[0].name(), item[1]]).reverse()), ...[this].concat([...$me_atom2._spread_atoms].map(item => item[0]).reverse()));
                }
                $me_atom2._spread_atoms.set(this, val);
                {
                    let skip_spread = false;
                    {
                        if (typeof val === 'boolean') {
                            if (this._state === true || this._state instanceof Error) {
                                this.set_state_helper(false);
                            }
                            else if (this._state) {
                                const ma = this._state;
                                delete ma[name_master];
                                if (Object.keys(ma))
                                    this.set_state_helper(false);
                            }
                            else
                                skip_spread = true;
                        }
                        else {
                            const m = typeof this._state === 'boolean' || this._state instanceof Error ?
                                (this._state = {}) :
                                this._state;
                            if (m[name_master] !== val) {
                                m[name_master] = val;
                            }
                            else
                                skip_spread = true;
                        }
                    }
                    if (!skip_spread)
                        this.spread_state(this._state);
                }
                $me_atom2._spread_atoms.delete(this);
            }
            set_state_helper(val) {
                this._state = val;
                if (this.fn_apply && val === false && this.active()) {
                    if ($$.$me_debug === 2) {
                        console.log('%cput', 'background: red; color: white', this.name(), [...$me_atom2.to_update].map(path => path.toString()));
                    }
                    $me_atom2.to_update.add(this.path);
                    $$.$me_atom2_async();
                }
            }
            _key_idx_changed(p) {
                if ($$.$me_debug)
                    console.log(this, p);
                if (this._entities && this._entities.key) {
                    const entities_key = this._entities.key;
                    for (const k in entities_key) {
                        entities_key[k]._key_idx_changed({
                            key: p.key.concat(k),
                            change: Object.assign({}, p.change, { i_key: p.change.i_key - 1 }),
                        });
                    }
                }
                else if (this._fn_key_idx_changed) {
                    let path = this.path;
                    let n = 0;
                    while (path.ent === $$.$me_atom2_entity_enum.key) {
                        n++;
                        path = path.path;
                    }
                    p.change.i_key = n - 1 + p.change.i_key;
                    this._key_idx_changed_helper(p, this.by_path(path), n, []);
                }
            }
            _key_idx_changed_helper(p, parent, n, key) {
                if (n <= p.key.length) {
                    this._fn_key_idx_changed({
                        key: key.concat(p.key),
                        change: p.change,
                    });
                }
                else {
                    const entities_key = parent._entities.key;
                    for (const k in entities_key) {
                        this._key_idx_changed_helper(p, entities_key[k], n - 1, key.concat(k));
                    }
                }
            }
        }
        $me_atom2._spread_atoms = new Map();
        $me_atom2._cyclic_dependency = false;
        $me_atom2.to_update = new Set();
        $me_atom2._update_order = ['#keys', '#masters', ''];
        $me_atom2._waiting_for_atom_def = {};
        $me_atom2._to_def = Array();
        $me_atom2._update_atoms = {
            compute: new Map(),
            apply: new Map(),
        };
        $me_atom2.anim_to_play = new Map();
        $$.$me_atom2 = $me_atom2;
        const waiting_for_sym = Symbol('waiting_for');
        function $me_atom2_anim(anim) {
            return new $me_atom2_anim_class(anim);
        }
        $$.$me_atom2_anim = $me_atom2_anim;
        class $me_atom2_anim_class {
            constructor(anim) {
                this._anim = Object.assign({}, anim, { delay: anim.delay || 0, duration: anim.duration || 200, easing: anim.easing || $$.$me_easing.easeInOutQuad });
            }
        }
        $$.$me_atom2_anim_class = $me_atom2_anim_class;
        $$.a = window.a = Object.assign((path_s, val) => {
            const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
            const atom = relative_to.by_path_s(path_s);
            if (typeof atom === 'string')
                $$.$me_throw(`atom '${atom}' does not exist`);
            if (!(atom instanceof $me_atom2))
                $$.$me_throw(`entity '${atom}' is not $me_atom2`, atom);
            return atom.value(val);
        }, {
            root: () => $$.$me_atom2_entity.root(),
            get: (path_s) => {
                const relative_to = $$.a.curr || $$.$me_atom2_entity.root();
                return relative_to.by_path_s(path_s);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const event_names = [
            'touchstart',
            'touchend',
            'mousedown',
            'mouseup',
            'mousemove',
            'wheel',
            'click',
            'tap',
            'clickOrTap',
            'clickOrTapOutside',
            'clickOutside',
            'tapOutside',
        ];
        $$.clickRet = new Map();
        $$.tapRet = new Map();
        function _event_add(ec, name_event, events) {
            let name_atom, fn;
            if (events) {
                const event_def = events[name_event];
                fn = typeof event_def === 'function' ?
                    event_def :
                    event_def.fn;
            }
            let s;
            if (!ec._entities)
                $$.$me_throw(ec.name(), ec.active());
            if (!ec._entities.prop)
                $$.$me_throw(ec.name(), ec.active(), ec._entities);
            if (!ec._entities.prop['#zIndex'])
                $$.$me_throw(ec.name(), ec.active(), ec._entities.prop);
            const zIndex = ec._entities.prop['#zIndex'].value();
            if (name_event === 'hover') {
                _do_event_add(ec, 'mousemove', zIndex, (p) => p.isInRect(p.event.clientX, p.event.clientY) && $$.a('.#isHover', true));
                _do_event_add(ec, 'mousemove', 1000, (p) => !p.isInRect(p.event.clientX, p.event.clientY) && $$.a('.#isHover', false));
            }
            else if (name_event === 'tap' || name_event === 'clickOrTap' && ('ontouchstart' in window)) {
                _do_event_add(ec, 'touchstart', zIndex, p => {
                    const ret = p.isInRect(p.event.touches[0].clientX, p.event.touches[0].clientY);
                    if (ret) {
                        $$.tapRet.set(ec.path, p.event);
                    }
                    else {
                        $$.tapRet.delete(ec.path);
                    }
                    return ret;
                });
                _do_event_add(ec, 'touchend', zIndex, p => $$.tapRet.has(ec.path) &&
                    fn(Object.assign({}, p, { event: { start: $$.tapRet.get(ec.path), end: p.event } })));
            }
            else if (name_event === 'click' || name_event === 'clickOrTap' && !('ontouchstart' in window)) {
                _do_event_add(ec, 'mousedown', zIndex, p => {
                    const ret = p.isInRect(p.event.clientX, p.event.clientY);
                    if (ret) {
                        $$.clickRet.set(ec.path, p.event);
                    }
                    else {
                        $$.clickRet.delete(ec.path);
                    }
                    return ret;
                });
                _do_event_add(ec, 'mouseup', zIndex, p => $$.clickRet.has(ec.path) &&
                    p.isInRect(p.event.clientX, p.event.clientY) &&
                    fn(Object.assign({}, p, { event: { start: $$.clickRet.get(ec.path), end: p.event } })));
            }
            else if (name_event === 'clickOrTapOutside') {
                _do_event_add(ec, 'mousedown', zIndex, p => !p.isInRect(p.event.clientX, p.event.clientY) && fn(p));
            }
            else
                _do_event_add(ec, name_event, zIndex, fn);
        }
        function _do_event_add(ec, name_event, zIndex, fn) {
            if (!$$.$me_atom2_event_handlers.has(name_event))
                $$.$me_atom2_event_handlers.set(name_event, []);
            const queue = $$.$me_atom2_event_handlers.get(name_event);
            let i = 0;
            while (i < queue.length && queue[i].zIndex > zIndex)
                i++;
            if (i == queue.length || queue[i].zIndex != zIndex)
                queue.splice(i, 0, {
                    zIndex,
                    handlers: new Map(),
                });
            const handlers = queue[i].handlers;
            if (!handlers.has(ec.path))
                handlers.set(ec.path, []);
            handlers.get(ec.path).push(fn);
        }
        function _events_add_helper(ec, cnf) {
            if (!cnf)
                return;
            if (cnf.event)
                for (const name_event of event_names)
                    if (cnf.event[name_event])
                        _event_add(ec, name_event, cnf.event);
            if (cnf.base)
                _events_add_helper(ec, ec.base(cnf.base));
        }
        function _events_add(ec) {
            let name_atom;
            if (ec._entities &&
                ec._entities.prop &&
                ec._entities.prop['#isHover']
                && !ec._entities.prop['#isHover'].masters) {
                _event_add(ec, 'hover');
            }
            _events_add_helper(ec, ec.cnf);
        }
        function _events_add_recursive(entity) {
            const entities = entity._entities;
            if (entities) {
                for (const ent of [$$.$me_atom2_entity_enum.key, $$.$me_atom2_entity_enum.elem, $$.$me_atom2_entity_enum.control]) {
                    const entities_of_type = entities[$$.$me_atom2_entity_enum[ent]];
                    if (!entities_of_type)
                        continue;
                    for (const tail in entities_of_type) {
                        const ec = entities_of_type[tail];
                        if (!ec.active())
                            continue;
                        _events_add(ec);
                        _events_add_recursive(ec);
                    }
                }
            }
        }
        function $me_atom2_event_process(name_event, event) {
            if (!event)
                return;
            if (!$$.$me_atom2_event_handlers) {
                $$.$me_atom2_event_handlers = new Map();
                _events_add_recursive($$.$me_atom2_entity.root());
            }
            if (!$$.$me_atom2_event_handlers.has(name_event))
                return;
            const queue = $$.$me_atom2_event_handlers.get(name_event);
            let done = false;
            for (const item of queue) {
                for (const [path, fn_array] of item.handlers) {
                    const ec = $$.$me_atom2_entity.root().by_path(path);
                    if (!ec)
                        $$.$me_throw(path.toString());
                    const clientRect = ec._entities.prop['#clientRect'].value();
                    if (!clientRect)
                        continue;
                    const isInRect = (clientX, clientY) => $$.$me_point_in_rect(clientX, clientY, clientRect);
                    const prev = $$.a.curr;
                    $$.a.curr = ec;
                    for (const fn of fn_array)
                        done = fn({ event, isInRect }) || done;
                    $$.a.curr = prev;
                }
                if (done)
                    break;
            }
        }
        $$.$me_atom2_event_process = $me_atom2_event_process;
        function $me_atom2_event_keyboard_process(name_event, event) {
        }
        $$.$me_atom2_event_keyboard_process = $me_atom2_event_keyboard_process;
        function init() {
            if ('ontouchstart' in window) {
                document.body.addEventListener('touchstart', (event) => $me_atom2_event_process('touchstart', event));
                document.body.addEventListener('touchend', (event) => $me_atom2_event_process('touchend', event));
            }
            else {
                document.body.addEventListener('mousedown', (event) => $me_atom2_event_process('mousedown', event));
                document.body.addEventListener('mouseup', (event) => $me_atom2_event_process('mouseup', event));
                document.body.addEventListener('mousemove', (event) => {
                    $$.$me_atom2_event_mousemove_last = $$.$me_atom2_event_mousemove_to_process = event;
                    $$.$me_atom2_async();
                });
                document.body.addEventListener('wheel', (event) => {
                    if (!$$.$me_atom2_event_wheel_to_process) {
                        $$.$me_atom2_event_wheel_to_process = event;
                        $$.$me_atom2_event_wheel_to_process._deltaX = event.deltaX;
                        $$.$me_atom2_event_wheel_to_process._deltaY = event.deltaY;
                    }
                    else {
                        $$.$me_atom2_event_wheel_to_process._deltaX = event.deltaX + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaX) * Math.sign(event.deltaX) < 0 ? 0 : $$.$me_atom2_event_wheel_to_process._deltaX);
                        $$.$me_atom2_event_wheel_to_process._deltaY = event.deltaY + (Math.sign($$.$me_atom2_event_wheel_to_process._deltaY) * Math.sign(event.deltaY) < 0 ? 0 : $$.$me_atom2_event_wheel_to_process._deltaY);
                    }
                    $$.$me_atom2_async();
                    event.preventDefault();
                }, { passive: false });
                document.body.addEventListener('keydown', (event) => $me_atom2_event_keyboard_process('keydown', event));
                document.body.addEventListener('keyup', (event) => $me_atom2_event_keyboard_process('keyup', event));
            }
        }
        init();
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//event.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_ec extends $$.$me_atom2_entity {
            constructor(p) {
                const fn_active = () => {
                    p.fn_active();
                    $me_atom2_ec._to_init.push(this.path);
                };
                if (!p.key) {
                    super(Object.assign({}, p, { fn_active }));
                }
                else {
                    let { ent, tail, parent } = p;
                    parent = parent.by_path(new $$.$me_atom2_path({ ent, tail }))
                        || new $$.$me_atom2_entity({ ent, tail, parent });
                    const key = typeof p.key === 'string' ? [p.key] : p.key;
                    const i_last = p.keys.length - 2;
                    ent = $$.$me_atom2_entity_enum.key;
                    for (let i = 0; i <= i_last; i++) {
                        tail = key[i];
                        parent = parent.by_path(new $$.$me_atom2_path({ ent, tail }))
                            || new $$.$me_atom2_entity({ ent, tail, parent });
                    }
                    super({
                        ent: $$.$me_atom2_entity_enum.key,
                        tail: key[i_last + 1],
                        parent,
                        fn_active,
                    });
                }
                this.cnf = p.cnf;
                this.bases = new Map();
            }
            destroy() {
                super.destroy();
            }
            init() {
                if (this._init_did)
                    return;
                const prev = $$.a.curr;
                $$.a.curr = this;
                this._cnf_init(this.cnf);
                $$.a.curr = prev;
                this._init_did = true;
            }
            dispatch(dispatch_name, dispatch_arg) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const result = this._cnf_dispatch(this.cnf, dispatch_name, dispatch_arg);
                $$.a.curr = prev;
                return result;
            }
            _cnf_dispatch(cnf, dispatch_name, dispatch_arg) {
                return !cnf ? false : (cnf.dispatch && cnf.dispatch(dispatch_name, dispatch_arg) ||
                    this._cnf_dispatch(this.base(cnf.base), dispatch_name, dispatch_arg));
            }
            _cnf_init(cnf) {
                if (!cnf)
                    return;
                if (cnf.init)
                    cnf.init();
                this._cnf_init(this.base(cnf.base));
            }
            cnf_item(name) {
                return this._cnf_item(name, this.cnf);
            }
            _mk_controls(level = 0) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_control = this.cnf_items('control');
                for (const tail in cnf_control) {
                    const prop_def = cnf_control[tail];
                    const fn_apply = ({ prev, val, len_key, key, keys, key_enum }) => {
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.control, tail });
                        if (key) {
                            const ent = $$.$me_atom2_entity_enum.key;
                            for (const tail of (typeof key === 'string' ? [key] : key))
                                path = new $$.$me_atom2_path({ ent, tail, path });
                        }
                        if (prev && val && prev.type === val.type)
                            return;
                        const control = this.by_path(path);
                        if (control instanceof $$.$me_atom2_control)
                            control.destroy();
                        if (val) {
                            $$.$me_atom2_control._to_def.push({
                                cnf: val,
                                parent: this,
                                tail,
                                len_key,
                                key,
                                keys,
                                key_enum,
                                level: level + 1,
                            });
                            $$.$me_atom2_async();
                        }
                    };
                    $$.$me_atom2._to_def.push($$.$me_atom2_prop_def_prepare(prop_def, {
                        parent: this,
                        tail: '^' + tail,
                        fn_apply,
                    }));
                    $$.$me_atom2_async();
                }
                $$.a.curr = prev;
                return cnf_control;
            }
            _cnf_item(name, cnf) {
                return (!cnf ? null :
                    cnf[name] !== void 0 ? cnf[name] :
                        this._cnf_item(name, this.base(cnf.base)));
            }
            cnf_items(name) {
                const result = {};
                this._cnf_items(name, this.cnf, result);
                return result;
            }
            _cnf_items(name, cnf, result) {
                if (!cnf)
                    return;
                if (cnf[name])
                    for (const k in cnf[name])
                        if (result[k] === void 0 && cnf[name][k] != null)
                            result[k] = cnf[name][k];
                this._cnf_items(name, this.base(cnf.base), result);
            }
            _prepare(name, ent, dflt, cnf, level) {
                if (level === void 0) {
                    cnf = this.cnf;
                    level = 0;
                }
                if (cnf)
                    if (level) {
                        if (!cnf.type)
                            $$.$me_throw(`${this.name()}: .base must have .type`);
                    }
                    else {
                        if (cnf[name])
                            $$.$me_throw(`terminal control can not have .${name}`);
                    }
                return level ? this._prepare_helper(name, ent, dflt, cnf, level) :
                    this._prepare(name, ent, dflt, this.base(cnf.base), level + 1);
            }
            _prepare_helper(name, ent, dflt, cnf, level) {
                const type = !cnf ? '$me' : cnf.type;
                const cacheKey = $$.$me_atom2_path_ent2prefix[ent] + type + ':' + name;
                if (!$me_atom2_ec._prepare_cache[cacheKey]) {
                    const result = !cnf ? {
                        defaults: {},
                        defaults_relative: {},
                    } : this._prepare(name, ent, dflt, this.base(cnf.base), level + 1);
                    const props = !cnf ? dflt :
                        cnf[name] ? cnf[name] :
                            {};
                    const prop_default = {};
                    const prop_default_relative = {};
                    for (const prop in props) {
                        const prop_def = props[prop];
                        if (typeof prop_def === 'string' && !prop_def.startsWith('/') ||
                            prop_def && Array.isArray(prop_def.masters) && prop_def.masters.filter((s) => !s.startsWith('/')).length) {
                            result.defaults_relative[prop] = prop_def;
                        }
                        else {
                            prop_default[prop] = props[prop];
                        }
                    }
                    {
                        const src = result.defaults;
                        for (const prop in result.defaults)
                            if (!prop_default[prop] && !prop_default_relative[prop])
                                prop_default[prop] = src[prop];
                    }
                    {
                        const src = result.defaults_relative;
                        for (const prop in src)
                            if (!prop_default[prop] && !prop_default_relative[prop])
                                prop_default_relative[prop] = src[prop];
                    }
                    {
                        const result = { defaults: {}, defaults_relative: prop_default_relative };
                        const parent = new $$.$me_atom2({
                            tail: cacheKey,
                            fn_compute: () => result,
                        });
                        for (const tail in prop_default) {
                            const atom = new $$.$me_atom2($$.$me_atom2_prop_def_prepare(prop_default[tail], { tail, parent }));
                            result.defaults[tail] = atom.name();
                        }
                        $me_atom2_ec._prepare_cache[cacheKey] = result;
                    }
                }
                const result = $me_atom2_ec._prepare_cache[cacheKey];
                return {
                    defaults: Object.assign({}, result.defaults),
                    defaults_relative: Object.assign({}, result.defaults_relative),
                };
            }
            base(cnf_base) {
                if (!cnf_base)
                    return;
                if (this.bases.has(cnf_base)) {
                    return this.bases.get(cnf_base);
                }
                else {
                    const result = cnf_base();
                    this.bases.set(cnf_base, result);
                    return result;
                }
            }
        }
        $me_atom2_ec._to_init = Array();
        $me_atom2_ec._prepare_cache = {};
        $$.$me_atom2_ec = $me_atom2_ec;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ec.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $me_atom2_elem extends $$.$me_atom2_ec {
            constructor(p) {
                super(Object.assign({}, p, { ent: $$.$me_atom2_entity_enum.elem, fn_active: () => {
                        if (p.parent && p.parent.path.ent !== $$.$me_atom2_entity_enum.root) {
                            const elem_parent = p.parent;
                            elem_parent._add_child_to_reorder(this.path);
                        }
                        $$.$me_atom2_event_handlers = null;
                        if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                            $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                            $$.$me_atom2_async();
                        }
                    } }));
                const cnf_control = this._mk_controls();
                const has_control = !!Object.keys(cnf_control).length;
                this.node = this._mk_node(has_control);
                const cnf_elem = this._mk_elems();
                const has_parent = !!p.parent;
                this._mk_props(has_control, cnf_elem && Object.keys(cnf_elem), has_parent);
                this._mk_sad(has_parent);
            }
            destroy() {
                this.active(false);
                if (this.node) {
                    if (this.node == document.body) {
                        this.node.id = '';
                    }
                    else {
                        const parent = this.node.parentElement;
                        if (parent)
                            parent.removeChild(this.node);
                    }
                }
                super.destroy();
            }
            _mk_node(has_control) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_node = this.cnf_item('node') || (has_control ? 'canvas' : 'div');
                const result = cnf_node instanceof HTMLElement ? cnf_node :
                    typeof cnf_node == 'string' ? document.createElement(cnf_node) :
                        document.createElementNS(cnf_node.ns, cnf_node.tag);
                if (has_control && result.tagName != 'CANVAS')
                    $$.$me_throw(`${this.name()}: cnf.node (${cnf_node}) must be 'canvas' whilst using cnf.control`);
                result.id = this.name();
                $$.a.curr = prev;
                return result;
            }
            _mk_elems() {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const cnf_elem = this.cnf_items('elem');
                for (const tail in cnf_elem) {
                    const prop_def = cnf_elem[tail];
                    if (!prop_def)
                        continue;
                    const fn_apply = ({ prev, val, len_key, key, keys, key_enum }) => {
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.elem, tail });
                        if (key) {
                            const ent = $$.$me_atom2_entity_enum.key;
                            for (const tail of (typeof key === 'string' ? [key] : key))
                                path = new $$.$me_atom2_path({ ent, tail, path });
                        }
                        if (prev && val && prev.type === val.type)
                            return;
                        const elem = this.by_path(path);
                        if (elem instanceof $me_atom2_elem) {
                            if (path.toString() === '@win')
                                console.warn(val, elem.cnf, $$.$me_equal(val.prop, elem.cnf.prop));
                            elem.destroy();
                        }
                        if (val) {
                            $me_atom2_elem._to_def.push({
                                cnf: val,
                                parent: this,
                                tail,
                                len_key,
                                key,
                                keys,
                                key_enum,
                            });
                            $$.$me_atom2_async();
                        }
                    };
                    const fn_key_idx_changed = pp => {
                        let path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.elem, tail, path: this.path });
                        for (const tail of pp.key) {
                            path = new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.key, tail, path });
                        }
                        const elem = $me_atom2_elem.by_path(path);
                        if (elem)
                            this._add_child_to_reorder(elem.path);
                        if ($$.$me_debug)
                            console.log(elem.path.toString());
                    };
                    $$.$me_atom2._to_def.push($$.$me_atom2_prop_def_prepare(prop_def, {
                        parent: this,
                        tail: '@' + tail,
                        fn_apply,
                        fn_key_idx_changed,
                    }));
                    $$.$me_atom2_async();
                }
                $$.a.curr = prev;
                return cnf_elem;
            }
            _mk_props(has_control, order_default, has_parent) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                const { defaults, defaults_relative } = this._prepare('prop_default', $$.$me_atom2_entity_enum.elem, $me_atom2_elem.prop_default || {});
                const prop_defined = this.props([
                    this.cnf_items('prop'),
                    defaults,
                    defaults_relative,
                    Object.assign({ '#hidden': () => false, '#zIndex': has_parent ? '<.#zIndex' : () => 0 }, (!order_default ? {} : {
                        '#order': () => order_default,
                    })),
                    Object.assign({ '#visible': $$.$me_atom2_prop(['.#hidden'].concat(!has_parent ? [] : ['<.#visible']), ({ masters: [hidden, visible] }) => !hidden && (!has_parent || visible)), '#clientRect': $$.$me_atom2_prop([], () => {
                            const { left, top, right, bottom } = this.node.getBoundingClientRect();
                            return { left, top, right, bottom };
                        }) }, (!has_control ? {} : {
                        '#ctx': () => this.node.getContext('2d'),
                        '#ctxSize': $$.$me_atom2_prop(['/.#pixelRatio', '.style.width', '.style.height'], ({ masters: [pixelRatio, width, height] }) => ({
                            pixelRatio,
                            width: pixelRatio * width,
                            height: pixelRatio * height,
                        }), ({ val }) => {
                            if (val)
                                this.dom({
                                    width: val.width,
                                    height: val.height
                                });
                        }),
                    })),
                ], {
                    def: ({ tail, prop_def, prop_defined, p, idx, len }) => {
                        if (tail == '#order') {
                            return $$.$me_atom2_prop_def_prepare(prop_def, Object.assign({}, p, { fn_apply: ({ val, prev }) => {
                                    for (const child of this.node.children)
                                        this._add_child_to_reorder($$.$me_atom2_path.fromString(child.id));
                                } }));
                        }
                        else if (idx === len - 1 && tail == '#clientRect') {
                            return $$.$me_atom2_prop_def_prepare(prop_def, Object.assign({}, p, { fn_apply: prop_defined['#isHover'] === void 0 ? null :
                                    ({ val, atom }) => {
                                        if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                                            $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                                            $$.$me_atom2_async();
                                        }
                                    } }));
                        }
                    },
                    dup: ({ tail, prop_defined, idx, len }) => {
                        if (idx === len - 1)
                            $$.$me_throw(`${this.name()}: .${tail} reserved for internal use` + (tail !== '#visible' ? '' : ', use .#hidden instead'));
                    }
                });
                $$.a.curr = prev;
            }
            _mk_sad(has_parent) {
                const prev = $$.a.curr;
                $$.a.curr = this;
                for (const src of ['style', 'attr', 'dom']) {
                    $$.$me_atom2._to_def.push({
                        tail: src,
                        parent: this,
                        fn_compute: () => this.cnf_items(src),
                        fn_apply: ({ atom: parent, val }) => {
                            const prop_defined = {};
                            if (src === 'style') {
                                const tail = 'visibility';
                                $$.$me_atom2._to_def.push({
                                    tail,
                                    parent,
                                    masters: ['.#visible'],
                                    fn_compute: ({ masters: [visible] }) => visible ? 'visible' : 'hidden',
                                    fn_apply: ({ val }) => {
                                        this.style({ [tail]: val });
                                    }
                                });
                            }
                            if (src === 'style' && val['visibility'])
                                $$.$me_throw(`${this.name()}: .style.visibility is reserved for internal use, use .#hidden instead`);
                            let idx = 0;
                            const { defaults, defaults_relative } = this._prepare(src + '_default', $$.$me_atom2_entity_enum.elem, $me_atom2_elem[src + '_default'] || {});
                            for (const props of [val, defaults, defaults_relative]) {
                                for (const tail in props)
                                    if (props[tail])
                                        if (src === 'style' && tail === 'visibility') {
                                            $$.$me_throw(`${this.name()}: .style.visibility is reserved for internal use, use .#hidden instead`);
                                        }
                                        else if (prop_defined[tail] === void 0) {
                                            $$.$me_atom2._to_def.push($$.$me_atom2_prop_def_prepare(props[tail], {
                                                tail,
                                                parent,
                                                fn_apply: ({ val }) => {
                                                    this[src]({ [tail]: val });
                                                }
                                            }));
                                            if (src === 'style')
                                                prop_defined[tail] = idx;
                                        }
                                idx++;
                            }
                            if (src === 'style' && has_parent)
                                for (const prop of ['left', 'top', 'width', 'height'])
                                    if (prop_defined[prop] === void 0)
                                        $$.$me_throw(`${this.name()}: .style.${prop} must be defined`);
                        }
                    });
                }
                $$.a.curr = prev;
            }
            style(p, immediatly = false) {
                this._lazy_prop_set('s', p, immediatly);
            }
            dom(p, immediatly = false) {
                this._lazy_prop_set('d', p, immediatly);
            }
            attr(p, immediatly = false) {
                this._lazy_prop_set('a', p, immediatly);
            }
            static _lazy_prop_clientRect(t, prop) {
                if (!$me_atom2_elem._lazy_prop_clientRect_cache) {
                    $me_atom2_elem._lazy_prop_clientRect_cache = {};
                    for (const prop of ['width', 'height', 'left', 'top'])
                        $me_atom2_elem._lazy_prop_clientRect_cache['s' + prop] = true;
                }
                return !!$me_atom2_elem._lazy_prop_clientRect_cache[t + prop];
            }
            _lazy_prop_set(t, props, immediatly = false) {
                if (immediatly) {
                    for (const prop in props) {
                        $me_atom2_elem._lazy_prop_apply_helper(this.node, t, prop, props[prop]);
                    }
                }
                else {
                    for (let prop in props) {
                        this._lazy_prop_set_helper($me_atom2_elem._lazy_prop_clientRect(t, prop) ?
                            $me_atom2_elem._lazy_prop_to_apply_clientRect :
                            $me_atom2_elem._lazy_prop_to_apply, t, prop, props[prop]);
                    }
                    $$.$me_atom2_async();
                }
            }
            _lazy_prop_set_helper(lazy_prop_to_apply, t, prop, val) {
                if (!lazy_prop_to_apply.has(this.path))
                    lazy_prop_to_apply.set(this.path, new Map());
                const o = lazy_prop_to_apply.get(this.path);
                o[t + prop] = val;
            }
            static lazy_prop_apply_did() {
                const result = !$me_atom2_elem._lazy_prop_to_apply.size &&
                    !$me_atom2_elem._lazy_prop_to_apply_clientRect;
                return result;
            }
            static lazy_prop_apply_all() {
                let count = 0;
                count += $me_atom2_elem._lazy_prop_apply($me_atom2_elem._lazy_prop_to_apply);
                count += $me_atom2_elem._lazy_prop_apply($me_atom2_elem._lazy_prop_to_apply_clientRect);
                return count;
            }
            static _lazy_prop_apply(lazy_prop_to_apply) {
                let count = 0;
                if (lazy_prop_to_apply.size) {
                    for (const [path, elem_props] of lazy_prop_to_apply) {
                        const elem = $me_atom2_elem.by_path(path);
                        if (elem) {
                            const node = elem.node;
                            for (const prop in elem_props) {
                                count++;
                                $me_atom2_elem._lazy_prop_apply_helper(node, prop.slice(0, 1), prop.slice(1), elem_props[prop]);
                            }
                            if (lazy_prop_to_apply === $me_atom2_elem._lazy_prop_to_apply_clientRect)
                                elem._entities.prop['#clientRect'].set_state(false);
                        }
                    }
                    lazy_prop_to_apply.clear();
                }
                return count;
            }
            static _lazy_prop_apply_helper(node, t, prop, val) {
                if (t == 'd') {
                    node[prop] = val;
                }
                else if (t == 'a') {
                    node.setAttribute(prop, val);
                }
                else {
                    if (Number.isFinite(val)) {
                        if (prop === 'opacity' || prop === 'fontWeight') {
                            val += '';
                        }
                        else if ($me_atom2_elem._lazy_prop_style_px(prop)) {
                            val += 'px';
                        }
                    }
                    else if (typeof val === 'boolean') {
                        if (prop === 'visibility') {
                            val = val ? 'visible' : 'hidden';
                        }
                    }
                    if (typeof val != 'string')
                        $$.$me_throw(`prop: ${prop}, val: ${val}`, { prop, val, node });
                    node.style[prop] = val;
                }
            }
            static _lazy_prop_style_px(prop) {
                if (!$me_atom2_elem._lazy_prop_style_px_cache) {
                    $me_atom2_elem._lazy_prop_style_px_cache = {};
                    const pxStyleProps = ['fontSize', 'width', 'height'];
                    const sides = ['left', 'top', 'right', 'bottom'];
                    pxStyleProps.push(...sides);
                    pxStyleProps.push('margin');
                    pxStyleProps.push('padding');
                    sides.forEach(side => {
                        side = side.charAt(0).toUpperCase() + side.slice(1);
                        pxStyleProps.push('margin' + side);
                        pxStyleProps.push('padding' + side);
                    });
                    for (let i of pxStyleProps)
                        $me_atom2_elem._lazy_prop_style_px_cache[i] = true;
                }
                return !!$me_atom2_elem._lazy_prop_style_px_cache[prop];
            }
            _add_child_to_reorder(path_elem) {
                const id = this.node.id;
                const item = ($me_atom2_elem.children_to_add[id] ||
                    ($me_atom2_elem.children_to_add[id] = new Set()));
                item.add(path_elem);
                $$.$me_atom2_async();
            }
            static reorder_children() {
                let count = 0;
                for (const id_parent in $me_atom2_elem.children_to_add) {
                    const node_parent = document.getElementById(id_parent);
                    if (node_parent) {
                        const paths = $me_atom2_elem.children_to_add[id_parent];
                        const sb = {};
                        for (const path of paths)
                            sb[path.toString()] = true;
                        for (const child of [...node_parent.children])
                            if (sb[child.id]) {
                                node_parent.removeChild(child);
                                count++;
                            }
                        const order = $me_atom2_elem.by_path_s(id_parent + '.#order').value();
                        const key_enum_store = {};
                        for (const path of paths) {
                            const elem = $me_atom2_elem.by_path(path);
                            if (elem) {
                                elem._add_as_child(node_parent, order, key_enum_store);
                                count++;
                            }
                            else {
                                console.error(path.toString());
                            }
                        }
                    }
                    delete $me_atom2_elem.children_to_add[id_parent];
                }
                return count;
            }
            _add_as_child(node_parent, order, key_enum_store) {
                const node_child = this.node;
                const id = node_child.id;
                const name_elem = $me_atom2_elem._elem_name(id);
                const name_strip = $me_atom2_elem._parse(name_elem)[0];
                const idx = $me_atom2_elem._indexOf(order, name_elem, name_strip, key_enum_store, id);
                if (idx < 0 || idx >= order.length || node_parent.children.length === 0) {
                    node_parent.appendChild(node_child);
                }
                else {
                    let idx_after;
                    let node_after;
                    for (const child of node_parent.children) {
                        const i = $me_atom2_elem._indexOf(order, $me_atom2_elem._elem_name(child.id), name_strip, key_enum_store, id);
                        if (i <= idx || void 0 !== idx_after && i >= idx_after)
                            continue;
                        idx_after = i;
                        node_after = child;
                    }
                    if (void 0 === idx_after) {
                        node_parent.appendChild(node_child);
                    }
                    else {
                        node_parent.insertBefore(node_child, node_after);
                    }
                }
            }
            static _indexOf(order, s, name_strip, key_enum_store, id) {
                let result = order.indexOf(s);
                if (result < 0) {
                    result = order.length;
                    if (s.indexOf('[') > 0) {
                        const len = order.length;
                        const parsed_s = $me_atom2_elem._parse(s);
                        const matches = {};
                        LOOP: for (let i = 0; i < len; i++) {
                            const parsed_so = $me_atom2_elem._parse(order[i]);
                            if (parsed_s[0] != parsed_so[0])
                                continue;
                            const j_max = Math.min(parsed_s.length, parsed_so.length) - 1;
                            matches[i] = [];
                            for (let j = 1; j <= j_max; j++) {
                                if (parsed_s[j] == parsed_so[j]) {
                                    matches[i].push(j);
                                }
                                else if (parsed_so[j]) {
                                    delete matches[i];
                                    continue LOOP;
                                }
                            }
                        }
                        const best = Object.keys(matches)
                            .map((i) => ({ idx: +i, matches: matches[i] }))
                            .sort((ia, ib) => ib.matches.length - ia.matches.length)
                            .reduce((result, item, idx) => {
                            if (!idx) {
                                result = item;
                            }
                            else if (result.matches.length === item.matches.length) {
                                const len = result.matches.length;
                                for (let i = 0; i < len; i++) {
                                    if (result[i] <= item[i])
                                        continue;
                                    result = item;
                                    break;
                                }
                            }
                            return result;
                        }, null);
                        if (best) {
                            result = best.idx;
                            const parsed_so = $me_atom2_elem._parse(order[best.idx]);
                            if (name_strip == parsed_so[0]) {
                                const key_enum = $me_atom2_elem._get_key_enum(key_enum_store, name_strip, id);
                                if (key_enum) {
                                    const len = key_enum.length;
                                    let ord = 0, n = 1;
                                    for (let i = 0; i < len; i++)
                                        if (best.matches.indexOf(i + 1) < 0) {
                                            ord = ord * key_enum[i].length + key_enum[i].indexOf(parsed_s[i + 1]);
                                            n = n * key_enum[i].length;
                                        }
                                    result += ord / n;
                                }
                            }
                        }
                    }
                }
                return result;
            }
            static _get_key_enum(key_enum_store, name_strip, id) {
                let result = key_enum_store[name_strip];
                if (result === void 0) {
                    let path = $$.$me_atom2_path.fromString(id);
                    while (path.ent === $$.$me_atom2_entity_enum.key)
                        path = path.path;
                    const elem_parent = $$.$me_atom2_entity.by_path(path.path);
                    const atom = elem_parent.by_path(new $$.$me_atom2_path({ ent: $$.$me_atom2_entity_enum.prop, tail: '@' + path.tail }));
                    result = key_enum_store[name_strip] = atom.key_enum();
                }
                return result;
            }
            static _parse(s) {
                let pos_s = s.length - 1;
                let i;
                let result = [];
                while ((i = s.lastIndexOf('[', pos_s)) > 0) {
                    result.unshift(s.slice(i + 1, pos_s));
                    pos_s = i - 1;
                }
                result.unshift(s.slice(0, pos_s + 1));
                return result;
            }
            static _elem_name(elem_id) {
                return elem_id.slice(elem_id.lastIndexOf('@') + 1);
            }
        }
        $me_atom2_elem._to_def = Array();
        $me_atom2_elem._lazy_prop_to_apply = new Map();
        $me_atom2_elem._lazy_prop_to_apply_clientRect = new Map();
        $me_atom2_elem.children_to_add = {};
        $$.$me_atom2_elem = $me_atom2_elem;
        $$.$me_atom2_body_cursor = $$.$me_atom2_async_multi_origin({
            default: 'default',
            raf_order: 100,
            flush: (cursor) => {
                if (document.body.style.cursor != cursor)
                    document.body.style.cursor = cursor;
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//elem.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let $me_atom2_control_state_enum;
        (function ($me_atom2_control_state_enum) {
            $me_atom2_control_state_enum[$me_atom2_control_state_enum["cleaned"] = 0] = "cleaned";
            $me_atom2_control_state_enum[$me_atom2_control_state_enum["rendered"] = 1] = "rendered";
        })($me_atom2_control_state_enum = $$.$me_atom2_control_state_enum || ($$.$me_atom2_control_state_enum = {}));
        class $me_atom2_control extends $$.$me_atom2_ec {
            constructor(p) {
                super(Object.assign({}, p, { ent: $$.$me_atom2_entity_enum.control, fn_active: () => {
                        $$.$me_atom2_event_handlers = null;
                        if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                            $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                            $$.$me_atom2_async();
                        }
                    } }));
                this._mk_controls(this.level = p.level || 1);
                this._mk_props('<'.repeat(this.level));
            }
            destroy() {
                if (this.level > 1) {
                    $me_atom2_control._to_render.add(this.parent(true).path);
                }
                else {
                    $me_atom2_control.clean([this]);
                }
                super.destroy();
            }
            _mk_props(s_level) {
                const { defaults, defaults_relative } = this._prepare('prop_default', $$.$me_atom2_entity_enum.control, $me_atom2_control.prop_default || {});
                const render_driver_props = this.props([
                    this.cnf_items('prop'),
                    defaults,
                    defaults_relative,
                    {
                        '#hidden': () => false,
                        '#zIndex': '<.#zIndex',
                    },
                    {
                        '#visible': $$.$me_atom2_prop(['.#hidden', '<.#visible'], ({ masters: [hidden, visible] }) => !hidden && visible, ({ val }) => {
                            if (this.level > 1) {
                                $me_atom2_control._to_render.add(this.parent(true).path);
                            }
                            else {
                                $me_atom2_control._to_clean.add(this.path);
                            }
                        }),
                        '#ctxSize': s_level + '.#ctxSize',
                        '#ctx': s_level + '.#ctx',
                    },
                ], {
                    dup: ({ tail, prop_defined, idx, len }) => {
                        if (idx === len - 1)
                            $$.$me_throw(`${this.name()}: .${tail} reserved for internal use` + (tail !== '#visible' ? '' : ', use .#hidden instead'));
                    }
                });
                for (const prop of ['#width', '#height', '#pos'])
                    if (render_driver_props[prop] === void 0)
                        $$.$me_throw(`${this.name()}: requires .${prop} to be defined`);
                this.props({
                    '#render': $$.$me_atom2_prop(Object.keys(render_driver_props).map((s) => '.' + s), ({ masters }) => !(this.active() && $$.a('.#visible')) ? null : masters, ({ val }) => {
                        if (!val)
                            return;
                        $me_atom2_control._to_render.add(this.path);
                        $$.$me_atom2_async();
                    }),
                    '#offsetRect': () => $$.$me_rect(),
                    '#clientRect': $$.$me_atom2_prop([s_level + '.#clientRect', '.#offsetRect'], ({ masters: [clientRect, offsetRect] }) => {
                        return {
                            left: clientRect.left + offsetRect.left,
                            top: clientRect.top + offsetRect.top,
                            right: clientRect.left + offsetRect.right,
                            bottom: clientRect.top + offsetRect.bottom,
                        };
                    }, render_driver_props['#isHover'] === void 0 ? null :
                        ({ val, atom }) => {
                            if ($$.$me_atom2_event_mousemove_last && !$$.$me_atom2_event_mousemove_to_process) {
                                $$.$me_atom2_event_mousemove_to_process = $$.$me_atom2_event_mousemove_last;
                                $$.$me_atom2_async();
                            }
                        }),
                });
            }
            static pos_prepare(p, ctxWidthSource, ctxHeightSource) {
                const ctxWidth = Math.round(typeof ctxWidthSource == 'number' ? ctxWidthSource :
                    p.pixelRatio * $$.a(ctxWidthSource ? ctxWidthSource : '.#width'));
                const ctxHeight = Math.round(typeof ctxHeightSource == 'number' ? ctxHeightSource :
                    p.pixelRatio * $$.a(ctxHeightSource ? ctxHeightSource : '.#height'));
                if (p.ctxPos.left === void 0) {
                    if (p.ctxPos.right === void 0)
                        $$.$me_throw(`${$$.a.curr.path.toString()}: render: nor p.ctxPos.left, neigher p.ctxPos.right specified`);
                    p.ctxPos.left = p.ctxPos.right - ctxWidth;
                }
                if (p.ctxPos.right != null && p.ctxPos.right - p.ctxPos.left < ctxWidth) {
                    console.error(p.ctxPos, { ctxWidth });
                }
                else {
                    if (p.ctxPos.right != null && p.ctxPos.right - p.ctxPos.left > ctxWidth)
                        console.warn(p.ctxPos, { ctxWidth });
                    p.ctxPos.right = p.ctxPos.left + ctxWidth;
                }
                if (p.ctxPos.top === void 0) {
                    if (p.ctxPos.right === void 0)
                        $$.$me_throw('render: nor p.ctxPos.left, neigher p.ctxPos.right specified');
                    p.ctxPos.top = p.ctxPos.bottom - ctxHeight;
                }
                if (p.ctxPos.bottom != null && p.ctxPos.bottom - p.ctxPos.top < ctxHeight) {
                    console.error(p.ctxPos, { ctxHeight });
                }
                else {
                    if (p.ctxPos.bottom != null && p.ctxPos.bottom - p.ctxPos.top > ctxHeight)
                        console.warn(p.ctxPos, { ctxHeight });
                    p.ctxPos.bottom = p.ctxPos.top + ctxHeight;
                }
                p.ctxPos.left = Math.round(p.ctxPos.left);
                p.ctxPos.right = Math.round(p.ctxPos.right);
                p.ctxPos.top = Math.round(p.ctxPos.top);
                p.ctxPos.bottom = Math.round(p.ctxPos.bottom);
                if (typeof $$.a.curr.by_path_s('.#border') !== 'string') {
                    p.ctx.strokeStyle = $$.a('.#border');
                    p.ctx.strokeRect(p.ctxPos.left, p.ctxPos.top, p.ctxPos.right - p.ctxPos.left, p.ctxPos.bottom - p.ctxPos.top);
                }
                p.ctxRectPrev = p.ctxPos;
                return { ctxWidth, ctxHeight };
            }
            static font_prepare(ctx, pixelRatio, prefix = '') {
                const ctxFontSize = Math.round($me_atom2_control.font_size(pixelRatio, prefix));
                ctx.font = $me_atom2_control._fontWeight(prefix) + ' ' + ctxFontSize + 'px ' + $me_atom2_control._fontFamily(prefix);
                ctx.textAlign = 'left';
                ctx.textBaseline = 'bottom';
                return ctxFontSize;
            }
            static font_size(pixelRatio, prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontSize', prefix));
                if (typeof prop === 'string')
                    $$.$me_throw(prop);
                const result = prop.value() * pixelRatio;
                return result;
            }
            static _fontProp(prop, prefix) {
                const result = '.' + (!prefix ? prop : prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1));
                return result;
            }
            static _fontFamily(prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontFamily', prefix));
                return !prefix || typeof prop !== 'string' ? prop.value() : $$.a('.fontFamily');
            }
            static _fontWeight(prefix = '') {
                const prop = $$.a.curr.by_path_s($me_atom2_control._fontProp('fontWeight', prefix));
                return !prefix || typeof prop !== 'string' ? prop.value() : $$.a('.fontWeight');
            }
            static clean(controls, force = false) {
                let count = 0;
                for (let control of controls) {
                    if (control.state === $me_atom2_control_state_enum.cleaned)
                        continue;
                    count++;
                    if (control.ctxRectPrev) {
                        const p = {
                            ctx: control._entities.prop['#ctx'].value(),
                            ctxRectPrev: control.ctxRectPrev
                        };
                        if (p.ctx) {
                            const prev = $$.a.curr;
                            $$.a.curr = control;
                            if (!control._clean_helper(p, control.cnf))
                                $me_atom2_control._clean_prev_rect(p);
                            $$.a.curr = prev;
                        }
                        control.ctxRectPrev = null;
                    }
                    control.state = $me_atom2_control_state_enum.cleaned;
                    let controls;
                    if ($me_atom2_control._fill_controls_cache.has(control)) {
                        controls = $me_atom2_control._fill_controls_cache.get(control);
                    }
                    else {
                        controls = [];
                        const entities_control = control._entities.control;
                        $me_atom2_control._fill_controls(controls, control._entities.control);
                        $me_atom2_control._fill_controls_cache.set(control, controls);
                    }
                    if (controls.length)
                        $me_atom2_control.clean($me_atom2_control.zIndex_sort(controls), force);
                }
                return count;
            }
            _clean_helper(p, cnf) {
                let result = false;
                if (cnf) {
                    if (cnf.clean)
                        result = cnf.clean(p);
                    result = this._clean_helper(p, this.base(cnf.base)) || result;
                }
                return result;
            }
            static _clean_prev_rect(p) {
                if (p.ctxRectPrev)
                    p.ctx.clearRect(p.ctxRectPrev.left, p.ctxRectPrev.top, p.ctxRectPrev.right - p.ctxRectPrev.left, p.ctxRectPrev.bottom - p.ctxRectPrev.top);
            }
            static fill_controls_cache_clear() {
                $me_atom2_control._fill_controls_cache.clear();
            }
            static _fill_controls(controls, entities_of_type) {
                for (const tail in entities_of_type) {
                    const entity = entities_of_type[tail];
                    if (!entity._entities.key) {
                        controls.push(entity);
                    }
                    else {
                        $me_atom2_control._fill_controls(controls, entity._entities.key);
                    }
                }
            }
            static render(controls, pixelRatio) {
                if (pixelRatio === void 0)
                    pixelRatio = $$.$me_atom2_entity.root().by_path_s('/.#pixelRatio').value();
                let count = 0;
                for (let control of controls) {
                    if (control.state === $me_atom2_control_state_enum.rendered)
                        continue;
                    count++;
                    const prop_pos = control._entities.prop['#pos'];
                    const ctxPos = !prop_pos ? $$.$me_pos() : Object.assign({}, prop_pos.value());
                    for (let i of $$.$me_enum_names($$.$me_rect_sides_enum))
                        if (ctxPos[i] != null)
                            ctxPos[i] *= pixelRatio;
                    const p = {
                        ctx: control._entities.prop['#ctx'].value(),
                        ctxSize: control._entities.prop['#ctxSize'].value(),
                        pixelRatio,
                        ctxPos,
                    };
                    {
                        const prev = $$.a.curr;
                        $$.a.curr = control;
                        control._render_helper(p, control.cnf);
                        $$.a.curr = prev;
                    }
                    let controls;
                    if ($me_atom2_control._fill_controls_cache.has(control)) {
                        controls = $me_atom2_control._fill_controls_cache.get(control);
                    }
                    else {
                        controls = [];
                        const entities_control = control._entities.control;
                        $me_atom2_control._fill_controls(controls, control._entities.control);
                        $me_atom2_control._fill_controls_cache.set(control, controls);
                    }
                    if (controls.length)
                        $me_atom2_control.render($me_atom2_control.zIndex_sort(controls), pixelRatio);
                    control.state = $me_atom2_control_state_enum.rendered;
                    if (!p.ctxRectPrev)
                        $$.$me_throw(`it seems that control "${control.name()}" has no .render/render_post() method or .render/render_pos() method does not call $me_atom2_control.pos_prepare(p) for p.ctxRectPrev is not set`);
                    control.ctxRectPrev = p.ctxRectPrev;
                    const prop_offsetRect = control._entities.prop['#offsetRect'];
                    prop_offsetRect.value({
                        left: p.ctxRectPrev.left / p.pixelRatio,
                        top: p.ctxRectPrev.top / p.pixelRatio,
                        right: p.ctxRectPrev.right / p.pixelRatio,
                        bottom: p.ctxRectPrev.bottom / p.pixelRatio,
                    });
                }
                return count;
            }
            _render_helper(p, cnf) {
                if (!cnf)
                    return;
                this._render_helper(p, this.base(cnf.base));
                if (cnf.render)
                    cnf.render(p);
            }
            static zIndex_sort(ss, to_render = false) {
                return (Array.isArray(ss) ? ss :
                    [...ss].map(path => $$.$me_atom2_entity.root().by_path(path)))
                    .filter(control => control && control.active &&
                    (() => {
                        if (!control._entities.prop)
                            $$.$me_throw(control.name());
                        return true;
                    })() &&
                    (!to_render || control._entities.prop['#visible'].value()));
            }
        }
        $me_atom2_control._to_def = Array();
        $me_atom2_control._to_render = new Set();
        $me_atom2_control._to_clean = new Set();
        $me_atom2_control._fill_controls_cache = new Map();
        $$.$me_atom2_control = $me_atom2_control;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//control.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_atom2_ctx_rect(p) {
            ctx_rect_helper(p);
            if (!p.stroke ||
                (void 0 === p.stroke.ctxWidth || typeof p.stroke.ctxWidth == 'number') &&
                    (void 0 === p.stroke.style || typeof p.stroke.style == 'string')) {
                const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
                const ctxSemiLineWidth = ctxStrokeWidth / 2;
                p.ctx.beginPath();
                if (!p.ctxBorderRadius) {
                    p.ctx.rect(Math.round(p.ctxLeft + ctxSemiLineWidth), Math.round(p.ctxTop + ctxSemiLineWidth), Math.round(p.ctxWidth - ctxStrokeWidth), Math.round(p.ctxHeight - ctxStrokeWidth));
                }
                else {
                    let x, y;
                    p.ctx.moveTo(Math.round(x = p.ctxLeft + ctxSemiLineWidth), Math.round(y = p.ctxTop + p.ctxBorderRadius + ctxSemiLineWidth));
                    p.ctx.arc(Math.round(x += p.ctxBorderRadius), Math.round(y -= 0), Math.round(p.ctxBorderRadius), Math.PI, -Math.PI / 2, false);
                    p.ctx.lineTo(Math.round(x += p.ctxWidth - 2 * (p.ctxBorderRadius + ctxStrokeWidth)), Math.round(y -= p.ctxBorderRadius));
                    p.ctx.arc(Math.round(x += 0), Math.round(y += p.ctxBorderRadius), Math.round(p.ctxBorderRadius), -Math.PI / 2, 0, false);
                    p.ctx.lineTo(Math.round(x += p.ctxBorderRadius), Math.round(y += p.ctxHeight - 2 * (p.ctxBorderRadius + ctxStrokeWidth)));
                    p.ctx.arc(Math.round(x -= p.ctxBorderRadius), Math.round(y += 0), Math.round(p.ctxBorderRadius), 0, Math.PI / 2, false);
                    p.ctx.lineTo(Math.round(x -= p.ctxWidth - 2 * (p.ctxBorderRadius + ctxStrokeWidth)), Math.round(y += p.ctxBorderRadius));
                    p.ctx.arc(Math.round(x -= 0), Math.round(y -= p.ctxBorderRadius), Math.round(p.ctxBorderRadius), Math.PI / 2, Math.PI, false);
                }
                p.ctx.closePath();
                fill_stroke(Object.assign({}, p, { stroke: p.stroke && { ctxWidth: p.stroke.ctxWidth, style: p.stroke.style } }));
            }
            else {
                if (p.fillStyle != 'transparent') {
                    p.ctx.beginPath();
                    if (!p.ctxBorderRadius) {
                        p.ctx.rect(Math.round(p.ctxLeft + (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth / 2 : p.stroke.ctxWidth.left / 2)), Math.round(p.ctxTop + (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth / 2 : p.stroke.ctxWidth.top / 2)), Math.round(p.ctxWidth - (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.left + p.stroke.ctxWidth.right) / 2), Math.round(p.ctxHeight - (p.stroke.ctxWidth === void 0 ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth.top + p.stroke.ctxWidth.bottom) / 2));
                    }
                    else {
                        $$.$me_throw('TODO', p.ctxBorderRadius, !p.ctxBorderRadius);
                    }
                    fill(Object.assign({}, p));
                }
                for (const side of $$.$me_enum_names($$.$me_rect_sides_enum)) {
                    const ctxWidth = !p.stroke.ctxWidth ? 0 : typeof p.stroke.ctxWidth === 'number' ? p.stroke.ctxWidth : p.stroke.ctxWidth[side];
                    const style = !p.stroke.style ? null : typeof p.stroke.style === 'string' ? p.stroke.style : p.stroke.style[side];
                    switch (side) {
                        case 'left': {
                            p.ctx.beginPath();
                            const x = p.ctxLeft + ctxWidth / 2;
                            p.ctx.moveTo(x, p.ctxTop + p.ctxHeight);
                            p.ctx.lineTo(x, p.ctxTop);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'top': {
                            p.ctx.beginPath();
                            const y = p.ctxTop + ctxWidth / 2;
                            p.ctx.moveTo(p.ctxLeft, y);
                            p.ctx.lineTo(p.ctxLeft + p.ctxWidth, y);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'right': {
                            p.ctx.beginPath();
                            const x = p.ctxLeft + p.ctxWidth - ctxWidth / 2;
                            p.ctx.moveTo(x, p.ctxTop);
                            p.ctx.lineTo(x, p.ctxTop + p.ctxHeight);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                        case 'bottom': {
                            p.ctx.beginPath();
                            const y = p.ctxTop + p.ctxHeight - ctxWidth / 2;
                            p.ctx.moveTo(p.ctxLeft + p.ctxWidth, y);
                            p.ctx.lineTo(p.ctxLeft, y);
                            stroke({ ctx: p.ctx, stroke: { style, ctxWidth } });
                            break;
                        }
                    }
                }
            }
        }
        $$.$me_atom2_ctx_rect = $me_atom2_ctx_rect;
        function ctx_rect_helper(p) {
            if (void 0 === p.ctxLeft && p.ctxPos)
                p.ctxLeft = p.ctxPos.left;
            if (void 0 === p.ctxTop && p.ctxPos)
                p.ctxTop = p.ctxPos.top;
            if (void 0 === p.ctxWidth && p.ctxPos)
                p.ctxWidth = p.ctxPos.right - p.ctxPos.left;
            if (void 0 === p.ctxHeight && p.ctxPos)
                p.ctxHeight = p.ctxPos.bottom - p.ctxPos.top;
        }
        function $me_atom2_ctx_cross(p) {
            ctx_rect_helper(p);
            const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
            const ctxSemiLineWidth = ctxStrokeWidth / 2;
            const ctxLeft = p.ctxLeft + ctxSemiLineWidth;
            const ctxRight = p.ctxLeft + p.ctxWidth - ctxSemiLineWidth;
            const ctxTop = p.ctxTop + ctxSemiLineWidth;
            const ctxBottom = p.ctxTop + p.ctxHeight - ctxSemiLineWidth;
            p.ctx.beginPath();
            p.ctx.moveTo(ctxLeft, ctxTop);
            p.ctx.lineTo(ctxRight, ctxBottom);
            p.ctx.moveTo(ctxLeft, ctxBottom);
            p.ctx.lineTo(ctxRight, ctxTop);
            fill_stroke(p);
        }
        $$.$me_atom2_ctx_cross = $me_atom2_ctx_cross;
        function $me_atom2_ctxCenterOf(p) {
            ctx_rect_helper(p);
            return {
                ctxCenterX: p.ctxLeft + p.ctxWidth / 2,
                ctxCenterY: p.ctxTop + p.ctxHeight / 2,
            };
        }
        $$.$me_atom2_ctxCenterOf = $me_atom2_ctxCenterOf;
        function $me_atom2_ctxWidthOf(p) {
            ctx_rect_helper(p);
            return p.ctxWidth;
        }
        $$.$me_atom2_ctxWidthOf = $me_atom2_ctxWidthOf;
        function $me_atom2_ctxHeightOf(p) {
            ctx_rect_helper(p);
            return p.ctxHeight;
        }
        $$.$me_atom2_ctxHeightOf = $me_atom2_ctxHeightOf;
        function $me_atom2_ctx_circle(p) {
            const ctxStrokeWidth = p.stroke && p.stroke.ctxWidth || 0;
            const ctxSemiLineWidth = ctxStrokeWidth / 2;
            p.ctx.beginPath();
            p.ctx.arc(Math.round(p.ctxCenterX), Math.round(p.ctxCenterY), Math.round(p.ctxRadius - ctxSemiLineWidth), 0, 2 * Math.PI);
            p.ctx.closePath();
            fill_stroke(p);
        }
        $$.$me_atom2_ctx_circle = $me_atom2_ctx_circle;
        function fill_stroke(p) {
            fill(p);
            stroke(p);
        }
        function fill(p) {
            if (p.fillStyle && p.fillStyle != 'transparent') {
                p.ctx.fillStyle = p.fillStyle;
                p.ctx.fill();
            }
        }
        function stroke(p) {
            if (p.stroke && p.stroke.ctxWidth && p.stroke.style && p.stroke.style != 'transparent') {
                p.ctx.strokeStyle = p.stroke.style;
                p.ctx.lineWidth = p.stroke.ctxWidth;
                p.ctx.stroke();
            }
        }
        function $me_atom2_ctx_check(p) {
            let x, y;
            p.ctx.beginPath();
            p.ctx.moveTo(x = p.ctxLeft, y = p.ctxTop + p.ctxHeight * (1 - p.mu));
            p.ctx.lineTo(x += p.ctxWidth * p.lambda, y += p.ctxHeight * p.mu);
            p.ctx.lineTo(x += p.ctxWidth * (1 - p.lambda), y -= p.ctxHeight);
            stroke(p);
        }
        $$.$me_atom2_ctx_check = $me_atom2_ctx_check;
        function $me_atom2_ctx_buttom_line_draw(pp) {
            const { p, fn, name_atom } = pp;
            const val = (prop) => name_atom && name_atom[prop] ? name_atom[prop] :
                (name_atom && name_atom.prefix ? name_atom && name_atom.prefix : '.') + prop;
            const ctxLineWidth = $$.a(val('lineWidth')) * p.pixelRatio;
            const ctxLineY = p.ctxPos.bottom - ctxLineWidth / 2;
            p.ctx.beginPath();
            if (fn) {
                fn(ctxLineY);
            }
            else {
                p.ctx.moveTo(p.ctxPos.left, ctxLineY);
                p.ctx.lineTo(p.ctxPos.right, ctxLineY);
            }
            p.ctx.lineWidth = ctxLineWidth;
            p.ctx.strokeStyle = $$.a(val('colorLine'));
            p.ctx.stroke();
        }
        $$.$me_atom2_ctx_buttom_line_draw = $me_atom2_ctx_buttom_line_draw;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ctx.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_atom2_pos = (p, fn_apply) => {
            const align = {
                hor: 0,
                ver: 0,
            };
            let ofs;
            const parent = $$.a.curr.parent(true);
            let isParentElem = parent instanceof $$.$me_atom2_elem;
            const ss = new Set();
            if (p != null) {
                if (typeof p === 'number') {
                    align.hor = p;
                    align.ver = p;
                }
                else {
                    const pp = p;
                    {
                        for_hor_ver(prop => {
                            const val = pp[prop];
                            if (typeof val === 'number') {
                                align[prop] = val;
                            }
                            else if (typeof val === 'string' || Array.isArray(val)) {
                                if (!ofs)
                                    ofs = {};
                                ofs[prop] = val;
                            }
                            else if (val) {
                                const intf = val;
                                if (void 0 !== intf.align)
                                    align[prop] = intf.align;
                                if (intf.ofs) {
                                    if (!ofs)
                                        ofs = {};
                                    const val = ofs[prop] = intf.ofs;
                                    if (typeof val != 'string' && !Array.isArray(val) && typeof val !== 'number') {
                                        ss.add(prop_name(prop));
                                    }
                                }
                            }
                        });
                    }
                    {
                        const result = {};
                        for_hor_ver(prop => {
                            if (pp[prop] && typeof pp[prop] !== 'number')
                                result[prop] = void 0 == pp[prop] || typeof pp[prop] !== 'number' ? 0 : pp[prop];
                        });
                    }
                }
            }
            let masters;
            const result = {};
            if (!ss.size) {
                const result = init_result(align, isParentElem);
                if (ofs)
                    for_hor_ver(prop => fill_result(result, prop, ofs));
                masters = result;
            }
            else {
                const masters_masters = new Array();
                const props = {};
                for_hor_ver(prop => {
                    const name_atom2_prop = prop_name(prop);
                    if (ss.has(name_atom2_prop)) {
                        $$.$me_throw('TODO');
                        result[name_atom2_prop] = ofs[prop];
                        masters_masters.push('.' + name_atom2_prop);
                    }
                });
                masters = $$.$me_atom2_prop_masters(masters_masters, ({ m }) => {
                    const result = init_result(align, isParentElem);
                    let i = 0;
                    for_hor_ver(prop => {
                        if (ss.has(prop_name(prop))) {
                            result.push(...m(i++));
                        }
                        else
                            fill_result(result, prop, ofs);
                    });
                    return result;
                });
            }
            result['#pos'] = $$.$me_atom2_prop(masters, ({ len, masters, m }) => {
                const pos = isParentElem ? $$.$me_pos() : m(0);
                const result = {};
                const base = isParentElem ? 0 : 1;
                const ofsLen = { hor: 0, ver: 0 };
                for_hor_ver((prop, ver) => {
                    if (ofs)
                        fill_ofsLen(ofsLen, prop, ofs, ss);
                    result[pos_fld(align[prop] == 1, ver)] = pos_prop_val(pos, len, masters, m, align, ofs, ofsLen, ver, ss, base);
                });
                return result;
            }, fn_apply);
            return result;
        };
        const pos_fld = (max, ver) => max ? (ver ? 'bottom' : 'right') : (ver ? 'top' : 'left');
        function init_result(align, isParentElem) {
            const result = Array();
            if (!isParentElem)
                result.push('<.#pos');
            const infix = !isParentElem ? '#' : 'style.';
            result.push('<.' + infix + 'width');
            result.push('<.' + infix + 'height');
            if (align['hor'] === 2)
                result.push('.#width');
            if (align['ver'] === 2)
                result.push('.#height');
            return result;
        }
        const prop_name = (prop) => 'pos.' + prop + '_ofs';
        function fill_result(result, prop, ofs) {
            const val = ofs[prop];
            if (typeof val === 'string') {
                result.push(val);
            }
            else if (Array.isArray(val)) {
                result.push(...val);
            }
        }
        function fill_ofsLen(ofsLen, prop, ofs, ss) {
            const val = ofs[prop];
            if (typeof val === 'string') {
                ofsLen[prop] = 1;
            }
            else if (Array.isArray(val)) {
                const arr = val;
                ofsLen[prop] = arr.length;
            }
            else {
                const name_atom2_prop = prop_name(prop);
                if (ss.has(name_atom2_prop)) {
                    const arr = $$.a('.' + name_atom2_prop);
                    ofsLen[prop] = arr.length;
                }
            }
        }
        function pos_prop_val(pos, len, masters, m, align, ofs, ofsLen, ver, ss, base) {
            const prop = ver ? 'ver' : 'hor';
            const al = align[prop];
            const isAlignRight = al === 1;
            let result = pos[pos_fld(isAlignRight, ver)];
            const size_outer = m(base + (ver ? 1 : 0));
            if (result === void 0) {
                result = pos[pos_fld(!isAlignRight, ver)] + (isAlignRight ? 1 : -1) * size_outer;
            }
            if (al === 2)
                result += size_outer / 2 - m(base + 2 + (!ver || align['hor'] != 2 ? 0 : 1)) / 2;
            let delta = 0;
            if (ofs) {
                const ofs_val = ofs[prop];
                if (ofs_val) {
                    if (typeof ofs_val === 'number') {
                        delta = ofs_val;
                    }
                    else {
                        let i_min = base + 2 + (!ver ? 0 : ofsLen.hor);
                        for_hor_ver(prop => { if (align[prop] == 2)
                            i_min++; });
                        const i_max = (i_min + ofsLen[prop]) - 1;
                        if (i_max > len)
                            console.warn({ i_min, i_max }, len, prop, ofsLen, ofs, base, masters, $$.a.curr.path.toString());
                        for (let i = i_min; i <= i_max; i++)
                            delta += masters[i];
                    }
                }
            }
            result = result + (isAlignRight ? -1 : 1) * delta;
            return result;
        }
        function for_hor_ver(fn) {
            for (const prop of ['hor', 'ver'])
                fn(prop, prop === 'ver');
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pos.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$me_atom2_async_raf = (t) => {
            const start = performance.now();
            const stat = new Map();
            if ($$.$me_atom2.anim_to_play.size) {
                fill_stat(stat, 'anim', last_now => {
                    const pre = performance.now() - last_now;
                    const anim_to_play = new Array();
                    for (const [path, anim] of $$.$me_atom2.anim_to_play)
                        if (anim.progress !== void 0 && anim.progress < 1) {
                            const atom = $$.$me_atom2.by_path(path);
                            if (!atom) {
                                $$.$me_atom2.anim_to_play.delete(path);
                            }
                            else {
                                anim_to_play.push([atom, anim]);
                            }
                        }
                    const [count] = $me_atom2_async_anim(anim_to_play, t, start);
                    return [count, pre];
                });
            }
            for (const op in ops_event)
                fill_stat(stat, op, ops_event[op]);
            $$.$me_atom2_async_stat_show(stat, start, 'ANIMATION_FRAME');
        };
        function $me_atom2_async_anim(anim_to_play, t, start) {
            let needReplay = false, count = 0;
            for (const [atom, anim] of anim_to_play) {
                count += 1;
                const t_actual = t + (performance.now() - start);
                if (anim.start === void 0)
                    anim.start = t_actual;
                anim.progress = Math.min(1, ((t_actual - anim.start) - anim.delay) / anim.duration);
                if (!anim.fn && typeof anim.to !== 'number')
                    $$.$me_throw('anim.fn must be specified');
                anim.value = anim.fn ?
                    anim.fn(anim.from, anim.to, anim.easing, anim.progress) :
                    anim.from + (anim.to - anim.from) * anim.easing(anim.progress);
                if ($$.$me_atom2.is_valid_value(anim.value)) {
                    atom.set_value(anim.value);
                }
                else {
                    console.error(`anim '${atom.name()}' got invalid value ${anim.value}`);
                }
                if (anim.progress < 1)
                    needReplay = true;
            }
            return [count, needReplay];
        }
        $$.$me_atom2_async_anim = $me_atom2_async_anim;
        const ops_event = {
            mousemove: (last_now) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_event_mousemove_to_process) {
                    $$.$me_atom2_event_process('mousemove', $$.$me_atom2_event_mousemove_to_process);
                    $$.$me_atom2_event_mousemove_to_process = null;
                    count = 1;
                }
                return [count, pre];
            },
            wheel: (last_now) => {
                const pre = performance.now() - last_now;
                let count = 0;
                if ($$.$me_atom2_event_wheel_to_process) {
                    $$.$me_atom2_event_process('wheel', $$.$me_atom2_event_wheel_to_process);
                    $$.$me_atom2_event_wheel_to_process = null;
                    count = 1;
                }
                return [count, pre];
            },
        };
        function fill_stat(stat, name, fn) {
            const start = performance.now();
            const [count, pre] = fn(start);
            $$.$me_atom2_async_stat_update(stat, name, count, pre, performance.now() - start);
        }
        $$.$me_atom2_async({ fn: $$.$me_atom2_async_raf, order: 0 });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//raf.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function init_ric() {
            const ops = {
                init_asyncComplete: (last_now) => {
                    if (!$$.$me_atom2_async_complete()) {
                        const root_entities = $$.$me_atom2_entity.root()._entities;
                        if (root_entities && root_entities.prop) {
                            for (const tail of ['#asyncComplete', '#asyncCompleteIncludingAnimate']) {
                                const atom = root_entities.prop[tail];
                                if (atom)
                                    atom.value(false);
                            }
                        }
                    }
                    return [0, 0];
                },
                reorder_children: (last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_elem.reorder_children();
                    return [count, pre];
                },
                set_node_prop: (last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_elem.lazy_prop_apply_all();
                    return [count, pre];
                },
                activate_entity: (last_now) => {
                    const pre = performance.now() - last_now;
                    const count = $$.$me_atom2_entity.activate_entities();
                    return [count, pre];
                },
                render: (last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    if (ready_to_render()) {
                        for (const path of $$.$me_atom2_control._to_render)
                            $$.$me_atom2_control._to_clean.add(path);
                        $$.$me_atom2_control.clean($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_clean));
                        $$.$me_atom2_control._to_clean.clear();
                        count = $$.$me_atom2_control.render($$.$me_atom2_control.zIndex_sort($$.$me_atom2_control._to_render, true));
                        $$.$me_atom2_control._to_render.clear();
                    }
                    $$.$me_atom2_control.fill_controls_cache_clear();
                    return [count, pre];
                },
                upd_atom: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    const [count, pre2] = $$.$me_atom2.update_atoms(deadline, performance.now());
                    return [count, pre + pre2];
                },
                viewport: (deadline, last_now) => {
                    const root_entities = $$.$me_atom2_entity.root()._entities;
                    if (root_entities && root_entities.prop) {
                        for (const tail of ['#viewportChanged', '#viewportWidthChanged', '#viewportHeightChanged', '#pixelRatioChanged']) {
                            const atom = root_entities.prop[tail];
                            if (atom)
                                atom.value(false);
                        }
                    }
                    return [0, 0];
                },
                def_atom: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2._to_def.length && performance.now() < deadline) {
                        const def = $$.$me_atom2._to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                def_control: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_control._to_def.length && performance.now() < deadline) {
                        const def = $$.$me_atom2_control._to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2_control(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                def_elem: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_elem._to_def.length && performance.now() < deadline) {
                        const def = $$.$me_atom2_elem._to_def.shift();
                        if ($$.$me_atom2_entity.root().by_path(def.parent.path)) {
                            new $$.$me_atom2_elem(def);
                            count++;
                        }
                    }
                    return [count, pre];
                },
                init_ec: (deadline, last_now) => {
                    const pre = performance.now() - last_now;
                    let count = 0;
                    while ($$.$me_atom2_ec._to_init.length && performance.now() < deadline) {
                        const path = $$.$me_atom2_ec._to_init.shift();
                        const ec = $$.$me_atom2_entity.root().by_path(path);
                        if (!ec || !ec.active())
                            continue;
                        ec.init();
                        count++;
                    }
                    return [count, pre];
                },
                fini_asyncComplete: (last_now) => {
                    if ($$.$me_atom2_async_complete())
                        $$.a('/.#asyncComplete', true);
                    return [0, 0];
                },
                anim: (deadline, last_now, t) => {
                    const start = performance.now();
                    let needReplay = false;
                    const pre = performance.now() - last_now;
                    let count = 0;
                    const anim_to_play = new Array();
                    for (const [path, anim] of $$.$me_atom2.anim_to_play) {
                        if (anim.delay) {
                            if (anim.start === void 0)
                                anim.start = t;
                            if ((t - anim.start) < anim.delay) {
                                needReplay = true;
                                continue;
                            }
                        }
                        if (anim.progress === void 0) {
                            anim_active(anim, true);
                            const atom = $$.$me_atom2.by_path(path);
                            if (atom) {
                                anim_to_play.push([atom, anim]);
                            }
                            else {
                                $$.$me_atom2.anim_to_play.delete(path);
                            }
                        }
                        else if (anim.progress >= 1) {
                            anim_active(anim, false);
                            $$.$me_atom2.anim_to_play.delete(path);
                        }
                    }
                    if (!$$.$me_atom2_async_complete()) {
                        needReplay = true;
                    }
                    else {
                        const [_count, _needReplay] = $$.$me_atom2_async_anim(anim_to_play, t, start);
                        count = _count;
                        needReplay = _needReplay;
                    }
                    if (needReplay)
                        $$.$me_atom2_async();
                    return [count, pre];
                },
                fini_asyncCompleteIncludingAnimate: (last_now) => {
                    if ($$.$me_atom2_async_complete(true))
                        $$.a('/.#asyncCompleteIncludingAnimate', true);
                    return [0, 0];
                },
            };
            for (const op in ops)
                $$.$me_atom2_async_ric({ name: op, fn: ops[op] });
        }
        init_ric();
        const ready_to_render = () => $$.$me_atom2_control._to_render.size &&
            !$$.$me_atom2_control._to_def.length &&
            !$$.$me_atom2_elem._to_def.length &&
            !$$.$me_atom2._to_def.length &&
            true;
        function anim_active(anim, active) {
            if (!anim.path_active)
                return;
            const atom_active = $$.$me_atom2_entity.root().by_path(anim.path_active);
            if (!atom_active)
                return;
            atom_active.value(active);
        }
        $$.$me_atom2_async_complete = (including_anim = false) => !($$.$me_atom2_elem.children_to_add.size ||
            $$.$me_atom2_elem.lazy_prop_apply_did() ||
            $$.$me_atom2_entity._to_activate.size ||
            $$.$me_atom2_control._to_clean.size ||
            $$.$me_atom2_control._to_render.size ||
            $$.$me_atom2.to_update.size ||
            $$.$me_atom2_control._to_def.length ||
            $$.$me_atom2_elem._to_def.length ||
            $$.$me_atom2._to_def.length ||
            $$.$me_atom2_ec._to_init.length ||
            including_anim && $$.$me_atom2.anim_to_play.size ||
            $$.$me_atom2_event_mousemove_to_process ||
            $$.$me_atom2_event_wheel_to_process ||
            false);
        function _settingsInit() {
            let asyncCompleteStart;
            let asyncCompleteIncludingAnimateStart;
            window.addEventListener('resize', function () {
                const viewport = _viewport();
                $$.a('/.#viewportWidth', viewport.width);
                $$.a('/.#viewportHeight', viewport.height);
                $$.a('/.#pixelRatio', window.devicePixelRatio);
            });
            const viewport = _viewport();
            $$.$me_atom2_entity.root().props({
                '#viewportChanged': () => false,
                '#viewportPortrait': () => false,
                '#viewportWidthChanged': () => false,
                '#viewportWidth': $$.$me_atom2_prop([], () => viewport.width, ({ prev, val }) => {
                    if (prev != val && prev != null) {
                        $$.a('/.#viewportWidthChanged', true);
                        $$.a('/.#viewportChanged', true);
                    }
                }),
                '#viewportHeightChanged': () => false,
                '#viewportHeight': $$.$me_atom2_prop([], () => viewport.height, ({ prev, val }) => {
                    if (prev != val && prev != null) {
                        $$.a('/.#viewportHeightChanged', true);
                        $$.a('/.#viewportChanged', true);
                    }
                }),
                '#pixelRatioChanged': () => false,
                '#pixelRatio': $$.$me_atom2_prop([], () => window.devicePixelRatio, ({ prev, val }) => {
                    if (prev != val && prev != null)
                        $$.a('/.#viewportHeightChanged', true);
                }),
                '#asyncCompleteShow': $$.$me_atom2_prop([], ({ atom }) => {
                    let val = null;
                    const name = atom.name();
                    const s = sessionStorage.getItem(name);
                    if (s)
                        try {
                            val = JSON.parse(s);
                        }
                        catch (e) {
                            console.error({ name }, e);
                        }
                    return !!val;
                }, ({ val, atom }) => {
                    const name = atom.name();
                    if (!val) {
                        sessionStorage.removeItem(name);
                    }
                    else {
                        sessionStorage.setItem(name, JSON.stringify(!!val));
                    }
                    return !!val;
                }),
                '#asyncComplete': $$.$me_atom2_prop([], () => false, ({ prev, val }) => {
                    if (!val) {
                        asyncCompleteStart = performance.now();
                    }
                    else if (!prev && $$.a('/.#asyncCompleteShow')) {
                        console.log('%casyncComplete', 'background: green; color: white', (performance.now() - asyncCompleteStart).toFixed(0) + 'ms');
                    }
                }),
                '#asyncCompleteIncludingAnimate': $$.$me_atom2_prop([], () => false, ({ prev, val }) => {
                    if (!val) {
                        asyncCompleteIncludingAnimateStart = performance.now();
                    }
                    else if (!prev && $$.a('/.#asyncCompleteShow')) {
                        console.log('%casyncCompleteIncludingAnimate', 'background: yellow; color: black', (performance.now() - asyncCompleteIncludingAnimateStart).toFixed(0) + 'ms');
                    }
                }),
                '#stat': $$.$me_atom2_prop([], ({ atom }) => {
                    let val = null;
                    const name = atom.name();
                    const s = sessionStorage.getItem(name);
                    if (s)
                        try {
                            val = JSON.parse(s);
                        }
                        catch (e) {
                            console.error({ name }, e);
                        }
                    return val;
                }, ({ val, atom }) => {
                    if (val != null)
                        if (Number.isFinite(+val)) {
                            val = [+val];
                        }
                        else if (Array.isArray(val)) {
                            val = val
                                .filter((item) => Number.isFinite(+item) && +item >= 0)
                                .map((item) => +item)
                                .sort((ia, ib) => ia - ib)
                                .slice(0, 3);
                            if (!val.length)
                                val = null;
                        }
                    const name = atom.name();
                    if (val == null) {
                        sessionStorage.removeItem(name);
                    }
                    else {
                        sessionStorage.setItem(name, JSON.stringify(val));
                    }
                    return val;
                }),
            });
        }
        function _viewport() {
            const result = {
                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            };
            return result;
        }
        _settingsInit();
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ric.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $checkers_settings() {
            $$.$me_atom2_entity.root().props({
                colorCheckerWhite: () => 'rgba(200,200,200)',
                colorCheckerBlack: () => 'rgba(100,100,100)',
                colorCellWhite: () => 'white',
                colorCellBlack: () => 'black',
                colorMark: () => 'red',
                fontFamily: () => 'Times',
                fontWeight: () => 400,
                portrait: $$.$me_atom2_prop(['.#viewportWidth', '.#viewportHeight'], ({ masters: [width, height] }) => width / (14 + 1 / 3) < height / (14 + 1 / 3)),
                em: $$.$me_atom2_prop(['.portrait', '.#viewportWidth', '.#viewportHeight'], ({ masters: [portrait, width, height] }) => Math.min((portrait ? height : width) / (14 + 1 / 3), (portrait ? width : height) / (9 + 2 / 3))),
                colorText: () => 'black',
            });
        }
        $$.$checkers_settings = $checkers_settings;
        $$.$checkers_take_sym = Symbol('take');
        $$.$checkers_dame_sym = Symbol('dame');
        $$.$checkers_game_init = () => {
            $$.a('.checkers_initial[white]', ['a1', 'a3', 'b2', 'c1', 'c3', 'd2', 'e1', 'e3', 'f2', 'g1', 'g3', 'h2']);
            $$.a('.checkers_initial[black]', ['a7', 'b8', 'b6', 'c7', 'd8', 'd6', 'e7', 'f8', 'f6', 'g7', 'h8', 'h6']);
        };
        $$.$checkers_game_dispatch = (dispatch_name, dispatch_arg) => {
            if (dispatch_name === 'move' && typeof dispatch_arg === 'string') {
                const coord = dispatch_arg;
                const coord_avail = $$.a('.coord_avail');
                const found = coord_avail[coord] !== void 0;
                if (found) {
                    const turn_player = $$.a('.turn_player');
                    const checker_selected = $$.a('.checker_selected');
                    const checker_move = $$.a(`.checker_move[${checker_selected}]`);
                    const turn_player_opposite = $$.a('.turn_player_opposite');
                    const checkers_move_result = checker_move[coord];
                    const checker_take = checkers_move_result[$$.$checkers_take_sym];
                    if (checker_take) {
                        const shelf_idx = $$.a(`.checker_shelf_count[${turn_player_opposite}]`);
                        const desc = shelf_idx < 10 ? shelf_idx + '' : shelf_idx == 10 ? 'a' : 'b';
                        $$.a(`.checker_desc[${turn_player_opposite}][${checker_take}]`, desc);
                    }
                    const dame = $$.a(`.checker_dame[${turn_player}][${checker_selected}]`) ||
                        checkers_move_result[$$.$checkers_dame_sym];
                    $$.a(`.checker_desc[${turn_player}][${checker_selected}]`, coord + (!dame ? '' : '!'));
                    if (Object.keys(checkers_move_result).length) {
                        $$.a(`.checker_selected_fixed`, true);
                        return true;
                    }
                    $$.a(`.checker_selected_fixed`, false);
                    $$.a('.checker_selected', '');
                    $$.a('.turn', $$.a('.turn') + 1);
                }
                return true;
            }
            return false;
        };
        $$.$checkers_game_prop = {
            rows: () => ['-', '1', '2', '3', '4', '5', '6', '7', '8'].reverse(),
            cells: () => ['-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
            players: () => ['white', 'black'],
            turn: () => 0,
            turn_player: $$.$me_atom2_prop(['.turn', '.players'], ({ m }) => m(1)[m(0) % 2]),
            turn_player_opposite: $$.$me_atom2_prop(['.turn', '.players'], ({ m }) => m(1)[(m(0) + 1) % 2]),
            checker_keys: () => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
            checkers_initial: $$.$me_atom2_prop({ keys: ['.players'] }, ({ key: [player] }) => player == 'white' ?
                ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b'] :
                ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b'], ({ val }) => {
                if (val.length < 12) {
                    while (val.length < 12)
                        val.push('');
                }
                else if (val.length > 12) {
                    val.splice(12, val.length);
                }
            }),
            checker_desc: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'], masters: ['.checkers_initial[]'] }, ({ key: [player, checker], masters: [initial] }) => initial[+checker]),
            checker_coord: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'], masters: ['.checker_desc[][]'] }, ({ masters: [desc] }) => desc.length < 2 ? '' : desc.slice(0, 2)),
            checker_dame: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'], masters: ['.checker_desc[][]'] }, ({ masters: [desc] }) => !!desc.slice(2, 3)),
            checker_hidden: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'], masters: ['.checker_desc[][]'] }, ({ masters: [desc] }) => !desc),
            checker_shelf_idx: $$.$me_atom2_prop({
                keys: ['.players', '.checker_keys'],
                masters: ['.checker_desc[][]'],
            }, ({ masters: [desc] }) => desc.length >= 2 ? -1 : desc == 'a' ? 10 : desc == 'b' ? 11 : +desc),
            checker_left: $$.$me_atom2_prop({
                keys: ['.players', '.checker_keys'],
                masters: ['/.portrait', '.checker_desc[][]', '.cells', '.em', '.boardLeft', '.checker_shelf_idx[][]', '.shelfWhiteLeft', '/.#viewportChanged'],
            }, ({ key: [player, checker], masters: [portrait, desc, cells, em, boardLeft, shelf_idx, shelfWhiteLeft, viewportChanged], prev }) => {
                const to = desc.length >= 2 ? boardLeft + cells.indexOf(desc.slice(0, 1)) * em :
                    !portrait ? (shelf_idx % 2) * em + (player == 'black' ? 0 : shelfWhiteLeft) :
                        boardLeft + ((7 - Math.floor(shelf_idx / 2)) * em);
                return (viewportChanged ? to :
                    $$.$me_atom2_anim({ to, path_active: $$.a.get('.checker_anim_left[][]').path }));
            }),
            checker_top: $$.$me_atom2_prop({
                keys: ['.players', '.checker_keys'],
                masters: ['/.portrait', '.checker_desc[][]', '.rows', '.em', '.boardTop', '.checker_shelf_idx[][]', '.shelfWhiteTop', '/.#viewportChanged'],
            }, ({ key: [player, checker], masters: [portrait, desc, rows, em, boardTop, shelf_idx, shelfWhiteTop, viewportChanged], prev }) => {
                const to = desc.length >= 2 ? boardTop + rows.indexOf(desc.slice(1, 2)) * em :
                    portrait ? (shelf_idx % 2) * em + (player == 'black' ? 0 : shelfWhiteTop) :
                        boardTop + ((6 - Math.floor(shelf_idx / 2)) * em);
                return viewportChanged ? to :
                    $$.$me_atom2_anim({ to, path_active: $$.a.get('.checker_anim_top[][]').path });
            }),
            checker_anim_left: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'] }, () => false),
            checker_anim_top: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'] }, () => false),
            checker_anim: $$.$me_atom2_prop({
                keys: ['.players', '.checker_keys'],
                masters: ['.checker_anim_left[][]', '.checker_anim_top[][]'],
            }, ({ masters: [left, top] }) => left || top),
            checker_take: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.checker_keys'], ({ masters: [checker_keys] }) => checker_keys.map(i => `.checker_move[${i}]`)), ({ masters }) => masters.reduce((result, i) => result || !!(i && i[Object.keys(i)[0]][$$.$checkers_take_sym]), false)),
            checker_avail: $$.$me_atom2_prop({
                keys: ['.checker_keys'],
                masters: ['.checker_move[]', '.checker_take', '.checker_selected_fixed', '.checker_selected'],
            }, ({ key: [checker], masters: [checker_move, checker_take, checker_selected_fixed, checker_selected] }) => !!(checker_selected_fixed && checker_selected == checker ||
                !checker_selected_fixed &&
                    checker_move &&
                    (!checker_take || checker_move[Object.keys(checker_move)[0]][$$.$checkers_take_sym]))),
            checker_avail_count: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.checker_keys'], ({ masters: [checker_keys] }) => checker_keys.map(i => `.checker_avail[${i}]`)), ({ masters }) => masters.reduce((result, i) => result + (i ? 1 : 0), 0)),
            checker_shelf_count: $$.$me_atom2_prop({ keys: ['.players'], masters: $$.$me_atom2_prop_masters(['.checker_keys'], ({ key: [player], masters: [checker_keys] }) => checker_keys.map((idx) => `.checker_desc[${player}][${idx}]`)) }, ({ masters }) => masters.reduce((result, item) => result += item.length < 2 ? 1 : 0, 0)),
            checker_move: $$.$me_atom2_prop({
                keys: ['.checker_keys'],
                masters: $$.$me_atom2_prop_masters(['.turn_player', '.turn_player_opposite'], ({ masters: [turn_player, turn_player_opposite] }) => [
                    `.checker_coord[${turn_player}][]`,
                    `.checker_dame[${turn_player}][]`,
                    '.turn_player',
                    '.coord_occupied',
                    `.coord_occupied_by[${turn_player_opposite}]`,
                    '.cells',
                ]),
            }, ({ key: [checker], masters: [checker_coord, checker_dame, turn_player, coord_occupied, coord_occupied_by_opposite, cells,] }) => {
                let result = '';
                if (checker_coord) {
                    const is_valid_row = (row) => 1 <= row && row <= 8;
                    const is_valid_cell = (cell) => 1 <= cell && cell <= 8;
                    const move_take = (checker_coord, checker_dame, row_delta_prev = 0, cell_delta_prev = 0, already_taken = {}) => {
                        const [cell, row] = checker_coord;
                        const idx = cells.indexOf(cell);
                        let result = {};
                        const i_max = checker_dame ? 7 : 1;
                        for (const row_delta of [-1, 1])
                            for (const cell_delta of [-1, 1]) {
                                if (checker_dame &&
                                    row_delta_prev &&
                                    row_delta != row_delta_prev &&
                                    cell_delta_prev &&
                                    cell_delta != cell_delta_prev)
                                    continue;
                                let r, c, coord, coord_take, took;
                                for (let i = 1; i <= i_max; i++)
                                    if (!is_valid_row(r = +row + row_delta * i) ||
                                        !is_valid_cell(c = idx + cell_delta * i)) {
                                        break;
                                    }
                                    else if (!coord_occupied[coord = cells[c] + r]) {
                                        if (took) {
                                            result[coord] = Object.assign({ [$$.$checkers_take_sym]: took }, move_take(coord, checker_dame, row_delta, cell_delta, Object.assign({}, already_taken, { [coord_take]: true })));
                                        }
                                    }
                                    else if (took || !coord_occupied_by_opposite[coord_take = coord]) {
                                        break;
                                    }
                                    else if (!already_taken[coord_take] &&
                                        is_valid_row(r = +row + row_delta * (i + 1)) &&
                                        is_valid_cell(c = idx + cell_delta * (i + 1))) {
                                        if (coord_occupied[coord = cells[c] + r]) {
                                            break;
                                        }
                                        else {
                                            const dame = checker_dame ||
                                                turn_player === 'white' && r == 8 ||
                                                turn_player === 'black' && r == 1;
                                            result[coord] = Object.assign({ [$$.$checkers_take_sym]: (took = coord_occupied_by_opposite[coord_take]), [$$.$checkers_dame_sym]: dame }, move_take(coord, dame, row_delta, cell_delta, Object.assign({}, already_taken, { [coord_take]: true })));
                                        }
                                    }
                            }
                        return result;
                    };
                    result = move_take(checker_coord, checker_dame);
                    if (!Object.keys(result).length) {
                        const [cell, row] = checker_coord;
                        const idx = cells.indexOf(cell);
                        const row_deltas = checker_dame ? [-1, 1] : [turn_player === 'white' ? 1 : -1];
                        const i_max = checker_dame ? 7 : 1;
                        let r, c, coord, coord_take;
                        for (const row_delta of row_deltas)
                            for (const cell_delta of [-1, 1])
                                for (let i = 1; i <= i_max; i++)
                                    if (is_valid_row(r = +row + row_delta * i) &&
                                        is_valid_cell(c = idx + cell_delta * i) &&
                                        !coord_occupied[coord = cells[c] + r]) {
                                        const dame = turn_player === 'white' && r == 8 ||
                                            turn_player === 'black' && r == 1;
                                        result[coord] = { [$$.$checkers_dame_sym]: dame };
                                    }
                                    else
                                        break;
                    }
                }
                return result && Object.keys(result).length ? result : '';
            }),
            checker_selected: () => '',
            checker_selected_fixed: () => false,
            coord_selected: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.turn_player', '.checker_selected'], ({ masters: [turn_player, checker_selected] }) => !checker_selected ? [] : [`.checker_coord[${turn_player}][${checker_selected}]`]), ({ len, m }) => !len ? '' : m(0)),
            coord_avail: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.checker_selected'], ({ masters: [checker_selected] }) => !checker_selected ? [] :
                [`.checker_move[${checker_selected}]`]), ({ len, masters: [checker_move] }) => !len ? [] :
                Object.keys(checker_move).reduce((result, coord) => {
                    result[coord] = true;
                    return result;
                }, {})),
            coord_occupied_by: $$.$me_atom2_prop({
                keys: ['.players'],
                masters: $$.$me_atom2_prop_masters(['.checker_keys'], ({ key: [player], masters: [checker_keys] }) => checker_keys.map(i => `.checker_coord[${player}][${i}]`)),
            }, ({ len, m }) => {
                const result = {};
                for (let i = 0; i < len; i++)
                    result[m(i)] = i + '';
                return result;
            }),
            coord_occupied: $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.players'], ({ masters: [players] }) => players.map(i => `.coord_occupied_by[${i}]`)), ({ len, m }) => {
                const result = {};
                for (let i = 0; i < len; i++)
                    Object.assign(result, m(i));
                return result;
            }),
            shelfSpaceLegend: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(0)),
            shelfSpaceNonLegend: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(1)),
            shelfSize: $$.$me_atom2_prop(['.em'], $$.$me_atom2_prop_compute_fn_mul(2)),
            shelfWhiteLeft: $$.$me_atom2_prop(['/.portrait', '.boardLeft', '.boardWidth', '.shelfSpaceNonLegend'], ({ masters: [portrait, boardLeft, boardWidth, shelfSpaceNonLegend] }) => portrait ? 0 : boardLeft + boardWidth + shelfSpaceNonLegend),
            shelfWhiteTop: $$.$me_atom2_prop(['/.portrait', '.boardTop', '.boardHeight', '.shelfSpaceLegend'], ({ masters: [portrait, boardTop, boardHeight, space] }) => !portrait ? 0 : boardTop + boardHeight + space),
            boardLeft: $$.$me_atom2_prop(['/.portrait', '.shelfSize', '.shelfSpaceLegend'], ({ masters: [portrait, shelfSize, space] }) => portrait ? 0 : shelfSize + space),
            boardTop: $$.$me_atom2_prop(['/.portrait', '.shelfSize', '.shelfSpaceNonLegend'], ({ masters: [portrait, shelfSize, space] }) => !portrait ? 0 : shelfSize + space),
            boardWidth: $$.$me_atom2_prop(['.em', '.cells'], ({ masters: [em, cells] }) => em * cells.length),
            boardHeight: $$.$me_atom2_prop(['.em', '.rows'], ({ masters: [em, rows] }) => em * rows.length),
        };
        $$.$checkers_game_style = {
            left: $$.$me_atom2_prop(['/.#viewportWidth', '.style.width', '.em'], ({ masters: [viewportWidth, width, em] }) => Math.max(0, (viewportWidth - width) / 2 - em / 3)),
            top: $$.$me_atom2_prop(['/.#viewportHeight', '.style.height', '.em'], ({ masters: [viewportHeight, height, em] }) => Math.max(0, (viewportHeight - height) / 2)),
            width: $$.$me_atom2_prop([
                '/.portrait',
                '.shelfSize',
                '.shelfSpaceLegend',
                '.boardWidth',
                '.shelfSpaceNonLegend',
            ], ({ masters: [portrait, shelfSize, shelfSpaceLegend, boardWidth, shelfSpaceNonLegend] }) => portrait ? boardWidth : shelfSize + shelfSpaceLegend + boardWidth + shelfSpaceNonLegend + shelfSize),
            height: $$.$me_atom2_prop([
                '/.portrait',
                '.shelfSize',
                '.shelfSpaceLegend',
                '.boardHeight',
                '.shelfSpaceNonLegend',
            ], ({ masters: [portrait, shelfSize, shelfSpaceLegend, boardHeight, shelfSpaceNonLegend] }) => !portrait ? boardHeight : shelfSize + shelfSpaceLegend + boardHeight + shelfSpaceNonLegend + shelfSize),
        };
        $$.$checkers_checker_custom_prop = (player, checker, level = 1) => {
            const prefix = '<'.repeat(level);
            return {
                background: $$.$me_atom2_prop(['/.colorCheckerWhite', '/.colorCheckerBlack'], ({ masters: [white, black] }) => player === 'white' ? white : black),
                backgroundMark: '/.colorMark',
                border: $$.$me_atom2_prop(['/.colorCheckerWhite', '/.colorCheckerBlack'], ({ masters: [white, black] }) => `1px solid ${player !== 'white' ? white : black}`),
                dame: prefix + `.checker_dame[${player}][${checker}]`,
                mark: $$.$me_atom2_prop([prefix + '.turn_player', prefix + `.checker_avail[${checker}]`], ({ masters: [turn_player, checker_avail] }) => turn_player == player && checker_avail),
                selected: $$.$me_atom2_prop([prefix + '.checker_selected'], ({ masters: [checker_selected] }) => checker_selected == checker, ({ val }) => {
                    if (val) {
                        $$.a(prefix + '.checker_selected', checker);
                    }
                }),
            };
        };
        $$.$checkers_win = (fn) => $$.$me_atom2_prop($$.$me_atom2_prop_masters(['.turn_player', '.turn_player_opposite'], ({ masters: [turn_player, turn_player_opposite] }) => [
            '.turn_player',
            '.turn_player_opposite',
            '.checker_avail_count',
            `.checker_shelf_count[${turn_player}]`,
            `.checker_shelf_count[${turn_player_opposite}]`,
            '.checker_keys'
        ]), ({ masters: [turn_player, turn_player_opposite, checker_avail_count, turn_player_checker_shelf_count, turn_player_opposite_checker_shelf_count, checker_keys,] }) => checker_avail_count ||
            turn_player_opposite_checker_shelf_count >= checker_keys.length && turn_player_opposite_checker_shelf_count >= checker_keys.length ?
            null :
            fn(turn_player_opposite));
        $$.$checkers_checker_event = {
            event: {
                clickOrTap: () => !$$.a('.mark') || $$.a('.selected', true),
            }
        };
        $$.$checkers_checker_prop = {
            '#isHover': $$.$me_atom2_prop([], () => false),
            'cursor': $$.$me_atom2_prop(['.#isHover', '.mark'], ({ masters: [isHover, mark] }) => isHover && mark ? 'pointer' : 'default', ({ val, atom }) => {
                $$.$me_atom2_body_cursor({ origin: atom.path, val });
            }),
        };
        $$.$checkers_checker_content = (ent_name) => {
            const ec_circle = $.$$[`$checkers_${ent_name}_circle`];
            const ec_mark = $.$$[`$checkers_${ent_name}_mark`];
            return {
                circle_outer: () => ({
                    type: `$checkers_${ent_name}_checker_circle_outer`,
                    base: ec_circle,
                    prop: {
                        k: () => 0.8,
                        background: '<.background',
                        border: '<.border',
                    },
                }),
                circle_inner: () => ({
                    type: `$checkers_${ent_name}_checker_circle_inner`,
                    base: ec_circle,
                    prop: {
                        k: () => 0.4,
                        border: '<.border',
                    },
                }),
                circle_dame_outer: $$.$me_atom2_prop([`.dame`], ({ masters: [dame] }) => !dame ? null : {
                    type: `$checkers_${ent_name}_checker_circle_dame_outer`,
                    base: ec_circle,
                    prop: {
                        k: () => 0.6,
                        border: '<.border',
                    },
                }),
                circle_dame_inner: $$.$me_atom2_prop([`.dame`], ({ masters: [dame] }) => !dame ? null : {
                    type: `$checkers_${ent_name}_checker_circle_dame_inner`,
                    base: ec_circle,
                    prop: {
                        k: () => 0.2,
                        border: '<.border',
                    },
                }),
                mark: $$.$me_atom2_prop(['.mark'], ({ masters: [mark] }) => !mark ? null : ec_mark()),
            };
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//checkers.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_checker = () => (Object.assign({ type: '$checkers_checker', prop: $$.$checkers_checker_prop, style: {
                width: '.em',
                height: '.em',
            }, elem: $$.$checkers_checker_content('elem') }, $$.$checkers_checker_event));
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//checker.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_circle = () => ({
            type: '$checkers_elem_circle',
            prop: {
                k: () => 1,
                background: () => 'transparent',
                border: () => 'transparent',
                _size: $$.$me_atom2_prop(['.em', '.k'], ({ masters: [em, k] }) => em * k),
                _ofs: $$.$me_atom2_prop(['.em', '.k'], ({ masters: [em, k] }) => em * (1 - k) / 2),
            },
            style: {
                boxSizing: () => 'border-box',
                position: () => 'absolute',
                top: '._ofs',
                left: '._ofs',
                border: '.border',
                background: '.background',
                borderRadius: () => '50%',
                width: '._size',
                height: '._size',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//circle.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_mark = () => ({
            type: '$checkers_elem_mark',
            base: $$.$checkers_elem_circle,
            prop: {
                k: () => 0.12,
                background: '/.colorMark',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mark.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_board = () => ({
            type: '$checkers_elem_board',
            node: 'table',
            style: {
                width: $$.$me_atom2_prop(['.em', '.cells'], ({ masters: [em, cells] }) => em * cells.length),
                height: $$.$me_atom2_prop(['.em', '.rows'], ({ masters: [em, rows] }) => em * rows.length),
                borderCollapse: () => 'collapse',
            },
            elem: {
                row: $$.$me_atom2_prop({ keys: ['<.rows'] }, ({ key: [key_row], key_enum: [key_enum_row] }) => ({
                    type: '$checkers_elem_board_row_custom',
                    base: $$.$checkers_elem_board_row,
                    prop: {
                        row: () => key_row,
                        rows: () => key_enum_row,
                        cells: '<.cells',
                        coord_mark: '<.coord_mark',
                        coord_selected: '<.coord_selected',
                    },
                    style: {
                        width: '<.style.width',
                        height: '.em',
                    },
                })),
            },
        });
        $$.$checkers_elem_board_row = () => ({
            type: '$checkers_elem_board_row',
            node: 'tr',
            style: {
                position: () => 'relative',
            },
            elem: {
                cell: $$.$me_atom2_prop({ keys: ['.cells'], masters: ['.row', '.rows'] }, ({ key: [key_cell], key_enum: [key_enum_cell], masters: [row, rows] }) => ({
                    type: '$checkers_elem_board_cell_custom',
                    base: $$.$checkers_elem_board_cell,
                    prop: {
                        row: () => row,
                        cell: () => key_cell,
                        rows: () => rows,
                        cells: () => key_enum_cell,
                        mark: $$.$me_atom2_prop(['.cell', '.row', '<.coord_mark'], ({ masters: [cell, row, coord_avail] }) => cell != '-' && row != '-' && coord_avail[cell + row] !== void 0),
                        coord_selected: '<.coord_selected',
                    },
                })),
            },
        });
        $$.$checkers_elem_board_cell = () => ({
            type: '$checkers_elem_board_cell',
            node: 'td',
            prop: {
                '#isHover': $$.$me_atom2_prop([], () => false),
                cursor: $$.$me_atom2_prop(['.#isHover', '.mark'], ({ masters: [isHover, mark] }) => isHover && mark ? 'pointer' : 'default', ({ val, atom }) => {
                    $$.$me_atom2_body_cursor({ origin: atom.path, val });
                }),
            },
            style: {
                position: () => 'relative',
                boxSizing: () => 'border-box',
                padding: () => 0,
                width: '.em',
                height: '.em',
                background: $$.$me_atom2_prop(['.coord_selected', '.row', '.cell', '.rows', '.cells', '/.colorMark', '/.colorCellWhite', '/.colorCellBlack'], ({ masters: [coord_selected, row, cell, rows, cells, mark, white, black] }) => row == '-' || cell == '-' ? 'transparent' :
                    coord_selected == cell + row ? mark :
                        (rows.indexOf(row) + cells.indexOf(cell)) % 2 ? white : black),
                textAlign: () => 'center',
                borderLeft: $$.$me_atom2_prop(['.cell', '.row'], ({ masters: [cell, row] }) => cell !== 'a' || row === '-' ? '' : '1px solid black'),
                borderRight: $$.$me_atom2_prop(['.cell', '.row'], ({ masters: [cell, row] }) => cell !== 'h' || row === '-' ? '' : '1px solid black'),
                borderTop: $$.$me_atom2_prop(['.cell', '.row'], ({ masters: [cell, row] }) => row !== '8' || cell === '-' ? '' : '1px solid black'),
                borderBottom: $$.$me_atom2_prop(['.cell', '.row'], ({ masters: [cell, row] }) => row !== '1' || cell === '-' ? '' : '1px solid black'),
            },
            dom: {
                innerText: $$.$me_atom2_prop(['.cell', '.row'], ({ masters: [cell, row] }) => {
                    const result = row == '-' && cell != '-' ? cell :
                        row != '-' && cell == '-' ? row :
                            '';
                    return result;
                })
            },
            elem: {
                mark: $$.$me_atom2_prop(['.mark'], ({ masters: [mark] }) => !mark ? null : $$.$checkers_elem_mark()),
            },
            event: {
                clickOrTap: p => $$.a.get('<<<').dispatch('move', $$.a('.cell') + $$.a('.row')),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//board.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_win = () => ({
            type: '$checkers_elem_win',
            style: {
                color: () => 'red',
                display: () => 'flex',
                justifyContent: () => 'center',
                alignItems: () => 'center',
            },
            elem: {
                text: () => ({
                    type: '$checkers_elem_win_text',
                    style: {
                        position: () => 'relative',
                        left: () => 0,
                        top: () => 0,
                        width: () => 'auto',
                        height: () => 'auto',
                        background: $$.$me_atom2_prop(['<.player_win', '/.colorCellWhite', '/.colorCellBlack'], ({ masters: [player, white, black] }) => player === 'white' ? white : black),
                        border: $$.$me_atom2_prop(['/.colorMark'], ({ masters: [color] }) => `2px solid ${color}`),
                        color: $$.$me_atom2_prop(['<.player_win', '/.colorCellWhite', '/.colorCellBlack'], ({ masters: [player, white, black] }) => player === 'white' ? black : white),
                        textAlign: () => 'center',
                        padding: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => em / 50 * 20),
                        fontSize: '.em',
                    },
                    dom: {
                        innerHTML: $$.$me_atom2_prop(['<.player_win'], ({ masters: [player_win] }) => player_win + ' wins')
                    },
                }),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//win.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_game = () => ({
            type: '$checkers_elem_game',
            dispatch: $$.$checkers_game_dispatch,
            style: $$.$checkers_game_style,
            prop: Object.assign({}, $$.$checkers_game_prop, { '#order': () => ['board', 'checker'] }),
            elem: {
                checker: $$.$me_atom2_prop({ keys: ['.players', '.checker_keys'] }, ({ key: [player, checker] }) => ({
                    type: '$checkers_elem_checker_custom',
                    base: $$.$checkers_elem_checker,
                    prop: Object.assign({ '#hidden': `<.checker_hidden[${player}][${checker}]` }, $$.$checkers_checker_custom_prop(player, checker)),
                    style: {
                        top: $$.$me_atom2_prop([`<.checker_top[${player}][${checker}]`]),
                        left: $$.$me_atom2_prop([`<.checker_left[${player}][${checker}]`]),
                    },
                })),
                board: () => ({
                    type: '$checkers_elem_board_custom',
                    base: $$.$checkers_elem_board,
                    prop: {
                        cells: '<.cells',
                        rows: '<.rows',
                        coord_mark: '<.coord_avail',
                        coord_selected: '<.coord_selected',
                    },
                    style: {
                        left: '<.boardLeft',
                        top: '<.boardTop',
                    },
                }),
                win: $$.$checkers_win((player_win) => ({
                    type: '$checkers_elem_win_custom',
                    base: $$.$checkers_elem_win,
                    prop: {
                        player_win: () => player_win,
                    },
                    style: {
                        width: $$.$me_atom2_prop(['<.boardWidth', '.em'], ({ masters: [width, em] }) => width - em),
                        height: $$.$me_atom2_prop(['<.boardHeight', '.em'], ({ masters: [height, em] }) => height - em),
                        left: $$.$me_atom2_prop(['<.boardLeft', '.em'], ({ masters: [left, em] }) => left + em),
                        top: '<.boardTop',
                    },
                })),
            },
            init: $$.$checkers_game_init,
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//game.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$checkers_elem_app = (rootElem) => {
            $$.$checkers_settings();
            $$.$me_atom2_elem.prop_default = {
                em: '/.em',
            };
            $$.$me_atom2_elem.style_default = {
                position: () => 'absolute',
                left: () => 0,
                top: () => 0,
                color: '/.colorText',
                background: () => 'transparent',
                fontFamily: '/.fontFamily',
                fontWeight: '/.fontWeight',
                fontSize: $$.$me_atom2_prop(['.em'], ({ masters: [em] }) => em / 2),
            };
            return new $$.$me_atom2_elem({ tail: 'app', cnf: {
                    type: '$checkers_elem_app',
                    node: rootElem,
                    elem: {
                        game: () => $$.$checkers_elem_game(),
                    },
                    style: {
                        margin: () => 0,
                    },
                } });
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//app.js.map
//# sourceMappingURL=web.js.map