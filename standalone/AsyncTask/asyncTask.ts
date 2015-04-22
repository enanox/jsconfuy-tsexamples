interface AsyncTask<Params, Progress, Result> {
    doInBackground(p: Params) : Result,
    onProgressUpdate(pr: Progress) : void,
    onPostExecute(r: Result) : Result
}

interface AuthData {
    username: string;
    password: string;
    wasAuth(): boolean;
}

class AuthTask implements AsyncTask<AuthData, number, boolean> {
    doInBackground(p: AuthData): boolean {
        // Do sth
        return p && p.wasAuth();
    }

    onProgressUpdate(progress: number): number {
        // To update sth, might be a spinner or progress bar
        return progress;
    }

    onPostExecute(result: boolean) {
        // profit!
        return result;
    }
}