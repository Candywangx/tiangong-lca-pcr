---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.handwoven-uncoated-integral-rim-bamboo-basket
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
translation_status: reviewed
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
| same_denominator | all inventory rows | 体积 | m3 | 各队列最终交换按其正的、事件锁定的首次验收完整篮净竹构件体积 Q_V 归一化一次（以前已验收队列用原 Q_V_original）。按每次唯一首次验收时的水分及调湿终点锁定体积；后续损失、水分变化、退回、返工或再次验收均不取消或增加该事件体积。物理质量、干物质、碳、水与能量账各保留原单位。篮体积须实测几何或采用经验证实际变体抽样估计，无默认密度或通用每篮体积。 |
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

按物理顺序记录作业并以不可变工单/队列归属。一体化工厂物理账（实际原料/在制品/已验收成品库存、外部接收、总发运及关联退回、废物与排放）同首次验收事件账及负担账分开。验收及实际成品回在制品/再验收为内部状态转移，在全厂平衡中抵消，不是额外外部产品输出。basket_output 卡是归一化的1 m3首次验收参考坐标；物理平衡中不得在实际发运及期末成品外再加该卡或 Q_V。实际再入/再出门记录当时质量、水分与几何变化，不新增验收事件或采购。退回/返工/复测增量服务及损失保留原队列和原验收体积，包括旧成品；历史未知保持缺口。

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

完整成品按声明的几何及水分基准在唯一首次验收事件计量，使用 cp_geometry 和 cp_acceptance。锁定的事件体积涵盖 first_acceptance 中全部后续净去向；发运、剩余成品和再次验收不能替代或增加它。该归一化坐标不是外部发运之外的第二份物理输出。

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
| cp_acceptance | basket_manufacture | basket_output | records | 不可变工单/队列及篮号；唯一首次验收时刻；验收几何、水分和调湿终点；旧队列原 Q_V_original；总发运及关联实际退回；新旧期初期末成品和在制品分账；每项净损失、废弃、降级/耗用、范围外转移及退回/返工在制品；复检/再验收和实际再入/再出门历史；原基准换算及不确定度 | 从唯一首次验收逐篮或经验证批次记录锁定 Q_V，再按 first_acceptance 的原几何基准核对互斥且完整的去向。期初已验收成品、外购成品及重复事件不增加新 Q_V，但保留其物理库存及原队列服务。后续损失及期末在制品仍计原 Q_V；仅有证据证明其他去向为零时可只用发运加成品。 | m3 | 每验收、去向/移动及期间核对 | 声明期间及不可变跨期队列追溯 | 工厂及原队列，事件基准与当时物理状态分开 | 每参考流 | 验收几何、关联总量/净发运退回、库存、全部去向、换算和不重计轨迹 |
| cp_activity | basket_manufacture | green_strips; electricity; bamboo_offcut; basket_reject | records | 各原子交换原始量及单位；当时水分干物质；不可变工单/队列；原料/在制品/新旧成品期初期末分账；实际外部接收、发运退回、废物排放；配对内部返工/再验收转移；继承向量；原验收体积及此前归一化基准 | 称量实际入料、出料、库存及废物，抄录电表，归属完整工单并包含失败、开机与返工。全厂物理量、唯一验收及负担向量分开核对。保留新旧已验收队列的验收后损失及服务和各自原锁定体积；原料/在制继承向量携带一次，增量作业增加一次。使用 cohort_balance 与 normalize_volume，不按负担份额缩小物理量，也不把内部退回竹材再采购一次。 | kg; MJ | 每批、移动及计量期间 | 同期并追溯原队列 | 实际工厂及供应链接口 | 每参考流 | 秤表校准、供应记录、分配驱动、物理事件账及向量调节表 |
| cp_water | basket_manufacture | tap_water; dampening_effluent; evaporated_water | measurement | 供水质量；当时竹条/在制品/新旧成品水分；声明干湿基准；空气吸湿；排水；总退回发运；内部回用；期初期末水库存；原队列；浓度及接收方 | 在同一全厂期间边界计量实际供水排水、当时水分和库存水。按 physical_balance 分开干物质与水，实际验收后水分变化和服务归属原队列。内部回用返工转移抵消；不把验收体积作为水/质量输出，也不将几何收缩等同蒸发。解决闭合不确定度；密度换算须有实际温度水质证据。归属水交换按原事件锁定队列体积归一化。 | kg | 每批/移动及期间闭合 | 原队列和期间一致 | 工厂及排水接收接口 | 每参考流 | 仪器、干湿基准、水分样、物理闭合残差、基准换算及不确定度 |

- `geometry_complete`: 对每个实际变体/批次的代表性完整验收竹篮，在声明含水状态和调湿终点计量。拍照列出全部唯一竹构件，包含连续编口的所有延伸部分，排除内容物和包装，并保留整篮完整性账。在任何首次验收事件前已专门指定为牺牲计量的竹篮须在测量前满足产品质量，但不属于可交付首次验收产出：这些预先指定试样从 Q_V 排除，制样及检验负担归属生产队列。已经首次验收后才用于牺牲测试的竹篮仍保留原 Q_V，测试耗用/废弃计入 Other_new 或其原旧队列；不得追溯改写成从未验收的样品。所有样品编号和去向保持可追溯。来源：mlit-bamboo-finishing-2020; liang-bamboo-geometry-2026。

- `geometry_disassembly`: 仅在构件完整回收，且相对验收竹篮的含水变化、回弹、压缩恢复、路径形状及尺寸变化可忽略或定量有界时，允许牺牲样拆解。拆解前后测量和质量回收有助于查漏，但质量回收本身不能证明几何恢复。缺件、切割损失、尺寸变化或接触压缩无界均使数量不确定，不得用名义密度补齐。

- `geometry_integrate`: 各唯一构件 p 采用实际质心路径坐标 s 及沿程实测截面积 A_p(s)，V_p = integral A_p(s) ds。仅已证实均匀矩形构件可用 V_p = L_p*w_p*t_p。细化截面测站和路径测量，或验证三维方法，直至实际对象的离散及形状不确定度得到解决。竹篮 j 的 V_j = sum_p V_p。编织交叉不构成重复构件，亦不得扣除投影重叠。这是从竹篾几何测量和弯曲编织观察延伸的作者方法，不是该力学模型或竹篮检验标准。来源：liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025。

- `geometry_sample`: 直接汇总实测验收篮体积，或用代表性实际验收样本、声明的抽样概率、验收数量和不确定度估计各变体/批次。允许经验证的研究特定数量—体积校准；通用每篮体积、原料采购体积、密度表、名义外包络尺寸和容量均不能替代。报告覆盖范围、篮间变异、仪器、截面/路径、完整性、拆解及水分不确定度；声明数量得到解决前预先定义研究适用性标准。没有证据不规定样本数或容差。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_volume | basket_output | Q_V = 各不可变唯一新增首次验收 V_j 之和，基准为各篮声明的验收水分及调湿终点；或对经验证实际变体/批次首次验收分层汇总 N_h*vbar_h 并传播抽样不确定度。N_h 只计首次事件一次，不是发运、重复过门或剩余可用篮数。锁定原几何基准及不确定度，后续损失、再调湿、返工或尺寸变化均不重设 Q_V。 | cp_geometry; cp_acceptance | event-locked Q_V | liang-bamboo-geometry-2026; phongphinittana-woven-bamboo-2025 |
| first_acceptance | basket_output | Q_V 为唯一首次验收事件体积之和，不是从发运/库存倒推的分母。对新增验收队列（其期初已验收库存为零）核对 Q_V = D_new + FG_new + Other_new：D_new 为总外部发运减关联实际退回；FG_new 为期末已验收成品；Other_new 覆盖其余全部互斥净去向，含实际损失、报废/测试破坏、降级/耗用、范围外转移及期末退回/返工在制品。各项均使用原验收状态净竹构件几何基准；追溯原构件及实测水分/尺寸/切除变化，将当时去向换回该基准并保留有界不确定度。当时湿kg、变状态体积、篮腔/包络及采购体积均不可替代。退回从净发运扣除，在其实际最终成品/在制品/其他去向中只计一次；内部循环和再次验收不是额外去向。验收构件体积100 L，净发运60 L + 期末成品30 L + 损失10 L时，Q_V仍为100 L=0.1 m3，而非90 L。仅有证据证明所有其他验收后去向为零时可用发运加成品两项式。期初成品、外购成品及重复验收不增加新 Q_V，其服务保留原 Q_V_original。不得推定零损失或虚构残差强迫闭合。 | cp_acceptance; cp_geometry; cp_activity | 锁定 Q_V 及完整原基准净去向桥接 | |
| cohort_balance | all inventory rows | 交换向量 B 保持原单位：B_open_raw + B_open_WIP + B_open_FG + B_added = B_dispatched + B_close_raw + B_close_WIP + B_close_FG + B_other，各向量/位置只计一次。B_dispatched 跟随扣除关联退回后的实际净发运，包含旧成品；B_other 仅为其他产出/服务有证据的单独负担归属，不是不明残差，也不移除已经计入验收生产的损失负担。内部成品/在制品/再验收转移只携带继承向量一次，不重复先前竹材或供应方负担，并保留全部当前增量作业。库存位置向量核对与首次验收归属不同：全部新验收去向，包括后续废物、降级、损失和在制品，保留完整原队列负担及锁定 Q_V；期初已验收成品保留原 Q_V_original。供应方链接中已含负担不得再次作为自身前景历史增加。未解向量保留缺口。 | cp_activity; cp_acceptance | reconciled original-unit cohort vectors | |
| physical_balance | all inventory rows | 在一体化工厂边界，实际期初原料/在制品/已验收成品/残余物库存 + 实际外部接收/关联退回 = 实际期末库存 + 总外部发运/其他转出 + 外送废物/排放，按实测当时kg分别核对干竹及水。干基 u=(湿重-干重)/干重时，干kg=湿kg/(1+u)，所含水=湿重-干重；湿基结果必须从其声明定义换算，不得暗当u使用。水输入含实测润湿供水及空气吸湿，输出含实际排水和蒸发；留存残余物只计期末库存。内部验收、成品回在制品及再次验收抵消；Q_V 及其原基准去向当量不是额外物理质量/体积输出。调湿返工可改变几何，不假定几何体积守恒，也不按默认密度推定干物质或水。完整物理量独立于分配向量，不虚构平衡物流，调查实际不确定度。 | cp_activity; cp_water; cp_geometry; cp_acceptance | 独立实际干竹与水物理账 | |
| normalize_volume | all inventory rows | 各交换 i 的 I_i = B_i / Q_V，B_i 为首次验收队列应承担的全部负担，Q_V 必须为正；参考产出为1 m3。若历史服务强度 H_i 的单位为每m3，以 B_old_i = H_i * Q_V_original 按该服务原始验收队列体积恢复原始负担；不得乘当前期间分母或再次除已归一化强度。恢复的原始向量只转入其原队列一次。旧验收产出的后期实际服务 B_service,c 单独按 B_service,c / Q_V_original,c 修正，不产生新验收产出。旧验收生产或服务不得加入新队列分子；选择性子队列须有证据归属并匹配其原验收体积。验收后损失、废弃、降级、退回和返工保留原事件体积及全部适用增量负担，即使已无可交付成品。原体积/历史未知时保留未解决原始服务修正，不得除以本期 Q_V。Q_V = 0 时保留原始量和未解决队列状态，不除零、不发布完整归一化数据集。 | cp_activity; cp_water; cp_geometry; cp_acceptance | I_i per reference flow |  |

- `cohort_projection`: 分别核对物理库存、事件去向和负担归属。每个唯一首次验收竹篮保留原料/在制继承负担、当前服务及可归属验收前失败负担，不受后续发运、期末成品、损失、降级、废弃或回在制品影响。期初原料/在制品后续首次验收时，将实际继承向量带入新队列。未验收原料/在制品负担结转；已验收来源在制品保留原验收体积并携带向量，不新增采购或验收事件。期初已验收成品体积负担及旧退回不进入新 Q_V 或其分子。所有验收后服务及损失使用原队列/分母。成品和期末返工在制品为互斥实际位置，同一物品不得同时占两个桥接项。原几何、历史或向量未知均明确保留缺口。物理干物质、水和碳平衡不是体积事件账或负担向量账。

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
| validate_accounting | foreground_dataset | 全部最终清单基准及关联协议汇总须匹配原队列参考流。检查唯一验收锁定 Q_V 及完整同基准 D_new + FG_new + Other_new，含净退回、损失、废弃、降级和期末在制品；拒绝无条件发运加成品、再验收增加 Q_V、损失缩减 Q_V 或同篮同时算成品和在制品。实际物料水量账独立核对，抵消内部转移，不在发运/期末成品外再加验收。保留期初成品、继承原料/在制向量、失败返工作业及以原体积归属的旧队列服务。几何/基准换算未解决、历史向量缺失、Q_V=0 或供应方不相容使受影响数据集不完整。声明基准检查不是科学批准或工厂实测。 | |

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
