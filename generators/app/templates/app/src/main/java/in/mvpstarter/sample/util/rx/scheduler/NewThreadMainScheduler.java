package <%= appPackage %>.util.rx.scheduler;

import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.schedulers.Schedulers;

public class NewThreadMainScheduler<T> extends BaseScheduler<T> {

    protected NewThreadMainScheduler() {
        super(Schedulers.newThread(), AndroidSchedulers.mainThread());
    }
}
