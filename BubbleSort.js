class BubbleSort{
	constructor(a){
		this._temp = this._base = a;
		this._changed = true;
	}
	sort(){
		for(;this._changed;){
			this._changed = false;
			for(var i = 0; i < this._base.length - 1; i++)
				this._temp = this.bubbleSort(this._temp, i)
		}
		return this._temp;
	}
	bubbleSort(a, c=0){
		let _a = c>0? a.slice(0, c) : [];
		let l=a[c], p=a[c+1]
		this._changed = l > p? true : this._changed;
		return _a.concat([...(l < p? [l,p] : [p,l])]).concat(a.slice(c+2)).filter(a=>a!=undefined)
	}
}
