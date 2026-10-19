---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.corncob-derived-crystalline-d-xylose
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 玉米芯制结晶D-木糖——硫酸水解与甲醇洗晶路线

## 1. 范围与适用性

本PCR只覆盖一种分离化学产品：以玉米芯为原料，经硫酸水解、碳酸钙中和、活性炭/离子交换精制、蒸发、冷却结晶、甲醇辅助离心洗晶、热风干燥和袋装所得结晶D-木糖（CAS 58-86-6；C5H10O5）。USP支持化学身份、晶体状态及玉米芯加工序列；ENCO说明所选技术路线。两者均未提供经审计工厂配方。本PCR不规定固定纯度、水分、水合物、溶剂残留、干燥失重、反应水量或收率。[usp-fcc-xylose-2015; enco-xylose-technology]

排除L-木糖、未指明立体异构体混合物、阿拉伯糖、核糖、其他糖/CAS身份、木糖醇、糖醚、糖酯及其盐、复配甜味剂、葡萄糖/果糖/乳糖/麦芽糖/蔗糖产品、混合食品糖浆、淀粉与纤维素产品。排除木糖溶液作为终产品、另行声明的化学计量木糖水合物、其他生物质原料、草酸/酶法路线和仅水洗晶路线。这些对象须另行判断适用性，不得跨对象套用本参考UUID。

终端参考门为实际工厂门净交付，并非新增质量放行。Q为同产品、同路线、同状态及同期间唯一正验收交付的净千克数，严格大于零且不含包装。新增首次质量放行R另行跟踪，同时保留失败/零产出批次、退回、返工、期初末在制品与成品及其继承交换负荷。R不必等于Q。未交付晶体留在期末成品中，不计入Q。取消或退回交付须关联原交易冲回数量及负荷；再检验或再次交付不能造成重复生产或重复净交付。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.corncob-derived-crystalline-d-xylose |
| classification_refs | CPC 3.0 35240；仅较窄候选分类语境，不声明已接受映射 |
| covered_products | 上述单一玉米芯路线的化学身份明确的结晶D-木糖 |
| excluded_products | 排除L-木糖、未指明立体异构体混合物、阿拉伯糖、核糖、其他糖/CAS身份、木糖醇、糖醚、糖酯及其盐、复配甜味剂、葡萄糖/果糖/乳糖/麦芽糖/蔗糖产品、混合食品糖浆、淀粉与纤维素产品。排除木糖溶液作为终产品、另行声明的化学计量木糖水合物、其他生物质原料、草酸/酶法路线和仅水洗晶路线。这些对象须另行判断适用性，不得跨对象套用本参考UUID。 |
| representative_product | D-木糖晶体，CAS 58-86-6，按交付时实测水分和溶剂残留 |
| production_route | 玉米芯硫酸水解；碳酸钙；粉状活性炭；阳/阴离子交换；蒸发浓缩；冷却结晶；甲醇洗晶；干燥；包装；库存与发运 |
| market_state | 袋装结晶固体，声明等级并检测实际水分和甲醇残留；不包括溶液或隐含水合物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应所述路线分离的结晶D-木糖 |
| How much | 实际在工厂门净交付并正验收的1 kg结晶产品 |
| How well | 按身份、含量基准、水分、物相与残留溶剂实测结果满足声明规格，不采用默认纯度或干燥后零残留宣称 |
| How long or cycle | 完整声明报告期，批群及库存结转可追溯 |
| reference_flow_link | delivered_xylose |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 木糖 `379f8fcb-e63e-4097-aa56-ada4ace47df0` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | D型身份及CAS; 非水合物晶体物相确认; 含量检测方法与检测基准; 实际水分和甲醇残留; 玉米芯来源; 硫酸/碳酸钙/甲醇路线; 批次与期间; 场址地理; 供应商与原生名称相容性; 实际净交付门; 期初末在制品/成品质量及结转负荷; 首次放行与交付的区分; 退回/返工谱系; 包装袋组成; 公用工程路线; 分配与废物去向 |

必需限定信息须全部进入具体数据集元数据、过程说明、参考流备注或产品说明；缺失即参考定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用交付净晶体质量Q并排除包装；按CAS、路线、等级与物态分别记账。R为首次质量放行量，不能替代Q。 |
| `solution_subledger` | 购入制剂 | 质量 | kg | 每份外购酸、碱或甲醇制剂仅按整份记一次；测得的溶质与载水为组成子账，不是额外采购；另加水为独立输入。 |
| `water_species` | 水解与精制 | 质量与元素平衡 | kg | 独立测量生物质组成、水分、物种及出口物相。水解耗水、碳酸盐中和产物与离子交换/再生水依实际有证据的化学关系核算；游离水、结晶水和蒸发分别记账。不得用同一闭合残差反推未知反应水与未知出口；COD不能替代糖/物种测定。 |
| `raw_units` | 全部测量交换 | 原属性及换算轨迹 | kg; kWh; MJ; m3 | 保留体积对应温度/组成与实测密度、蒸汽焓/凝结水及仪表积分基准。速率只对时间积分一次；已积分的液/气体积不得再乘时间。不得将原生次级属性系数解读为密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收的玉米芯、整份商业试剂、补充介质及包装袋，关联上游供应链 |
| starting_condition_role | 前景入口，内部区分生产账与仓储/发运账 |
| product_classification_scope | 仅所指化学身份明确的固体D-木糖；分类只作语境 |
| recursive_input_rule | 外购D-木糖晶种为携带上游负荷的一项外部输入；回收晶种、糖粉、母液、凝结水与返工为内部交接，不是新增采购或新增产量。 |
| upstream_dataset_requirement | 每项外部输入匹配真实商品形态、浓度、来源、地理与技术；未解决的供应商匹配须披露 |
| disclosure | 从接收至实际净交付，包括生产放行、失败批次、库存结转、仓储/搬运/包装/发运、返工、公用工程、排放、场外处理及任何场内处理扩展 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | xylose_supply | 纳入实际接收、水解、残渣分离、中和、炭/离子交换、浓缩/结晶、甲醇洗晶、干燥、质控、包装、仓储、搬运与装运。生产与放行后账分别记载，合并时抵消内部交接。 | `enco-xylose-technology` |
| `boundary_utilities` | utility and treatment systems | 下列供用工程清单按外购电与蒸汽并核算凝结水。若场址设有锅炉、直燃干燥、制冷、场内污水处理或溶剂回收，须在声明覆盖前将每种实际燃料、试剂、制冷剂、回收输出与污染物扩为独立原子行，保留完整负荷。场外处理只关联一次测得废物，不另记为前景直接排放。 |  |
| `boundary_identity` | reference and intermediate streams | 所选原生身份为Xylose / 木糖，是产品流；完整名称分量包括生物质提取、符合食品安全标准、五碳糖及工厂生产混合，别名包含结晶D-木糖，备注涉及木聚糖和玉米芯。保留双语raw/原生限定，解释为原生生物质来源限定，不将其当作实测纯度。原生地理字段为空，不声明中国内地/香港或其他供货地点。该记录未指明CAS、具体纯度、水合状态、硫酸路线细节、供应商或生产数量。其23210分类与拟议化学纯残余糖分类语境存在冲突，此元数据债务与物理身份分别披露。不采用备注中的热量、疗效等宣称或合成衍生物描述。具体数据集须验证D型身份、实际晶体状态、等级、甲醇残留及来源相容性；宽泛流身份不代表供应商或背景生产数据集。 |  |
| `boundary_solvent` | methanol wash and drying | 检测溶剂残留，跟踪外购制剂、循环母液、回收溶剂、排放及空气中的甲醇。不采用干燥后完全无残留或甲醇洗晶母液符合食品级的泛化断言。外出母液须有真实组成/去向及产品或废物证据。 | `enco-xylose-technology` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| xylose_supply | 玉米芯至结晶D-木糖净交付 | required | 始终；逐项纳入实际技术步骤 | 生产账与放行后仓储/发运账内部独立，合并抵消交接 | 1 kg参考流 |

本复合过程保留按实测单元操作的子账，不将内部水解液/精制液、首次放行或仓储接收伪装为采购或额外终端产品。若拆分为单元过程，相同物理交接两端使用同一身份并抵消；不能隐藏共用参考UUID的真实中间物或联产品。

### 过程：玉米芯至净交付（`xylose_supply`）

#### 输入

##### 产品流

###### 接收玉米芯（`corncobs`）

按实收/实耗整份生物质及实测水分、木聚糖和其他成分记录；不得把玉米芯质量等同木糖或葡萄糖。

- 选定流：接收玉米芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`usp-fcc-xylose-2015`; `enco-xylose-technology`

###### 硫酸水溶液制剂（`sulfuric_solution`）

整份商业酸溶液仅记一次，保留实测含量与载水子账；场内稀释加水另记。

- 选定流：硫酸水溶液制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 碳酸钙粉末（`calcium_carbonate`）

记录实供粉末纯度及投量；硫酸钙物相、溶解钙与碳酸盐来源CO2采用测量或独立证据，不套用通用石膏系数。

- 选定流：碳酸钙粉末
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 粉状活性炭（`activated_carbon`）

仅记新补充/更换量；内部重复使用保留负荷，不构成另一次采购。

- 选定流：粉状活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_media`
- 来源：`enco-xylose-technology`

###### 强酸阳离子交换树脂（`cation_resin`）

跟踪实际供货离子型、湿态调理、补加、再生及寿命负荷；不假定干态或氢型。

- 选定流：强酸阳离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_media`
- 来源：`enco-xylose-technology`

###### 强碱阴离子交换树脂（`strong_anion_resin`）

独立跟踪真实供货形态及服役周期更换量。

- 选定流：强碱阴离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_media`
- 来源：`enco-xylose-technology`

###### 弱碱阴离子交换树脂（`weak_anion_resin`）

跟踪此独立树脂及其调理/再生，不与强碱树脂合并。

- 选定流：弱碱阴离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_media`
- 来源：`enco-xylose-technology`

###### 盐酸水溶液制剂（`hydrochloric_solution`）

整份外供再生剂仅记一次，保留含量、储存损失、再生及淋洗交接。

- 选定流：盐酸水溶液制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 氢氧化钠水溶液制剂（`sodium_hydroxide_solution`）

整份外供碱再生剂仅记一次，保留真实浓度与载水。

- 选定流：氢氧化钠水溶液制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 甲醇洗晶液（`methanol_liquid`）

按真实水分/纯度规格记录整份外购洗晶液；回用洗液为内部流；甲醇组成子账测定并跟踪残留/出口各路径。

- 选定流：甲醇洗晶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 外供工艺水（`process_water`）

分别外供的清洗、水解、稀释、淋洗与冷却补水；载水和内部凝结水/循环水分别为子账，不再增加采购。

- 选定流：外供工艺水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`enco-xylose-technology`

###### 外购D-木糖晶种（`purchased_seed`）

仅在使用时纳入外购晶种，保留身份和供应商继承负荷；自有回收晶体仍为内部流。

- 选定流：木糖 `379f8fcb-e63e-4097-aa56-ada4ace47df0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_materials`
- 来源：`enco-xylose-technology`

###### 外购电力（`electricity`）

纳入全部制造、送风、泵、控制、质检、仓储、搬运及发运用电，含失败批次、停机与返工；共享负荷按可追溯原因分配。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`enco-xylose-technology`

###### 外购蒸汽（`steam`）

保留压力、温度、焓与实测质量，包含干燥/蒸发及损失；保留凝结水返回，不再按MJ重复采购相同热量。

- 选定流：外购蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_utilities`
- 来源：`enco-xylose-technology`

###### 木糖塑料编织外袋（`woven_sack`）

一件外供编织外袋；声明实际聚合物、添加物及供应商质量，不假定通用聚丙烯等级。包含未用废袋与替换包装。

- 选定流：木糖塑料编织外袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packing`
- 来源：`enco-xylose-technology`

###### 木糖塑料薄膜内袋（`film_liner`）

一件独立购入内袋，记录真实聚合物与质量。若作为一件已组合内衬袋购入，须以一项具体供货袋替代这两项采购，并保留组成子账。

- 选定流：木糖塑料薄膜内袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packing`
- 来源：`enco-xylose-technology`

#### 输出

##### 产品流

###### 净交付D-木糖晶体（`delivered_xylose`）

唯一终端产品输出。Q为经库存/退回核对的实际正验收净交付产品，报告输出恰为1千克。R与库存交接为内部核算事实，不是额外终端输出。

- 选定流：木糖 `379f8fcb-e63e-4097-aa56-ada4ace47df0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_delivery`
- 来源：`usp-fcc-xylose-2015`; `enco-xylose-technology`

###### 返回蒸汽凝结水（`condensate_return`）

按一致公用工程供应商边界记录真实外返质量、温度与焓；内部回用不是输出。

- 选定流：返回蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`enco-xylose-technology`

##### 废物流

###### 湿态水解玉米芯残渣（`cob_residue`）

一股实体残渣，保留真实水分、残余碳水与去向。作为产品利用须有身份及分配证据，不自动零负荷或给予燃料抵扣。

- 选定流：湿态水解玉米芯残渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 废脱色滤饼（`filter_cake`）

一份实收滤饼，保留实际共同过滤的沉淀硫酸钙、废炭、夹带糖和液体组成。保留混合滤饼组成，不改作纯石膏，也不将其中炭/水另作重复处置质量。

- 选定流：废脱色滤饼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 废强酸阳离子交换树脂（`spent_cation`）

真实退役树脂、离子/污染物负载与湿质量，关联更换/寿命分摊。

- 选定流：废强酸阳离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 废强碱阴离子交换树脂（`spent_strong_anion`）

独立退役树脂，不设通用年度更换默认值。

- 选定流：废强碱阴离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 废弱碱阴离子交换树脂（`spent_weak_anion`）

独立退役树脂，保留真实处理去向。

- 选定流：废弱碱阴离子交换树脂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 含甲醇木糖母液排放液（`mother_liquor_purge`）

整体实体外排母液，附糖、水与甲醇子账。内部回用不是废物输出；实际独立溶剂回收/产品输出须增加具体行及负荷分配。

- 选定流：含甲醇木糖母液排放液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_residues`
- 来源：`enco-xylose-technology`

###### 收集后外送处理的工艺废水（`wastewater`）

经来源路由的一股收集水流，排除已单列排出的母液。保留真实溶解糖、盐与溶剂；不得以总质量/COD推断各物种。实际场内处理须扩展清单。

- 选定流：收集后外送处理的工艺废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`enco-xylose-technology`

###### 废塑料编织外袋（`sack_scrap`）

仅记实际移除的外袋废料；随货交付包装留在包装子账，不记厂内废物。

- 选定流：废塑料编织外袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packing`
- 来源：`enco-xylose-technology`

###### 废塑料薄膜内袋（`liner_scrap`）

仅记实际废内袋或移除的替换件，去向及质量与外袋分别记录。

- 选定流：废塑料薄膜内袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packing`
- 来源：`enco-xylose-technology`

##### 基本流

###### 甲醇，排放至空气（`methanol_air`）

控制后干燥、洗晶、储存及逸散源匹配记录；监测物种与气流或采用独立证实的源特定模型，不以溶剂采购量减任意余量推算。

- 选定流：甲醇，排放至空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`enco-xylose-technology`

###### D-木糖粉尘，排放至空气（`sugar_dust`）

只记未捕集外排糖尘；旋风/袋滤回收与筛出结块回流均为内部返工，保留能耗与损失。

- 选定流：D-木糖粉尘，排放至空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`enco-xylose-technology`

###### 水蒸气，排放至空气（`water_air`）

以独立水分/凝结水测量支持的工艺/干燥/公用工程净水蒸气，区分载气、反应水、保留水与公用工程凝结水。

- 选定流：水蒸气，排放至空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`enco-xylose-technology`

###### 碳酸盐中和二氧化碳，排放至空气（`carbonate_co2`）

采用真实碳酸盐消耗与独立有证据的物种/反应程度或监测；区分矿物碳酸盐碳与生物质碳，不设经验闭合系数。

- 选定流：碳酸盐中和二氧化碳，排放至空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属同一净交付批群的未归一交换分子A除以Q，仅报告一次
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`enco-xylose-technology`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared production and services | 优先采用分项过程计量与批群追溯，再处理联合负荷分配。记录共享公用工程、处理和仓储驱动量，不能遗漏失败/零产出批次；其负荷归于有依据的同产品批群或另有理由的原因，不能编造正产量。 | `jrc-ilcd-allocation-2010` |
| `allocation_residue` | residue and mother liquor | 记录每个真实输出是废物还是可用联产品及其实测组成和去向，不自动抵扣被替代产品。若存在不可分的有用联产品，先逐交换识别并应用有依据的决定性物理因果关系，包括可行的虚拟细分。仅对仍无法据此归属的剩余负荷，才可按真实共同功能在同一工序出口状态下的有记录市场价值分配；说明不能物理归属的原因，记录同期匹配数量/价格，并报告敏感性。分配前保留完整期间账。 | `jrc-ilcd-allocation-2010` |
| `allocation_carryover` | WIP and finished goods | 每次在制、首次放行、库存移动、退回与返工均随批移交原交换负荷向量。生产与仓储账之间内部交接合并抵消。未交付负荷结转期末成品，期初继承负荷进入实际交付；不得把同份已放行质量再次增加为外部输出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

各protocol_id只有一个process_id负责人。collection_method仅收集未除的原始期间分子与完整期初末结转负荷；aggregation_rule中的“每1 kg参考流”仅声明末端报告基准，由report_once统一执行一次，不指示采集端A/Q。记录跨期时保留原始交换负荷向量，不只保留总影响得分。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | xylose_supply | 生物质及整份外购试剂 | 称重、领用、采购与检验记录 | 批次；供应商；化学品/CAS；形态；原料期初末；接收；领用；退回；毛/皮/净重；浓度；水分；密度/温度；晶种来源；去向；生产批 | 物料负责人以校准秤和库房记录逐批核对整份供货实际消耗，保留原始质量与组成子账。场内配制保留真实独立购料、配制能耗与损失。纳入不合格/零产出批及所有退回/返工移动，不执行除以Q。 | kg; mass fraction; m3; kg/m3 | 每次接收与每批 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 磅单；供应商COA；水分与碳水物种分析方法；浓度密度记录；库存核对 |
| cp_media | xylose_supply | 活性炭与各树脂 | 更换与服役周期记录 | 身份；湿/干基；离子型；购入质量；期初末在装量；补加；退役量；调理；再生周期；归属服役期间；负荷向量 | 介质负责人按采购、在装库存和周期记录逐种核对；保留真实调理液、再生及废介质去向。保留既往服役负荷和期末未耗寿命，不设默认寿命，采集不按每千克归一。 | kg; cycles | 每次补加、再生与退役 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 供应商形态/规格；服役日志；库存与负荷核对 |
| cp_water | xylose_supply | 外供水、凝结水及排水 | 水表与液体路由记录 | 仪表；原积分体积或速率/时间；温度；密度；来源；排水；凝结水返回；内部回用量；样品组成；整股质量；载水子账 | 水务负责人读取每股真实水流校准仪表及匹配采样/称重记录；分别保留积分读数、制剂载水、内部回用与外送处理交接。水量平衡不以残差指定反应水；仅保留原始总量。 | kg; m3; kg/m3 | 连续及每次交接 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 仪表校准；路由图；温度/组成匹配密度；样品链 |
| cp_utilities | xylose_supply | 各能源载体及辅助负荷 | 仪表、发票与设备日志 | 电表读数；蒸汽质量/压力/温度/焓；凝结水；来源；设备小时；失败与零产出时段；共享驱动；质检；仓储；搬运；发运；返工 | 公用工程负责人逐载体保留完整期间原始计量输入及工程分摊依据，包含待机、失败与放行后作业。区分外购与自供以防重复；在任何参考量除法前保留原始总量。 | kWh; kg steam; MJ; hours | 连续及每发票期间 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 校准；发票核对；运行日志；共享驱动依据 |
| cp_packing | xylose_supply | 各袋组件与废料 | 包装领用、称重与供应商记录 | 组件；真实聚合物/组成；供应商商品；组合/独立采购；期初末库存；领用；未用退回；包装/重包装批；交付包装质量；废料质量；负荷 | 包装负责人称量真实组件代表样并记录领退数量，保留原始千克、库存结转与损耗/重包装记录。整件供货组合袋只采购记一次，组分质量仅为子账。产品净重排除袋重，采集不执行除法。 | kg; items; kg/item | 每次组件接收及包装批 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 供应商组成；校准秤；领退及废料记录 |
| cp_delivery | xylose_supply | 放行、在制、库存、退回及净交付 | 质检、批次谱系、仓储与发运记录 | D型身份/CAS；含量方法/基准；物相；水分；甲醇结果/检出限；批次与批群；首次放行R；期初末在制与成品质量；继承负荷向量；门交付毛/皮/净重；验收/冲回交易；退回；返工；库存损失；包装 | 放行/仓储负责人分别签署生产及放行后账；用校准秤称量真实外运产品净重，将验收交付、冲回和退回关联原批/交易。保留原始Q与R记录、全部零产出运行、期初末在制/成品及其负荷。不将复验重命名为首次放行或将未交付库存记成交付；采集不执行清单归一。 | kg; mass fraction; kg-exchange burden vectors | 每批、每交易及期间结账 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 秤校准；分析方法/检出限；物相证据；唯一交易表；签署双账负荷滚动核对 |
| cp_residues | xylose_supply | 各残渣、母液排放及废树脂 | 称重、分析与处理联单 | 实体流；整份湿质量；水分；实际物种；甲醇；残糖；硫酸根/钙/碳；来源批；去向；废物/产品证据；适用收入；期初末库存；继承负荷 | 残渣负责人逐股实体外出流采样称重，保留整份混合滤饼或母液及组成子账。保留原始去向/处理负荷和残渣库存结转；独立证实物种及反应程度，不以COD或平衡闭合推导。 | kg wet; mass fraction; kg species | 每批及每次移除 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 采样计划；分析；称重；联单；化学证据；产品/废物及分配决定 |
| cp_emissions | xylose_supply | 各实测大气物种 | 源监测与活动记录 | 源；真实物种；浓度；干/湿气基准；温度/压力；速率与时长或积分体积；治理效率证据；捕集回流；残留溶剂；运行时段；碳酸盐消耗/物种 | 环境负责人将实测物种浓度与治理后正确气量/运行时段匹配，计算采用独立证据并保留依据。速率乘时长只积分一次，积分体积不再乘时间。保留原始污染物质量、检出限和未测缺口，不擅定为零。 | kg; mg/m3; m3; hours | 每监测时段并覆盖完整运行期 | 完整声明期间及期初末继承记录 | 本过程全部纳入单元及仓储/发运 | 每 1 kg 参考流 | 校准；气体条件；样品链；监测报告；活动/物种依据；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| assemble_delivery_burden | all inventory rows | 逐原始交换组分，从期初在制和成品继承负荷加完整期间负荷，减期末在制/成品结转负荷及另有依据的其他产品负荷，组装归属交付批群的未归一分子A。退回、废物处理、介质寿命与内部交接仅核对一次，保留零产出/返工负荷。保留原始单位和换算轨迹，此处不执行除法。 | cp_materials; cp_media; cp_water; cp_utilities; cp_packing; cp_delivery; cp_residues; cp_emissions | A，未归一交付批群交换向量 |  |
| report_once | all inventory rows | 报告交换量=A / Q，仅在原单位换算及负荷滚动结转完成后执行一次；Q为唯一交易表中严格为正的工厂门正验收净交付千克数。卡片数量式及aggregation_rule表示同一次报告操作，不能顺序再除一次。终端产品分子为Q，输出为1千克。 | A; Q; cp_delivery | 每1 kg参考流交换量 |  |
| physical_reconciliation | production and post-release ledgers | 独立核对完整物料/水/元素实体账：期初库存加真实投入及交接，在测量不确定度内等于期末库存加真实输出及交接。生产只记录一次首次放行R，仓储对应接收一次，合并时抵消。成品期初加接收与退回核对毛发运、期末、返工领出及损失。实际水解、碳酸盐产物、离子交换、糖降解与物相/水变化须有独立证据，不以两个未知出口拟合同一残差。 | cp_delivery; cp_materials; cp_water; cp_residues; cp_emissions | 签署实体与负荷账；独立证实物种核算 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference product | 按场址/供应商记录验证D身份/CAS及真实晶体物相、等级、水分、含量基准与甲醇残留。原生宽泛身份及空地理不能补足等级、路线、供应商或地点事实。 | COA；分析与物相证据；完整原生字段；usp-fcc-xylose-2015 |
| dq_coverage | all raw records | 保留完整匹配期间与因果批群，含失败/零产出批、期初末在制/成品负荷向量、损失、退回、返工、库存/包装/仓储/发运及真实处理负荷。缺失负荷是缺口而不是零值。 | 签署双账及完整性核对 |
| dq_measurement | each exchange | 保留校准、不确定度、原单位、检测含量与质量分数基准差异、密度条件、气量积分及源特定反应/物种证据，不强加来源典型数。 | 原始仪表/秤/采样记录及换算文件 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | product identity | 拒绝CAS、D/L型、糖醚/酯、糖浆、水合物及其他路线之间替代；要求完整限定及所选路线，不凭分类标签判断。 | `usp-fcc-xylose-2015` |
| `validate_gate` | net delivery and inventory | 要求Q > 0、唯一正验收净交付交易、单列首次放行R、成品/在制实体核对及继承负荷。未交付库存不入Q，退回/复验不造首次产量或重复交付。 |  |
| `validate_numerator` | all inventory rows | 要求完整匹配原始期间记录、失败/零产出/返工负荷及库存结转、原始换算和唯一末端A/Q操作。原始采集、卡片公式与汇总元数据不是三次顺序归一。 |  |
| `validate_atomic` | inventory and supplied preparations | 每个真实外部交换须为一个具体流。整份购入溶液/组合商品只记一次采购，组分为子账。声明完整性前显式扩展真实新增燃料、处理试剂、溶剂回收、包装或污染物行。 |  |
| `validate_chemistry` | physical and species balances | 要求独立测得实体质量/元素与真实物种、水解/反应水、结构/游离水及物相变化证据。不得从COD推断木糖、强定甲醇零残留或以未知水和未知废物强制闭合。 | `enco-xylose-technology` |
| `validate_native` | UUID and provider compatibility | 完整读取原生名称、路线、地理、CAS/备注、介质/类型及全部属性和其精确引用的属性/单位版本。保留已披露23210元数据债务与空地理，不以latest替换支持记录、不以次级系数推密度、不把原生格式检查说成方法或映射批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所述D-木糖路线的单元过程前景制造及实际净交付数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 只在供应商与证据明确审查后，用于路线/状态/等级/地理/边界相容的D-木糖供给 |
| excluded_use | 通用糖市场；其他CAS/状态/路线；未审查食品/医药宣称；自动分类接受；静默替代淀粉/纤维素或葡萄糖 |
| required_metadata | D型身份及CAS；非水合物晶体物相确认；含量检测方法与检测基准；实际水分和甲醇残留；玉米芯来源；硫酸/碳酸钙/甲醇路线；批次与期间；场址地理；供应商与原生名称相容性；实际净交付门；期初末在制品/成品质量及结转负荷；首次放行与交付的区分；退回/返工谱系；包装袋组成；公用工程路线；分配与废物去向 |
| required_quality_disclosure | 来源范围/年代、前景覆盖、原生元数据债务及未指明地理、全部未解决辅助/供应商UUID、原始及结转负荷记录、独立化学/物相证据、监测缺口、不确定度及分配敏感性 |
| update_trigger | 化学身份、原料/路线、洗晶溶剂、晶体/溶液/等级、场址、公用工程/处理、供应商、包装、库存参考门、分配或证据改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| usp-fcc-xylose-2015 | standard | USP FCC, Xylose monograph public preview (2015), DOI 10.31003/FCC_F104507_07_01; https://doi.usp.org/USPFCC/FCC_F104507_07_01.html (accessed 2026-10-16) | 仅支持D-木糖/CAS/分子式、晶体供货状态及玉米芯加工序列。为公开预览，未取得完整专论；不支持固定纯度、水合或水分限值、清单、收率或路线特定运行因子。 |
| enco-xylose-technology | literature | Hangzhou Enco Machinery Co., Ltd., Xylose Technology, undated publisher technical page; https://www.encocn.com/xylose-technology (snapshot 2026-10-16) | 定性支持玉米芯硫酸水解、碳酸钙精制、炭/树脂步骤、晶体/母液处理、甲醇洗晶、干燥及内衬袋包装。为一家设备商路线，不是工厂实测清单或独立数量范围。不采用其他路线、典型参数、不严谨化学/健康宣称或甲醇不可检出断言。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型虚拟细分、决定性物理因果及过程出口经济关系的适用语境，用于支持共享过程及联产品分配选择。不提供木糖配方、收率、分配份额、替代信用或场址数量；不冒充本PCR跨期库存批群实施规则的原文出处。 |
