---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-dairy-products-eggs-and-edible-oils-and-fats
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 密封玻璃瓶装精炼葵花籽油的非专门化实体店常温零售服务

## 1. 范围与适用性

本PCR规定一种同质油品/包装/渠道配置的增量零售服务。它是方法设计，并非实测门店数据集。官方分类还涵盖加工液态乳/奶油/乳清、其他乳制品、保藏/熟制壳蛋及其他油脂产品；这些均不在本较窄服务范围。所购商品是否合格以实际供应方标签为准。全部数量均需采集，不设数值默认。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-dairy-products-eggs-and-edible-oils-and-fats |
| classification_refs | CPC 3.0 62122; narrower：仅限本规则规定的植物油零售路线，不代表整个子类 |
| covered_products | 对未开封、标称1000 mL深绿色Marasca玻璃瓶装常规精炼葵花籽油（Helianthus annuus；唯一配料为葵花籽油；无添加风味）的零售服务；记录实际瓶体/瓶盖/倒油嘴/标签规格 |
| excluded_products | 油品制造、灌装或重新包装；粗油/冷榨油/高油酸油/中油酸油；调和油及其他油脂；乳制品、乳清与蛋；油饼及残渣；散装分售；在线订购、配送以及商品冷藏或加热存放 |
| representative_product | 按规定密封瓶成功零售的净油含量1 kg；质量为服务吞吐量坐标，并非制造油品参考流 |
| production_route | 零售商收货门 → 人力推车上架 → 常温钢货架 → 顾客自行选购 → 人工POS结账 → 到店顾客合格接收；收货后无零售商车辆运输 |
| market_state | 完整食品接触玻璃包装中的常温稳定未开封液态油；按当前供应商标签保持阴凉、干燥、避光；不规定通用温度、保质期或密度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供规定的店内零售服务，保持瓶体完整、可追溯及供应商声明的储存条件 |
| How much | 通过该服务最终合格接收的净油含量1 kg，Q > 0 |
| How well | SKU/批次正确、密封瓶完整、身份/日期标签可读，并有遵守当前供应商储存说明的记录且顾客合格接收；单纯折扣或退款不改变实物状态或Q |
| How long or cycle | 预先声明的同一配置完整报告池，自收货至交付/退回/去向解决；保留实际停留及失败/闲置/关闭时段；迟到事件重开原池 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 密封玻璃瓶装精炼葵花籽油零售服务 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU及供应商/标签版本; 植物身份与精炼状态; 瓶体/瓶盖/倒油嘴/标签规格; 标称与实测灌装量; 净重/毛重/皮重记录; 体积换算时的密度方法和温度; 门店/渠道及设备不存在核查; 池起止日期与迟到事件截止; 合格接收/退回/拒收事件ID; 储存条件证据; 共享驱动及资产台账版本; 商品背景责任及收货门 |

每项必需限定信息均须在数据集元数据或等效字段声明。服务流UUID有意留空，等待准确服务身份；质量属性仅表达净油吞吐量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_service_mass | retail_service; failed_oil_background | 质量 | kg | 用calc_oil_mass和cp_events测净油并排除全部包装；保持服务/参考流与交易油品分离。 |
| electric_energy | store_electricity | 净热值, 低位热值 | MJ | 因果归属后按3.6将kWh换为MJ；参考质量规则不适用于此电力分子。 |
| package_count | building_acquisition; building_terminal; shelf_acquisition; shelf_terminal; pos_acquisition; pos_terminal; trolley_acquisition; trolley_terminal | 物品数量 | Item(s) | 仅计一项明确规定的完整实物设备/建造/事件/终端服务包。不得用维修材料质量、运行时间或距离替代物品。暴露份额在台账中保留各自单位。 |
| whole_carrier | discarded_bottle; decanted_oil; broken_glass; cleaning_effluent; oily_pad_waste | 质量 | kg | 用规定湿度/含油状态的实际完整载体质量，不以产品净重或重复成分代替；直接与重构模式互斥。 |
| split_labour_time | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | 时间 | h | 仅计已签认的实际外购人工工时；工单数、面积及资产件数不能直接替代h。材料、能耗、工具、差旅和废物独立计量。自营工时仅作核对，不虚构外购交换；归属后仅按原最终参考分母归一一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录的门店收货门处零售商开始保管密封精炼葵花籽油瓶；门前生产/初级包装/入店运输全部留在包装商品背景台账 |
| starting_condition_role | 含失败商品明确耦合及完整支持门店资产分摊的增量零售服务 |
| product_classification_scope | CPC 3.0 62122在多个组别中包含植物油；本规则为规定油品、瓶型和门店路线的较窄服务 |
| recursive_input_rule | 输入零售服务数据集不是油品。仅复用边界分离且披露门点的上游服务；不得把本服务加入自身递归。供应商退货和转售历史保留同一商品原始ID |
| upstream_dataset_requirement | 成功商品背景由下游产品建模者合计一次；失败背景行覆盖同一收货门，包括初级包装及入店运输。电力、资本、维护、终端和废物供应方均需明确互斥边界 |
| disclosure | 披露仅服务边界及下游组装方程、Q与实物总账、不成功外部留存、未解决去向/身份、全部供应方覆盖和门店限制；不暗示油品足迹或完整标准符合性 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail | 仅适用于到店购买的非专门化门店：人力搬运、自然通风、市电照明/POS，且无暖通空调、冷库、电梯、备用发电机或收货后的零售商运输。每项不存在须有带日期设备/路线调查。其他实际设备或交换必须先加入具名原子卡、采集协议及双语投影后才能完整；未知不等于不存在。 | jrc-retail-2013; un-cpc62122 |
| oil_storage | retail | 将未开封的常规精炼葵花籽油及当前准确包装身份与粗油、冷榨油和脂肪酸变型区分。记录标签规定的阴凉/干燥/避光条件、批次/日期/封口完整性和实测停留；制造商案例仅支持可行性，不规定强制温度、密度、保质期或通用包装组成。 | spack-refined-oil; spack-packaging |
| merchandise_owner | retail; residual | 仅对最终合格商品输出或记录的可销售结转库存排除背景生产、初级包装及收货前入店运输。不可恢复损失、破损、失窃、不合格外部留存和供应商退货的同一收货门背景由本服务负责，直至签署持续责任转移或核实未来合格转售且仅归属一次。每次转移记录接收人、状态、收货门负担责任者和唯一来源；未解决转移阻断完整性。不得因订单失败即认定为废物。 | ghg-product-2011 |
| return_pool | retail; residual | 在看到结果前声明池；保留失败和零销售群组及全部闲置/关闭时段。Q对每一唯一商品质量仅计一次最终合格接收，减去撤销合格接收，并仅以再次合格接收恢复同一质量的一次计数。未撤销合格状态的财务退款不扣Q；内部转移和未合格外部留存不产生Q。迟到退回按实际事件日期修订原池Q、服务分子、去向和背景责任；已有零售工作留在原池，不能作为新工作重新分配。Q=0池保持不可归一并保留负担记录。 | ghg-product-2011 |
| asset_packages | assets | 纳入完整建筑外壳/固定照明/布线/给排水建造安装服务包、钢货架总成、完整POS工作站（扫描仪/打印机/支付设备）和人力推车。每者均有独立购置、事件维护及终端服务卡。建筑排除三类可移动设备；设备购置排除运营/维护/终端管理。终端服务包括完整剩余物体和有记录拆出部件的实际收集/运输/处理；同一载体不再加废物处理数据集。经证实的完整供应包内部所需材料、公用工程和排放不重复分拆。供应包覆盖不明确即阻断完整性。 | jrc-retail-2013; ghg-product-2011 |
| carrier_media | cleaning; residual | 逐项测量实际废物载体及处理路线。整瓶废弃物、倒出的油、附油玻璃碎片、含油聚丙烯垫和去污水管网的清洗废液为互斥终端份额。垫内或废液中的油不得再次计入倒出油或环境排放。室内泄漏不是基本流排放；核查防渗围护与污水管路。若观察到最终向空气/水体/土壤释放，必须先增加具体物质/介质卡并直接质量核对后才完整；不假定默认排放或零逸散。 | jrc-retail-2013 |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、常温货架及到店结账 | required | 每个选定服务池 | 零售输出及直接门店运营 | 每1 kg参考流 |
| assets | 完整支持门店资产 | required | 四类资产全寿命；维护事件以实际发生为条件，退役前仍保留终端义务 | 互斥购置、维护及终端服务包 | 每1 kg参考流 |
| cleaning | 地面清洁及油泄漏响应 | conditional | 实际清洁/泄漏活动；须有带日期事件/不存在记录；活动未知即不完整 | 清洁输入及互斥湿载体 | 每1 kg参考流 |
| residual | 失败商品责任及终端载体 | conditional | 任一损失、拒收/撤销转移或商品/载体终端事件；否则有带日期零事件证明；外部留存失败商品仍须责任记录 | 收货门背景及实际废物去向 | 每1 kg参考流 |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | retail_service |

### 过程：收货、常温货架及到店结账 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`store_electricity`)

电力在支持门店的使用点输入，用于货架照明及人工结账，保留归属的全部关闭和闲置运行。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：按完整池因果分配方程和准确kWh至MJ换算方程取3.6*可归属实测kWh/Q；仅在使用点；实际电网/供应方/电压及上游输配损耗仍须单独识别背景要求
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：`ghg-product-2011`

###### 无芯热敏收银纸卷 (`receipt_paper`)

规定热敏纸输入POS打印机，包括失败或撤销交易生成的小票。

- 选定流：无芯热敏收银纸卷
- 流属性/单位：质量 / kg
- 数量规则：本服务实际消耗纸质量（含作废小票及库存变化）除以Q；仅以完整无纸POS证据证明不存在
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`jrc-retail-2013`

###### 高密度聚乙烯购物袋 (`carrier_bag`)

已识别HDPE袋是零售商为完整玻璃瓶另发的包装；顾客留存初级瓶包装另计。

- 选定流：高密度聚乙烯购物袋
- 流属性/单位：质量 / kg
- 数量规则：这些油瓶实际发出或损耗的袋质量/Q，修正袋期初期末库存；无袋须有发放记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`jrc-retail-2013`

#### 输出

##### 产品流

###### 密封玻璃瓶装精炼葵花籽油零售服务 (`retail_service`)

此输出为对规定未开封瓶内净油吞吐量提供的成功零售功能；本过程不制造商品或其包装。

- 选定流：密封玻璃瓶装精炼葵花籽油零售服务
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：`spack-refined-oil`; `spack-packaging`; `ghg-product-2011`

##### 废物流

###### 废弃热敏收银纸 (`receipt_waste`)

这是打印后留在门店的单一废纸载体；交付记录的承包商，不重复顾客持有的小票。

- 选定流：废弃热敏收银纸
- 流属性/单位：质量 / kg
- 数量规则：零售商实际留存废弃纸质量/Q；已交顾客小票留在商品下游，不算零售商废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`jrc-retail-2013`

###### 废弃高密度聚乙烯购物袋 (`bag_waste`)

此为零售商实际留存废弃袋载体；顾客留存的已发袋留待下游处置，此处不重复。

- 选定流：废弃高密度聚乙烯购物袋
- 流属性/单位：质量 / kg
- 数量规则：直接实测零售商废弃袋净质量/Q，含破损待发库存及实物退回后实际废弃的袋；不含顾客留存袋
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`jrc-retail-2013`

###### 废弃瓦楞纸板运输箱 (`corrugated_waste`)

运输箱在补货后成为零售商废物；记录实际污染及接收回收/处理路线。

- 选定流：废弃瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：这些油瓶对应的实际空箱废物归属质量/Q；入店箱制造留在收货门商品背景，此处不重复
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`jrc-retail-2013`

### 过程：完整支持门店资产 (`assets`)

#### 输入

##### 产品流

###### 完整门店建筑建造及固定安装服务 (`building_acquisition`)

规定的完整门店建筑资产或建造服务包提供支持门店容量；仅含其制造/安装范围，排除运营、事件维护和终端处理。

- 选定流：完整门店建筑建造及固定安装服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按全寿命暴露方程取N_building*f_building/Q；完整规格及供应包排除见cp_assets；不得以修理材料质量求和替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 固定建筑维护人工服务 (`building_maintenance`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：固定建筑维护人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_assets`
- 来源：

###### 完整门店建筑退役及处理服务 (`building_terminal`)

规定的门店建筑终端服务覆盖一个完整剩余物及可追溯拆出件，并含实际处理和运输清单。即使退役尚在未来，当前使用也保留其寿命阶段责任。

- 选定流：完整门店建筑退役及处理服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按单次终端责任方程取终端包次数Nend_building*g_building/Q，仅一次；退役前亦需寿命阶段模型或实际终端记录，不默认零；cp_assets绑定完整剩余载体质量及拆出部件谱系
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 完整钢制零售货架总成 (`shelf_acquisition`)

规定的完整钢货架资产或建造服务包提供支持门店容量；仅含其制造/安装范围，排除运营、事件维护和终端处理。

- 选定流：完整钢制零售货架总成
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按全寿命暴露方程取N_shelf*f_shelf/Q；完整规格及供应包排除见cp_assets；不得以修理材料质量求和替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 钢制零售货架维护人工服务 (`shelf_maintenance`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：钢制零售货架维护人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_assets`
- 来源：

###### 完整钢货架退役及处理服务 (`shelf_terminal`)

规定的钢货架终端服务覆盖一个完整剩余物及可追溯拆出件，并含实际处理和运输清单。即使退役尚在未来，当前使用也保留其寿命阶段责任。

- 选定流：完整钢货架退役及处理服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按单次终端责任方程取终端包次数Nend_shelf*g_shelf/Q，仅一次；退役前亦需寿命阶段模型或实际终端记录，不默认零；cp_assets绑定完整剩余载体质量及拆出部件谱系
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 完整POS收银工作站 (`pos_acquisition`)

规定的完整POS工作站资产或建造服务包提供支持门店容量；仅含其制造/安装范围，排除运营、事件维护和终端处理。

- 选定流：完整POS收银工作站
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按全寿命暴露方程取N_pos*f_pos/Q；完整规格及供应包排除见cp_assets；不得以修理材料质量求和替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### POS终端维护人工服务 (`pos_maintenance`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：POS终端维护人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_assets`
- 来源：

###### 完整POS工作站退役及处理服务 (`pos_terminal`)

规定的POS工作站终端服务覆盖一个完整剩余物及可追溯拆出件，并含实际处理和运输清单。即使退役尚在未来，当前使用也保留其寿命阶段责任。

- 选定流：完整POS工作站退役及处理服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按单次终端责任方程取终端包次数Nend_pos*g_pos/Q，仅一次；退役前亦需寿命阶段模型或实际终端记录，不默认零；cp_assets绑定完整剩余载体质量及拆出部件谱系
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 完整人力钢制载货推车 (`trolley_acquisition`)

规定的完整人力推车资产或建造服务包提供支持门店容量；仅含其制造/安装范围，排除运营、事件维护和终端处理。

- 选定流：完整人力钢制载货推车
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按全寿命暴露方程取N_trolley*f_trolley/Q；完整规格及供应包排除见cp_assets；不得以修理材料质量求和替代
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 手动货物推车维护人工服务 (`trolley_maintenance`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：手动货物推车维护人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_assets`
- 来源：

###### 完整人力推车退役及处理服务 (`trolley_terminal`)

规定的人力推车终端服务覆盖一个完整剩余物及可追溯拆出件，并含实际处理和运输清单。即使退役尚在未来，当前使用也保留其寿命阶段责任。

- 选定流：完整人力推车退役及处理服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按单次终端责任方程取终端包次数Nend_trolley*g_trolley/Q，仅一次；退役前亦需寿命阶段模型或实际终端记录，不默认零；cp_assets绑定完整剩余载体质量及拆出部件谱系
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

### 过程：地面清洁及油泄漏响应 (`cleaning`)

#### 输入

##### 产品流

###### 市政自来水 (`cleaning_water`)

外购自来水输入地面清洁或泄漏响应配液，与交付清洁液已有的水区分。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：直接外购清洁水体积*观测温度对应密度，一次归属后/Q；外购表已排除内部循环水，不能再扣循环水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

###### 十二烷基硫酸钠水性清洁液，供应商配方已声明 (`sds_cleaner`)

一种真实配方水性清洁液输入记录的清洁事件；由供应商SDS及实际浓度定义该混合物，并非未指定化学品选择器。

- 选定流：十二烷基硫酸钠水性清洁液，供应商配方已声明
- 流属性/单位：质量 / kg
- 数量规则：声明清洁事件中实际消耗的交付溶液质量/Q；记录实测或供应方核实的浓度及配方，不能仅报活性物质量；不同清洁剂须另建原子卡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

###### 聚丙烯吸油垫 (`absorbent_pad`)

干聚丙烯垫在吸附油或清洗液前输入泄漏响应；输入干质量不同于输出完整用后垫质量。

- 选定流：聚丙烯吸油垫
- 流属性/单位：质量 / kg
- 数量规则：油泄漏响应实际使用干垫质量/Q，包括失败响应废物；输入干质量不含吸附油
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

#### 输出

##### 废物流

###### 送污水管网处理的含油地面清洗废液 (`cleaning_effluent`)

实际完整地面清洁液在污水管网门点作为废物送处理；它不是向水体的基本流排放。

- 选定流：送污水管网处理的含油地面清洗废液
- 流属性/单位：质量 / kg
- 数量规则：直接模式仅用实测排放体积*rho_eff/Q；互斥重构模式采用完整液体载体方程，包括清洁剂/油质量；直接排放测量不再扣蒸发或储存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

###### 含葵花籽油的废聚丙烯吸油垫 (`oily_pad_waste`)

用后垫作为一个含留存油水的真实湿废物载体离场；载体处理供应方须接受该实际污染状态。

- 选定流：含葵花籽油的废聚丙烯吸油垫
- 流属性/单位：质量 / kg
- 数量规则：直接净称外送用后垫载体质量/Q，包括留存油/水；不得重复拆计成分，匹配废物承包商处理及运输范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

### 过程：失败商品责任及终端载体 (`residual`)

#### 输入

##### 产品流

###### 门店收货门的密封1000 mL玻璃瓶装精炼葵花籽油 (`failed_oil_background`)

仅归属失败唯一商品的收货门背景责任输入本增量服务；成功商品背景留待下游合计。

- 选定流：门店收货门的密封1000 mL玻璃瓶装精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：按收货门背景责任方程取F_gate/Q；油品/包装/入店门点与成功商品相同，每来源责任唯一，未解决失败负担保留直至签署转移或关联最终转售；不得计全部入库库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`ghg-product-2011`; `spack-refined-oil`; `spack-packaging`

#### 输出

##### 产品流

###### 外部留存且未合格接收的玻璃瓶装精炼葵花籽油 (`external_retention`)

此为未合格交付或之后撤销且无实物退回时留在具名外部接收人的实际包装油转移。记录剩余灌装量、封口/瓶体状态及责任；它不是零售商废物。

- 选定流：外部留存且未合格接收的玻璃瓶装精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：实际外部留存未合格净油kg/Q；它是实物总交付H中的角色子集，不是第二次实物移动，且绝不是Q。原池服务分子及收货门背景责任保留至有记录持续转移；无避免产品抵扣。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 实物退回供应商的玻璃瓶装精炼葵花籽油 (`supplier_return`)

具名供应商在门店门点实际接管；单纯退款不是该转移。记录实际净油、包装状态、提货运输覆盖及签署的持续收货门背景责任。

- 选定流：实物退回供应商的玻璃瓶装精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：实际实物退回净油kg/Q；为实物库存闭合中供应商转移子集，不是新输入或Q。背景不能在退货时抹除：保留F_gate责任直至签署转移或关联最终合格转售；不自动成废物或生产抵扣。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

###### 为捐赠转移的密封玻璃瓶装精炼葵花籽油 (`donated_oil`)

实际仍适用密封产品交付具名捐赠接收方，记录标签/储存适用性及下游包装责任；不得将适用捐赠油分类为废物。

- 选定流：为捐赠转移的密封玻璃瓶装精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：实际捐赠净油kg/Q；是记录的实物转出子集，不是额外库存项或合格零售Q。收货门责任按签署的来源关联归属持续；不设假定替代抵扣。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`ghg-product-2011`; `jrc-retail-2013`

##### 废物流

###### 废弃密封玻璃瓶装精炼葵花籽油 (`discarded_bottle`)

一个仍密封的废弃瓶是实物完整包装废物；所含油及组件均留在此载体内。

- 选定流：废弃密封玻璃瓶装精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：直接称量完整废弃密封瓶载体/Q，含留存油、盖、倒油嘴和标签；排除已倒油或破碎分去其他载体的份额；同瓶不再单计玻璃/油废物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`jrc-retail-2013`

###### 单独收集的废弃精炼葵花籽油 (`decanted_oil`)

此液态油已实际分离到自身收集容器；留在其他载体的油不进入此流。

- 选定流：单独收集的废弃精炼葵花籽油
- 流属性/单位：质量 / kg
- 数量规则：实测单独收集油净质量/Q，排除附于玻璃/垫内/污水废液的油；扣容器皮重，须有实际接收/处理记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`jrc-retail-2013`

###### 附着葵花籽油的废绿色瓶玻璃碎片 (`broken_glass`)

实际分流破瓶载体带实测附油离店；回收到垫或液体中的泄漏油为互斥其他载体。

- 选定流：附着葵花籽油的废绿色瓶玻璃碎片
- 流属性/单位：质量 / kg
- 数量规则：直接净称分流玻璃碎片载荷/Q，包括附油及此实际载荷中识别的留存封口件；不得另加计算瓶皮重或再次加同一附油
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每1 kg参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：`jrc-retail-2013`

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 完整替换固定LED灯具 (`split_building_led`)

仅计与带日期工单及准确型号匹配的实际固定建筑照明更换，不假定年度更换，也不代替其他建筑维修。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整替换固定LED灯具
- 流属性/单位：物品数量 / Item(s)
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 碳钢货架替换螺栓 (`split_shelf_bolt`)

实际另行安装螺栓净质量，排除原货架制造。不同涂层/材料或零件须另立身份。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：碳钢货架替换螺栓
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整替换POS终端电源单元 (`split_pos_psu`)

仅计实际同质型号更换；独立于人工工时计数安装完整单元。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整替换POS终端电源单元
- 流属性/单位：物品数量 / Item(s)
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整替换手动货物推车轮组件 (`split_trolley_wheel`)

仅计实际同型号替换轮组件，不得作为通用维修零件包。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整替换手动货物推车轮组件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持作业使用的交流电 (`split_support_electricity`)

仅计任何门店/资产/供应流尚未表征的实测支持用电。将上级电表划分成互斥区间/来源，同一kWh不得再加。记录电压/供应方，不推定电网组合。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持访问的柴油轻型商用车运行服务 (`split_support_travel`)

仅适用于有实际记录的柴油轻型商用车访问，实测vehicle-km包括实际空驶调位。匹配完整车辆运行背景及全部受益方，其他动力/车型须另建卡。不得再加背景已含燃料或现有运输/资产供应已含行驶。此背景未含的静止怠速能耗须另立具名交换。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：已识别支持访问的柴油轻型商用车运行服务
- 流属性/单位：车辆行驶距离 / vehicle*km
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

#### 输出

##### 废物流

###### 拆出的完整固定LED灯具 (`split_removed_led`)

与建筑维修配对的实际带日期拆除；直接净质量排除运输皮重，不另增加整栋建筑终端份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：拆出的完整固定LED灯具
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 拆出的碳钢货架螺栓 (`split_removed_bolt`)

实际单独拆出的螺栓，从剩余货架终端载体范围排除。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：拆出的碳钢货架螺栓
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 拆出的完整POS终端电源单元 (`split_removed_pos_psu`)

实际实测拆出电子单元及匹配接收方，与最终整台POS处置互斥。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：拆出的完整POS终端电源单元
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 拆出的完整手动货物推车轮组件 (`split_removed_trolley_wheel`)

实际实测拆出组件及相容处理，与剩余终端推车互斥。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：拆出的完整手动货物推车轮组件
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | retail; cleaning | 先直接计量及事件归属，再共享分配。剩余共享池L_k按L_k*d_ik/sum_i(d_ik)分配至每一实际受益方，包括其他商品。存储/照明空间采用实测占用货架体积小时，POS采用观察的结账任务秒数，清洁采用清洁面积事件暴露，并先记录因果关联。关闭/闲置剩余量分配给同一预先声明的受益方，不能只给成功销售。零驱动时段保留暂记余额，并用预先记录的容量时间暴露覆盖全部受益方；驱动未知则不能完成。核对全部实测上级池；仅在上级确实包含子表负荷时扣子表，独立互斥电表不得再扣。 | ghg-product-2011 |
| asset_life | assets | 对台账版本v的资产a，预期全寿命暴露E_av包含全部受益方已发生实际暴露及剩余预测暴露。当前受益方份额f_aiv=e_aiv/E_av；建筑采用占用面积小时、货架采用货架体积小时、POS采用任务秒数。推车暴露为source_task_ID关联的载货搬运分钟加实际空车返位/定位分钟，已声明闲置/保留容量责任作为可归属分钟保留。共享空车移动按有记录的任务责任归属，跨全部受益方核对每一观测分钟；零载荷绝不抹去实际移动。过去实际及剩余预测暴露采用同一责任规则。购置数量N_a*f_aiv是完整资产数量份额。寿命/暴露修订时，以新分母重算应有累计份额，记调整量delta=应有累计份额减全部已记份额；替换旧分配，不重新开始制造。跨时段/所有者保持累计份额<=1，退役时归属实测最终剩余份额。终端服务数量只乘最终全寿命责任份额g_ai一次，不得用g_ai*f_ai。 | ghg-product-2011 |
| maintenance_event | assets | 四项维护卡分别只计实际外购人工h，使用已签contract_id/work_order_ID、service_type、scope_version和实际起止/工时；1 Item工单包不再是任何维护人工流数量。只合并相同真实人工类型、范围、单位及背景的h；异质实际工作须具名具体卡。零件、事件公用工程、差旅、工具及拆出件处理按独立实际数量/卡/协议记录，人工背景不得含这些来源；先撤销旧完整服务包，完整包与拆分视图绝不同时表征。保留事件ID及所支持区间：自本次事件至同一功能下次维修/替换或退役；用该区间全部受益暴露分配人工h与各独立事件源一次，未来暴露预测后用持久差额账修至实际。不得再乘整机制造寿命份额；工具自身制造/末端按独立工具寿命账，购置保修及供应方已含来源排除重复。人工h不等工单数或材料kg，任何已归属来源不再乘份额。 | ghg-product-2011 |
| no_credit | residual | 本服务不设假定共产品抵扣。分别保留实际捐赠、供应商退回及回收接收方/责任；销售收入、废料价或退款默认不能作为物理驱动。实际共产品在完整前必须有经过审核的分配扩展及互斥接收背景。 | ghg-product-2011 |
| split_attribution | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance; split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按实际全受益清洁面积次归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | retail | 合格服务与实物总移动 | 批次及唯一瓶/事件台账 | origin_ID; bottle_ID; SKU/批次; event_ID/日期; pool_ID; 实物总交付; 实物退回; 合格/撤销; 接收人/状态; 毛重/皮重/净油; 灌装体积; 密度/温度; 期初期末库存; transfer_ID | 收货、货架及结账逐事件扫描；可追溯校准秤测量毛重及匹配空瓶/盖/倒油嘴/标签皮重；同质批次测量抽样计划须有不确定度/覆盖并拒绝无依据标称灌装捷径；体积模式用匹配温度的批次实测/核实密度；核查当前供应标签及温度/光/湿度记录 汇总详情：calc_oil_mass及calc_acceptance生成Q；calc_physical独立闭合实物库存。retail_service=每1 kg参考流的1 kg；不得把实物与合格台账重复归一 | kg油; L; kg/L; degC; 事件 | 每次收货/交付/退回；每日库存及储存复核 | 完整声明池、库存结转及后续实际迟到退回 | 指定油品货架、结账、门店门点及唯一接收记录 | 每1 kg参考流 | 秤校准/核查；标签照片；密度试验；交易/退回关联；平衡残差及不确定度调查 |
| cp_electricity | retail | 门店交流电输入及可归属服务用电 | 电表拓扑及能量台账 | 电表/回路_ID; 上级包含关系; 起止读数; 时间; kWh; 停电; 货架体积小时; POS秒; 全受益方驱动; 闲置容量; 供应方/电网/电压; 供应边界 | 用布线图及分时读数核对校准门店输入表/子表；尽可能直接分离负荷；观察时间/空间驱动，扣减前核实电表独立性；保留停电/关闭区间 汇总详情：calc_shared一次分配完整池；calc_energy按3.6 MJ/kWh换算后仅除Q一次，每1 kg参考流 | kWh; MJ; m3*h; s | 分时计量及每次配置/驱动变化 | 池内全部营业/闲置/关闭小时及归回原池的实际迟到退回处理 | 完整支持门店及全部实际受益方 | 每1 kg参考流 | 表校准；账单核对；拓扑；负荷/驱动调查；供应地域/电压及损耗覆盖 |
| cp_checkout | retail | 收银纸、袋、空纸箱及废纸 | 材料及发放/废物台账 | 材料_ID/规格; 期初/购入/期末质量; 发出/作废数量; 袋数/实测单质量; 废物毛重/皮重; SKU/event_ID; 承包商/路线; 库存卡 | 以核查秤分别称每种材料；计数仅用实际同质质量样本换算；区分零售商废物与顾客留存包装和小票；记录纸箱来源及供应边界 汇总详情：原始材料/废物质量按直接事件或calc_shared归属；calc_normalise只除Q一次，每1 kg参考流 | kg; 数量换算kg | 每次发放/废物事件；每日库存核对 | 完整池，含失败及库存变化 | 油品结账及纸箱拆包区 | 每1 kg参考流 | 秤核查；材料/SDS规格；发票；发放库存匹配；废物收据及无发放/零事件证据 |
| cp_assets | assets | 完整资产及终端；维护仅人工h | 持久资产/暴露及供应包范围台账 | asset_ID; 服务包版本/BOM; source_task_ID; 载货/空车/闲置/保留任务状态; 受益方; 任务起止; loaded_minutes; empty_return_positioning_minutes; assigned_idle_reserved_minutes; task_responsibility; contract_id; work_order_ID; service_type; package_version; work_scope; homogeneous_unit; measurement_boundary; compatible_background_flow; execution_ID; completed_unit_count_eh; 已完成服务包单位; 安装数量; 场址/所有者; 制造/安装边界; 投用/退役; E_av/e_aiv; 历史记账; 台账版本; 维护事件/范围/部件ID; 终端载体毛重/皮重/直接净质量; 拆出部件ID; 路线/接收方; 供应方清单; g_ai | 保持原资产寿命和全部历史受益台账。逐工单核对实际外购人工起止与h及所有原始物理组成；人工用cp_split_labour_assets，其他实物用cp_split_support。不同物质/零件/载体须各有准确卡，不得在维护人工背景保留。终端直接净称重与BOM重建互斥；此前拆出的维修部件不再进入完整剩余资产终端。 | 资产Item(s)；维护h；终端kg | 每次资产/事件/所有者/寿命修订；分时暴露；最终退役核对 | 资产全寿命、全部时段及受益方；本池记账保留旧版本 | 完整支持建筑、钢货架、完整POS和人力推车；不能因租赁假定在外 | 每1 kg参考流 | 投用/状态/寿命证据；BOM/照片；暴露审核；累计<=1台账；最终剩余；供应边界及终端质量/接收票据；无事件证据 |
| cp_cleaning | cleaning | 自来水、规定SDS溶液、垫、完整废液及用后垫 | 清洁/泄漏事件液体载体台账 | event_ID/日期; 地面/面积; 水表V_in及温度/rho; 溶液批次/浓度/配方/质量; 干垫质量; 完整用后垫净质量/油/水; 废液模式/V_out/rho_eff; 入管油质量; 期初期末液体存量; 蒸发; 移出液体; 收集; 污水/处理票据; 校准 | 在规定防渗清洁/泄漏区域分别计外购水与排液，或用经核实完整载体重构。称溶液和垫输入/输出；测量跨全部受益方清洁区间暴露；按排放组成/温度取废液密度；SDS成分记录及实测油/固体留存闭合平衡。记录实际最终介质、污水路径及外逸；单纯内部泄漏不能证明基本流 汇总详情：calc_effluent选择一种模式；直接归属或calc_shared分配质量；仅除Q一次，每1 kg参考流。与cp_fates共享泄漏ID以核对油去向，不重复数量 | kg; L; kg/L; degC; m2*事件 | 每次清洁/泄漏事件及液体存量变化 | 完整池，保留失败/零输出事件 | 完整规定清洁区域及实际污水边界 | 每1 kg参考流 | 秤/表校准；密度样本；SDS；围护/排水照片；存量/载体闭合；污水/废物联单；无事件证据 |
| cp_fates | residual | 失败收货门背景及互斥终端商品载体 | 关联来源的责任及去向台账 | origin_ID; 原池/事件/退回_ID; 初始包装净油; 收货门/供应方; 合格/库存/失败质量; 接收人/状态; 外部留存/捐赠/供应商退回事件ID; 最终合格状态; 签署负担转移; 供应商退回持续责任; 最终转售关联; F_gate; 整瓶净废物质量; 分离油质量; 玻璃载体净质量/附油; 垫/废液份额ID; 运输/处理供应边界 | 每次失败/退回/失窃/库存处置均跟踪同一唯一油质量并记录实际接收人/状态及责任。用校准秤扣皮后独立称每个互斥完整载体；检验相关附油平衡；按原始ID核对cp_events实物质量及cp_cleaning油份额。不合格商品外部留存仍是转移，不自动成零售商废物。零售商供应商退货车辆使用在选定路线外：实际发生须先加专用运输/空驶卡后才完整 汇总详情：calc_failure对收货门背景归属一次；每实际载体一次归属再/Q，每1 kg参考流。复用cp_events/cp_cleaning原始事件台账作为单过程视图，不作新库存或重复归一 | kg油; kg完整载体; 责任份额 | 每事件、去向变化及后续关联转售；每日闭合 | 原池及全部实际迟到事件日期和未解决后续 | 收货门、门店残余处理及具名外部接收方/供应方 | 每1 kg参考流 | 签署转移/去向收据；失窃/破损证据；上游包装门点/初级包装/入店覆盖；毛重/皮重票据；全来源油闭合；无事件证据；未知去向阻断完成 |
| cp_split_labour_assets | assets | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_oil_mass | retail_service | 各同质批次用net_oil=gross_package-matched_empty_package_tare，或互斥体积模式net_oil=measured_fill_L*rho_oil(T)，密度单位kg/L。标称1000 mL和粗油密度表不能代替测量。瓶/盖/倒油嘴/标签不计净油。 | gross_package; matched_empty_package_tare; measured_fill_L; rho_oil(T); cp_events | 每唯一瓶/事件净油kg | spack-refined-oil; spack-packaging |
| calc_acceptance | retail_service | Q=撤销/再次接收后最终合格接收的唯一净油质量之和。实物总交付H和退回R另记；仅撤销合格状态才将该瓶从Q移除。同一来源退回后转售质量在最终状态最多贡献一次。 | net_oil; event_ID; qualification_state; reversal_link; cp_events | Q kg最终合格服务吞吐量 | ghg-product-2011 |
| calc_physical | retail_service; failed_oil_background | 期初油库存+外部收货+顾客实物退回=顾客实物总交付+供应商/内部实物转出+零售商废物/垫/废液/实际释放中的油+期末油库存+经调查失窃/其他损失。合格Q不能替代实物总交付；退回或转售是同一来源上的事件。 | opening; receipts; physical_returns; gross_handovers; transfers; carrier_oil; closing; theft; cp_events; cp_fates; cp_cleaning | 残差经调查的闭合实物油台账 | ghg-product-2011 |
| calc_failure | failed_oil_background | F_gate=本服务保留收货门责任的唯一未合格/最终失败油kg之和。仅减有记录的最终合格转售/库存结转或签署的持续背景转移；未解决质量保留为暂定服务责任且去向不完整。关联一个含生产、准确初级包装及入店运输的收货门数据集。下游总量=服务清单（含F_gate/Q）+成功商品收货门背景一次+顾客下游阶段，并核对库存/转售责任。 | origin_ID; receiving_gate; responsibility_owner; final_state; resale_link; signed_transfer; cp_fates | F_gate kg及明确下游组装责任 | ghg-product-2011 |
| calc_shared | store_electricity; cleaning_water; sds_cleaner; absorbent_pad; cleaning_effluent; oily_pad_waste; receipt_paper; carrier_bag; receipt_waste; bag_waste; corrugated_waste | X_i=X_direct_i+sum_k L_k*d_ik/sum_all_beneficiaries(d_jk)。上级剩余L_k仅扣其确实包含的已知子表/直接份额一次；独立互斥表应相加而非扣除。采用记录的因果驱动及保留闲置/零驱动的容量时间方法；全部受益方分配X_i之和等于完整实测总量。 | X_direct_i; L_k; d_ik; all_beneficiaries; meter_topology; idle_capacity | 归一前可归属原始量X_i | ghg-product-2011 |
| calc_energy | store_electricity | E_MJ=3.6*E_kWh；归属后amount=E_MJ/Q。该换算为准确能量单位，不是排放因子。 | E_kWh; Q; cp_electricity | 每1 kg参考流的MJ | ghg-product-2011 |
| calc_asset | building_acquisition; shelf_acquisition; pos_acquisition; trolley_acquisition | E_av=跨全部受益方past_actual_exposure+projected_remaining_exposure；f_aiv=e_aiv/E_av。推车采用e_trolley_i=sum(source_task_ID归属的loaded_minutes+实际empty_return_positioning_minutes)+assigned_idle_reserved_minutes；E_trolley对全寿命及全部受益方采用同一载货/空车/闲置/保留责任基准。共享空车时间按记录的任务责任只归属一次，并与实际观测时间核对；零载荷绝不能将实际时间设零。当前暴露记N_a*f_aiv；版本变更记desired_cumulative_new减prior_posted_total。保留完整物体数量、最终剩余及累计<=1。 | N_a; e_aiv; E_av; source_task_ID; loaded_minutes; empty_return_positioning_minutes; assigned_idle_reserved_minutes; task_responsibility; ledger_version; prior_posted_total; cp_assets | /Q前可归属完整资产/服务包数量 | ghg-product-2011 |
| calc_maintenance | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance | 四张maintenance卡分别只计对应资产实际外购人工h。每次工单先按实际支持周期全部受益方的设备驱动归属实测h一次；原料、替换件、能耗、差旅及拆出废物独立按cp_split_support计量。零事件须有日期证据；未知不是零。最后按c_split_quantity除Q一次，不再使用整包执行次数或完整包背景。 | work_order_ID; measured_labour_h; supported_interval_beneficiary_exposure; all_supported_beneficiaries; cp_split_labour_assets | 归属人工h，最终仅除Q一次 | ghg-product-2011 |
| calc_terminal | building_terminal; shelf_terminal; pos_terminal; trolley_terminal | X_terminal=Nend_a*g_ai，g_ai=受益方i累计全寿命暴露/跨全部受益方及所有者的总全寿命暴露；退役前用当前有证据的全寿命预测，退役时用最终实际暴露。版本更正替换旧记账，最终g份额总和为一。只乘一次，不再乘制造份额。直接载体净重已排除拆出件；仅BOM重构这一替代模式扣部件一次。终端包清单须匹配实际完整剩余物及全部单独拆出件，不重复维护处理。 | Nend_a; g_ai; full_carrier_mass; removed_parts; provider_scope; cp_assets | /Q前可归属终端服务包数量 | ghg-product-2011 |
| calc_effluent | cleaning_effluent | 二选一。直接：W=V_out*rho_eff(T,composition)，不再扣供水侧蒸发/库存。重构：W=kg_imported_water+kg_delivered_cleaner_solution+kg_oil_entering_liquid+kg_other_measured_dissolved_or_suspended_material+opening_liquid_stock-closing_liquid_stock-kg_actual_evaporation-kg_liquid_removed_in_pads_or_separate_carriers。全部项为kg完整载体贡献，溶液水不能重复计外购水，载体留存油不得重复加入。缺项阻断重构。 | effluent_mode; V_out; rho_eff; kg_imported_water; kg_delivered_cleaner_solution; kg_oil_entering_liquid; kg_other_material; opening_liquid_stock; closing_liquid_stock; kg_actual_evaporation; kg_liquid_removed; cp_cleaning | 归属及/Q前完整废液原质量W kg | jrc-retail-2013 |
| calc_normalise | receipt_paper; carrier_bag; receipt_waste; bag_waste; corrugated_waste; building_acquisition; building_maintenance; building_terminal; shelf_acquisition; shelf_maintenance; shelf_terminal; pos_acquisition; pos_maintenance; pos_terminal; trolley_acquisition; trolley_maintenance; trolley_terminal; cleaning_water; sds_cleaner; absorbent_pad; cleaning_effluent; oily_pad_waste; failed_oil_background; external_retention; supplier_return; donated_oil; discarded_bottle; decanted_oil; broken_glass | 每项已归属原始交换X_i仅除同一修正Q一次。上游已用的资产/事件/终端份额及去向/组成份额不得再乘。参考输出为1 kg。Q=0时保留原池并披露服务不可归一，不得删除或赋零。 | X_i; Q; pool_ID; prior_allocation_versions | 每1 kg参考流的清单数量 | ghg-product-2011 |
| c_split_quantity | building_maintenance; shelf_maintenance; pos_maintenance; trolley_maintenance; split_building_led; split_shelf_bolt; split_pos_psu; split_trolley_wheel; split_removed_led; split_removed_bolt; split_removed_pos_psu; split_removed_trolley_wheel; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/Q，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; Q; cp_split_labour_assets; cp_split_support | q_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 每个具体未绑流须经官方直读证明双语名、状态/类型、限定信息和属性/单位/介质适合后才能绑定；参考服务不得借用油品商品UUID。已绑电力身份不代表供应组合或供应方。 | 官方原件/完整性记录、逐行适用性及供应方/数量证据 |
| q_mass | retail_service; failed_oil_background; external_retention; supplier_return; donated_oil; discarded_bottle; decanted_oil; broken_glass; cleaning_effluent; oily_pad_waste | 分别核对净油、毛包装及全部载体油份额；保留测量不确定度并调查残差，不强行归零。规定的标称瓶规格默认不能提供质量/密度。 | 校准秤/表；批次密度/皮重；事件库存及载体平衡 |
| q_boundary | assets; retail; residual | 逐维护卡必须为实际外购人工h，工单数仅QA，且与split_labour_time/maintenance_event一致；实际零件、公用工程、差旅和处理在其独立卡，人工背景排除这些源。核查每张维护卡具有一个已签合同/工单定义的同质单位、固定service_type/package_version/work_scope/计量边界及兼容背景流；异质实际包须在完整前具名建卡并匹配协议视图。核实每个完整供应包并去除与另计电力、维护、终端管理、商品初级包装及入店运输的重叠。任一路线/资产/供应包覆盖未知即不完整。 | 签署范围/BOM/过程清单；路线/接收票据；拓扑及门店调查 |
| q_collection | all inventory rows | 采用准确关联的单过程协议；原始记录规定测什么/哪里/何时、ID、方法/单位/频次/覆盖、校准、证据、分配及核对。条件不存在须有带日期库存/门店/事件证明；缺失数据绝不等于零。实际额外交换须在完整前加入原子卡/协议并双语重新同步。 | 完整来源台账及有责任审核者的存在/不存在清单 |
| q_temporal | retail; assets; residual | 保留完整同配置时段及全部失败/闲置/关闭/零驱动群组。实际迟到退回或寿命变化时重开原分子/分母/背景/去向；不得抹去原工作或重新记完整资本。 | 预先池声明；不可变来源/事件关联；版本化资产更正及暂记余额 |
| q_sources | all inventory rows | 制造商案例仅用于精炼油/瓶型/储存可行性；JRC仅用于识别零售活动义务，GHG产品标准仅用于透明单位/边界/分配逻辑。前景选择是本PCR设计，不是通用来源强令；不引入定量因子或合规限值。 | 当前标签及适用性/来源字段审核；明确不确定性和缺口 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_service | retail_service | 要求一个服务参考流，基准为最终合格净油吞吐量1 kg并关联retail_service。拒绝商品UUID替代、毛瓶分母、标称体积密度假定、转售重复及纯财务Q调整。 | ghg-product-2011 |
| v_ledgers | retail; residual; cleaning | 要求独立实物总库存闭合与最终合格台账、唯一油谱系、互斥终端载体及同门点含入店运输的背景责任者。外部失败留存/供应商退回须有接收人/状态及持续责任。去向未解决表示不完整，不自动成废物或零负担。 | ghg-product-2011 |
| v_assets | assets | 要求全部四类完整资产及独立购置/事件维护/终端覆盖、寿命暴露方程及累计修订台账；最终份额跨受益方/所有者核对。拒绝资本重新开始、终端载体再乘制造份额、拆出件重复扣及无依据完整服务包。 | ghg-product-2011 |
| v_collection | all inventory rows | 每张采集/计算卡须有真实单过程协议、实际数量/供应方/数量基准及一次最终/Q。核对双语及生成投影全部业务字段和限定信息。身份/数量缺失及条件/零输出未知均保留明确审核缺口，不能成为完整数据集。 | ghg-product-2011 |
| v_liquid | cleaning | 选择直接计量排液或完整kg载体重构，不得混合。输入水表不能再次扣循环水；直接排放V*rho不再按蒸发/库存修正。全部清洁剂/油/垫/废液份额及最终介质核对，任何实际释放单独建模。 | jrc-retail-2013 |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 增量前景零售服务数据集；候选方法需独立审查 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在全部身份/数量/供应包/去向缺口关闭后用于规定常温到店油品路线；下游产品评价对成功商品背景及顾客使用/处置各加一次 |
| excluded_use | 油品制造足迹；全部乳/蛋/油脂覆盖；冷链、有暖通门店、配送、重包装或无依据供应包代理；零输出归一声称 |
| required_metadata | 全部必需限定信息；分类子集；来源/版本/门点；Q/实物库存/来源台账；资产暴露及更正版本；供应包排除；责任/接收方/去向关联；实际池及迟到日期 |
| required_quality_disclosure | 身份/数量/去向/供应包缺口；抽样及测量不确定度；失败及零输出池；来源适用性；供应标签条件及不声称标准符合性 |
| update_trigger | 供应方组成/包装/储存变化；渠道/设备/路线变化；电表/供应包/寿命修订；迟到接收/退回或去向/责任更正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62122 | official_guidance | UNSD，CPC 3.0，子类62122解释注释：https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62122 | 分类包含植物油及多个其他组别；仅为较窄范围，不可等价为原奶/鲜壳蛋 |
| spack-refined-oil | literature | Spack BV，Refined Sunflower Oil，制造商产品资料与储存建议，2026-10-27快照：https://www.spack.nl/en/our-products/sunflower-oil/refined-sunflower-oil/ | 植物/精炼产品、单一油配料、零售供应、阴凉/干燥/避光储存可行性；不用于密度、灌装质量、清单因子或安全认证 |
| spack-packaging | literature | Spack BV，Packaging及Bottling oil，1000 mL深绿色Marasca规格及零售玻璃消费瓶，制造商资料，2026-10-27快照：https://www.spack.nl/en/packaging/ ; https://www.spack.nl/en/fill-up-with-oil/ | 具体零售瓶型可行性；实际部件质量/配方及交付灌装量仍须前景测量 |
| jrc-retail-2013 | official_guidance | Schönberger、Galvez Martos与Styles，欧盟委员会JRC，Best Environmental Management Practice in the Retail Trade Sector（2013），EUR 25998 EN，执行摘要及2.1.6.7、2.4.6.1–2节：https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 识别能源/建筑/照明、水/化学品和零售废物活动义务；不把最佳实践标杆引为强制清单值 |
| ghg-product-2011 | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard（2011），第6–7及9章：https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 透明分析单位、边界及细分/物理分配逻辑；本PCR自主规定明确服务/资产/失败方程，不声称完整标准符合性 |
