class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {
        sort(meetings.begin(), meetings.end());

        priority_queue<int, vector<int>, greater<int>> available;
        priority_queue<pair<long long, int>,
                       vector<pair<long long, int>>,
                       greater<pair<long long, int>>> busy;

        vector<int> count(n, 0);

        for (int i = 0; i < n; i++)
            available.push(i);

        for (auto& m : meetings) {
            long long start = m[0];
            long long end = m[1];

            while (!busy.empty() && busy.top().first <= start) {
                available.push(busy.top().second);
                busy.pop();
            }

            if (!available.empty()) {
                int room = available.top();
                available.pop();
                busy.push({end, room});
                count[room]++;
            } else {
                auto [finish, room] = busy.top();
                busy.pop();
                long long duration = end - start;
                busy.push({finish + duration, room});
                count[room]++;
            }
        }

        int ans = 0;
        for (int i = 1; i < n; i++) {
            if (count[i] > count[ans])
                ans = i;
        }
        return ans;
    }
};
