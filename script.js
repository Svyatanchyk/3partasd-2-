let N = 12,
   ans;

let tree = Array();



function dfs(visit, node) {
   let num = 0,
      temp = 0;


   visit[node] = 1;



   for (let i = 0; i < tree[node].length; i++) {
      if (visit[tree[node][i]] == 0) {


         temp = dfs(visit, tree[node][i]);




         if (temp % 2 != 0)
            num += temp;
         else
            ans++;
      }
   }
   return num + 1;
}



function minEdge(n) {
   let visit = Array(n + 2).fill(0);
   ans = 0;

   dfs(visit, 1);

   return ans;
}


let n = 10;


for (let i = 0; i < n + 2; i++)
   tree.push(new Array());
tree[1].push(3);
tree[3].push(1);
tree[1].push(6);
tree[6].push(1);
tree[1].push(2);
tree[2].push(1);
tree[3].push(4);
tree[4].push(3);
tree[6].push(8);
tree[8].push(6);
tree[2].push(7);
tree[7].push(2);
tree[2].push(5);
tree[5].push(2);
tree[4].push(9);
tree[9].push(4);
tree[4].push(10);
tree[10].push(4);
document.write(minEdge(n));