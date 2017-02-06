package <%= appPackage %>.util.rx.scheduler;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

public class SingleMainScheduler<T> extends BaseScheduler<T> {

    protected SingleMainScheduler() {
        super(Schedulers.single(), AndroidSchedulers.mainThread());
    }
}
