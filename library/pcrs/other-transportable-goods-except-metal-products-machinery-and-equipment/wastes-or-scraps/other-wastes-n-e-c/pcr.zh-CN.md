---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-wastes-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 整批粗大豆油脱臭馏出物的首次散装放行

## 1. 范围与适用性

本方法覆盖化学精炼大豆油脱臭后，经单一冷凝回路回收、分开储存并在精炼厂罐出口首次散装放行的一批可追溯整批粗馏出物，合同用途为回收生育酚或甾醇。其为非感染性工业残余商品，不是生物处理废物流。须取得批次特定安全分类、成分和接收方认可；本方法不作普遍无害性声明。[cafc-adm-2009; cbp-n079775; aocs-deodorization]

历史海关证据支持残余商品身份，不证明当前工厂组成、废物法规地位或所有馏出物的归类。2026 年 10 月 CPC 说明提供 HS 2022 3825.90 关联；2025 年 6 月分类分母不变。本方法不规定税率。[unsd-cpc3-2026]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.other-wastes-n-e-c |
| classification_refs | CPC 3.0 39990，限定范围的较窄映射已接受，见 docs/adr/2026-11-21-accept-cpc-39990-whole-crude-soybean-deodorizer-distillate.md |
| covered_products | 仅化学精炼产生的整批粗大豆油脱臭馏出物 |
| excluded_products | 物理精炼脂肪酸馏出物；选择性冷热冷凝馏分；分离生育酚、甾醇及商品脂肪酸；皂脚；饲料制剂；食用大豆油；其他 HS 分支的城市垃圾、污泥、废溶剂和化工废物；啤酒废水；下游回收服务。 |
| representative_product | 未经分馏的单一冷凝回路粗残余批次 |
| production_route | 化学精炼；脱臭；整批冷凝物回收；分罐储存；首次放行 |
| market_state | 散装粗残余原料；按实际交接温度记录固态、膏状或液态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次散装放行的整批粗大豆油脱臭馏出物 |
| How much | 1 kg |
| How well | 经批次分析认可用于合同回收；无默认纯度或收率 |
| How long or cycle | 一个原始放行批群；转售或调拨不产生新生产量 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 整批粗大豆油脱臭馏出物 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 大豆来源；化学精炼路线；单一冷凝回路整批回收；场址和运营方；批号和时间；首次放行和接收方；湿基/收到基质量；水分和成分检测基准；温度和物态；危险性/运输类别；合同用途；上游负担及分配；加热和清洗配置 |

所有必需限定信息须在数据集元数据、过程说明或参考流备注中声明；缺失则参考定义不完整。核实完全匹配的整批残余商品 Product flow 之前，不绑定商品 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mass_basis | reference_product | Mass | kg | 采用收到基整批净质量，排除罐和车辆皮重。水分属于声明的整批商品；须实测水分，不得暗换为干基或生育酚质量。 |
| meter_energy | release_electricity | Energy | kWh | 电表 kWh 与供方原生属性分开。1 kWh = 3.6 MJ；相同能量单位组不证明净热值属性。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 放行暂存前专用单一冷凝回路出口的整批冷凝物 |
| starting_condition_role | intermediate_product |
| product_classification_scope | 仅所限定的化学精炼大豆整批残余商品 |
| recursive_input_rule | 纳入进厂粗批次适配的上游精炼负担；按供方覆盖范围递归且避免重复 |
| upstream_dataset_requirement | 明确来源精炼厂、路线、产出批群、分配、公用工程和厂门覆盖；未知覆盖阻止完整研究 |
| disclosure | 前景仅覆盖放行厂门；仍须上游生产负担。不计避免回收抵扣。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | release | 纳入分罐暂存、加热、泵送、取样、清洗和实际放行。终点为外运前精炼厂出口；分别记录所有权、运营者、保管交接点及接收合同，外包操作仍须纳入。 | aocs-deodorization; cafc-adm-2009 |
| boundary_state | release | 不发生分离的冷却或加热可保留粗品身份；排除反应、中和、溶剂提取、酯化、分馏和选择性冷凝；核实实际批次路线。 | aocs-deodorization; cafc-adm-2009 |
| boundary_transport | release | 仅接受具有成分、相容性、运输分类、温度限值、密闭散装容器及接收认可记录的批次；不得由税则身份推定安全；排除感染性、混合未知及危险性未经评估的批次。 | aocs-deodorization; cafc-adm-2009 |
| boundary_equipment | release | 本配置不含周转包装或托盘池。罐和车辆属于设备，不属于商品净重。若桶、内衬或托盘实际跨界，本散装配置不完整：使用前须按材料增加每项购买、首次非购买外部接收、可追到同件的真实退回、外发、退役和存量事件。采购、运输及服务负担仅计一次，即使供方漏列也须记录；缺失供方覆盖仍为未决。 | aocs-deodorization; cafc-adm-2009 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| release | 分罐整批粗品放行 | required | 已核实适用原始批次 | foreground | reference_product |

下列数量采用相同放行批群及分母 Q：首次合格商品净 kg，仅计一次。条件接口须有实际存在证据或不发生的记录，不得假定为零。内部循环不是外部接收。完整研究前，每种实际存在而未列出的燃料、热载体、化学品、废物或排放，须按物质、介质及证据分别增卡；未给默认排放卡不证明零排放。

### 过程：整批粗品放行（`release`）

#### 输入

##### 产品流

###### 放行前整批粗大豆油脱臭馏出物 (`crude_intake`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 放行前整批粗大豆油脱臭馏出物
- 流属性/单位: 质量 / kg
- 数量规则: 测量从单一冷凝回路进入专用批罐的新回收净接收量。期初未放行罐底存量按存量携带原有负担；不得将已放行存量当作新粗品生产。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crude_intake`
- 来源: `aocs-deodorization`

###### 放行罐电表处的电力 (`release_electricity`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 放行罐电表处的电力
- 流属性/单位: 能量 / kWh
- 数量规则: 计量归属于该批的罐泵送和伴热电量；排除与供方电表重复的部分。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release_electricity`
- 来源: `aocs-deodorization`

###### 罐加热用外购蒸汽 (`release_steam`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 罐加热用外购蒸汽
- 流属性/单位: 质量 / kg
- 数量规则: 仅在实际使用蒸汽加热时纳入；采集供汽质量、压力、温度及凝结水状态。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_release_steam`
- 来源: `aocs-deodorization`

###### 清罐用水 (`cleaning_water`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 清罐用水
- 流属性/单位: 质量 / kg
- 数量规则: 仅在批次边界内实际用水清罐时纳入；计量供水。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleaning_water`
- 来源: `aocs-deodorization`

###### 氢氧化钠清洗水溶液 (`cleaning_naoh`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 氢氧化钠清洗水溶液
- 流属性/单位: 质量 / kg
- 数量规则: 仅在实际使用时纳入；称量溶液并记录氢氧化钠质量分数；不得将干活性物质量当作溶液质量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleaning_naoh`
- 来源: `aocs-deodorization`

#### 输出

##### 产品流

###### 整批粗大豆油脱臭馏出物 (`reference_product`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 整批粗大豆油脱臭馏出物
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_reference_product`
- 来源: `aocs-deodorization`

###### 返回的蒸汽凝结水 (`steam_condensate`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 返回的蒸汽凝结水
- 流属性/单位: 质量 / kg
- 数量规则: 仅在实际向场外返回凝结水时纳入；计量返回质量并防止供方抵扣重复。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam_condensate`
- 来源: `aocs-deodorization`

##### 废物流

###### 不合格粗大豆油脱臭馏出物 (`offspec_distillate`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 不合格粗大豆油脱臭馏出物
- 流属性/单位: 质量 / kg
- 数量规则: 仅在发生拒收时纳入；单独称量并记录接收方及处置或返工路线。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_offspec_distillate`
- 来源: `aocs-deodorization`

###### 废碱性清罐液 (`cleaning_liquor`)

跨越放行过程边界的一个原子交换；按关联批次协议取得其数量。

- 选定流: 废碱性清罐液
- 流属性/单位: 质量 / kg
- 数量规则: 仅在实际碱洗时纳入；称量或以实测密度换算计量体积，记录处理供方。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cleaning_liquor`
- 来源: `aocs-deodorization`

## 7. 分配与共产品处理

本记录为采用明确分配划分的归因型供给数据集。须记录细分为何不能消除联合生产，以及替代/系统扩展为何不适用于本数据集目标；后果型回收抵扣主张须另行建模。一般分配层级由 ILCD 支持，不由油加工章节证明。[jrc-ilcd-2010]

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_upstream | release | 残余商品或废物税则用语不证明零负担。先细分精炼操作，直接归属专用回收负担。不可分离联合生产须记录因果物理分配；无法成立时，记录同期间经济分配的质量、价格、币种及敏感性。不规定数值份额，不得将已包含全部负担的油数据集与第二套完整公用工程重复相加。 | jrc-ilcd-2010 |
| allocation_release | release | 直接归属批次特定暂存、加热、清洗及拒收负担。共享罐占用时间或计量用量须在所有服务批次间记录分配，保留失败批次负担。不得将失败负担全部移给处置或用毛进料量作分母。保留凝结水实物外发，不作未经核实的替代抵扣。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_crude_intake | release | crude_intake | 新整批粗品接收 | 来源批号；接收罐；毛重/皮重；交接表；期初期末未放行在制品；原始逐交换负担向量；水分；取样温度 | 称量扣除设备皮重的新收到基粗品，或用校准质量表计量指定单一冷凝回路的交接。期初罐底不加进新接收量，按在制品台账携带其原有上游负担。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 秤/质量表校准；来源形成记录；在制品负担台账 |
| cp_release_electricity | release | release_electricity | 罐区电表读数 | 电表号；电压；供方；地点；起止 kWh；伴热/泵送时长；批次归属；供方已含范围 | 读取校准电表的 kWh 差值，涵盖实际泵送/伴热及共享闲置时段。独立记录准确供方厂门和属性，不预设净热值属性。排除与粗品供方电量的重复覆盖。 | kWh | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 电表校准及接线覆盖；供方范围；分配日志 |
| cp_release_steam | release | release_steam | 蒸汽供给记录 | 蒸汽表；供给 kg；压力；温度；干度；供方厂门；热量/质量计费口径；凝结水返回协议；批次加热时段 | 对实际间接罐加热计量供汽质量，保留热状态及实际供方覆盖。按热量计费时，换算前采集供方焓口径和凝结水返回基准，不假定固定 MJ/kg。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 蒸汽表校准；供方焓/账单说明；加热及返回日志 |
| cp_cleaning_water | release | cleaning_water | 清洗水表记录 | 清洗事件；水表；供给 kg 或体积；按体积时的密度及温度；罐；批次服务分配；供方厂门 | 将实际外部清罐水与凝结水、配制清洗剂中的水分开计量。仅以适配实测密度换算体积；记录返回或排出目的地。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 水表校准；密度测量；清洗工单 |
| cp_cleaning_naoh | release | cleaning_naoh | 清洗溶液接收及使用 | 供方；配方；批号；NaOH 质量分数；毛重/皮重；用液 kg；期初期末库存；购买预混液或现场稀释 | 称量实际消耗的氢氧化钠水溶液配方，保留供给浓度。活性 NaOH 检测属于非加和子账，不是第二次购买。仅单独供给的稀释水单独记录，避免预混液水重复。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 配方证明；秤；存量/用量核对；清洗记录 |
| cp_reference_product | release | reference_product | 首次质量放行称量记录 | 唯一原始批次；质量放行时间；毛重/皮重；收到基净 kg；水分检测；温度/物态；接收认可；已放行成品；实际发运时间 | 用校准秤或质量表记录首次合格整批商品质量，排除设备皮重。区分首次放行和发运；新放行期末成品仅计入 Q 一次，排除历史成品、复验、转售及已放行退回。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 校准称量；质量/接收方放行签认；唯一批次成品历史 |
| cp_offspec_distillate | release | offspec_distillate | 拒收粗品移出单 | 批次；拒收阶段；原因；湿基净 kg；目的地；内部返工或外部移出；原有交换向量 | 在实际外部移出门单独称量不合格整批粗品。内部返工在原批次内抵消，不是外部废物输入/输出；携带原有负担及全部实际新增服务。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 拒收证明；校准净称量；处理或返工签收 |
| cp_cleaning_liquor | release | cleaning_liquor | 废碱液移出单 | 清洗事件；整批废液湿基 kg；NaOH/油含量；按体积时的体积及实测密度；罐；处理接收方；外部门 | 称量或计量实际废碱性清洗液，体积换算时实测密度。保留整批湿质量并单独检测污染物；不得将污染物检测值再次加到废物质量，或把留存废液当作基本排放。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 校准称量/仪表；密度及成分检测；处理签收 |
| cp_steam_condensate | release | steam_condensate | 外部凝结水返回记录 | 返回表；净 kg；温度；压力；供方返回门；实际返回焓及抵扣口径 | 计量实际跨越供方厂门返回的凝结水，记录热状态及返回抵扣口径。内部循环不是该交换。将返回质量与供汽及实际损失核对，不强制两者相等。 | kg | 逐批逐事件 | 完整声明放行批群 | 同一精炼厂及实际承包方接口 | 每 1 kg 参考流 | 凝结水表校准；热状态；供方账单核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_denominator | reference_product | Q = 批群内原始首次合格放行净 kg 之和，包含已首次放行但仍在期末成品存量中的商品，排除皮重、拒收量、历史已放行期初存量及重复放行。内部返工不记新外部进料。 | cp_reference_product | Q | aocs-deodorization |
| cohort_inventory | all inventory rows | 各归属批群数量均除以同一 Q；粗品输入包含分配期初库存，排除留给后批的期末库存。整批物料与水、蒸汽凝结水及清洗分别核对。 | Q; collection records | 每 1 kg 参考流的交换 | aocs-deodorization |
| stock_closure | crude_intake; reference_product; offspec_distillate | 未放行门：期初未放行粗品 + 新粗品接收 = Q + 期末未放行粗品 + 拒收或取样移出 + 实测损失。成品存量门：期初已放行存量 + Q + 真实已放行外部退回 = 期末已放行存量 + 全部发出 + 成品废弃或损失。内部返工留在原门内；两门合并时 Q 抵消，期末成品不再另加为生产量。按实测不确定度调查差额，不虚构容差。 | stock and weigh records | closure evidence | aocs-deodorization |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_lot | release | 按声明基准实测水分、脂肪酸、生育酚及甾醇，记录取样和分析不确定度。文献样本值不是工厂默认值、收率因子或验收限值。 | Lot certificate; pmc-soybean-2020 |
| quality_burden | release | 完整 LCI 使用前取得准确供方厂门及公用工程覆盖、分配记录、危险性/运输评估及接收签认。未知量保持未知。 | Supplier records; signed lot release |

所有服务事件携带原批号及逐交换负担向量。在制品负担仅向首次放行转入一次。Q = 0 的批群不能归一化：实物存量、失败及服务负担须保留并转向有记录的后续批群或实际处置目的地，不得抹去。已放行退回、复验和跨期处理不产生新 Q；保留原有负担，仅记录实际新增服务及有证据的冲回。本数据集在精炼厂出口首次有据质量放行事件、外运之前截止；后续成品暂存、发运服务、外运及退回属于关联的放行后服务账，不计入本首次放行清单。保留成品存量台账，以核对这些实物事件及其原有负担。

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_identity | release | 要求准确路线、整批冷凝物状态和批次来源；拒绝物理精炼 Waste flow 绑定、分离化合物及原料油替代。 | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |
| validation_quantity | release | 要求 Q > 0、首次放行唯一性、净质量及存量闭合；所有行归一到同一 1 kg 参考流。不得以回收维生素质量、干质量或卡车毛质量作为 Q。 | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |
| validation_completeness | release | 流身份、实测量、供方负担或安全证据未决时，不能取得完整研究资格。记录所有实际原子交换及条件不发生证据。机械 PCR 检查不批准方法学或工厂数据。 | unsd-cpc3-2026; cafc-adm-2009; pmc-soybean-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 单独建模回收过程的整批粗原料输入 |
| allowed_use | 仅适配厂门且披露分配的化学精炼大豆粗品批次 |
| excluded_use | 物理精炼脂肪酸馏出物；选择性冷热冷凝馏分；分离生育酚、甾醇及商品脂肪酸；皂脚；饲料制剂；食用大豆油；其他 HS 分支的城市垃圾、污泥、废溶剂和化工废物；啤酒废水；下游回收服务。 |
| required_metadata | 全部参考限定信息、批群 Q、实际原生流/属性/单位身份、上游来源覆盖 |
| required_quality_disclosure | 实测覆盖、身份未决、分配敏感性、不确定度及安全接收 |
| update_trigger | 原料油、精炼模式、冷凝配置、状态、厂门、接收规范或供方覆盖变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory notes, 23 October 2026, CPC3 row 1947; June 2025 frozen structure: https://unstats.un.org/unsd/econstats/classifications/cpc | HS 2022 3825.90 关联及相邻类别排除条件，本项映射决定另见裁定记录 |
| cafc-adm-2009 | official_guidance | ADM v United States, 2008-1342, majority opinion, 26 March 2009: https://www.cafc.uscourts.gov/opinions-orders/08-1342.pdf | 整批残余商品身份；推翻下级 3824.90 判决；不提供工厂数量 |
| cbp-n079775 | official_guidance | US CBP NY N079775, 30 October 2009: https://rulings.cbp.gov/ruling/N079775 | 独立大豆馏出物回收原料裁定；仅历史进口对象 |
| aocs-deodorization | handbook | AOCS Lipid Library, Deodorization, revised 23 July 2019: https://www.aocs.org/resource/deodorization/ | 冷凝及化学/物理路线区分和专用放行清单设计；无默认运行值或分配份额 |
| pmc-soybean-2020 | literature | Processing impact on tocopherols and triglycerides composition of soybean oil and its deodorizer distillate evaluated by high-performance liquid chromatography: https://pmc.ncbi.nlm.nih.gov/articles/PMC7763106/ | 原始工厂样本支持批次分析及变异披露；非海关批次或工厂收率证据 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance (2010), section 7.9; https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | 一般多功能性、细分及分配层级；PCR 特定划分和实测份额须研究证据 |
