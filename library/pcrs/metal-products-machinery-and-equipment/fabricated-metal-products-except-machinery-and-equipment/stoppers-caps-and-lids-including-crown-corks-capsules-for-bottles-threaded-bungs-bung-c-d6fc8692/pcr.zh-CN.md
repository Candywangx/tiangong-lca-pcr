---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stoppers-caps-and-lids-including-crown-corks-capsules-for-bottles-threaded-bungs-bung-c-d6fc8692
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 贱金属制塞子、盖子（包括冠形瓶塞）、瓶帽、螺纹桶塞、桶塞盖、封志及其他包装附件

## 1. 范围与适用性

本 PCR 适用于承力主体或封闭主体为贱金属的未灌装塞子、帽盖、盖子、冠形瓶塞、瓶帽、螺纹桶塞、桶塞盖、封志及类似包装附件。范围涵盖以外购钢板/带材、马口铁或铝板/带材为起点的封闭件制造，包括落料、压力成形、按路线适用的水基表面预处理、涂布、印刷、衬垫或密封胶料施加、固化、检验，以及工厂大门处的产品。

本 PCR 不包括完整的罐、桶、槽、瓶及其他容器；封闭主体为塑料、玻璃、软木、纸板或其他非金属材料的封闭件；灌装企业实施的灌装和封口作业；被包装内容物的制造；产品离开制造工厂后的配送、使用、开启、再使用和生命终结。只要封闭主体仍为贱金属，聚合物衬垫或密封垫不会使产品被排除。可使用外购预涂或预印刷材料，但前景数据包必须避免供应商过程与场内过程重复计数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stoppers-caps-and-lids-including-crown-corks-capsules-for-bottles-threaded-bungs-bung-c-d6fc8692 |
| classification_refs | CPC 3.0：42932（精确分类语境；映射接受由独立治理流程决定） |
| covered_products | 贱金属制冠形瓶塞、螺口盖及盖子、瓶帽、螺纹桶塞、桶塞盖、封志和其他包装附件，包括带聚合物衬垫或密封垫的产品 |
| excluded_products | 完整容器；非金属封闭主体；灌装/封口服务；被包装内容物；出厂后的使用和生命终结 |
| representative_product | 经检验合格、未灌装、准备离开制造场址的成品贱金属封闭件 |
| production_route | 外购钢板/马口铁或铝板/带材 → 落料及压力成形 → 按需清洗、涂布和印刷 → 按需施加衬垫或密封胶料并固化 → 检验 |
| market_state | 工厂大门处干燥、制成且未灌装；已声明涂层、衬垫、尺寸、相容性规范和单件质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于封闭、覆盖、密封或固定已声明容器开口的贱金属制成品封闭附件 |
| How much | 工厂大门处 1,000 kg 合格成品封闭件 |
| How well | 符合适用于该产品的尺寸、密封、开启扭矩或耐内压、耐腐蚀、涂层/衬垫相容性和食品接触要求 |
| How long or cycle | 工厂大门处一次制造产出；不赋予使用寿命期限 |
| reference_flow_link | `finished_base_metal_closures_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 贱金属制的塞、帽及盖（包括软木塞盖）、瓶盖、螺丝盖、桶盖、瓶封口及其他包装附件 `24a22981-bd1e-4c1a-bd64-78df94ef256a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 封闭件子类型及开口接口；贱金属基材、牌号和厚度；涂覆/镀层状态；衬垫或密封垫化学组成和质量；印刷状态；尺寸和单件质量；再生材料含量声明及核算方法；密封、扭矩、压力、腐蚀和相容性规范；食品接触状态；外购预加工材料与场内精加工的划分；制造地域、技术和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量离开工厂大门的合格封闭件干质量。托盘、纸箱和运输缠绕材料不计入参考产品质量；如其跨越边界，应另行报告。 |
| `piece_to_mass_conversion` | 以件数记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用针对产品和生产期的有记录抽样平均单件质量换算；保留样本量、称量方法和变异性。 |
| `material_mass_basis` | 金属、涂料、油墨、衬垫、化学品、废料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收状态质量报告；当固体份、水分、溶剂或活性浓度影响物料或排放平衡时另行披露。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能量；原始记录采用 kWh 时按 1 kWh = 3.6 MJ 换算，并披露电压、电网组合、损耗和交付边界。 |
| `natural_gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明压力、温度、干湿基和所用低位热值；不得与其他燃料合并。 |
| `mass_balance_check` | 封闭件制造 | Mass | kg | 在声明期内，将金属和衬垫投入与合格产品、分别计量的废料、在制品及其他产出进行平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购贱金属板材、带材或预加工材料进入封闭件制造场址；声明其基材牌号、厚度、涂层/印刷状态和供应商大门边界 |
| starting_condition_role | 将外购半成品金属转化为封闭件的前景制造入口 |
| product_classification_scope | 经审查语义边界所代表的贱金属封闭附件；CPC 42932 是分类语境，不拥有规范身份 |
| recursive_input_rule | 若外购投入本身是本类别中的成品贱金属封闭件，则仅作为带上游数据集的外供产品记录一次，并从前景过程排除其已完成的制造步骤 |
| upstream_dataset_requirement | 每项外购金属、聚合物、化学品、涂料、油墨、电力、燃料和处理服务均须链接地域和技术具有代表性的上游数据集，否则保留为明确数据缺口 |
| disclosure | 声明实际发生的成形、预处理、涂布、印刷、衬垫、固化、检验和场内处理作业；识别外购预涂/预印刷材料及被排除的共用作业 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate_foreground` | 前景封闭件制造 | 纳入从接收外购金属材料到合格封闭件产出的全部场内物料和能源交换，包括不合格品、直接排放和送处理废物。 | `ep3663427b1-crown-cap`; `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `boundary_conditional_finishing` | 外购预加工材料 | 仅在报告场址实施时纳入场内清洗、涂布、印刷和衬垫；否则要求供应商数据集包含相应作业，并避免重复计数。 | `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `boundary_packaging_exclusion` | 灌装、配送、使用和生命终结 | 除非研究目标明确扩展系统边界，否则排除内容物灌装及所有出厂后阶段；任何扩展应单独披露。 | `eu-pef-2021-2279` |
| `boundary_no_hidden_cutoff` | 前景完整性 | 不得仅因质量小而遗漏物料、能源、废物或基本流；应记录经测量为零、不适用状态或明确数据缺口。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `closure_manufacturing` | 贱金属封闭件成形与精加工 | required | 始终纳入；各清洗、涂布、印刷、衬垫和直接排放行仅在声明路线使用时适用 | 从外购金属材料到成品封闭件的前景生产 | 1,000 kg 合格成品封闭件 |

### 过程：贱金属封闭件成形与精加工（`closure_manufacturing`）

该聚合前景过程覆盖场址路线，不创建人为内部中间流。路线特定交换保持为独立原子行，并采用明确适用条件。

#### 输入

##### 产品流

###### 封闭件级马口铁钢板（`tinplate_sheet_input`）

仅钢制主体路线记录本投入。所选交换是接收状态的封闭件级马口铁钢板，不是通用钢材、成品罐或金属集合。

- 选定流：封闭件级马口铁钢板
- 流属性/单位：Mass / kg
- 数量规则：发至声明生产期的供应商收货质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`ep3663427b1-crown-cap`

###### 厚度超过 0.2 mm 的铝板材（`aluminium_sheet_input`）

仅声明封闭件主体使用厚度超过 0.2 mm 的铝板时记录。不得将本 UUID 用于铝箔或铝/铜复合材料。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发至声明生产期的供应商收货质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`ep3663427b1-crown-cap`

###### 外购电力（`electricity_input`）

记录边界内供给冲床、输送、预处理、涂布、印刷、衬垫成形、固化、检验及直接归属辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于声明封闭件生产期的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`eu-jrc-sts-bref-2007`

###### 气态天然气（`natural_gas_input`）

仅当声明生产期内直接用于干燥、涂层或衬垫固化、热处理或排放控制时记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在规定参考状态下，按计量表或发票核对后归属于声明生产期的燃气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-jrc-sts-bref-2007`

###### 水基清洗用工艺用水（`process_water_input`）

仅在场内进行水基清洗、漂洗或表面预处理时记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨入前景过程的计量补充水和漂洗水，不重复计算内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemicals`
- 来源：`eu-jrc-stm-bref-2006`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide_input`）

仅在场内碱性清洗槽消耗氢氧化钠时记录。溶液浓度与活性氢氧化钠质量分开报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据归属于生产期的采购、加药和配槽记录计算活性氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_chemicals`
- 来源：`eu-jrc-stm-bref-2006`

###### 金属成形润滑油（`forming_lubricant_input`）

当润滑油进入落料或压力成形产品过程时记录；报告期内未形成可归属消耗的封闭设备油不计入。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：发至生产期的净补充润滑油，扣除回收入库的可再用油
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_receipts`
- 来源：`ep3663427b1-crown-cap`

###### 金属包装保护性涂料（`protective_lacquer_input`）

仅在场内施涂时记录一种已声明保护性涂料配方。须声明配方、固体份、载体、食品接触状态、施涂方法和固化涂层所在表面。

- 选定流：金属包装保护性涂料
- 流属性/单位：Mass / kg
- 数量规则：按期初和期末库存、收货及可回收退料计算净消耗的供应状态涂料，并披露固体份和挥发份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_ink_liner_records`
- 来源：`eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background`

###### 平版金属装潢油墨（`metal_decorating_ink_input`）

对每个已声明印刷工位和颜色记录一种场内施用的配制油墨。不同配方须作为独立前景交换，不能合并为油墨混合物。

- 选定流：平版金属装潢油墨
- 流属性/单位：Mass / kg
- 数量规则：声明印刷工位净消耗的供应状态油墨，并披露颜色/配方和挥发份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_ink_liner_records`
- 来源：`eu-jrc-sts-bref-2007`

###### 场内衬垫成形用聚乙烯树脂（`polyethylene_liner_resin_input`）

仅当场址以初级树脂成形聚乙烯衬垫时记录。牌号、添加剂及任何单独外购组件必须在前景数据包中逐项披露。

- 选定流：聚乙烯 `f4dfd1a4-b24e-471e-bd21-04ad7a45ea52`
- 流属性/单位：Mass / kg
- 数量规则：发至声明生产期场内衬垫成形的净树脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_ink_liner_records`
- 来源：`ep3663427b1-crown-cap`

###### 场内增塑糊配制用 E-PVC 树脂（`epvc_resin_input`）

仅当场址内部配制 PVC 增塑糊衬垫时记录 E-PVC 树脂。跨越边界的增塑剂、稳定剂及其他添加剂必须作为独立具体前景交换报告。

- 选定流：聚氯乙烯树脂（E-PVC） `4f19f121-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：发至声明场内增塑糊批次的净 E-PVC 树脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_ink_liner_records`
- 来源：`ep3663427b1-crown-cap`

###### 外购 PVC 增塑糊密封胶料（`pvc_plastisol_compound_input`）

仅当即用型 PVC 增塑糊密封胶料跨入场址边界时记录；不得同时把其上游树脂和添加剂作为场内投入重复记录。

- 选定流：PVC 增塑糊密封胶料
- 流属性/单位：Mass / kg
- 数量规则：声明衬垫作业净消耗的供应状态胶料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_ink_liner_records`
- 来源：`ep3663427b1-crown-cap`; `eu-jrc-sts-bref-2007`

##### 废物流

本前景制造过程不规定废物输入。

##### 基本流

除外购产品流所代表的资源外，不规定基本流输入。场址直接开采的任何资源须作为独立基本流记录。

#### 输出

##### 产品流

###### 合格成品贱金属封闭件（`finished_base_metal_closures_output`）

本行为检验后的定量参考产出。选定流采用 Tiangong 直读记录提供的精确中文 `baseName`。

- 选定流：贱金属制的塞、帽及盖（包括软木塞盖）、瓶盖、螺丝盖、桶盖、瓶封口及其他包装附件 `24a22981-bd1e-4c1a-bd64-78df94ef256a`
- 流属性/单位：Mass / kg
- 数量规则：工厂大门处 1,000 kg 合格成品封闭件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 钢冲压废料（`steel_scrap_output`）

仅钢制路线适用时，将钢制骨架、冲孔余料、切边和不合格钢制封闭件记录为一种铁质废料流；不得混入铝或受污染危险废物。

- 选定流：钢废料 `409ba088-e428-4cdf-a688-b5b4f074068d`
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的称量铁质生产废料，扣除经核实的内部同质再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass`
- 来源：`ep3663427b1-crown-cap`

###### 铝冲压废料（`aluminium_scrap_output`）

仅铝制路线适用时，将铝制骨架、冲孔余料、切边和不合格铝制封闭件记录为独立废料流。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的称量铝生产废料，扣除经核实的内部同质再利用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass`
- 来源：`ep3663427b1-crown-cap`

###### 水基清洗废水（`cleaning_wastewater_output`）

清洗和漂洗废水离开前景过程送往场内或场外处理时记录。声明水基清洗来源、污染物、计量点和处理去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：在转移点计量的废水质量，不重复计算过程内循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass`
- 来源：`eu-jrc-stm-bref-2006`

###### 成形废油（`waste_oil_output`）

落料或成形设备排出的废油送回收或处置时记录。不得将冷却液、溶剂或水基槽液与本行合并。

- 选定流：废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- 流属性/单位：Mass / kg
- 数量规则：报告期内从声明过程转移的称量废油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass`
- 来源：`ep3663427b1-crown-cap`

##### 基本流

###### 直接燃烧天然气产生的化石二氧化碳（`fossil_co2_to_air`）

仅记录前景边界内燃烧天然气产生的直接化石 CO2。电网和燃料供应的上游排放保留在背景数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或使用有记录的供应商组成、参考状态、氧化率和碳因子从计量天然气计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-jrc-sts-bref-2007`

###### 排至未指定室外空气的二甲苯混合异构体（`xylene_mixed_isomers_to_air`）

仅当声明涂料、油墨或清洗剂配方含商品二甲苯混合异构体，且场址记录量化捕集和控制后释放的该混合物时记录这一项化学混合物交换。不得以单独的对二甲苯流替代混合异构体结果。

- 选定流：二甲苯（混合异构体）排至未指定空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量烟道与无组织二甲苯混合异构体排放，或在扣除捕集、销毁和回收后用有记录的溶剂质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格成品封闭件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`us-epa-metal-can-coating-background`; `eu-jrc-sts-bref-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用生产线和公用工程 | 首先细分计量表、物料领用、运行时间或设备记录，仅纳入可归属于声明封闭件的交换。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | 无法避免的多功能过程 | 无法细分或系统扩展时，使用经证明的相关物理关系；仅在物理分配不可辩护时使用其他关系，并披露被否决方案、公式、因子和敏感性。 | `eu-pef-2021-2279` |
| `allocation_scrap_no_automatic_credit` | 钢废料和铝废料 | 分别报告废料质量、组成、处理去向和收入。除非适用研究方法明确要求，否则本前景数据集不计入替代原生金属收益。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `closure_manufacturing` | 金属材料和成形润滑油投入 | 采购收货、库存领用和退料 | 材料身份；供应商；批次；基材/牌号；厚度；涂层状态；期初库存；收货；领用质量；退料质量；期末库存 | 将 ERP/仓库记录与生产期和实物盘点核对 | kg | 每次收货和生产期；按月汇总 | 至少连续 12 个代表性月份，季节性/定制生产可用完整生产期 | 数据集代表的全部设施和生产线 | 净消耗质量 = 期初库存 + 收货 − 期末库存 − 经核实退料；共用消耗按第 7 节分配 | 供应商规范、地磅/秤校准、库存核对和异常日志 |
| `cp_energy_meters` | `closure_manufacturing` | 外购电力 | 间隔或分表读数 | 表号；起止读数；倍率；kWh；生产线状态；停机；产品质量；电网/电压 | 读取校准电表并与发票总量核对 | kWh 和 MJ | 至少每月；优先按生产期分表 | 与产品产出相同的代表期 | 所有纳入的冲压及精加工辅助设备 | 扣除有记录的非生产负荷；kWh 转 MJ；按合格产出归一化 | 电表校准、发票核对和分配工作表 |
| `cp_fuel_records` | `closure_manufacturing` | 直接天然气 | 计量表和发票记录 | 表号；气体体积；压力；温度；干湿基；低位热值；产品质量 | 将场址计量表与供应商发票和可归属设备运行时间核对 | m3 和 MJ | 至少每月 | 与产品产出相同的代表期 | 所有纳入的直燃设备和控制装置 | 校正至声明参考状态并按合格产出归一化 | 计量表校准、发票和供应商燃气规范 |
| `cp_water_and_chemicals` | `closure_manufacturing` | 工艺用水和氢氧化钠 | 水表、加药和槽液记录 | 水表读数；槽体积；补充量；氢氧化钠产品质量；浓度；排放；循环量；产品质量 | 计量补充/漂洗水并将化学品加药与库存核对 | kg | 每次配槽且至少每月 | 与产品产出相同的代表期 | 所有纳入的清洗和漂洗阶段 | 跨边界补充量仅计一次；按产品质量和浓度计算活性 NaOH | 计量表校准、浓度检测、加药记录和槽液日志 |
| `cp_coating_ink_liner_records` | `closure_manufacturing` | 涂料、油墨和衬垫材料 | 批次单和库存平衡 | 配方编号；颜色；固体份；挥发份；期初/期末库存；收货；退料；施用质量；回收质量；产品质量 | 对每种具体配方核对批次和仓库记录 | kg | 每批；按声明产品汇总 | 与产品产出相同的代表期 | 每个纳入的涂布、印刷和衬垫工位 | 分别计算各配方的供应状态净消耗；避免外购胶料与其上游成分重复计数 | 供应商 SDS/规范、批次记录、秤校准和库存核对 |
| `cp_product_and_waste_mass` | `closure_manufacturing` | 合格产品、金属废料、废水和废油 | 生产、质量、地磅和废物转移记录 | 产品毛/净质量；件数；样品质量；不合格品；废料组成；废水质量；废油质量；去向；转移日期 | 在规定转移点称量产出并与生产记录核对 | kg | 每批或每次转移；按月汇总 | 与投入相同的代表期 | 所有纳入生产线和产出去向 | 各产出按 1,000 kg 合格产品归一化；钢、铝、废水和废油保持分流 | 秤校准、质量放行、废物联单和质量平衡核对 |
| `cp_direct_air_emissions` | `closure_manufacturing` | 直接化石 CO2 和二甲苯混合异构体 | 烟道测试、连续监测、溶剂平衡和燃料计算 | 污染物；排口；浓度/流量；测试期；配方二甲苯含量；捕集/销毁/回收；燃气组成；氧化率；产品质量 | 有代表性时采用直接测量，否则采用有记录的燃料或溶剂质量平衡 | kg | 每次合规测试和每月平衡；材料/控制变化后更新 | 与产品产出对齐的代表运行期 | 归属于纳入作业的所有烟道和无组织源 | 汇总受控烟道与无组织排放，不计电力/燃料上游排放；按产品质量归一化 | 实验室资质、测试方法、控制效率证据、供应商组成和计算审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每个非参考清单行 | 归一化数量 = 报告期交换量 × 1,000 / 报告期合格封闭件质量 | 报告期交换量；合格产品质量 | 每 1,000 kg 参考产品的交换量 | `eu-pef-2021-2279` |
| `calc_piece_mass` | 件数型产品记录 | 产品质量 = 合格件数 × 生产期抽样平均单件质量 | 合格件数；抽样平均单件质量 | kg 合格产品 | `customs-union-tr-cu-005-2011` |
| `calc_active_naoh` | 氢氧化钠投入 | 活性 NaOH 质量 = 供应状态溶液质量 × 实测或供应商认证 NaOH 质量分数 | 溶液质量；NaOH 质量分数 | kg 活性 NaOH |  |
| `calc_fossil_co2` | 天然气产生的化石 CO2 | 优先采用直接测量的化石 CO2；否则由计量燃气、供应商碳含量或经验证排放因子、氧化率和分子质量换算计算，并记录全部因子及参考状态 | 燃气体积；参考状态；组成/因子；氧化率 | kg 化石 CO2 |  |
| `calc_xylene_mixed_isomers` | 排至空气的二甲苯混合异构体 | 涂料/油墨/清洗剂中的混合异构体二甲苯投入 − 产品保留量 − 回收量 − 随废物转移量 − 控制装置销毁量 = 排至空气的混合异构体二甲苯量；一致纳入单独测量的无组织排放 | 配方记录；库存平衡；产品/废物分析；捕集和销毁证据 | kg 排至空气的二甲苯混合异构体 | `us-epa-metal-can-coating-background`; `eu-jrc-sts-bref-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明封闭件子类型、基材、厚度、涂覆/镀层、衬垫/密封垫、印刷状态、尺寸、单件质量、相容应用和符合性规范。 | 产品图纸、物料清单、供应商规范和质量放行记录 |
| `dq_temporal_representativeness` | 全部前景数据 | 至少使用连续 12 个代表性月份；完整生产期更具代表性时可采用生产期，并解释停产、试制、异常生产和替代。 | 时段覆盖表和异常日志 |
| `dq_technology_geography` | 前景和上游链接 | 描述成形、涂布、印刷、衬垫、固化和控制技术及制造地域；论证所有上游数据集的地域/技术匹配。 | 过程图、设备清单和数据集链接登记表 |
| `dq_completeness_mass_balance` | 物料清单 | 将金属和衬垫投入与合格产品、废料、在制品及其他产出平衡；调查并披露无法解释的差额。 | 签署的质量平衡工作表和库存核对 |
| `dq_route_applicability` | 条件行 | 以产品和路线证据标明每个条件流适用或不适用；零值不能替代缺失的适用性判断。 | 物料清单、工艺路线、批次单和场址访谈 |
| `dq_uncertainty_and_gaps` | 计算值和分配值 | 披露测量不确定性、分配敏感性、缺失 UUID、缺失外部范围和任何代理上游数据集。 | 不确定性登记表、分配工作表和数据缺口日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流 | 确认恰为 1,000 kg 合格成品贱金属封闭件，并验证发运包装未计入该质量。 | `eu-pef-2021-2279` |
| `validate_identity_and_qualifiers` | 产品身份 | 缺少任何参考流必需限定信息，或未分别计量即混合实质不同基材、衬垫或精加工路线的数据包，应予拒绝。 | `un-cpc-3-0-2025`; `customs-union-tr-cu-005-2011` |
| `validate_atomic_inventory` | 清单行 | 确认每个交换均为一种具体产品、废物或基本流，且钢/铝废料、电力/天然气及不同衬垫材料保持分开。 |  |
| `validate_route_and_double_counting` | 条件作业 | 确认外购预涂或预印刷材料未与场内涂布或印刷负荷重复，且外购 PVC 胶料未与其上游树脂成分重复。 | `eu-jrc-sts-bref-2007`; `us-epa-metal-can-coating-background` |
| `validate_mass_and_energy` | 前景平衡 | 根据保留原始记录复核件数到质量、物料平衡、kWh 到 MJ、燃气状态和归一化计算。 |  |
| `validate_emission_scope` | 直接排放 | 确认化石 CO2 仅含场内化石燃料燃烧，二甲苯混合异构体仅在配方化学组成和环境区室匹配时报告；不得纳入电力或燃料供应上游排放。 | `us-epa-metal-can-coating-background` |
| `validate_product_performance_metadata` | 声明的符合性 | 确认已识别适用的密封、扭矩、压力、腐蚀、涂层/衬垫耐受和食品接触试验要求；本 PCR 不虚构通用合格限值。 | `customs-union-tr-cu-005-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明贱金属封闭件产品或同质产品族的前景产品制造数据集 |
| downstream_use | `secondary_dataset`；在代表性和未解决数据缺口经审查后可作 `background_dataset` |
| allowed_use | 封闭件规范和系统边界匹配的从摇篮到工厂大门产品研究、包装组件清单、供应商比较及下游模型 |
| excluded_use | 完整容器、灌装或已包装产品声明；非金属封闭主体；出厂后使用/生命终结声明；功能、基材、衬垫或性能规范不匹配的比较性声明 |
| required_metadata | PCR id/版本；产品及必需限定信息；场址地域；技术；参考期；所有权；前景/背景数据集链接；分配；截断；数据缺口；不确定性；审查状态 |
| required_quality_disclosure | 计量表和秤覆盖率；质量平衡结果；路线适用性；供应商数据质量；分配敏感性；控制效率；未解决 UUID 和范围证据需求；偏离本 PCR 的事项 |
| update_trigger | 材料、涂料、油墨或衬垫配方变化；基材/厚度变化；新成形/固化/控制技术；设施或电网变化；分配变化；性能规范变化；数据超过拟用代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，CPC 3.0 结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | CPC 42932 正式分类身份 |
| `un-cpc-1-1-zh` | `official_guidance` | 联合国统计司，《产品总分类版本 1.1》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期 2026-09-05） | 中文分类术语核对；标题采用专业现行术语，带 UUID 的流显示保留 Tiangong 精确中文 baseName |
| `ep3663427b1-crown-cap` | `literature` | EP3663427B1，Steel sheet for crown cap, crown cap, and method for producing steel sheet for crown cap，https://patents.google.com/patent/EP3663427B1/en（检索日期 2026-09-05） | 冠形瓶塞钢材、落料、压力成形、衬垫安装及衬垫树脂示例 |
| `eu-jrc-sts-bref-2007` | `official_guidance` | 欧盟委员会联合研究中心，《Surface Treatment Using Organic Solvents BREF》，2007-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-04/STS_Adopted082007.pdf（检索日期 2026-09-05） | 金属包装涂布、印刷、复合衬垫过程分解；能源、溶剂及直接排放采集边界 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics BREF》，2006-08，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索日期 2026-09-05） | 条件适用的水基表面预处理、水和化学品投入、废水及相关活动 |
| `us-epa-metal-can-coating-background` | `official_guidance` | 美国环境保护署，EPA-453/R-02-009，National Emission Standards for Hazardous Air Pollutants for the Surface Coating of Metal Cans: Background Information for Proposed Standards，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1008FRH.TXT（检索日期 2026-09-05） | 罐端涂装方法对金属冠盖和封闭件的适用性；工厂路线差异；涂装相关有机 HAP/VOC 范围 |
| `customs-union-tr-cu-005-2011` | `standard` | 海关联盟技术法规 TR CU 005/2011《包装安全》，欧盟委员会托管正式英译，https://food.ec.europa.eu/document/download/8a0639e9-5d76-46c6-a3eb-6a8f406081e8_en?filename=ia_eu-ru_sps-req_decision-769_16082011_en.pdf（检索日期 2026-09-05） | 封闭件性能、密封、扭矩、压力、腐蚀、涂层/衬垫耐受和食品接触限定类别；不作为经验 LCI 范围 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-09-05） | 功能/参考流、系统边界、前景数据质量和多功能过程层级 |
