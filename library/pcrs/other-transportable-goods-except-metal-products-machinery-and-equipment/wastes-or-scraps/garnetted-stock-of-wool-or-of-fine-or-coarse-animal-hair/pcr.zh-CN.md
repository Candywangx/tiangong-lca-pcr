---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.garnetted-stock-of-wool-or-of-fine-or-coarse-animal-hair
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 羊毛或动物粗毛细毛的回收纤维：已知羊毛织物边料干式撕解开松

## 1. 范围与适用性

本方法覆盖单一可追溯、名义单纤维、已有颜色的羊毛机织物生产边料，经干式机械撕解开松转成松散回收纤维供料。名义组成是须以实际检验核实的供应规格，不是假定100%羊毛。保留每种实测共纤维残留及原染料/整理成分，并披露验收限值。不明混合边料及有意羊毛/合纤配方生产须另有范围证据。

定义性转化是真实针辊机械再开松，不是接收/包装成品纤维。来源支持从已有替代路线中选择本干式路线，不证明同一工厂/SKU或可移植数量。生产止于首次质量放行；必需的后续存储/包装/发运仍纳入独立增量服务账。排除未经开松羊毛废料/落毛（39212）、蚕丝（39211）、棉落棉/废料（39214）、再生棉（39215）、纱线、织物、梳理纤网及化学溶解。[来源：`bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.garnetted-stock-of-wool-or-of-fine-or-coarse-animal-hair |
| classification_refs | CPC 3.0:39213; 较窄的羊毛干式开松方法范围; 此处不建立已接受映射 |
| covered_products | 由一个可追溯、名义单纤维、已有颜色的羊毛机织物生产边料流，经机械撕解开松得到的松散再生羊毛纤维供料；保留实测共纤维残留和整理状态声明。 |
| excluded_products | 未经撕解开松的羊毛废料和落毛；蚕丝或棉再生供料；有意混纤配方；未经新增证据支持的其他动物毛路线；原生毛条；纱线；织物；毡/纤网；湿式撕碎；化学溶解再生。 |
| representative_product | 具有原有颜色、经接收方确认可用于后续粗梳准备工序的松散再生羊毛供料；不假定通用纯度或纤维长度。 |
| production_route | 接收与成分/颜色分选 → 去除实际非纤维附件 → 必要时切断 → 针辊干式机械撕解开松和集尘 → 首次质量放行 → 常温存储及实际包装发运服务。 |
| market_state | 按记录含水状态供应的松散回收纤维供料；不是纱线或未经处理废料。法律物料状态及接收方规格必须有实际记录。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应接收方验收合格的机械再开松羊毛供料，供后续纺织工序使用。 |
| How much | 首次质量放行时净供应状态纤维供料1 kg。 |
| How well | 已知边料组成及原整理；实测含水、纤维长度/未开松比例；实际接收验收。不宣称等效原生羊毛性能。 |
| How long or cycle | 一个首次放行生产群组；后续处理沿用原放行质量Qc，不产生新产量。 |
| reference_flow_link | `garnetted_first_release` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 羊毛物种和供应批次; 名义单纤维输入规格; 实测羊毛及每种残留共纤维比例及方法和不确定度; 原织物结构及原染色/整理包括危险残留; 已有颜色的机织物生产边料来源; 针辊干式路线及机器设置; 纤维长度分布和未开松比例; 接收方约定的粉尘及异物验收限值; 实际含水测定方法及取样状态; 每次转移的法定副产品或废物状态; 上游负荷归属及截断依据; 接收和首次放行门; 批次和期间及期初期末WIP和FG; 唯一首次放行群组Q和历史Qc; 供应地域及公用工程接口; 毛发运/退货与包装组成; 实际辅助工序及外部处理去向 |

全部必需限定信息须在数据集元数据或等效产品/过程/参考流描述中声明；缺失将使适用性不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | Q是群组中逐个唯一首次合格纤维净质量之和。采用校准称重的毛重减皮重，排除每种包装。采用实测供应状态含水；干质量另作子账。 |
| raw_units | 所有清单行 | 每个原子流的原生属性 | kg; MJ; 原始计量单位 | 保留原始单位和计量时段；1 t = 1000 kg，1 kWh = 3.6 MJ。先换算再归属。体积累计量不是速率，仅对真实速率积分。体积转质量须独立实测同一物料在记录温压下的密度。不得套用水密度或从原生次级属性系数反推润滑油密度。 |
| first_release_only | 参考产品及FG服务 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg | kg | 本群组期末FG已包含在Q。已放行纤维的发运/重验/返工不增加Q。合并时抵消成对内部转移，不再把期末FG加到Q。H表示服务归属用毛搬运/发运质量，绝不作为生产分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门处一个已识别、已有颜色、名义单纤维的羊毛机织物生产边料批次；运输和此前负荷归属明确且仅承接一次。 |
| starting_condition_role | 归因材料供应过程的回收物料输入；不是无负荷废物处理声明。 |
| product_classification_scope | 机械撕解开松羊毛供料；未经处理落毛/废料停在定义性机械工序之前。本方法选择绵羊毛，不授权宽泛目录标题包含的全部动物毛。 |
| recursive_input_rule | 外来已开松供料须有相容且承接负荷的供应数据集及独立输入卡；接收或重包装不重新创造产量。内部循环在实物账跟踪，并在合并时抵消一次。 |
| upstream_dataset_requirement | 保留边料形成工序及其分配决定；已完成的收集/分选/运输关联一次，不重复。法律状态与LCA状态分别确定。继承负荷缺失或截断无据应记未解决，不记零。 |
| disclosure | 实际组成/整理及污染；每个接收/放行/发运门；合法转移及接收验收；工序/能源地域；如观察到湿法或化学工序则披露；存量和继承负荷向量；归一化及分配证据。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | garnetting | 纳入接收称重、成分/颜色分选、实际硬附件去除、必要切断、针辊干式撕解开松、抽风过滤、首次质量检验及放行前返工。不得以购买成品纤维和包装代替本路线。来源支持技术综合，不声称同一当代工厂或SKU。 | `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023` |
| b_actual | all processes | 保留全部失败运行、零产出期间、启停、空转抽风/照明、清理、返工、泄漏及实际辅助工序。基准路线不主动润湿/再染色/加热干燥纤维，使用电动搬运。如发生燃料使用或上述工序，保留原始负荷，并在完成数据包前增加逐项燃料/化学品/排放卡及方法证据；缺项须证实不存在，不可从简短来源清单推断。 | `bianco-mwool-2022`; `woolmark-recycling` |
| b_input_status | offcut_receipt | 只有次生材料供应功能、合法转移和接收验收均有记录时，才能采用Product类型的回收边料身份。名称中的waste不使其成为原生Waste流。如果实际接收属于废物处理功能，须声明该功能、取得匹配Waste身份并审查边界/分配；未解决期间仍保留真实输入和负荷。不默认边料形成零负荷或避免生产信用。 | `bianco-mwool-2022`; `ilcd-attributional-2010` |
| b_fg | fg_service | 存储、打包、电动搬运、发运、退货和实际放行后返工均纳入增量服务账，关联原Qc。生产转出Q与服务接收在内部抵消；外发纤维是同一群组的服务出口。期末FG是存量，发运不是第二次生产输出。历史FG保留逐交换原负荷向量，仅接受真实当期服务增量。 | `bianco-mwool-2022`; `ilcd-attributional-2010` |
| b_external | all processes | 通过相容供方追溯外部上游生产/运输及下游处理一次。保留实际外出产品/废物类型和去向。干式电驱路线不默认套入锅炉、外购蒸汽、凝结水或热回流；真实热/水返还须独立记录物态/焓及供方水能约定。 | `bianco-mwool-2022` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| garnetting | 接收到首次放行的集成干式开松 | required | 全部所选路线批次及失败/无产出时段 | 接收 → 分选/去附件 → 切断 → 针辊开松/抽风 → 首检/返工 | garnetted_first_release |
| fg_service | 实际放行后存储包装搬运发运 | required | 全部真实服务事件包括旧群组库存及退货 | 增量服务账; 原Qc; H不是产出 | original_Qc |

集成制造过程各阶段保留独立原始子账/表计及WIP实物门；阶段内部转移不另作外购。下述描述是每卡有约束力的上下文。环境数量a_i（服务为a_service_i_c）与实物库存流转数量v_i_c是各自第8节唯一计算已归一的独立结果；后者不作另一环境输入或生产Q。未解决流仍为一个具体实物交换。真实新增材料/附件物种/燃料/排放须各自新增卡；本表不是遗漏许可。

### 过程：羊毛边料干式撕解开松（`garnetting`）

#### 输入

##### 产品流

###### 已有颜色羊毛织物边料（`offcut_receipt`）

整份供应的制造边料批次按整体称重，包括实际羊毛/共纤维/水分/整理成分；组分检验仅作子账，不另加采购。原生为Product、厂内生产混合、未指定处理，不固定等级或纯度。仅在b_input_status要求的次生材料供应功能和实际合法/接收验收有据时采用；不得替代未经处理落毛或Waste处理输入。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛废料 `e226b1a0-644f-4951-b218-48c260375a6a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `manteco-project43`; `woolmark-recycling`

###### 分选切断开松抽风及全部支持用电（`manufacturing_electricity`）

记录接收/分选/切断/针辊/过滤/照明及全部失败/空转/清理时段的分表或因果归属原始用电。只有中国、到用户、低于1 kV的电网平均消费组合符合该原生流。保留计量点及上游发电/输配/损耗边界，不重复添加已含损耗。其他电压/地域/来源接口须独立身份与供方。原生参考属性为以MJ计的净热值；实测每kWh按3.6 MJ表示电能，不把电力当燃料。 声明的计量单位组为能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 矿物油基机器润滑剂（`machine_oil`）

仅在实际维护使用时纳入。整份外购制剂称重一次；载油/添加剂不另加采购。未绑定UUID：糠醛精制候选带不相容CAS 98-01-1，PAO候选固定另一化学组成/路线。记录真实制剂及损失/留存路径；其他真实润滑剂须独立原子卡。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：矿物油基机器润滑制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`ilcd-attributional-2010`

###### 实际辅助清理自来水（`cleanup_water`）

仅实际市政、饮用级经处理、到用户/厂内的生产供水符合原生定义。干式纤维撕解不证明清理用水为零。有实际使用即记录；不移植湿式撕碎水耗，不把原生体积系数当实测密度。其他水级或原水取用须独立身份。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_utility`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

##### 废物流

不默认存在此类交换。若实际观察到，则保留原数量并在完成清单前新增具体独立卡。

##### 基本流

不默认存在此类交换。若实际观察到，则保留原数量并在完成清单前新增具体独立卡。

#### 输出

##### 产品流

###### 首次合格松散开松纤维供料（`garnetted_first_release`）

原生为厂内制造完成的Product，不固定等级/组成/地域。仅用于声明边料经真实机械再开松得到的松散羊毛供料；保留实测共纤维/整理/含水及接收质量。原生中文总注出现梳棉成网措辞；本选择依据正式双语基本名及英文garnetted身份，不授权梳理纤网或纱线。Q仅计每份首次合格质量一次，包括留为期末FG的部分；重验/再发运不新计产量。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_release`
- 来源：`bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023`

##### 废物流

###### 被拒未开松羊毛织物边料（`unopened_offcut_reject`）

计量开松前实际分选拒收边料及其组成/接收方；不虚构转化为合格纤维。保留上游负荷及实际处理。所查废弃纤维织物固定未知混纺；纺织固体废弃物固定中国成衣制作/组装来源，均不能无条件绑定本已知羊毛流分选拒收料。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：被拒已有颜色羊毛织物边料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 被拒开松短羊毛纤维（`short_fibre_reject`）

实际短纤维拒收料与未开松布片、集尘分别计量；去向及法律/产品状态须有证据。未经开松的羊毛纺纱废料身份不适用。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：被拒撕解开松短羊毛纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 收集羊毛粉尘（`collected_wool_dust`）

称量实际集尘/滤料截留物，纳入滤料清理和处置。这是收集固体Waste，不是空气排放，也不是纺纱飞花；尚未确认Waste UUID。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：收集干式羊毛开松粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 分离铁钢附件（`ferrous_trim`）

本流仅含实际分离铁钢硬附件；其他金属及非金属附件另列卡。未绑定UUID：所查钢铁废碎料流固定预处理/熔炼/分拣且为Product，不能替代本未经该处理的Waste。不计避免生铁信用。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：分离铁钢纺织附件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 辅助清理废水（`cleanup_wastewater`）

仅在实际清理废水交外部处理时纳入。称量或对实测体积独立换算；识别悬浮固体及溶解成分。COD/VOC是指标，不是特定化学物质量。不可绑定锰渣洗水身份，也不可将直排水体限制用于送污水处理的废水。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：未经处理的羊毛线清理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 使用后机器润滑剂（`used_machine_oil`）

仅在实际石油基或合成润滑油经使用污染时纳入；原生为产生点Waste，不固定处理路线。纳入泄漏/留存账及真实收集方去向。不自动计再生信用，不代替新油输入。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`ilcd-attributional-2010`

##### 基本流

###### 实际未捕集羊毛线颗粒物（`airborne_particulates`）

原生为空气、未特指子环境和粒径的基本排放；其水泥案例不是排放因子或路线限制。仅在该粒径分辨率相符时采用实际监测释放。已确认粒径级及不同物种须用适合身份分别列项；总PM不与重叠粒径级或已捕集粉尘相加。流身份不证明影响评价覆盖。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`bianco-mwool-2022`; `woolmark-recycling`

###### 实际蒸发游离水（`water_vapour`）

原生为H2O CAS 7732-18-5、空气未特指子环境排放；仅实际气态水越界属于本卡。不得将原生同义词整体解释为同位素水或液/冰身份。区分来料水分、游离/吸附水、废水及水蒸气。干式机械开松不证明化学反应或必需蒸发量；不得用一个残差反推两个未知。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_i
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`bianco-mwool-2022`

### 过程：放行后纤维群组服务（`fg_service`）

#### 输入

##### 产品流

###### 存储包装发运用电（`service_electricity`）

实际打包机/电动搬运/照明及全部空转/退货/返工服务时段与生产计量分开；归属到每个原首次放行群组。只有中国、到用户、低于1 kV的电网平均消费组合符合该原生流。保留计量点及上游发电/输配/损耗边界，不重复添加已含损耗。其他电压/地域/来源接口须独立身份与供方。原生参考属性为以MJ计的净热值；实测每kWh按3.6 MJ表示电能，不把电力当燃料。 声明的计量单位组为能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 单一材料HDPE包覆膜（`hdpe_wrap`）

仅实际制造的HDPE薄膜。原生塑料薄膜允许多种树脂且不定等级/地域；本卡选择供应组成和加工负荷明确的一种HDPE制品，不是树脂颗粒或树脂选择器。案例论文采用料包假设，但不提供本制品通用尺寸/质量。 本组件账：P_open + I + ER = P_close + S + EO + W。P分别覆盖空包装/附着WIP/附着FG/可重复使用库存；I为真实外购；ER为外部退回收到；S为随毛实物发运外出；EO为其他对外退还；W为实际废物。内部再用抵消，不作采购或产品Q。不自动计共产品信用。已净额输入不得再净扣。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：塑料薄膜 `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 铁/非合金钢打包绑丝（`steel_tie`）

仅记录实际一种铁/非合金钢打包绑丝。原生基本名和注释明确涵盖捆扎纺织料包的柔性铁/钢丝，不固定加工路线/地域。其CPC叶为围栏丝，属于孤立分类不一致，不证明本交换有刺。声明真实直径/涂层/等级及供方；有刺围栏丝、钢丝绳或塑料带不是所选制品。制造负荷纳入一次。 本组件账：P_open + I + ER = P_close + S + EO + W。P分别覆盖空包装/附着WIP/附着FG/可重复使用库存；I为真实外购；ER为外部退回收到；S为随毛实物发运外出；EO为其他对外退还；W为实际废物。内部再用抵消，不作采购或产品Q。不自动计共产品信用。已净额输入不得再净扣。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：捆包铁丝 `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 原群组内部成品接收（`fg_received_stock`）

记录首次放行或有据结转群组的成对实物接收。其为内部转移，合并时与制造转出Q抵消，不作再次采购或新生负荷。保留原逐交换向量及原Qc；实物数量V_i_c与环境A_service_i_c分开。 原生为厂内制造Product，不固定组成/等级/地域；本卡须与首次放行卡同为已知羊毛边料来源的干式开松松散纤维，并保留实测含水/残留共纤维/整理。原生中文注释出现梳棉成网措辞；不授权纤网或纱线。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：v_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 实际外部退回原群组纤维（`fg_returned_stock`）

仅在确有外部退回且仍实物符合本供料时纳入，并关联已识别原发运。保留毛退回量，净交付报告仅逆转所识别的原交付；不消除历史负荷，不新计Q。污染/被拒退货须按实际Waste身份独立卡，不沿用不变Product状态。 原生为厂内制造Product，不固定组成/等级/地域；本卡须与首次放行卡同为已知羊毛边料来源的干式开松松散纤维，并保留实测含水/残留共纤维/整理。原生中文注释出现梳棉成网措辞；不授权纤网或纱线。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：v_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

##### 废物流

不默认存在此类交换。若实际观察到，则保留原数量并在完成清单前新增具体独立卡。

##### 基本流

不默认存在此类交换。若实际观察到，则保留原数量并在完成清单前新增具体独立卡。

#### 输出

##### 产品流

###### 毛发运原群组纤维（`fg_gross_dispatch`）

本毛实物服务出口是先前已首次放行的同一松散供料，不是另一定量参考或新增生产输出。排除包装质量。先记录每次毛发运，再作退货调整；H可描述服务吞吐，但不替代Qc。本流承接原负荷向量及真实服务增量一次。 原生为厂内制造Product，不固定组成/等级/地域；本卡须与首次放行卡同为已知羊毛边料来源的干式开松松散纤维，并保留实测含水/残留共纤维/整理。原生中文注释出现梳棉成网措辞；不授权纤网或纱线。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：v_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

###### 实际对外退还原群组纤维（`fg_outward_return`）

仅在实际对外退还仍合格供料给已识别供应/接收方时纳入。记录毛质量及原群组，不把处置算交付，也不扣减首次放行Q。如物料已不是本Product，则按真实独立Waste分类，保留其历史及新增处理负荷。 原生为厂内制造Product，不固定组成/等级/地域；本卡须与首次放行卡同为已知羊毛边料来源的干式开松松散纤维，并保留实测含水/残留共纤维/整理。原生中文注释出现梳棉成网措辞；不授权纤网或纱线。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：羊毛或动物粗毛细毛的回收纤维 `100b8912-d4db-48d2-ae76-a244dc191ddb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：v_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

##### 废物流

###### 废弃HDPE料包膜（`hdpe_wrap_waste`）

仅计本组件完整包装账中的实际废弃W；对外退还仍为EO，内部再用不算废物。混合物若一次送一个接收方，只构成一次真实处理负荷，其组分分区不可叠加；不得为每个组分再加整份质量处理供方。匹配的原生Waste UUID未解决。已清洗机械回收PE候选不能描述未经清洗的废料包膜；晶圆生产钢丝候选不能描述打包绑丝。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：废弃HDPE料包膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`bianco-mwool-2022`

###### 废弃铁/非合金钢绑丝（`steel_tie_waste`）

仅计本组件完整包装账中的实际废弃W；对外退还仍为EO，内部再用不算废物。混合物若一次送一个接收方，只构成一次真实处理负荷，其组分分区不可叠加；不得为每个组分再加整份质量处理供方。匹配的原生Waste UUID未解决。已清洗机械回收PE候选不能描述未经清洗的废料包膜；晶圆生产钢丝候选不能描述打包绑丝。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：废弃铁/非合金钢打包丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`bianco-mwool-2022`

###### 报废此前已放行羊毛供料（`fg_discard`）

仅实际首次放行后报废时纳入，分别计量，不混同发运或退还。保留历史负荷向量，仅归属真实新增分选/返工/处理负荷；原Qc不成为新Q也不消失。具体相容Waste UUID未解决；纺纱飞花和Product供料身份不匹配本Waste。 声明的计量单位组为质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg。

- 选定流：报废此前已放行的撕解开松羊毛纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：a_service_i_c
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`bianco-mwool-2022`; `ilcd-attributional-2010`

##### 基本流

不默认存在此类交换。若实际观察到，则保留原数量并在完成清单前新增具体独立卡。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all allocation decisions | 以下层级仅适用于声明的、确需分配的归因研究情形；来源的回收/截断假设不自动承接。 | `ilcd-attributional-2010` |
| a_hierarchy | shared inventory | 在确需分配的归因研究情形下，先独立采集专属操作或进行有据的虚拟细分；再逐交换、逐共功能识别决定性物理因果，说明何种实测变化驱动该交换。不得将同一质量比例用于全部流。 | `ilcd-attributional-2010` |
| a_residual | residual common process | 只有以上步骤后仍未解决的清单才可按同期共同过程出口、真实物料状态的市场价值分配；剔除后续包装/运输/调理价值及其专属负荷。收费符号和法定废物功能另行保留；负/零价值不证明分配豁免，也不能虚构正价值共产品。不设固定比例，不自动替代信用或套用CFF。 | `ilcd-attributional-2010` |
| a_services | fg_service | 串行服务在因果有据时按实测强度/时长归属；并行存储/运输采用实际限制性体积/面积或质量并结合时长/距离及证据。保留损失、退货处理、清理和闲置服务。真实增量负荷向量以原Qc归一一次后加入原群组；毛H仅辅助因果判断。 | `ilcd-attributional-2010` |
| a_inheritance | WIP and unused material | 各实物门分别保留期初期末原料WIP与未使用非WIP物料的逐交换继承向量。领料量若已扣未用退料，不再次扣减。负荷随同一实物和方法移动；不抹除失败批次负荷，也不重新分配此前已放行负荷。 | `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

全部协议采集原始未归一测量、存量变化和逐交换继承负荷向量。aggregation_rule单元格声明目标报告基准，不执行相除。换算、分配、归一是下面依次独立的步骤。毛实物V用于平衡，环境A用于单位清单，二者不能互代。本PCR不提供工厂数值配方、产率、密度、分配百分比或排放因子。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | garnetting | 接收及各物料/拒收料/集尘/废物交换 | lot_mass | row_id; 批次; 实物门; 时间; 整份供应质量; 毛重; 皮重; 原单位; 组分检验; 法律状态; 接收方; 期初原料WIP; 期末原料WIP; 期初未用非WIP; 期末未用非WIP; 逐交换继承向量; 领料是否已净额; 真实损失去向 | 校准秤及批次关联领退料/收集记录；保留整份供应制剂。调查每种真实附件及接收功能。记录未归一原始数量和不确定度；原混合物组分仅作子账。 | 原质量单位; 换算后kg | 每事件及结账 | 全部运行及完整声明期间 | 全部前景物料门 | 每 1 kg 参考流 | 校准; 供应组成; 转移记录; 接收凭证; 负荷谱系 |
| cp_utility | garnetting | 各用电及清理水输入 | meter | row_id; 表起数; 表止数; 时段; 单位; 电压; 地域; 供方边界; 实测密度; 温度; 压力; 换算; 分配驱动; 失败空转清理负荷 | 读取校准时段表/分表及发票；区分累计量和速率；体积换算时独立测密度。分配或相除前保留原始累计量及专属/共享观测。 | kWh; kg; 表计原单位 | 每班及事件 | 包括无产出时段的完整期间 | 接收分选切断开松抽风及辅助支持 | 每 1 kg 参考流 | 表计校准; 供应发票; 因果驱动; 零产出日志 |
| cp_release | garnetting | 首次放行参考输出 | release_mass | 批次; 首次放行ID; 验收时间; 毛质量; 各包装皮重; 净纤维质量; 原单位; 含水; 羊毛比例; 各残留比例; 长度分布; 未开松比例; 接收规格; 期初FG; 期末FG; 曾放行标志 | 使用校准秤称重并将净质量与唯一首次验收记录核对；以代表样本测成分/含水/开松质量。保留原始批次数据；重验和此前已放行退货不入新增Q。 | kg | 每次首次放行 | 完整生产群组 | 首次质量放行门 | 每 1 kg 参考流 | 秤校准; 实验室方法; 接收验收; 唯一批次登记 |
| cp_air | garnetting | 各实际空气排放 | monitoring | row_id; 物种; 相态; 介质; 粒径; 浓度; 真实流速; 体积已累计标志; 取样时段; 进出含水; 已捕集粉尘; 独立水测量; 检出限; 实际治理状态 | 匹配浓度与真实排气流量监测并保持标态/工况条件一致；速率仅积分一次。已累计气体体积不再乘时间。独立量化游离水和其他出口；保留删失结果及不确定度。 | 原浓度及体积/速率单位; 换算后kg | 代表运行及异常/清理事件 | 完整期间及监测覆盖和缺口 | 真实空气出口包括无组织释放 | 每 1 kg 参考流 | 取样方法; 匹配流量; 治理日志; 相态介质证据 |
| cp_service | fg_service | 放行后增量及FG实物门 | cohort_service | 原群组ID; 原Qc; 期初FG; 期末FG; 内部收到; 内部发出; 毛发运; 退货收到; 对外退还; 原交付逆转; 真实新增返工; 报废; H; 表计单位; 服务时段; 限制性驱动; 历史负荷向量 | 将称重/单据/表计事件关联原放行；保留全部毛流转，净交付报告仅逆转已识别的原交付。采集真实服务增量，不重计产量且不相除。 | kg; kWh; 原单位 | 每流转及期间结账 | 当期及继承群组历史 | 存储包装搬运发运及退货 | 每 1 kg 参考流 | 原验收登记; 盘点; 退货; 服务因果归属 |
| cp_packaging | fg_service | 各包装材料及废物行 | component_ledger | component_id; P_open_empty; P_open_attached_WIP; P_open_attached_FG; P_open_reusable; I; ER; P_close_empty; P_close_attached_WIP; P_close_attached_FG; P_close_reusable; S; EO; W; internal_reuse; 单位; 组成; 供方; 实物去向; 来源分区 | 称重/计件；使用件数时独立确定组件净质量。逐组件核对空包装/附着/再用门及供应/接收记录。返回原始P/I/ER/S/EO/W和再用条目；同一混合物的组成分区不可叠加。 | kg; 件数另留 | 每采购使用发运退还报废及结账 | 完整期间及继承包装存量 | 每种实际包装组件 | 每 1 kg 参考流 | 称重证据; 完整组件核对; 接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_raw_units | all inventory rows | 先将每条未归一记录换成所选交换单位。浓度乘匹配累计体积，或对浓度乘真实流速积分一次；保留标态系数。不设默认密度或来源表产率。 | raw_records; measured_conversion; cp_material; cp_utility; cp_air | converted_raw_vector | `bianco-mwool-2022` |
| c_release | garnetted_first_release | Q = sum(唯一首次合格净纤维质量)；同群组期末FG已含其中。先前首次放行不能经返工或发运再成为Q。Q = 0时保留真实清单，不产单位结果。 | cp_release; first_release_id; accepted_net_mass | Q | `bianco-mwool-2022` |
| c_burden | all inventory rows | A_i = 期初继承_i + 当期归属_i - 期末继承_i - 明确分离其他功能_i。先建立专属/虚拟细分和逐交换因果，再计算A_i。分别采用按实物归属的原料WIP与未用非WIP向量。当期归属已净含的继承向量不再扣减；内部转移抵消；各带符号移动仅登记一次。 | converted_raw_vector; cp_material; cp_service; allocation_decision | A_i | `ilcd-attributional-2010` |
| c_single_intensity | all inventory rows | 生产为a_i = A_i / Q；服务增量为a_service_i_c = A_service_i_c / 原群组Qc。换算/归属后各相除一次。卡片直接用已归一的a_i或a_service_i_c。协议汇总字段仅声明目标报告基准；采集者不相除，卡片不再相除。Q = 0只报告原始向量，不虚构分母或通过。 | A_i; Q; A_service_i_c; Qc | a_i; a_service_i_c | `ilcd-attributional-2010` |
| c_stock_intensity | fg_received_stock; fg_returned_stock; fg_gross_dispatch; fg_outward_return | v_i_c = V_i_c / Qc。先将每笔毛实物流转归属真实原群组，再以原放行质量相除一次。V_i_c为实物kg，不是A_service_i_c，也不是新增负荷/采购。接收/退货/发运不新增Q；单位显示之外仍保留绝对库存及带符号转移关联。 | cp_service; V_i_c; Qc | v_i_c | `ilcd-attributional-2010` |
| c_physical | all material gates | 每实物门：期初库存 + 外部毛收到 + 成对内部收到 = 期末库存 + 外部毛发出 + 成对内部发出 + 实际废物 + 实际排放。V是单位一致的毛实物流转账；A为归属环境交换向量，二者不同。合并门抵消内部Q转移；期末FG合格存量不再作为新增输出加到Q。总湿质量和相关干纤维/元素分别以实际物种/相态证据核对。机械撕解不默认反应水。 | cp_material; cp_release; cp_service; cp_air | gross_V; gate_residuals; inherited_vector_transfers | `bianco-mwool-2022` |
| c_packaging | hdpe_wrap; steel_tie; hdpe_wrap_waste; steel_tie_waste | 每个独立组件：P_open + I + ER = P_close + S + EO + W。P含空包装/附着WIP/附着FG/可再用库存；S随毛实物发运而非净Q；内部再用抵消。随退回产品收到的组件即使仍附着也仅作ER一次。一份混合处置只对应一次总处理供方；来源/组成分区核对该总量，不另加供方。 | cp_packaging; P_open; I; ER; P_close; S; EO; W | component_balance_residuals | `bianco-mwool-2022` |
| c_completeness | all inventory rows | F包含所有真实新增且现有卡未列的交换X；完成前新增原子行及身份/单位/来源/协议。仅当X是OTHER中已逐项列明的同侧确切重复时才从F排除，并记录确切原行。OTHER不能隐藏未知物料或排放。保留全部失败/零产出负荷。 | physical_survey; all_raw_records; exact_duplicate_links | F; X; completeness_gaps | `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 确认完整原生名/同义词/注释/CAS、路线/形态/等级/地域/介质/类型及全部属性。仅名称或分类相符不足；供方兼容及科学审批与UUID身份分开。 | 原生直接记录; 精确属性单位链; 批次/来源限制 |
| dq_foreground | all processes | 要求完整真实场址期间记录及明确不确定度；不虚构参考范围或工厂配方。评估所选边料流代表性；2019年公司混合研究仅作路线定性证据。 | 校准; 记录; 取样设计; 缺失数据日志 |
| dq_balance | all material gates | 独立核对湿质量、干羊毛及每种残留共纤维、真实水状态及相关元素。开松不销毁残留染料/整理剂。不得用一个残差拟合油/水或粉尘/蒸发两个变量。 | 独立检验及含不确定度的门平衡 |
| dq_sources | all rules | 保留一手完整上下文证据及适用限制。制造商网页/报告与合作论文不是独立工厂重复。通用分配指导不提供工业数值；片段校验从不证明数值适用。 | 来源定位; 原件/提取谱系; 适用性决定 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | all datasets | 拒绝未知混纤流、无证机械开松、未经处理落毛，以及伪装为本产品的纱线/织物/毡/纤网或湿法/化学替代路线。确认实际羊毛组成及接收/首次放行门。 | `bianco-mwool-2022`; `manteco-project43`; `manteco-recype`; `woolmark-recycling`; `manteco-report-2023` |
| v_reference | reference output | 要求唯一关联Product输出、质量/kg、首次合格净Q及双语一致基准。Q含同群组期末FG一次，排除包装/旧FG/新增发运计数。Q = 0不产归一生产数据集。 | `bianco-mwool-2022` |
| v_accounting | all processes | 分别核查毛V与A、全部原单位和速率/累计换算、此前负荷、期初期末原料WIP和未用非WIP、全部失败/空转/清理/返工、原Qc服务及带符号退货。仅相除一次；核心质量/负荷/门关系未知仍为不确定。 | `ilcd-attributional-2010` |
| v_packaging | all packaging | 逐组件跨全部空/附着/再用状态及毛发运核对P/I/ER/S/EO/W，抵消内部再用。混合物只有一次实物处理总量，来源分区不可叠加。 | `bianco-mwool-2022` |
| v_identity | all inventory rows | 使用UUID前要求实际原生硬限定和数据集类型相容及精确支持链。辅助身份未解决仍须具体命名并披露，不等于零或豁免。核心终端身份或真实方法/边界证据缺失将阻止完整可用结果。精确流的影响评价覆盖另查。 | `ilcd-attributional-2010` |
| v_completeness | all processes | 审计每个真实新增原子X和F；仅剔除已记录的OTHER同侧确切重复。实际未列化学品/燃料/返还/排放必须新增行，不能零占位。观察到范围外活动时，在扩展解决前仍保留真实负荷；不虚构信用。 | `bianco-mwool-2022`; `ilcd-attributional-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际接收/放行功能及负荷归属确立后的归因次生材料供应数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与实测组成/含水/长度及供应地域相容的声明粗梳准备输入；继承清单及实际服务增量承接一次。 |
| excluded_use | 自动替代原生羊毛；固定回收信用；边界不当的废物处理服务；落毛或原毛；纱线/织物；隐含湿法/化学加工；从流名推断影响评价完整。 |
| required_metadata | 羊毛物种和供应批次; 名义单纤维输入规格; 实测羊毛及每种残留共纤维比例及方法和不确定度; 原织物结构及原染色/整理包括危险残留; 已有颜色的机织物生产边料来源; 针辊干式路线及机器设置; 纤维长度分布和未开松比例; 接收方约定的粉尘及异物验收限值; 实际含水测定方法及取样状态; 每次转移的法定副产品或废物状态; 上游负荷归属及截断依据; 接收和首次放行门; 批次和期间及期初期末WIP和FG; 唯一首次放行群组Q和历史Qc; 供应地域及公用工程接口; 毛发运/退货与包装组成; 实际辅助工序及外部处理去向 |
| required_quality_disclosure | 实测期间/场址/覆盖；含水/成分方法；此前废料形成负荷及分配；完整群组/门/库存/退货/包装向量；不确定度；未解决辅流及未支持影响评价覆盖。 |
| update_trigger | 输入物种/有意混纤/整理或法律功能改变；干转湿/化学路线；放行门或归一变化；真实能源/供方接口变化；新增物料/排放；接收规格变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bianco-mwool-2022 | literature | Bianco I.; Gerboni R.; Picerno G.; Blengini G.A. (2022). Resources 11:41. https://doi.org/10.3390/resources11050041 ; §2.1; Figure 1; Appendix A Tables A3–A7. | 工业干式撕解及相邻湿式撕碎/未再处理纺纱废料替代路线的定性证据；分选与包装。表A6数值和避免生铁信用不作默认值。研究混合来源路线且采用2019年数据；不采用其零负荷和CFF假设。 |
| manteco-project43 | extension_guidance | Manteco. Project43. https://manteco.com/project/project-43/ ; dated web snapshot 2026-10-25. | 制造商关于可追溯羊毛织物服装裁剪边料及单纤维/双纤维替代组成的证据；支持选择名义单纤维路线并实测成分，不将全部边料视作纯羊毛。 |
| manteco-recype | extension_guidance | Manteco. How are recycled wool colors created without dyeing? Updated 12 January 2023. https://manteco.com/how-are-recycled-wool-colors-created-without-dyeing/ ; snapshot 2026-10-25. | 按成分和颜色分选、机械回收中保留原有颜色。后续配色混合及试验梳理是另行活动；不转移所宣称的节约量或配方比例。 |
| woolmark-recycling | extension_guidance | The Woolmark Company. Recycled Wool: The Ultimate Circular Solution. https://www.woolmark.com/industry/sustainability/recycled-wool-the-ultimate-circular-solution/ ; snapshot 2026-10-25. | 独立行业指导：按纤维/颜色/质量分选、附件去除和切断；与后续梳理纺纱及开环化学或热处理选项的区别。认证阈值不证明本批成分。 |
| manteco-report-2023 | literature | Manteco. Sustainability Report 2023. https://manteco.com/wp-content/uploads/2024/09/Manteco-2023-Sustainability-Report.pdf ; PDF pp.24–26; printed pp.46–51. | 制造商一手流程图将服装边料及干式撕解/湿式撕碎与后续梳理纺纱分开；原有颜色路线。与论文/网页共享公司证据，不算独立数值确认。 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for LCA — Detailed guidance. First edition March 2010. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; §§7.9.2–7.9.3; printed pp.255–272. | 仅用于确需分配的归因情形：独立细分/虚拟细分；逐交换的决定性物理因果；仅余下共同过程门的市场价值。不支持自动回收截断或工业配方。 |
