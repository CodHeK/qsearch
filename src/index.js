import React from "react";

const Search = props => {
    let { data } = props;
    
    let Trie = null;
    
    const check = (obj) => {
        for(const [_, v] of Object.entries(obj)) {
            let vcopy = v;
            if(JSON.stringify(vcopy)[0] === '{')
                    return false;
        }
        return true;
    };
    
    const add = (v) => {
        let words = String(v).replace(/[^a-z0-9]/gi,' ').split(" ");
        for(const word of words) {
            if(word.length > 0) {
                insert(Trie, word.toLowerCase());
                console.log(word);
            }
        }
    }
    
    const dfs = (obj) => {
        if(check(obj)) {
            for(const [_, v] of Object.entries(obj))
                add(v);
            return;
        }
        
        for(const [_, v] of Object.entries(obj)) {
            if(JSON.stringify(v)[0] === '{')
                dfs(v);
            else
                add(v);
        }
    };
    
    const genNode = () => {
        let temp = {
            'isLeaf': false,
            'map': new Map()
        };
        return temp;
    };
    
    const insert = (root, str) => {
        if(root === null) root = genNode();
        
        let temp = root;
        for(const x of str) {
            if(!temp.map.has(x))
                temp.map.set(x, genNode());
            
            temp = temp.map.get(x);
        }
        temp.isLeaf = true;
        Trie = root;
    };
    
    const search = (root, str) => {
        if(root === null) return false;
        
        let temp = root;
        for(const x of str) {
            temp = temp.map.get(x);
            
            if(!temp) return false;
        }
        
        return true;
    };
    
    for(const obj of data) {
        dfs(obj);
    };
    
    console.log(Trie);
    const inputSearch = (e) => {
        console.log(e.target.value);
        search(Trie, e.target.value.toLowerCase())
        console.log(search(Trie, e.target.value.toLowerCase()))
    };
    
    
    return (
    <div>
        <input className="input-field" placeholder="Search" onChange={(e) => inputSearch(e) } />
    </div>
    );
};

export default Search;
