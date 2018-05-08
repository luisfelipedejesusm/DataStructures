class MergeSort{
	constructor(a){
		this._base = a;
	}
	chunk(a, s){
		return [a.slice(0, s)].concat(a.slice(s).length > s? this.chunk(a.slice(s), s) : [a.slice(s)]) 
	}
	orderFirst(b){
		return b.map(a => a.length > 1? a[0] < a[1]? a : [a[1], a[0]] : a)
	}
	mergeSort(a){
		let _f = [];
		for(var i = 0, j = 1; i < a.length; i+=2, j+=2){
			let _o = []
			if(a[j] == undefined){
				_o.push(a[i][0]);
			}else{
				for(var e = 0, c = 0; e < a[i].length && c < a[j].length; )
					_o.push(a[i][e] < a[j][c]? a[i][e++] : a[j][c++]);
				if(a[i].length != e)
					a[i].slice(e).map(a=>_o.push(a)) 
				else if(a[j].length != c)
					a[j].slice(c).map(a=>_o.push(a)) 
			}
			_f.push(_o)
		}
		return _f.length > 1? this.mergeSort(_f) : _f
	}
	sort(){
		this._base = this.chunk(this._base, 2)
		this._base = this.orderFirst(this._base)
		return this.mergeSort(this._base)
	}

}
