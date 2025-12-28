class Solution {
public:
    int countNegatives(vector<vector<int>>& grid) {
        int ans  = 0;
        for (int arr = 0 ; arr< grid.size(); arr++){
            for (int j = 0 ; j<grid[arr].size();j++){
               if (grid[arr][j] < 0) ans++;
            }
        }
        return ans;
    }
};