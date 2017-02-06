package <%= appPackage %>.util.rx.scheduler;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

public class TrampolineMainScheduler<T> extends BaseScheduler<T> {

    protected TrampolineMainScheduler() {
        super(Schedulers.trampoline(), AndroidSchedulers.mainThread());
    }
}
