---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-tobacco-products
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 工厂封装20支过滤嘴卷烟单包的专用手动烟柜零售服务

## 1. 范围与适用性

本PCR为非专营实体零售店内人工柜台的部分增量零售服务模块：每个数据集只涵盖一种同质SKU的传统可燃过滤嘴卷烟，每个工厂封装消费包恰为20支，包装为纸板包、内层箔包覆物及外层保护膜，使用瓦楞运输外箱收货。实际品牌、烟草混合配方、添加物、滤嘴设计与材料、烟支尺寸、消费包结构及收货物料清单均须固定并记录；该规格并非所有卷烟的通用组成。烟草为经加工切丝叶料及已声明添加物；滤嘴与卷烟纸仍属商品组成。每个数据集仅有一种SKU及包装结构；不得将不同配方、滤嘴、包支数、税务市场或供应背景视为等价。烟柜为含原装锁及固定锚件的手动钥匙锁钢制卷帘防护壳体；既有内层层架、底座及柜台属于独立补齐资产；实际安装不得具有电动驱动、照明或主动湿度控制。收货gate后的搬运均为手工；烟柜除尘使用一套完整的非电动聚丙烯簸箕刷具。可拆开运输箱以取出封装消费包，但不得为销售而打开消费包、吸用、抽样、重新包装或拆支。本模块以封装单包向自用买方的最终合格交付结束，并完成已记录拒收及退回的裁定。本PCR不评价吸烟、健康效果或法规符合性。下述强制共有模块和商品责任桥接未完成前，零售总结果仍不完整。所披露的部分边界为本PCR设计选择；FDA或GHG指导均未批准此受限边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-tobacco-products |
| classification_refs | CPC3.0:62128; narrower |
| covered_products | 仅一个指定工厂封装20支传统可燃过滤嘴卷烟SKU及其专用手动防护壳体服务 |
| excluded_products | 其他烟草及电子尼古丁产品、改变包型或SKU、制造、消费者吸烟及处置，以及另行补齐之前已知共有零售模块 |
| representative_product | 一个实际品牌、市场及滤嘴的20支纸板、箔、膜消费包，须有原收货BOM |
| production_route | 非专营门店：收货→人工补货→常温手动钥匙防护壳体→人工完整单包最终交付；干式除尘；壳体无电 |
| market_state | 常温持有成品封装消费包，按实际状态及规格验收；现场不得开包或燃烧卷烟 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以一个指定完整消费包合格自用交付结束的专用增量手动烟柜保管及取货服务 |
| How much | 一个最终验收的来源20支消费包；一项服务Item(s)，并非20项服务或kg商品流 |
| How well | 同一已声明SKU、市场及包装，工厂封装完整并实际合格验收；不主张健康或合规性能 |
| How long or cycle | 前瞻固定批组内实际收货至最终裁定历史，包括闲置、失败和重复操作 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 工厂封装20支过滤嘴卷烟单包的专用手动烟柜零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际场址日期批组及退回截止; 品牌SKU市场及确切每包20支; 烟草配方添加物滤嘴纸及烟支规格; 完整原始收货BOM实际质量水分及入店gate; 纸板内箔外膜确切结构; 手动非电壳体BOM与既有层架底座独立; 实际起终gate及合格验收; 来源单包保管及成功失败转移未决责任; N及迟到更正版本; 全受益对象资产及预留暴露; 实际残余载体处理及运输范围; 部分标签及固定共有模块补齐矩阵; 实际当地资格证据及未决身份清单 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | retail_service; failed_background; supplier_return; internal_transfer; failed_retention; cabinet_asset; brush_asset; lock_replacement | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 各行计其已定义实际完整服务、单包背景、资产或锁对象。N为最终服务数；其他计数不得固定为N。采用calc_service、calc_background、calc_assets、calc_lock及calc_transfers。每包20支标示绝不提供烟草质量或20倍服务产出。 |
| carrier_mass | carton_waste; pack_waste; dust_waste; lock_waste; cabinet_eol; brush_eol | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实际完整残余载体毛皮重、状态及来源部分；不得默认计数转kg。仅实测克可按g/1000=kg转换，不是材料含量换算。终端直接净称量不含已移除部件；互斥BOM重构使用实际原组成及移除记录。 |
| one_denominator | all inventory rows |  |  | 全部清单数量均每参考流：归属原始批组数量/N，仅一次。保留原始单位及各分配步骤；已归一化结果不得额外相除。整个零产出批组仍不得归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应入店运输完成后，门店收货区零售方验收的指定来源封装包 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0 62128的较窄子集；该叶包括250组全部烟草产品 |
| recursive_input_rule | 不得同服务递归；失败商品使用一个原始同SKU收货背景服务，不得投入另一个零售服务 |
| upstream_dataset_requirement | 绑定恰至收货gate的同SKU原始生产、完整包装及入店背景；本模块B_f与下游B_s互斥；未知仍不完整 |
| disclosure | 仅专用模块部分增量服务；须声明实际SKU场址gate批组N更正、未决身份、实测状态、预留及固定补齐矩阵；不主张完整零售或全标准符合性 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope | all | 仅可使用已声明的单一SKU、完整消费包及手动烟柜路线。雪茄、散装及手卷烟草、无烟烟草、加热烟草耗材、电子烟、尼古丁液、自动售货、自助取货、网购配送、冷藏或加湿储存及零售加工不适用。实际发现被排除路线时不得将其记为零；应停止适用，并在使用前为另行披露的扩展编制经审查的中英文具名卡和协议。 | un-cpc62128; pmi-manufacture; fda-retail |
| gates | all | 起点为供应方入店运输完成后、零售方在门店收货区接受已识别封装单包；记录供应交接验收或拒收及实际时间戳。供应生产、消费包装和入店运输在增量模块之外，但须按calc_background固定到同一收货gate。纳入专用烟柜占用、全部取货、回架、补货、干式除尘、烟柜与刷具套装取得、实际替换锁芯、专用残余物和资产终端处理。只有实物交付、完整包装及规格验收、并对关联退回作出最终裁定后才形成服务。失败的外部留置不形成服务产出。 | ghg-product-2011; fda-retail |
| partial_completion | all | 本模块排除共有建筑及固定布线、一般照明、暖通空调、共有安防及IT、收银设备与支付及小票纸、共有清洁与用水及污水、共用搬运设备、员工出行和收货gate后由零售方控制的运输。这些是已知待补齐模块，并非不重要或为零。cp_completion与calc_completion固定其采集、责任、驱动量、资产寿命及按相同N和批组只汇总一次的方法。形成零售总结果前，所列每个模块必须以具名原子卡实际量化或证实在该场址不存在；仅使用部分模块产出时必须保留部分标签。即使零售边界补齐，消费者吸烟及合格销售后处置仍在其外，应另设消费者模块。 | ghg-product-2011 |
| goods_ownership | goods_account | 最终服务不是卷烟制造。每个最初验收的来源单包只归入以下一个责任分区：成功自用销售、由零售方承担的最终失败、供应退回或内部转移的继续责任、未决或期末库存。成功商品的原始生产、包装及入店背景B_s随所售商品传递，在此不计入；零售失败背景B_f通过failed_background计入。不得再计入所有入店商品。实际退回或转移商品保留唯一继续责任方；不得给予负的回收或退回抵扣，也不得自动归为废物。原始单包的完整背景由其所有废物后代共同承接一次，不得按每个组分或载体重复。 | ghg-product-2011 |
| cohort | all | 采集前须固定同场址、同SKU、同配置的责任批组、期初期末日期、退回裁定截止日与更正时间表。该批组须保留全部失败、闲置及零销售子批。整个批组N为零时不得归一化，仍须报告原始负担。迟到的实物退回或裁定变化必须替换原批组的N、商品责任及所有受影响分子；记录实际发生日期和版本化更正，不得向新批组再次分配同一负担。未改变实物验收的财务退款或折扣不取消服务。 | ghg-product-2011 |
| provider_carriers | all | 供应方范围必须区分原始完整资产与之后替换锁芯、制造及安装及初始运输与运行、废物收集与处理。每项产品或废物服务背景须匹配实际gate、组成、状态及去向。完整封装卷烟包或混合纸箱及粉尘载体按整体称量；不得把其中烟草、尼古丁、箔、胶黏剂或金属再列为额外废物交换。实际分开的不同载体须分别具名建卡并保留原始组分ID，不得虚构拆分比例。处理背景只含有证据的供应方公用工程及运输；未覆盖阶段须明确补齐，且不得重复纳入。 | ghg-product-2011 |
| air_completion | cabinet | 本模块不发生卷烟燃烧，因此吸烟烟雾和烟灰在边界外；这并非宣称储存烟草零排放。cp_completion必须筛查包装膜渗透性、破损、粉尘释放及店内与外界空气转移。以固体捕集的烟柜粉尘不得同时列为基本空气输出。量化任何挥发物或粉尘释放时，须对实际物种和接收介质分别建卡，并以包含内部储存、捕集与输出载体的终端外界通量平衡核算；烟柜内部源项不自动等同环境排放。证据未知时仍不完整。 | pmi-manufacture; ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| goods_account | 单包保管责任与最终交付 | required | 本专用部分路线始终纳入；事件卡须有发生或未发生证据 | delivery | retail_service |
| cabinet | 专用手动锁闭烟柜与干式除尘 | required | 本专用部分路线始终纳入；事件卡须有发生或未发生证据 | storage | per reference flow |

### 过程：单包保管责任与最终交付 (`goods_account`)

#### 输入

##### 产品流

###### 至门店收货gate的一包工厂封装20支过滤嘴卷烟的生产及入店供应 (`failed_background`)

仅对零售责任最终失败计入的同SKU同质上游服务，包括实际卷烟、完整消费及运输包装和至声明gate的入店运输。其并非另一项零售服务、仅烟草质量或全部收货单包。数量完成前须绑定一个匹配服务背景及其所含范围。

使用cp_goods与calc_background，先闭合原始来源责任，再计B_f/N Item(s)；不得计成功商品背景或转移抵扣。

- 选定流：至门店收货gate的一包工厂封装20支过滤嘴卷烟的生产及入店供应
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：B_f/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`; `pmi-manufacture`

#### 输出

##### 产品流

###### 工厂封装20支过滤嘴卷烟单包的专用手动烟柜零售服务 (`retail_service`)

针对一个完整原始单包最终合格交付的专用手动烟柜增量零售服务，并非卷烟实物。仍须保留共有模块部分标签和商品桥接要求。

1 Item(s) = N/N，使用cp_goods与calc_service；仅当N>0。

- 选定流：工厂封装20支过滤嘴卷烟单包的专用手动烟柜零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`; `fda-retail`

###### 退给供应方的工厂封装20支过滤嘴卷烟单包 (`supplier_return`)

供应方实际独立接收的退回，须有继续责任、状态和回执。供应验收本身不产生负的生产负担。

采用cp_goods与calc_transfers计T/N Item(s)；须有来源包ID及签字背景责任。

- 选定流：退给供应方的工厂封装20支过滤嘴卷烟单包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 转给另一零售场所的工厂封装20支过滤嘴卷烟单包 (`internal_transfer`)

实际跨至另一营业场所，并非本店货架间移动。接收方承接同一原始商品背景。

采用cp_goods与calc_transfers计I/N Item(s)；排除内部移架及服务产出。

- 选定流：转给另一零售场所的工厂封装20支过滤嘴卷烟单包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：I/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

###### 未完成合格零售验收而被外部实物留置的20支过滤嘴卷烟消费包 (`failed_retention`)

一个指定来源单包在验收失败后留在已识别外部接收方；状态可能破损且必须记录。其并非零售方废物或合格服务。除非签字继续责任方有效承接至B_t，否则保留B_f。

采用cp_goods、calc_transfers及calc_background计F_ext/N Item(s)；接收方或去向未知则阻断闭合。

- 选定流：未完成合格零售验收而被外部实物留置的20支过滤嘴卷烟消费包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_ext/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_goods`
- 来源：`ghg-product-2011`

### 过程：专用手动锁闭烟柜与干式除尘 (`cabinet`)

#### 输入

##### 产品流

###### 含原装钥匙锁及锚件的已安装手动钢制卷帘烟草防护柜壳体 (`cabinet_asset`)

一个实际完整防护壳体：框架、卷帘、原始锁闭系统及实际锚件，仅含制造、安装及初始运输至声明安装gate。既有内层货架、底座及柜台不含在内，须独立补齐；厂家可选抽屉底座及可继续使用的普通货架，并非壳体包含这些部件的证据。不得有电驱动、灯或湿度设备。采用实际合同及BOM，不得默认目录质量、尺寸或时间。

使用cp_assets与calc_assets，按每个原始资产一个完整壳体计sum_j(f_jc)/N Item(s)。既有层架及底座制造不在此计入或重复。

- 选定流：含原装钥匙锁及锚件的已安装手动钢制卷帘烟草防护柜壳体
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_j(f_jc)/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `schaefer-cabinet`

###### 完整非电动聚丙烯簸箕刷具套装 (`brush_asset`)

一个实际指定成对清洁套装，含簸箕、刷体及聚丙烯刷毛，为有证据的单个完整供应对象。不含清洁液、电动吸尘器或一次性袋。聚合物或材料配置不匹配时，使用前须具名修订身份。

采用cp_assets与calc_assets计sum_j(f_jc)/N Item(s)；计数完整套装，不得把清洁分钟伪作Item(s)。

- 选定流：完整非电动聚丙烯簸箕刷具套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_j(f_jc)/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 含匹配拨片及随附钥匙的完整黄铜烟柜钥匙锁芯 (`lock_replacement`)

仅实际发生已记录同质型号替换事件时适用。原装锁仍属壳体背景；本行仅含之后新锁芯及其实际供应gate。

采用cp_lock与calc_lock计sum_k(n_k*A_k)/N Item(s)；无替换时须有未发生证据，不得未知=0。

- 选定流：含匹配拨片及随附钥匙的完整黄铜烟柜钥匙锁芯
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_k(n_k*A_k)/N Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_lock`
- 来源：`ghg-product-2011`

#### 输出

##### 废物流

###### 附着胶带及标签的弃置卷烟瓦楞运输外箱载体 (`carton_waste`)

取出完整消费包后的一个实际完整空载体；附着胶黏剂、胶带及标签仍计入称量混合体。排除消费包和已拆下的膜。同一上游外箱供应已含商品背景，不再作为第二项零售投入。

采用cp_residuals与calc_residuals计sum_c(a_c*m_c)/N kg，匹配实际出库载体及去向范围；不得默认回收抵扣。

- 选定流：附着胶带及标签的弃置卷烟瓦楞运输外箱载体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_c(a_c*m_c)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residuals`
- 来源：`ghg-product-2011`; `pmi-manufacture`

###### 弃置的指定20支过滤嘴卷烟消费包复合载体 (`pack_waste`)

实际拒收单包载体只含实物仍存部分：原卷烟、滤嘴及纸、纸板、箔和膜。破损或打开后的剩余物按已记录实际载体称量，不得默认仍有标示20支或原整包质量。已分离部分排除并链接其实际独立载体。所含烟草或尼古丁不得另列为排放。

采用cp_residuals与calc_residuals计sum_c(a_c*m_c)/N kg；按calc_background把每个原始失败单包链接一次，不得按每个组分再次链接。

- 选定流：弃置的指定20支过滤嘴卷烟消费包复合载体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_c(a_c*m_c)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residuals`
- 来源：`ghg-product-2011`

###### 手动烟柜除尘收集的干式混合固体粉尘 (`dust_waste`)

实际捕集固体载体，必要时测定环境灰尘及商品来源部分。不得假定尼古丁比例，不含液体污水，不得把烟柜源粉尘直接转为室外基本排放。扣除可重复使用簸箕皮重。若实际用一次性容器，须另行补齐其材料及范围，不得虚构为零。

采用cp_residuals与calc_residuals计sum_c(a_c*m_c)/N kg，使用实际固体毛重减皮重及捕集记录；捕集部分从其他载体行排除。

- 选定流：手动烟柜除尘收集的干式混合固体粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_c(a_c*m_c)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_residuals`
- 来源：`ghg-product-2011`

###### 含实际附着部件的移除完整黄铜烟柜锁芯 (`lock_waste`)

在同一已识别替换事件实际移除的原锁芯。称量实际离开物；钥匙或拨片若拆成不同实物载体须另列，并从之后壳体载体排除移除锁芯。

采用cp_lock与calc_lock计sum_k(net_removed_kg_k*A_k)/N kg；事件份额仅乘一次，不得再乘壳体制造份额。

- 选定流：含实际附着部件的移除完整黄铜烟柜锁芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_k(net_removed_kg_k*A_k)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_lock`
- 来源：`ghg-product-2011`

###### 作为完整残余载体的报废手动钢制卷帘烟草防护柜壳体 (`cabinet_eol`)

报废时实存框架、卷帘、锁及锚件残余物，排除已独立移除部件和原范围之外内层货架或底座。完整设备再用转移属于继续资产，不列本废物。

采用cp_assets与calc_assets计sum_j(m_end_j*f_final_jc)/N kg；直接净称量与互斥原BOM减移除重构二选一，不得并用。

- 选定流：作为完整残余载体的报废手动钢制卷帘烟草防护柜壳体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_j(m_end_j*f_final_jc)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `schaefer-cabinet`

###### 作为完整残余载体的报废聚丙烯簸箕刷具套装 (`brush_eol`)

已可分离捕集粉尘另行出库后，报废时实际剩余套装。排除dust_waste已称量粉尘；磨损或遗失碎片未量化时仍属对账缺口，完整声明前须建实际去向卡。

采用cp_assets与calc_assets计sum_j(m_end_j*f_final_jc)/N kg；实际完整终端载体只乘一个最终责任份额。

- 选定流：作为完整残余载体的报废聚丙烯簸箕刷具套装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：sum_j(m_end_j*f_final_jc)/N kg
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_order | all | 先使用专用计量和记录ID。烟柜确为共用时，按包括库存和退回占用的各受益对象保留可用层架体积小时分配；固定闲置容量按已声明预留份额分配，不得删除空置时间。每个共用池须覆盖全部实际受益对象，份额合计为一。零驱动时段使用事先记录的预留容量份额，不得事后按销售份额替代；预留信息未知则不能闭合。商品失败和包装残余物仍须直接追溯。不得默认按价格、营业额或烟草质量分配。 | ghg-product-2011 |
| assets | cabinet | 每个唯一烟柜及簸箕刷具套装须按calc_assets使用全受益对象寿命暴露量，保留累计分配和预测修订。原始完整防护壳体包括框架、卷帘、原装锁及锚件，排除既有内层层架、底座及柜台；原始套装包括簸箕、刷体和刷毛。之后实际替换锁芯的生产及被替换原锁属于事件负担。完整资产制造背景须排除之后维护；不得再次计入锁、锚件或套装部件制造。实际完整终端载体按最终更正的寿命责任份额分配一次；不得再乘制造份额、采用任意默认寿命或因延寿重置分配。 | ghg-product-2011 |
| no_credit | all | 不分配共产品替代或避免处置抵扣。实际离店继续销售的可用商品为产品转移，实际弃置载体为仅含已记录处理的废物输出。内部移库既不是另一项零售服务，也不是新商品生产。补齐模块须复用原始事件ID及同一个N；已归一化结果在汇总前须乘以其实际服务数还原，之后只除一次，不得当作原始值再除。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | goods_account | 来源单包保管与零售验收 | 关联收货、POS、实物退回及接收方台账 | original_pack_id; sku; brand_market; actual_stick_count; blend_additives_filter_spec; complete_receiving_BOM; gross_pack_kg; actual_state; original_inbound_gate; O; R; C; H; T; I; Wp; K; qualified_acceptance; F_ext; final_fate; continuing_owner; cutoff; correction_version | 在收货区、烟柜及人工柜台扫描或分配唯一单包ID；通过销售路线外同SKU代表性破坏质检核对厂家每包20支声明，不得打开待售包。使用校准秤及可追溯供应BOM采集代表性实际毛质量及消费组分，涵盖原烟草及添加物、水分、滤嘴及纸和包装；记录抽样框、批次、样本数及精度，不得按20假定质量。逐次记录销售尝试、拒收、毛实物交付、实际退回、破损、处置、转移和最终自用验收及时间戳。数据集时点须保留适用官方证据核对当前当地销售、年龄及包装要求；FDA背景来源不确立本地合规或预设限值。只保留必要匿名资格确认。 对原始ID采用calc_service、calc_stock、calc_background及calc_transfers；B_open未解决前保留；先归属再按N除一次，形成每参考流。重售的同一原始商品只有一个背景，至多一个最终服务。 | Item(s); kg | 逐事件；期初期末盘点；至少每库存期间及截止时对账，迟到更正须重开 | 完整前瞻声明批组，包括失败、零销售及退回裁定期 | 一个具名门店收货区、烟柜、柜台及同SKU供应路线 | 每参考流 | 供应发票、BOM及运输边界；封包照片；秤校准与不确定性；来源单包抽样协议；匿名验收和签字接收及更正审计链 |
| cp_assets | cabinet | 完整壳体及PP清洁套装寿命责任 | 已安装资产及全受益对象寿命台账 | asset_id; serial_model; original_scope_BOM; enclosure_vs_shelf_base_counter; installed_supply_gate; commissioning_date; initial_actual_quantity; supplier_service_life_basis; e_jcv; reserved_shelf_m3h; cleaning_loaded_empty_position_return_minutes; idle_reservations; L_jv; historic_allocations; forecast_version; E_j; actual_removed_parts; terminal_mode; gross_kg; tare_kg; final_receiver; f_final_jc | 检查实际非电动钥匙防护壳体及成对PP簸箕刷具；匹配采购、交付及安装范围，只有需kg时才称量。记录原装锁及锚件、全部独立既有层架、底座、柜台ID及供应运输。用可追溯长度量具和时间记录测定预留可用层架体积；任务计时须包括完整除尘、空载返回及就位、备用预留。查阅全部历史受益对象及暴露、实际状态及服务记录和前瞻使用计划，以推导预期寿命暴露，并版本化修订。实际报废时用校准秤整体称量残余并扣容器皮重；互斥BOM替代须保留原始部件质量及每次移除。追踪再用转移、磨损碎片及终端供应范围。 采用calc_assets，替换旧版分配，累计份额不得超过1且最终合计1；终端实际kg仅乘一次最终责任份额，再除N形成每参考流。 | Item(s); m3*h; min; kg | 取得时、每次预留及任务、每次寿命修订及移除、实际终端转移；每批组及寿命结束对账 | 原始资产全部寿命及受益对象，包括本批组之前及之后 | 仅已安装壳体及清洁套装；层架、底座、柜台资产另由cp_completion覆盖 | 每参考流 | 实际合同及BOM、带日期照片及安装、非电状态检查、尺寸和计时校准、完整受益台账、预测依据、替换及再用和处置回执、直接与BOM互斥标记 |
| cp_lock | cabinet | 指定替换黄铜锁芯及移除载体 | 带日期替换工单及废物回执 | replacement_event_id; cabinet_asset_id; cylinder_model; complete_scope; n_k; keys_cam_scope; removed_lock_id; removed_net_kg; actual_remaining_scope; benefit_period; all_beneficiaries; A_k; technician_other_materials; provider_inclusions | 每次实际替换须匹配旧新型号并计数完整供应锁芯。识别附着部件后用校准秤称量移除锁芯；不得由投入个数推定终端kg。检查期间维护台账，未发生时取得签字无事件声明。识别人工、出行、润滑剂、其他部件及共有模块义务，不得隐含在此产品中。在资产终端gate核查新锁仍在或已实际移除。 采用calc_lock事件分配；先采原始数量，事件A_k一次、N一次，形成每参考流。不得向移除锁再乘资产制造份额。 | Item(s); kg; m3*h | 逐事件并在每批组明确发生或未发生对账 | 完整批组维护及受益期间，含之后关联终端更正 | 指定壳体及实际兼容同质锁芯型号 | 每参考流 | 采购及工单、旧新照片及ID、实测移除票及校准、预留受益台账、无事件声明或完整事件证据 |
| cp_residuals | cabinet | 专用纸箱、拒收单包及干粉尘载体 | 称量、来源部分及接收处理登记 | carrier_id; original_pack_id; source_portion_id; material_state; retained_original_pack_components; detached_components; gross_kg; tare_kg; moisture_state; dispatch_date; residual_open_close; receiver; destination; treatment_gate; transport_scope; actual_containment; a_c | 产生或捕集时保留来源组分ID；每次实际出库须用校准适用秤对各具名完整载体称毛重及皮重，记录实际状态及含水，不得假定组成。附胶带纸箱须与分离膜及消费包剩余物区分。使用实际PP簸箕收集干尘并扣簸箕皮重；破损来源单包贡献残余时须识别商品来源部分。其他实际载体材料须具名建卡，不得虚构归入纸箱或粉尘。取得接收验收、实际处理及运输范围、容器所有权。存留期初期末残余库存与出库分别对账。 采用calc_residuals：实际净kg→一个直接或共用责任因子→除N一次形成每参考流。部分合计须等于完整载体，唯一来源须映射calc_background；不得重复组成及去向因子，也不得把已捕集固体列为空气排放。 | kg | 每次捕集、弃置及出库，核查残余物期初期末并逐批组对账 | 完整批组、零销售时段及之后关联来源出库或更正 | 收货外箱拆除、专用壳体及实际残余物交接gate | 每参考流 | 校准毛皮重票、照片及状态、组分来源矩阵、接收处理运输合同及回执、无事件证据、存留库存与不确定性日志 |
| cp_completion | goods_account | 强制共有模块及外界转移补齐计划 | 前瞻固定的来源、责任与驱动矩阵 | pool_version; N; fixed_completion_matrix; enclosure_shelf_base_scope; premises_lighting_HVAC_security_IT_checkout_cleaning_water_sewer; handling_assets; technician_events; staff_travel; retailer_transport; air_path_species; actual_meter_scope; original_record_ids; drivers; idle_reservations; all_beneficiaries; asset_history; actual_provider_inclusions; external_module_value; external_module_is_normalized; original_module_reference_denominator_N_d; original_module_pool_version; compatible_identity_property_unit_state_medium_gate; already_applied_attribution; liquid_S_open_close; source_water_solute_merchandise_kg; evaporated_water_kg; exported_original_liquid_portion_ids_kg; other_identified_liquid_sinks_kg; absence_evidence; unresolved_flags | 观察前，门店责任分析员须盘点每个已排除但需补齐的共有模块及既有层架、底座、柜台，具名责任方及来源gate，并固定calc_completion驱动。整个批组期间采集原始计量、交易、时间、面积、工况、任务、车辆及资产记录和供应范围；必要时实测负荷及路线。每班次及维护事件检查发生条件，保留带日期照片及无事件证明。通过供应规格、现场巡查和物种筛查核查实际完整膜的破损及渗透性、室内及外界路径；未知并非不存在。存在释放时须保留实际终端空气测量条件、捕集、输出及库存数据，并增加逐物种卡。总零售汇总前，责任分析员必须为每个实际补齐交换编制具名原子中英文卡及协议，绑定匹配产品、废物或基本流身份、校准和供应边界。来源、驱动或身份缺失的模块须明确保留未完成；部分模块仅可标为部分使用。 采用calc_completion与calc_assets固定方法；使用相同原始ID、一个责任因子及相同N一次形成每参考流；确切范围及重叠对账前共有结果保持具名独立。池中须保留全部实际受益对象及失败和闲置期间。 | MJ; kWh; kg; m3; m2*h; min; Item(s); vehicle-km; t*km | 采集前规划；连续计量或逐任务事件；每日发生筛查；期间及最终截止对账；迟到更正重开 | 与cp_goods完全相同批组、版本及退回期；各共有资产完整历史 | 具名门店及共有供应方、实际接收及外界终端gate；在专用模块卡范围外 | 每参考流 | 签字补齐矩阵及责任方、原始计量校准及账单、任务时间面积车辆资产台账、供应范围及ID、物种路径及空白证据、发生或未发生证明、明确未决清单 |
| cp_refrigerant_completion | goods_account | 强制实际暖通制冷剂原始平衡补齐 | 来源批、回路、回收储存及空气路径台账 | refrigerant_species; circuit_id; source_lot; factory_charge_in_asset_scope; C_open; F_factory_installed; T_ext; T_reuse; C_close; R_extract; X_intact; S_rec_open; S_rec_close; R_sent; X_rec; L_rec_room; external_makeup_open_receipts_close_transfer_loss; A_open; A_close; K_open; K_close; captured_species_sent; other_contained_species_sent; species_transformed; exterior_C_F_T_P_wetdry; other_source_flux; allocation_driver; final_asset_responsibility; N | 投运及每次实际充注、抽取、转移时识别制冷剂及完整设备或供应初充范围，用校准仪器实测回路与钢瓶毛皮重kg，保留来源批ID及实测混合组成。实际期初期末回路充注须以有效受控回收称量并校正实测残留及管线转移、记录再充注建立，或用完整受控投运及全部转移质量历史并附不确定性建立；仅铭牌名义充注并非实际库存。库存测试抽取及再充注须作为同一R_extract及T_reuse事件记录一次，含实际测试资源及损失负担。回收及补充钢瓶须称毛皮重，捕集存留库存另测。在实际运行及终端工况，以有效物种专用校准方法测定对外路径、进出浓度、流量、温压、干湿状态和背景，采样频次须覆盖工况变化并保留不确定性。观察实际捕集、输出、转化和独立其他来源通量；未知不是0。责任分析员须记录各实际发生或未发生，并在总汇总前为该暖通补齐模块建立具名匹配中英文制冷剂卡及协议。采用calc_refrigerant_completion与calc_completion；先原始平衡，再互斥归属，最后同N一次。 每参考流 | kg; kg/m3; m3/h; T; P | 逐充注抽取转移；期初期末及实际报废；连续或分工况外界采样并记录覆盖 | 相同批组版本及全部受益对象完整原充注和回收历史 | 实际共有暖通设备、回收补充捕集储存及各实际外界空气gate；不得虚构烟柜用电或充注 | 每参考流 | 原铭牌BOM及供应充注范围、校准质量物种流量仪器、完整库存事件来源台账、实际接收处理捕集证据及不存在或未知标记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | N为在声明截止时最终以完整状态验收并供自用的唯一来源单包数。关联退回及重售裁定后，每个合格原包只计一次；重复交接不增加产出。最终拒收、不合格留置、供应退回、内部转移、损失和未决或期末库存不计入N。N>0时参考产出为N/N = 1 Item(s)。合格验收被最终撤销时，即使接收方仍实物持包，也须删除原服务并更正全部归属负担；该失败留置包记录为F_ext及B_f或B_t。撤销N不以实物收回为条件。最终验收仍有效的仅价格调整不改变数量。 | original_pack_id; sku; actual_handover_dates; qualified_acceptance; physical_return_links; adjudication_version; cutoff | N Item(s); 1 Item(s)参考产出 | ghg-product-2011; fda-retail |
| calc_stock | goods_account | 保管实物流量平衡：O + R + C = H + T + I + Wp + K，单位为来源单包当量；O为期初保管量，R为新收货，C为顾客实物退回，H为全部顾客实物交付（包括失败及重复），T为供应退回，I为离店的内部链条转移，Wp为转入废物的来源单包，K为期末保管量。同一单包可在多个实物事件出现；事件链接抵销再次进入。此式仅检查保管，不等于N。另须在每次事件称量来源包毛质量；破损后代按其实际来源商品及包装部分求和。外来灰尘、水分变化和运输纸箱另列。不得把标示20支换算为质量，也不得把全部粉尘或整个收集容器质量视作Wp。实测质量漂移须用实际状态及不确定性解释；差异不明则不能声明完整。 | opening_pack_ids; receiving_ids; gross_handover_ids; return_ids; supplier_receipts; transfer_ids; waste_parent_ids; closing_count; actual_gross_kg | 计数保管对账及独立kg组分对账 | ghg-product-2011 |
| calc_background | failed_background | 按最初收货gate把每个验收来源单包分为成功B_s、零售责任最终失败B_f、继续转移或供应责任B_t、仍在库或未决B_open；B_receipt = B_s+B_f+B_t+B_open。完整整包路线下这些是实际来源单包计数，而非标示烟草kg；只有一来源对应一最终单包的证据成立时才有B_s = N。每个原始背景只标记一次。本模块仅计入同一收货gate实际SKU生产及入店服务B_f/N Item(s)。若零售方仍承担失败外部留置单包的负担，则其属于B_f；独立实物输出F_ext并非废物。接收方签字承接责任可使其仅一次转入B_t，不得消除责任。成功商品下游需要B_s/N个实际原始单包背景；实际烟支数、烟草及添加物质量和水分、滤嘴、纸及胶黏剂、消费及运输包装、入店路线，须由已核实同SKU供应物料清单或有不确定性的代表性破坏来源样本测量提供；20为计数规格，不是质量或组成默认值。零售方在销售路线外作破坏质检的来源单包仍须作为已记录失败或样本来源归入B_f，其实际残余载体及测试资源按cp_completion核算；已含供应背景的供应质检不得再计。B_open不得默认为零：责任解决前批组须保留暂定状态，并更正全部关联分子。废物后代不得各自取得一个新的来源单包背景。 | original_receiving_pack_id; responsibility_owner; final_fate; sku_supplier_BOM; transport_gate; original_mass_state; B_s; B_f; B_t; B_open; N | B_f/N Item(s)失败背景；B_s/N下游商品桥接 | ghg-product-2011; pmi-manufacture |
| calc_residuals | carton_waste; pack_waste; dust_waste | 对每个唯一称量的实物载体c，m_c = gross_c-tare_c，为实际出库含水及状态下kg；x_c = sum_c(a_c*m_c)/N。直接来源归属时该批组a_c=1；共用干粉尘或纸箱按实测来源部分或allocation_order的预留烟柜暴露量分配一次。拆分台账按组分、来源及去向记录，实际部分合计须等于整体载体质量。卷烟废物包含仍在该弃置载体中的实际烟草、滤嘴、纸、内箔、纸板及膜；已分离到粉尘中的残余须携带原始部分ID，并从整包残余质量排除。烟柜环境灰尘不得假定为烟草或尼古丁。零销售时段累积残余物和更正仍须计入。期末存留不是已出库废物，须携来源结转。不得将整个载体质量乘组成后再乘已在称量中体现的去向比例。 | carrier_id; source_portion_id; gross_kg; tare_kg; moisture_state; pickup_date; actual_receiver; accepted_treatment_scope; a_c; N | 每参考服务的各实际废物载体kg | ghg-product-2011 |
| calc_assets | cabinet_asset; brush_asset; cabinet_eol; brush_eol | 对资产j、受益对象c及版本v，e_jcv为该批组归属暴露量；烟柜为包括占用、退回待定和闲置预留时间的预留可用层架m3*h，簸箕刷具为实际清扫任务分钟（包括空载就位及返回），加上按已声明清扫预留份额分配的预留闲置时间。L_jv为同一资产所有受益对象的预期寿命总暴露量，包含批组之前的暴露；须采集安装日期、服务记录、供应方状态证据和前瞻计划使用，不得默认寿命。f_jcv=e_jcv/L_jv；每个完整单元投入input_j=sum f_jcv/N Item(s)。须保留原始资产ID、原始制造数量及全部既往受益份额。L改变时重算并替换全部旧版本份额，不得开始第二个资产。报废时以寿命实际暴露E_j及最终份额e_jc/E_j对账，把残余及更正归回原批组，使sum_c f_final=1。终端直接净质量m_end在实际移除部件后整体称量；x_EOL=sum_j(m_end_j*f_final_jc)/N，只乘一次责任份额。互斥替代的BOM重构只有在使用原始BOM质量时才扣除已记录实际移除部件，不得再从直接净称量中扣除。完整资产再用转移须保留原台账与制造责任，并非终端废物。E、L或既往受益对象未知时须保留不确定及不完整状态，不得设f=0或虚构寿命。 | asset_id; original_complete_scope; commissioning_date; all_beneficiary_ledger; task_minutes; reserved_shelf_m3h; forecast_version; L_jv; E_j; removal_ids; terminal_net_kg; N | 每服务的资产制造份额Item(s)及终端载体kg | ghg-product-2011; schaefer-cabinet |
| calc_lock | lock_replacement; lock_waste | 替换锁为原烟柜制造之后实际购入的同一已记录型号的完整钥匙黄铜锁芯。每个事件须记录实际个数n_k、匹配锁体及拨片及钥匙范围、任务日期和受影响预留受益对象。A_k为直接归属或该事件已声明维护受益期间内的预留烟柜层架体积小时份额；所有受益对象A_k合计为1，包括无销售的预留。x_lock=sum(n_k*A_k)/N Item(s)。被替换原锁芯废物按实际净kg乘事件责任A_k/N一次。之后整柜终端载体只包含实物仍留存部件；不得再次加入已移除锁。人工、技师出行、润滑剂及其他维修材料不得隐藏在锁芯Item(s)中：形成完整零售结果前，cp_completion要求为其采集实际具名交换并使用事件驱动。 | replacement_event_id; model; n_k; removed_lock_id; net_removed_kg; benefit_period; A_k; cabinet_asset_id; N | 每服务的替换锁芯Item(s)及移除锁芯kg | ghg-product-2011 |
| calc_transfers | supplier_return; internal_transfer; failed_retention | 每次实际离店产品交接须有唯一接收方、时间戳、来源包ID、完整或破损状态及签字继续责任方。数量为该实物gate实际已识别单包数除N：分别为T/N、I/N、F_ext/N Item(s)。supplier_return及internal_transfer卡仅适用于实际完整工厂封装、已核实20支的单包。破损、开包或部分消耗的转移不得等同这些选定流：须保留原始来源、状态及接收责任，独立建立精确定名的状态或组分载体卡及匹配单过程协议并经审查同步前，阻断完整数据集使用；不得默默绑定到封装包卡。这些保管输出并非零售服务产出。边界内层架与后备库存间转移仅属内部台账移动，不列交换。重复实物经过须以事件ID对账，不得误作新的原始生产。F_ext在待定或失败验收之后仍是外部接收方持有的实物产品，不是零售废物；其背景按calc_background归B_f或B_t。 | T; I; F_ext; receiver; gate_timestamp; original_pack_ids; state; responsibility_signoff; N | 每参考服务各独立实物转移的Item(s) | ghg-product-2011 |
| calc_completion | all | 采集前须固定并披露补齐矩阵。每个实际共有过程链接相同批组、版本和N，并采用互不重叠的供应范围台账。电力按实际回路和时段分表计量，kWh*3.6转MJ；只有上级表实际包含该分表时才能扣除。共用照明、固定场所及安防按预留地面面积*h分配，包括闭店及闲置预留；共用暖通空调按分区实测热负荷或区内实测受调节面积*h，并区分制热及制冷工况；实际制冷剂流还必须遵循cp_refrigerant_completion及calc_refrigerant_completion；支付及收银使用所有交易尝试（包括失败尝试）的终端实际活动和预留闲置分钟，不得仅按成功销售。共有清洁及用水污水先追溯任务及实际计量，不可避免共用池再按实际清洁面积乘任务频次分配。进口水不得再扣内部回用。直接污水kg=实际排出m3乘按实测组成及温度取得的全液体密度；互斥重构使用来源池全液体质量：M_discharge = S_open + M_source_water + M_source_solute + M_source_merchandise - S_close - M_evaporated_water - M_exported_original_liquid_portions - M_other_identified_liquid_sinks。各项均为同一液体池、来源及期间实测kg，并含期初期末库存变化。输出部分只能含最初来自该液体池的质量；不得扣除外来干布、容器质量、整个固体载体或与液体来源无关的新增材料。不得用仅水体积式乘无关密度。共用移动设备按载货与空载任务分钟及预留闲置分钟分配，不得仅用载荷或距离。须对每个实际兼容的身份、状态、流类型、介质、供应gate、属性及单位行分别汇总：任何输入归一化结果y_d均须用其实际原参考分母N_d、批组及更正版本，还原为已归属分子y_d*N_d，然后才作同池对账；参考映射不兼容或未知时阻断汇总。不得混合原始与归一化值、kg与MJ、不同载体或状态，也不得仅凭同名合并未绑定身份。只可进行明确有效单位转换，不得再次使用已应用的归属因子；将互斥兼容原始分子求和后再除相同本N一次。各模块原始总量先归属，再按本N归一化一次；每个池全部受益份额合计为1，零驱动采用预声明预留份额，保留失败负担。既有层架、底座、柜台、建筑、暖通、收银、IT及安防和搬运资产须各设独立资产ID，采用实际完整供应BOM及gate，并按calc_assets的暴露、寿命及残余方法和相应已声明驱动核算，不得与烟柜或锁的制造及处理重叠。技师服务、出行及其他维护按实际事件数量，采用恰好一种匹配的同质签字合同单元或实际质量、小时、距离；异质工单须分别具名建卡。运输须记录实际车辆、方式、路线、载货质量及距离、返回或空驶距离、燃料或匹配运输服务；直接燃料与服务范围互斥。只有供应证据含实际空载就位时t*km服务才覆盖之，否则须为该空载段增加vehicle-km，并排除重叠。员工出行按实际班次、乘员、方式及距离，以包括闲置和失败的实记工作时间归属，并另行披露。空气转移须筛查实际包装渗透性及规格、室内源、背景和对外路径；按一致温压及干湿基准实测物种进出绝对浓度乘流量，或采用已差分或已扣空白数据，模式互斥；背景只扣一次，外界通量须与内部库存变化、捕集及输出对账。已捕集粉尘或挥发物随实际完整载体核算，不得重复为基本排放。未知流、物种、供应范围或驱动量仍为阻断补齐的缺口，不得为零。配置实质改变时，须在汇总总结果前形成经审查的中英文具名原子卡与采集协议；后续建模者不得重新选择分母或责任。 | completion_matrix; common_source_ids; raw_meter_totals; parent_scope; actual_activity; reservations; all_beneficiaries; asset_ledgers; provider_gate_matrix; actual_carriers; exterior_flux; external_module_value; external_module_is_normalized; original_module_reference_denominator_N_d; original_module_pool_version; compatible_identity_property_unit_state_medium_gate; already_applied_attribution; liquid_S_open_close; source_water_solute_merchandise_kg; evaporated_water_kg; exported_original_liquid_portion_ids_kg; other_identified_liquid_sinks_kg; N | 另行披露且补齐的共有模块及同N汇总；补齐前保留部分结果 | ghg-product-2011; pmi-manufacture |
| calc_refrigerant_completion | all | 对每种实际暖通制冷剂物种r和回路j，采集前须固定安装gate的原充注身份、组成及kg；共有模块须对匹配投入、回收或含物转移、外界空气分别具名建卡，不得用选择器流。先用未分配原始物种kg。回路：L_room = C_open + F_factory_installed + T_ext + T_reuse - C_close - R_extract - X_intact。C_open及C_close为实际回路库存；F_factory_installed仅为本期新投运资产携入的工厂含有充注，且不得同时计入C_open。T_ext为实际充入的外来来源补充剂，T_reuse仅为实际内部回收再充注；R_extract为实际回路抽取，X_intact为仍含在完整转移或报废回路中离开的充注，而非已抽取回收。内部回收来源储存池：S_rec_open + R_extract = S_rec_close + T_reuse + R_sent + X_rec + L_rec_room；任何外购回收制冷剂须另列外来补充来源分区，不得伪作免费T_reuse。外来补充剂储存池也须按实际期初加外来接收等于期末加T_ext加实际外转加实测储存损失对账；生产投入随实际来源归属的外来补充剂消耗或损失，而非全部采购或全部T_ext加T_reuse。工厂初充生产仅归实际完整资产背景一次，不得再列补充投入，但其物理泄漏仍须进入原始质量平衡。每个存留或回收部分须跨期保留原始来源批ID。在实际室内空气边界，G_room = L_room + L_rec_room + 实际归属补充剂储存或其他已识别目标源释放。外界原物种释放E = G_room + A_open-A_close + K_open-K_close - captured_species_sent - other_contained_species_sent - species_transformed；A与K为室内空气及捕集存留库内实测原物种kg。转化须有实际物种组成及化学计量，不得假定消失；未转化原物种不得同时记入转化或捕集载体。各实际对外路径还须按一致实测温压及干湿基准独立测定integral(C_out*F_out-C_in*F_in)dt；绝对、差分及已扣空白模式互斥，背景只扣一次；比较目标E时只扣独立测得的其他来源外界贡献。原始回路抽取R_extract不是空气捕集；R_sent、X_intact及捕集物种输出是互斥实际部分，不得扣两次。完整回收钢瓶、吸附剂或设备载体包含其中物种；不得同时把这些物种计为外界空气。每种实际混合载体须以匹配身份及数量量化，只有换算需要时才用实测组成；不得假定纯度或捕集为0。只有全部原始库存及终端路径对账后，才按calc_completion固定全受益暖通或事件驱动对运行补充、损失和回收分配一次，再按本N除一次。终端设备、残余回收及处理按calc_assets的单个最终寿命责任，不得再乘制造份额。终端不得再次计初充背景。回路、存留、外界路径、混合物、因子、供应或责任未知时阻断补齐；不得默认制冷剂、零泄漏或默认排放因子。 | refrigerant_species; circuit_id; source_lot; factory_charge_in_asset_scope; C_open; F_factory_installed; T_ext; T_reuse; C_close; R_extract; X_intact; S_rec_open; S_rec_close; R_sent; X_rec; L_rec_room; external_makeup_open_receipts_close_transfer_loss; A_open; A_close; K_open; K_close; captured_species_sent; other_contained_species_sent; species_transformed; exterior_C_F_T_P_wetdry; other_source_flux; allocation_driver; final_asset_responsibility; N | 另行补齐暖通模块中的实际具名制冷剂投入、回收或载体及外界物种kg行，按相同参考服务 | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | 每个选定流当前均为具体但未绑定的语义身份。只有绑定官方直读UUID、公开状态、原始记录字节及哈希和匹配回执，并对照实际卡核查官方中英文名称、产品或废物或基本类型、状态、属性及单位和介质后，才可宣称身份已验证。计数及质量支持UUID仅识别属性，绝不识别服务、壳体或卷烟包。身份或供应背景不可得将阻断完整数据集；在候选中按这些明确义务保留未绑定行本身并非错误。 | 官方原始响应及匹配回执；属性单位链；逐行未决及完成台账 |
| coverage | all | 所有实际必要事件、零及失败批组、商品分区、终端载体、预留及历史资产受益对象必须对账。校准及不确定性按具体来源：保留秤分辨率、重复核查、计数对账、计时与长度核验、抽样误差及供应不确定性；不得虚构阈值或默认范围。缺失或未知须标记，并通过测量、已验证匹配来源或经明确审查且含敏感性的估计解决，绝不得数值0。N全为零不得归一化。 | 完整原始来源、事件、资产、残余对账；校准证书；不确定性及解决登记 |
| translation_projection | all | 逐项检查中英文及生成结构化规则中的全部强制边界、公式、分母、输入字段、协议链接、限定信息和去重义务，并检查消费者guidance。每个协议process_id只指向一个真实过程。来源ID与稳定规则及行ID必须有效，不得残留孤立旧名。只从规范Markdown生成；存在中文文件或投影指纹本身不代表实质对齐或科学批准。 | 实际已填字段及数组双语比较、逐规则阅读；确切生成投影；运行guidance来源引用 |
| partial | all | 须显著披露候选状态、全部未绑定流、实际观察场址日期及仅专用模块边界。强制补齐矩阵并非可选，也不得由建模者之后另作选择。已知排除共有过程在另行提供前仍未量化；schema、计量检查或分类映射通过，不产生完整零售、完整产品生命周期、法律或标准符合性主张。 | 发布画像、固定补齐矩阵、实际覆盖及未知标记、审查元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference | all | SKU、20支封包路线、部分标签、最终验收标准、实际gate、N或限定字段缺失或矛盾时拒绝数据集。N=0时拒绝归一化。拒绝重复计服务、把仅价格撤销当实物退回、把未合格外部留置计成功。 | ghg-product-2011; fda-retail |
| quantity | all | 须有原始保管及独立质量对账、完整收货背景分区、全受益对象分配及旧版更正、累计资产份额和终端残余闭合。拒绝标示支数换质量默认值、缺收货BOM、转移或废物背景重复、载体与所含物种重复、重复归一化、未知=0、直接净称量与BOM双扣或终端f平方。 | ghg-product-2011 |
| complete_scope | all | 部分结果只可暴露声明的专用模块并明确未决身份；cp_completion每个共有模块均已实际量化或证实不存在且具有匹配中英文具名卡及协议前，拒绝零售总结果主张。检查层架、底座、柜台与壳体独立，初始、维护及终端责任，实际空载搬运或行程，闲置及零驱动份额，以及终端空气与载体重叠。 | ghg-product-2011; schaefer-cabinet |
| identity_projection | all | 缺官方原始响应、回执、类型、属性、单位及介质一致证据时，拒绝已验证身份主张。须有当前源生成投影，且中英文有序规则ID、实际已填业务字段、公式单位、卡身份、来源ID和单过程协议链接匹配。marker或检查通过不能批准科学方法、完整翻译或发布。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅作为同声明SKU及gate的明确部分专用手动烟柜模块，身份及背景可得时须已验证；零售总量须集成cp_completion及calc_background |
| allowed_use | 同SKU专用路线采集及独立标注部分服务；仅在补齐、商品、资产及截止范围一致时比较 |
| excluded_use | 整个烟草叶覆盖、其他产品路线或包支数、制造或消费者吸烟及健康足迹、法律或标准认证、未按固定共有模块补齐的完整零售结果 |
| required_metadata | 全部参考限定信息；场址SKU来源期间gate；N及原台账和更正版本；全受益份额及资产历史；来源哈希和UUID证据；供应gate矩阵；部分及补齐状态 |
| required_quality_disclosure | 候选及未绑定身份状态；实际测量计算记录及不确定性；B_open驱动接收资产证据缺口；零产出批组；明确未补齐共有模块及具体来源局限 |
| update_trigger | SKU包装BOM市场路线gate变化；实际电动设备或清洁材料运输路线；供应身份范围；寿命预测报废；新或迟到退回失败；来源翻译投影变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62128 | official_guidance | 联合国统计司CPC3.0解释说明62128：https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62128 | 分类背景包括250组烟草产品；本具体服务子集较窄。该说明不创建编制身份或正向映射。 |
| fda-retail | official_guidance | 美国FDA，《在零售店销售烟草产品》，卷烟规则部分，网页观察2026-10-27：https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/selling-tobacco-products-retail-stores | 完整厂家包装及按计数零售操作的背景。本PCR自行选择一个20支SKU及人工交付；不复制年龄及包装法律限值，也不声称跨司法合规。须采集实际适用资格证据。 |
| pmi-manufacture | handbook | 菲利普莫里斯国际，《卷烟如何制成》，制造及最终包装部分，网页观察2026-10-27：https://www.pmi.com/faq-section/smoking-and-cigarettes/how-cigarettes-are-made | 制造商材料支持加工烟草、纸及滤嘴和箔、消费包、保护膜、纸盒、外箱顺序。不提供SKU组成、包质量、排放速率或默认背景；品牌实际数量须有原供应记录。不采用营销或健康比较。 |
| schaefer-cabinet | handbook | J.W.Schaefer金属加工，《ROX卷烟防护柜》，手动操作、技术规格及选项，网页观察2026-10-27：https://www.schaefer-mv.de/en/rox-cigarette-display/ | 手动钢框、卷帘及钥匙防护壳体的可行性。既有普通层架和可选抽屉底座须用实际前景BOM明确互斥责任。目录尺寸、质量、厚度、安装时间及安防或保险主张并非默认值或已验证场址规格。 |
| ghg-product-2011 | standard | WRI/WBCSD，《产品生命周期核算与报告标准》2011，第6–7及9章：https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持服务单位、明确过程边界及分配层级背景。具体保管、背景、部分补齐、寿命暴露和废物公式为本PCR声明采集方法。本有意限定部分模块不声称全标准符合性，也不供应数值因子。 |
