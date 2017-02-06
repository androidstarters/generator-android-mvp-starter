package <%= appPackage %>.util.rx.scheduler;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

public class ComputationMainScheduler<T> extends BaseScheduler<T> {

    protected ComputationMainScheduler() {
        super(Schedulers.computation(), AndroidSchedulers.mainThread());
    }
}
