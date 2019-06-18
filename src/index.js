import React from "react";

const Search = props => {
    let { data, styles, onEnter, callback } = props.config;
    
    let Trie = null;
    
    const check = (obj) => {
        for(const [_, v] of Object.entries(obj)) {
            let vcopy = v;
            if(JSON.stringify(vcopy)[0] === '{')
                    return false;
        }
        return true;
    };
    
    const add = (v, index) => {
        let words = String(v).replace(/[^a-z0-9]/gi,' ').split(" ");
        for(const word of words) {
            if(word.length > 0) {
                insert(Trie, word.toLowerCase(), index);
            }
        }
    }
    
    const dfs = (obj, index) => {
        if(check(obj)) {
            for(const [_, v] of Object.entries(obj))
                add(v, index);
            return;
        }
        
        for(const [_, v] of Object.entries(obj)) {
            if(JSON.stringify(v)[0] === '{')
                dfs(v, index);
            else
                add(v, index);
        }
    };
    
    const genNode = () => {
        let temp = {
            'isLeaf': false,
            'map': new Map(),
            'indexes': new Map()
        };
        return temp;
    };
    
    const insert = (root, str, index) => {
        if(root === null) root = genNode();
        
        let temp = root;
        for(const x of str) {
            if(!temp.map.has(x))
                temp.map.set(x, genNode());
            
            temp.indexes.set(index, true);
            temp = temp.map.get(x);
        }
        temp.isLeaf = true;
        temp.indexes.set(index, true)
        Trie = root;
    };
    
    const search = (root, str) => {
        if(root === null) return false;
        
        let temp = root;
        for(const x of str) {
            temp = temp.map.get(x);
            
            if(!temp) return [];
        }
        
        return temp.indexes;
    };
    
    for(let i = 0; i < data.length; i++) {
        dfs(data[i], i);
    };
    
    const filteredData = (e) => {
        let searchedVal = search(Trie, e.target.value.toLowerCase());
        let filtered = [];
        for(const [idx, _] of searchedVal)
            filtered.push(data[idx]);
        
        return filtered;
    };
    
    const inputSearch = (e) => {
        callback(filteredData(e))
    };
    
    const inputSearchOnEnter = (e) => {
        if(e.which === 13)
            callback(filteredData(e))
    };
    
    let SearchBar;
    if(onEnter === false)
        SearchBar =  <input className="input-field" style={styles}
                            placeholder="Search" onChange={ (e) => inputSearch(e) } />;
    else
        SearchBar =  <input className="input-field" style={styles}
                            placeholder="Search" onKeyPress={ (e) => inputSearchOnEnter(e) } />;
    
    return (
    <div>
        {SearchBar}
    </div>
    );
};

export default Search;
