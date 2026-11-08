---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.handwoven-uncoated-integral-rim-bamboo-basket
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 手工编织无涂层一体编口竹篮

## 1. 范围与适用性

本规则针对用已制备青竹条手工编织、自然调湿后首次验收的无涂层、无提手完整竹篮。篮身和篮口均为竹材，篮口由篮身竹篾连续编成；不把用藤条捆扎的篮口改写成竹材。以实际物料表、照片、供应商处理记录确认全竹构造、无胶黏剂、无金属件、无衬里、无染料、无漂白剂和无防腐剂。入厂青竹条在本规则中经过修整、必要的清水润湿、编织和自然调湿；任何采购前处理必须追溯披露，不能仅由“青竹”或“未干燥”字样推断未经处理。

一体编口和无涂层构造的依据为 `mlit-bamboo-finishing-2020`；竹篾制备和三维编织的依据为 `unido-woven-bamboo-2008`。两者描述可行构造，不证明所有竹篮均满足本范围。净竹构件几何体积的完整篮计量是结合 `liang-bamboo-geometry-2026` 与 `phongphinittana-woven-bamboo-2025` 的显式方法推导，不是已发布的竹篮体积检验标准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.handwoven-uncoated-integral-rim-bamboo-basket |
| classification_refs | CPC 3.0 31923; narrower |
| covered_products | 实际确认为全竹、无提手、无涂层、一体编口的验收竹篮 |
| excluded_products | 藤、柳、草、棕制品；衬里、涂层、胶黏剂、金属件、提手、捆扎式外加篮口；板材、竹凉席、原竹；化学处理、现场加热、燃烧或树脂固化路线 |
| representative_product | 用于非食品储放的一体编口竹篮，具体种属、形状和规格由研究声明 |
| production_route | 购入青竹条→修整→必要时清水润湿→手工编织并连续收口→自然调湿→首次验收 |
| market_state | 工厂门、未包装、完整验收品；不含所装物品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供完整、尺寸和编织质量经声明的非食品储放竹篮 |
| How much | 按第4、8节净竹构件几何体积基准计量的 1 m3 验收完整竹篮产出，可由多只篮组成 |
| How well | 实际一体编口、无尖锐缺陷、形状完整；承载和容量要求由产品规格及实测证明，不预设值 |
| How long or cycle | 制造门口一次首次验收；不推定使用年限、重复使用次数或替代塑料篮效果 |
| reference_flow_link | basket_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 竹、藤、棕、草制品 `ab01bb2e-f55c-4ce6-9355-7c86f8a55576` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 完整竹篮身份；竹种、供应商处理、实际物料表；一体编口和无提手构造；规格/变体；工厂、年度、验收规则；含水状态及调湿终点；净竹构件几何体积定义、测量和不确定度；抽样、首次验收队列、上游和废物去向 |

必需限定信息应写入数据集元数据、过程说明、参考流备注或等效字段；缺失则该数据包参考流不完整。体积是完整成品的定量基准，并非以原料竹替代成品，也不要求存在一只体积为一立方米的大篮。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| element_volume | reference product | 体积 | m3 | 计量完整篮中全部竹构件外部几何边界内的净几何体积，包括天然微观细胞孔隙，排除篮腔、篾间宏观空隙和外包络。不是无孔细胞壁或骨架体积；采用 cp_geometry。来源：liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025。 |
| geometry_method | reference product | 体积 | m3 | 按实际变体测量低接触力下的弯曲质心路径长度和沿程截面积；仅证实均匀矩形截面时使用长度×宽度×厚度，否则按实际路径积分并细化测站或采用经验证三维方法。构件各计一次，不按投影交叉扣减。来源：liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025。 |
| same_denominator | all inventory rows | 体积 | m3 | 全部最终交换统一按正的首次验收完整篮净竹构件体积 Q_V 归一化一次。物理质量、干物质、碳、水与能量账保持原单位。每篮体积必须实测或经验证的实际变体抽样估计，禁止默认密度或通用每篮体积。 |
| energy_units | electricity | 净热值 | MJ | 对实际电表 kWh 仅作单位换算：1 kWh = 3.6 MJ；不得用电量推断竹体积或代替供电背景。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入、已制备、无涂层无胶无防腐的青竹条，实际含水量记录 |
| starting_condition_role | 生产分界和上游接口，不是免除竹材种植、采伐、制篾及运输负担 |
| product_classification_scope | 仅31923中本规则所述较窄成品；青竹条为不同阶段输入 |
| recursive_input_rule | 购入同类成品不得冒充新增产出；返修保留原队列和负担，同一篮不得重计。 |
| upstream_dataset_requirement | 逐项证明竹种、青材状态、处理、门口、运输和参考量匹配；未知供应数据标为缺口，不设为零。 |
| disclosure | 分别披露前景边界和上游覆盖、未解决交换、分配、期初期末存货与不确定度 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground_dataset | 纳入竹条接收修整、编织一体篮口、自然调湿、检验、废品、返修、可归属公用工程、水、入厂运输和实际废物处理。UNIDO包含化学整理的替代路线；本规则以较窄准入范围排除，不能据此假定行业普遍不用化学品。来源：unido-woven-bamboo-2008; mlit-bamboo-finishing-2020。 | mlit-bamboo-finishing-2020; unido-woven-bamboo-2008 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_extend | foreground_dataset | 未包装门口排除成品运输包装及下游销售、使用和篮子报废；不免除来料包装废物。声明厂房工具、维护及辅助过程覆盖。实际新增材料、燃料、排放、来料包装组件或运输服务必须分别建原子交换并证明匹配，才能声明数据集完整；不能塞进竹材行。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_provider | foreground_dataset | 通用产品 UUID 不等于已验证供应过程。完整篮仅能连接构造、门口、含水状态及净竹构件几何体积均一致，或有实测兼容换算的供应过程。容量、包络、骨架或未知体积不能仅凭 UUID 匹配。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| basket_manufacture | 青竹条修整、手工编织一体编口、自然调湿和首次验收 | required | 本规则范围内实际生产 | foreground | basket_output |

工序按物理顺序记录并用工单分配；以下是一体化工厂过程的外部交换，内部转序不是新的产品投入或产出。

### 过程：竹篮制造（`basket_manufacture`）

#### 输入

##### 产品流

###### 青竹条投入 （`green_strips`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 已制备的青竹条和竹片 `c9008e6c-9bdf-49af-baf9-cdb134034396`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 记录实际净领用竹条质量及含水量，含首次验收产品应承担的修整损失和废品负担；使用 cp_activity 的已归属、已归一化结果。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_activity
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### 润湿供水 （`tap_water`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 仅实际清水润湿时纳入；计量供水质量并记录回用、排水和蒸发，不以竹篮体积乘水密度。采用 cp_water。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_water
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### 现场供电 （`electricity`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 仅实际低于1千伏电网用户侧交流电；记录照明、设备和调湿服务的实际归属电耗，cp_activity 中以实际电表记录换算并归一化。纯手工作业不能自动证明零公用工程。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_activity
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

#### 输出

##### 产品流

###### 完整竹篮首次验收产出 （`basket_output`）

完整成品按声明的几何基准跨越首次验收门口，采用 cp_geometry 和 cp_acceptance。

- 选定流: 竹、藤、棕、草制品 `ab01bb2e-f55c-4ce6-9355-7c86f8a55576`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 1 m3
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_acceptance
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`; `liang-bamboo-geometry-2026`; `phongphinittana-woven-bamboo-2025`

##### 废物流

###### 竹材修整废料 （`bamboo_offcut`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 无涂层无防腐竹材修整边料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_activity 称量实际外运非团聚边料并记录含水量、形态和接收方；内部再用量不作外部废物或避免负担抵扣。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_activity
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### 不可返修竹篮废品 （`basket_reject`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 无涂层全竹篮废品
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_activity 记录最终不可返修废品净质量、首次验收前后状态及实际处置。验收前废品不进入 Q_V；验收后废弃仍保留原 Q_V，并单独记为原验收队列的废物/服务修正，不撤销或增加一次验收。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_activity
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

###### 润湿排水 （`dampening_effluent`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 无添加化学品竹材润湿废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 仅实际排出时纳入；cp_water 计量外排质量和污染物浓度、处理接收方；回用水不重算为新取水。实际处理的排放另行按物质拆行。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_water
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

##### 基本流

###### 自然调湿水蒸发 （`evaporated_water`）

按实际工单、记录和物理状态独立计量本项交换。

- 选定流: 水蒸气，排入空气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: cp_water 按实测水量平衡确定净蒸发；区分竹条原有水分、润湿水、空气吸湿、排水及库存，不把未经验证的总失重全算为水。
- 数值来源模式: 计算的前景值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 计算 (`calculated_from_collection`)
- 采集协议: cp_water
- 来源: `unido-woven-bamboo-2008`; `mlit-bamboo-finishing-2020`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_cause | foreground_dataset | 优先按工单或工序计量避免分配。共享照明、润湿或设备采用有记录的物理因果驱动，如实测设备时间或实际占用的调湿服务，并核对期间总量。不同变体不得直接用名义篮数分配，不假定质量与体积等价。这是前景采集规则，不是实测行业通用分配系数。 | ilcd-general-2010 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_reject | foreground_dataset | 不设默认共产品收益、替代抵扣或负废物投入。内部回用边料保留继承负担，不作为新购料。对外销售若确为共产品，须在数据完整前证明质量、用途、接收市场及拆分或分配。废品及返修保留原队列归属。 | ilcd-general-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_geometry | basket_manufacture | basket_output | measurement | 篮号；变体；竹种；各唯一构件；完整性；含水状态；调湿终点；曲线路径及沿程截面；校准；抽样概率；不确定度 | 按下文 geometry_complete、geometry_disassembly、geometry_integrate、geometry_sample 执行，记录实际方法、仪器接触力、重复性与验证。 | m3 | 各变体/生产批及变更时 | 与验收同期 | 实际工厂/变体 | 每参考流 | 完整篮照片、构件账、原始几何、校准、湿度、抽样及不确定度传播 |
| cp_acceptance | basket_manufacture | basket_output | records | 工单；唯一篮号；首次验收时刻；新发运；新增期末成品；期初成品；退货；返修；各变体体积 | 从首次验收逐篮或经验证批记录确定正 Q_V；发运记录必须去除期初成品，期末新增验收品加回且只计一次。 | m3 | 每次首次验收并期间核对 | 声明期间及跨期追溯 | 工厂及原始队列 | 每参考流 | 验收、发运、存货和不重计轨迹 |
| cp_activity | basket_manufacture | green_strips; electricity; bamboo_offcut; basket_reject | records | 各原子交换原始量；单位；水分；工单/队列；原料/在制/成品期初期末；继承负担向量；已归一化基准 | 称量净物料和废物，抄录电表，按工单归属，保留继承向量，按下文 cohort_balance 和 normalize_volume 生成每参考流结果。 | kg; MJ | 每批/计量期间 | 同一期间并追溯原队列 | 实际工厂及供应链接口 | 每参考流 | 秤/表校准、供应记录、分配驱动和向量调节表 |
| cp_water | basket_manufacture | tap_water; dampening_effluent; evaporated_water | measurement | 供水质量；竹条/在制/成品水分；空气吸湿；排水；回用；含水库存变化；浓度；接收方 | 计量实际供水/排水和水分，分开干物质与水量账并给出误差闭合；密度换算必须有同温度水质依据。用归属后的同一 Q_V 归一化。 | kg | 每批及期间闭合 | 与队列和期间一致 | 工厂及排水接收接口 | 每参考流 | 仪器、湿基/干基声明、水分样、闭合残差及不确定度 |

- `geometry_complete`: 对每个实际变体/批次的代表性完整验收竹篮，在声明含水状态和调湿终点计量。拍照列出全部唯一竹构件，包含连续编口的所有延伸部分，排除内容物和包装，并保留整篮完整性账。专门牺牲计量的竹篮须在测量前满足产品质量，但不属于可交付首次验收产出：从 Q_V 排除，制样及检验负担归属生产队列。其编号和样品去向与新增发运、期末成品分开。来源：mlit-bamboo-finishing-2020; liang-bamboo-geometry-2026。

- `geometry_disassembly`: 仅在构件完整回收，且相对验收竹篮的含水变化、回弹、压缩恢复、路径形状及尺寸变化可忽略或定量有界时，允许牺牲样拆解。拆解前后测量和质量回收有助于查漏，但质量回收本身不能证明几何恢复。缺件、切割损失、尺寸变化或接触压缩无界均使数量不确定，不得用名义密度补齐。

- `geometry_integrate`: 各唯一构件 p 采用实际质心路径坐标 s 及沿程实测截面积 A_p(s)，V_p = integral A_p(s) ds。仅已证实均匀矩形构件可用 V_p = L_p*w_p*t_p。细化截面测站和路径测量，或验证三维方法，直至实际对象的离散及形状不确定度得到解决。竹篮 j 的 V_j = sum_p V_p。编织交叉不构成重复构件，亦不得扣除投影重叠。这是从竹篾几何测量和弯曲编织观察延伸的作者方法，不是该力学模型或竹篮检验标准。来源：liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025。

- `geometry_sample`: 直接汇总实测验收篮体积，或用代表性实际验收样本、声明的抽样概率、验收数量和不确定度估计各变体/批次。允许经验证的研究特定数量—体积校准；通用每篮体积、原料采购体积、密度表、名义外包络尺寸和容量均不能替代。报告覆盖范围、篮间变异、仪器、截面/路径、完整性、拆解及水分不确定度；声明数量得到解决前预先定义研究适用性标准。没有证据不规定样本数或容差。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_volume | basket_output | Q_V = 新首次验收各篮体积之和；或按经验证实际变体/批分层汇总 N_h*vbar_h，并传播抽样不确定度。 | cp_geometry; cp_acceptance | Q_V | liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025 |
| first_acceptance | basket_output | Q_V 等于同一几何基准上新增首次验收发运量加新增首次验收期末成品量，排除期初成品、外购成品、退货、复检及已计过的返修。以唯一首次验收编号防止重复。 | cp_acceptance | Q_V |  |
| cohort_balance | all inventory rows | 交换向量 B 保持原单位：B_open_raw + B_open_WIP + B_open_FG + B_added = B_dispatched + B_close_raw + B_close_WIP + B_close_FG + B_other，各物理队列只计一次。B_dispatched 为包括期初成品在内的物理发运负担，B_other 为其他有记录产出或服务队列的单独归属负担向量；不得作为不明平衡残差，也不得移除已归属验收生产的验收前损失负担。此式仅核对库存位置。另行首次验收投影排除期初成品发运，并将新增验收期末成品计入一次。未解向量保留缺口。 | cp_activity; cp_acceptance | reconciled original-unit cohort vectors |  |
| normalize_volume | all inventory rows | 各交换 i 的 I_i = B_i / Q_V，B_i 为首次验收队列应承担的全部负担，Q_V 必须为正；参考产出为1 m3。若历史服务强度 H_i 的单位为每m3，以 B_old_i = H_i * Q_V_original 按该服务原始验收队列体积恢复原始负担；不得乘当前期间分母或再次除已归一化强度。恢复的原始向量只转入其原队列一次。旧验收产出的后期实际服务 B_service,c 单独按 B_service,c / Q_V_original,c 修正，不产生新验收产出。旧验收生产或服务不得加入新队列分子；选择性子队列须有证据归属并匹配其原验收体积。Q_V = 0 时保留原始量和未解决队列状态，不除零、不发布完整归一化数据集。 | cp_activity; cp_water; cp_geometry; cp_acceptance | I_i per reference flow |  |

- `cohort_projection`: 分别核对库存位置与首次验收口径。新增首次验收竹篮无论已发运或留在期末成品，均承担其原料/在制继承负担、当前服务及应归属的验收前废品负担。期初成品的负担和体积排除在新增首次验收产出之外。期初在制后来验收时将实际继承向量带入新增验收队列。未完工原料/在制负担结转；首次验收后的退货复检不产生新验收体积。验收后维修作为独立披露的服务保留。物理水、干物质、碳平衡独立于负担向量。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 核对物理身份、含水/处理、门口、单位和供应过程，空 UUID 不等于零交换。 | 直接身份、供应商、实际物料表及去向记录 |
| dq_geometry | basket_output | 必须给出实际完整竹篮可行且有界的几何测量及样本方案；孔隙定义、未恢复几何和容量差异不得隐去。 | cp_geometry 原始值、验证和不确定度 |
| dq_completeness | all inventory rows | 工厂期间总量及队列向量必须闭合；每项实际材料、排放和废物分别记录，背景缺口不得计零。 | 账单、仪表、原始单位物理平衡、向量调节表和缺口清单 |
| dq_limits | all inventory rows | 报告年度、地域、变体、抽样适用性、技术代表性及独立审查状态；不把工厂个案推成行业范围。 | 数据集质量披露及审查记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_admission | foreground_dataset | 实际构造、供应商处理、无提手一体编口、无涂层全竹物料表未核实或不兼容时拒绝套用。带藤绑、漆、胶或金属件的来源不能证明本路线。来源：mlit-bamboo-finishing-2020; unido-woven-bamboo-2008。 | mlit-bamboo-finishing-2020; unido-woven-bamboo-2008 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_quantity | foreground_dataset | 要求 Q_V > 0、唯一首次验收记录、完整构件几何体积及有界不确定度。拒绝容量/包络/骨架替代、投影弦长、无证据名义均匀竹篾、构件重复、投影交叉扣减和仅凭质量回收认可拆解。未经吸水、空气及膨胀控制验证的多孔竹材浸没法不自动成立。不宣称 ISO 22157 竹秆试样检验等同竹篮检验。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_accounting | foreground_dataset | 全部最终清单基准及关联协议汇总必须使用同一参考流。分别检查物料、水及负担账、排除期初成品、新增期末成品仅计一次、继承在制/原料向量和历史服务的原分母。几何未解决、继承向量缺失、Q_V = 0 或供应过程不兼容使相应数据集不完整。声明基准检查不能建立科学批准或工厂实测结果。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门制造前景；上游已匹配覆盖另行披露 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际构造、状态、门口和净竹构件体积相符的竹篮制造建模 |
| excluded_use | 容积储存服务、功能等效比较、通用行业竹篮、藤/柳篮、使用寿命或已批准方法学声明 |
| required_metadata | 全部必需限定信息、原始单位账、队列、Q_V、变体采样和源版本/供应匹配 |
| required_quality_disclosure | 缺失身份/供应过程、几何和抽样不确定度、拆解效果、存货追溯、分配及独立审查状态 |
| update_trigger | 构造、竹种、供应处理、路线、测量、样本、验收口径、供电或去向变化时重评 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mlit-bamboo-finishing-2020 | official_guidance | Japan Tourism Agency / MLIT, Bamboo Finishing Techniques, FY2020, p.1, Basket rims and Coatings. https://www.mlit.go.jp/tagengo-db/common/001565623.pdf | 连续竹篾一体篮口与无涂层构造，亦揭示藤、金属及涂层的反例；不支持通用物料配方。 |
| unido-woven-bamboo-2008 | official_guidance | UNIDO / INBAR, Three Dimensional Woven Bamboo Products, 2008, printed pp.1–5,20–24. https://www.unido.org/publications/ot/9656608/pdf | 完整竹篮、竹条制备、编织和收口工序，未采用其化学配方、尺寸或行业系数。 |
| liang-bamboo-geometry-2026 | literature | Liang, Jiang and Tan, Effects of Heat Treatment on the Mechanical Properties and Thermal Stability of Bamboo, Polymers 18 (2026) 2098, §2.2 p.3. https://doi.org/10.3390/polym18172098 | 给定状态下规则矩形竹篾直接尺寸几何体积原理；不是竹篮标准，无密度或热处理默认值。 |
| phongphinittana-woven-bamboo-2025 | literature | Phongphinittana, Klangtup and Jearanaisilawong, Mechanical Properties of Asymmetric Woven Bamboo Structure from Bamboo Strips, Fibers 13 (2025) 18, pp.3–5, Fig.3. https://doi.org/10.3390/fib13020018 | 弯曲经篾、近直纬篾及篾间空隙，支持实际路径和构件体积定义；不转用试片机械模型、物种、尺寸和间隙数值。 |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook—General guide for LCA—Detailed guidance, March2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因法细分及决定性的实物因果关系；实际工单/共享服务及存量协议为披露的操作推导，不是工厂份额或竹篮体积标准。 |
