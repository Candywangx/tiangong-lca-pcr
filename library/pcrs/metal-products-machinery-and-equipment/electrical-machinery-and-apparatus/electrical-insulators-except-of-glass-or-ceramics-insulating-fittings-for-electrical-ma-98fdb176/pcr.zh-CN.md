---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-insulators-except-of-glass-or-ceramics-insulating-fittings-for-electrical-ma-98fdb176
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 玻璃或陶瓷以外材料制的电绝缘子；陶瓷或塑料以外材料制的电气机器或设备用绝缘配件；内衬绝缘材料的贱金属制电气导管及其接头

## 1. 范围与适用性

本 PCR 适用于以下三类产品从摇篮到工厂大门的前景数据包：玻璃或陶瓷以外材料制的电绝缘子；陶瓷或塑料以外材料制的电气机器或设备用绝缘配件；以贱金属制造并内衬电绝缘材料的电气导管或导管接头。数据生产者应选择一个产品分支，并说明成品、材料体系、生产路线和适用的性能规范。

本 PCR 覆盖材料接收与预处理、绝缘本体成形或绝缘衬层施加、在报告场址实施时的金属部件制造与表面处理、装配、固化、检验、标识及上市包装。排除玻璃绝缘子、陶瓷绝缘子及陶瓷绝缘配件、塑料绝缘配件、无绝缘衬层的金属导管、完全由绝缘材料制成的导管、绝缘电线和电缆，以及安装、使用、维护和报废阶段。采购材料与能源的上游生产应通过链接的上游数据集表示，不得在前景过程中重复构造。

这些产品分支均服务于电气绝缘，但使用功能不可互换。质量参考流用于制造清单核算；开展比较声明时，还应确保产品分支、电气额定值、机械用途、尺寸、使用环境、适用标准及声明使用寿命等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-insulators-except-of-glass-or-ceramics-insulating-fittings-for-electrical-ma-98fdb176 |
| classification_refs | CPC 3.0: 46940 |
| covered_products | 非玻璃/非陶瓷电绝缘子；电气机器或设备用非陶瓷/非塑料绝缘配件；带电绝缘衬层的贱金属制电气导管及接头 |
| excluded_products | 玻璃或陶瓷电绝缘子；陶瓷或塑料绝缘配件；无衬层金属导管；完全由绝缘材料制成的导管；绝缘导体和电缆；声明工厂大门输出以外的安装产品 |
| representative_product | 由纤维增强聚合物芯棒、聚合物绝缘护套及永久连接的金属端部配件组成的上市复合电绝缘子；导管和绝缘配件分支仍作为条件路线覆盖 |
| production_route | 材料预处理；绝缘本体模压或导管内衬施加及固化；条件适用的金属部件成形与表面处理；装配、检验、标识及包装 |
| market_state | 已完成检验、标识和包装，并符合声明产品规范的工厂大门成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供成品所声明的电气绝缘、导体支承、设备绝缘或带绝缘保护的电缆管理功能 |
| How much | 工厂大门处 1 kg 上市产品，包含产品一体化部件，不含可分离运输包装 |
| How well | 符合声明的产品分支、尺寸、电气额定值、机械用途、绝缘材料体系、适用时的衬层结构及具名验收规范 |
| How long or cycle | 一次工厂大门交付；比较性使用研究应另行声明设计寿命并确保服务期限等效 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 属于本范围的电绝缘子、绝缘配件或带绝缘衬层的贱金属制电气导管成品 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品分支；绝缘材料及配方；金属材料及牌号；产品几何尺寸及净质量；额定电压及绝缘水平；机械额定值或导管耐受等级；导管的衬层材料及厚度；适用验收标准；工厂大门地理范围；生产技术；报告期 |

构建前景数据包时，所有`必需限定信息`均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。参考产品 UUID 尚未解决，因此精确产品名称和全部限定信息均构成前景身份的一部分，不得以代理 UUID 替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及全部质量归一化清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后、可分离包装前测定合格产品净质量；将全部过程总量归一化至 1 kg 合格输出。 |
| `separable_packaging_mass` | 瓦楞纸箱和木托盘 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 包装质量与产品质量分别报告；可重复使用托盘应按有记录的周转次数或其他披露的复用规则分摊。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 归一化前保留计量能量；电表以 kWh 记录时，按 1 kWh = 3.6 MJ 转换并披露。 |
| `gas_reference_conditions` | 气态天然气和工业氧气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录压力和温度参考条件；不同参考条件下的体积必须换算后方可合并。 |
| `wet_dry_mass_consistency` | 化学品、废水、涂层及混炼胶投入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明质量是供应态、干基还是活性成分；换算应使用实测浓度和密度，并保留实验室或供应商证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 抵达报告场址大门的外购绝缘材料、金属坯料或管材、化学品、包装、能源和水 |
| starting_condition_role | 上游材料和能源以产品流进入并链接供应商特定或有代表性的上游数据集；前景转化自接收与预处理开始 |
| product_classification_scope | 第 1 节语义边界内一个声明的产品分支；CPC 46940 仅为映射语境，不能替代产品说明 |
| recursive_input_rule | 外购并被纳入输出的同范围绝缘子、配件或带衬层导管，应作为一个产品投入并链接其上游数据集，不在本前景数据包内递归分解 |
| upstream_dataset_requirement | 每项外购材料、部件、燃料、电力、水及废物处理服务均应链接地理和技术上有代表性的上游数据集，或披露数据缺口 |
| disclosure | 声明产品分支、场址地理范围、报告期、技术、外购与前景制造部件边界、表面处理路线、绝缘材料、衬层结构、末端治理、包装及排除的下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景产品系统 | 纳入材料接收至成形、固化、条件适用的金属制造与处理、装配、例行检验、标识和包装，直至工厂大门；排除安装、使用、维护和报废。 | `line-power-polymer-insulator-manufacturing`; `elot-ts-1501-04-20-01-01-2023` |
| `boundary_route_declaration` | 产品分支路线 | 仅启用声明产品分支和路线中实际发生的原子流；其他条件行记为不适用，不得以其他材料替代。 | `un-cpc-3-0-2025`; `iec-61109-2025`; `elot-ts-1501-04-20-01-01-2023` |
| `boundary_upstream_linking` | 外购投入和废物处理 | 上游生产和下游废物处理通过链接数据集表示；不得把这些数据集内部排放再次计作前景直接排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `insulating_body_and_liner_forming` | 绝缘本体成形或金属导管内衬施加 | required | 聚合物/复合绝缘子采用复合本体行；带衬层金属导管采用钢管/绝缘漆行；其他行记为不适用 | 前景绝缘成形、粘接、模压、固化或内衬施加 | 每 1 kg 工厂大门合格产品 |
| `metal_component_forming` | 金属部件成形与表面处理 | conditional | 报告场址切割、机加工、成形、清洗或镀锌金属端部配件、金属导管或接头时纳入 | 前景金属制造与处理 | 每 1 kg 工厂大门合格产品 |
| `assembly_testing_packaging` | 装配、例行检验、标识和包装 | required | 始终纳入；包装行仅适用于实际随产品提供的包装组件 | 前景完工和合格输出 | 1 kg 工厂大门合格产品 |

### 过程：绝缘本体成形或金属导管内衬施加（`insulating_body_and_liner_forming`）

#### 输入

##### 产品流

###### 外购玻璃纤维增强聚合物芯材（`gfrp_core_material`）

记录复合绝缘子消耗的外购纤维增强聚合物芯材。仅在声明产品含该芯材体系时适用。

- 选定流：玻璃纤维增强聚合物 `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- 流属性/单位：质量 / kg
- 数量规则：计量领用质量减去有记录的退库可复用边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 模压用硅橡胶混炼胶（`silicone_rubber_compound`）

记录护套或伞裙消耗的具体模压级硅橡胶混炼胶。不得用轮胎混炼胶、填缝剂或单一填料代替。

- 选定流：电绝缘子模压用硅橡胶混炼胶
- 流属性/单位：质量 / kg
- 数量规则：模压领用质量，并扣除退回的未硫化混炼胶
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 带衬层导管用钢管基材（`steel_pipe_substrate`）

制造带衬层金属导管分支时，记录消耗的外购焊接圆形钢管。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：质量 / kg
- 数量规则：计量带衬层导管路线领用的钢管质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 导管内衬用电绝缘漆（`electrical_insulating_varnish`）

记录作为贱金属导管或接头内衬而保留的电绝缘漆。仅用于防腐的清漆不属于本行。

- 选定流：电绝缘漆
- 流属性/单位：质量 / kg
- 数量规则：消耗的供应态绝缘漆质量，并单独记录固体分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_material`

###### 硅烷偶联剂（`silane_coupling_agent`）

记录聚合物护套与芯棒或其他声明绝缘界面粘接所消耗的硅烷偶联剂。

- 选定流：硅烷偶联剂 `69deb108-938a-4e85-8f37-3253e8e6e1ee`
- 流属性/单位：质量 / kg
- 数量规则：计量消耗的供应态偶联剂，包括有记录的制备损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_material`

###### 成形与固化用电（`forming_electricity`）

记录分配给打磨、混合、模压、内衬施加、通风及固化设备的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量电力或有记录的设备工时分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

###### 热固化用天然气（`curing_natural_gas`）

记录现场燃烧并用于烘箱、模具加热或内衬固化的气态天然气。仅在实际使用该燃料时适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在声明参考条件下计量并分配给本过程的天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 已硫化硅橡胶修边废料（`cured_silicone_rubber_scrap`）

记录离开过程的已硫化硅橡胶飞边、废伞裙和修边料；不得与金属废料或退回生产的未硫化混炼胶合并。

- 选定流：已硫化硅橡胶废料
- 流属性/单位：质量 / kg
- 数量规则：送往有记录处理路线的已硫化硅橡胶废料称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 排入空气的非甲烷挥发性有机化合物（`nmvoc_to_air`）

记录绝缘漆、偶联剂、涂覆或固化工序经末端治理后的 NMVOC 直接排放。仅记录实测或通过物料平衡获得的前景直接排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：烟道/无组织监测结果，或考虑捕集和销毁后的溶剂物料平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

###### 排入空气的化石源二氧化碳（`fossil_co2_to_air`）

仅记录现场天然气燃烧产生的化石源二氧化碳；燃料供应和外购电力的上游排放保留在上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：分配给热固化的场址实测直接化石 CO2，或其他有记录的设施燃烧记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：金属部件成形与表面处理（`metal_component_forming`）

#### 输入

##### 产品流

###### 端部配件或接头用碳素钢坯料（`carbon_steel_fitting_stock`）

记录用于前景制造端部配件、连接套或导管接头的碳素钢棒材。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：质量 / kg
- 数量规则：计量成形和机加工领用的坯料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 镀锌用锌金属（`zinc_metal`）

记录加入现场镀锌浴并分配给声明产品的特高纯锌金属。仅在前景实施镀锌时适用。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：质量 / kg
- 数量规则：按实测涂覆面积或产品质量通过有记录规则分配的锌浴添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_inputs`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

记录碱洗或表面预处理消耗的氢氧化钠产品，并声明溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：消耗的供应态氢氧化钠产品质量，并记录活性浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_inputs`

###### 清洗和漂洗用工艺水（`process_water`）

记录金属清洗和漂洗投入的工艺用水；闭路循环冷却水仅在作为补充水跨越边界时纳入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：计量或按批次记录进入前景过程的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_inputs`

###### 热切割用工业氧气（`industrial_oxygen`）

记录现场氧燃料切割金属坯料使用的工业氧气。仅在采用该切割技术时适用。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：在声明参考条件下计量的气瓶或散装供应体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_inputs`

###### 金属加工与处理用电（`metalworking_electricity`）

记录切割、机加工、成形、抽风、清洗和表面处理设备使用的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量电力或有记录的设备工时分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`steel_scrap`）

记录离开前景过程并送往回收或处理的分类钢制边角料、切屑和废钢部件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：已发运钢废料称重质量，扣除直接返回同一过程的有记录材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 清洗废水（`cleaning_wastewater`）

记录经过现场预处理后离开金属清洗或漂洗过程的废水，并披露组成及去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：质量 / kg
- 数量规则：计量排放质量，或以实测密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 排入空气的细颗粒物（`fine_particles_to_air`）

记录打磨或金属加工经捕集后排入未指定空气的 PM0.2-PM2.5 粒径颗粒物。作为固体废物收集的粉尘不得使用本行。

- 选定流：颗粒物 (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对精确粒径范围实测经治理后的直接排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：装配、例行检验、标识和包装（`assembly_testing_packaging`）

#### 输入

##### 产品流

###### 装配与检验用电（`testing_packaging_electricity`）

记录装配、压接、例行电气/机械检验、标识及包装设备使用的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：计量电力或有记录的设备工时分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_metering`

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录随上市产品交付的瓦楞纸箱。仅在实际使用该包装组件时适用。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：按物料清单或称重纸箱质量分配给已发运合格产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

###### 木托盘（`wooden_pallets`）

记录装运使用的木托盘，并声明一次性/可重复使用状态及周转分摊方法。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 / kg
- 数量规则：按有记录的预期或实测周转次数，将托盘质量分配至装运产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂大门合格产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考产品（`reference_product`）

记录可分离运输包装前、已检验合格且可上市的本范围产品。在确认精确、质量计量且 state-100 的身份前，未解决的 Tiangong UUID 应保持空白。

- 选定流：属于本范围的电绝缘子、绝缘配件或带绝缘衬层的贱金属制电气导管成品
- 流属性/单位：质量 / kg
- 数量规则：1 kg 工厂大门合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程和产品分支 | 优先细分计量过程、生产线、批次或设备工时，使声明产品尽可能获得直接计量的材料、能源、废物和排放记录。 |  |
| `allocation_physical_relation` | 无法避免的共用投入和输出 | 无法细分时，按反映因果关系且有记录的物理关系分配，例如机器工时、涂覆面积、槽液负荷、检验时间或合格产品质量；不得仅因产品共线就默认按收入分配。 |  |
| `allocation_recycling_consistency` | 金属废料和回收材料 | 分别报告废料质量和去向；在上游材料数据集与废物处理之间一致采用一种披露的回收方法，避免重复计算避免负荷或再生含量。 | `mass-balance-identity` |
| `allocation_packaging_reuse` | 可重复使用木托盘 | 托盘生产负荷按有记录的预期或实测使用次数分摊，并披露损失、维修及返程运输是否在研究范围内。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `insulating_body_and_liner_forming`; `metal_component_forming` | 芯材、橡胶、管材和钢材投入 | 称重单、领料记录、供应商记录 | 材料身份；批次；领用质量；退库质量；废料转移；产品分支 | 校准秤或经核对的库存台账 | kg | 每批或每次领用 | 有代表性的连续 12 个月或声明的生产活动期 | 报告场址内生产声明产品的全部生产线 | 汇总净消耗量并除以合格输出质量；不得扣除离开系统的废物 | 秤校准和批次—台账核对 |
| `cp_coating_material` | `insulating_body_and_liner_forming` | 绝缘漆和偶联剂投入 | 配料及消耗记录 | 产品身份；供应态质量；固体分或活性浓度；退回质量；批次 | 校准秤和配方记录 | kg | 每个配制批次 | 与产品输出相同期间 | 全部适用涂覆或粘接工位 | 汇总供应态净消耗并按合格输出质量归一化 | 供应商规范、浓度证据和秤校验 |
| `cp_energy_metering` | 全部前景过程 | 电力和天然气 | 公用工程分表、账单或设备日志 | 表计起止；能量或体积；参考条件；设备工时；产品输出 | 优先过程分表；否则采用有记录的工程分配 | MJ 或 m3 | 连续或每个计费周期 | 除有理由采用生产活动期外，至少连续 12 个月 | 报告场址表计及明确列出的共用服务 | 扣除有记录的非生产用途，按因果驱动因素分配共用量，并按合格输出归一化 | 表计校准、账单核对和分配工作表 |
| `cp_surface_treatment_inputs` | `metal_component_forming` | 锌、氢氧化钠、水和氧气 | 槽液日志、领料、水表、供气记录 | 产品身份；数量；浓度；槽液添加量；计量体积；压力；温度；处理输出 | 校准秤/表计及经核对的库存记录 | kg 或 m3 | 每批或每班 | 与产品输出相同期间 | 全部适用金属处理工序 | 汇总路线特定消耗并按合格输出归一化 | 校准、槽液分析、供应商证书和库存核对 |
| `cp_waste_mass` | 适用前景过程 | 已硫化橡胶废料、钢废料和清洗废水 | 废物联单、容器秤、废水表计 | 废物身份；质量或体积；密度；污染物；去向；处理路线；日期 | 称重单或校准表计；体积换算时测定密度 | kg | 每次发运或排放周期 | 与产品输出相同期间 | 声明过程的全部报告场址废物收集点 | 分别汇总各废物；仅扣除有记录的同过程内部回用量；按合格输出归一化 | 废物承包方凭证、表计/秤校准及适用时的组成分析 |
| `cp_direct_emissions` | 适用前景过程 | NMVOC、化石源 CO2 和 PM0.2-PM2.5 直接排放 | 烟道/无组织监测、设施排放记录或有记录的物料平衡 | 污染物；环境仓；粒径；浓度；烟气流量；运行时间；捕集效率；销毁效率；分配过程 | 经认可的场址监测方法或可审计设施记录 | kg | 监测活动及与生产关联的运行记录 | 有代表性的报告期和运行状态 | 可归属于声明过程的全部排放口和无组织源 | 计算治理后的释放质量并按因果运行驱动因素分配；排除上游数据集排放 | 实验室报告、仪器校准、检出限和治理日志 |
| `cp_packaging_mass` | `assembly_testing_packaging` | 瓦楞纸箱和木托盘 | 包装物料清单及装运记录 | 包装身份；单件质量；使用数量；返还/周转次数；损坏数量；装运产品质量 | 校准称重并与装运记录核对 | kg | 每种包装规范和装运批次 | 与产品输出相同期间 | 随声明工厂大门产品提供的全部包装 | 一次性包装直接分配；可复用托盘按有记录次数分摊；按合格输出归一化 | 包装规范、秤校验和返还记录 |
| `cp_output_mass` | `assembly_testing_packaging` | 合格参考产品 | 最终检验和发运记录 | 产品分支；产品代码；单件质量；合格数量；不合格数量；检验状态；日期 | 与验收记录关联的校准最终秤 | kg | 每个合格批次 | 与全部投入输出相同期间 | 全部声明生产线 | 仅汇总可分离包装前的合格产品并作为分母 | 秤校准、验收记录和发运核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 每个清单行 | 归一化量 = 期间流量 / 同期合格产品质量 | 期间流记录；合格产品质量 | 每 1 kg 参考产品的流量 | `mass-balance-identity` |
| `reconcile_material_balance` | 每条生产路线 | 投入材料质量 = 合格产品质量 + 分别报告的废物质量 + 实测直接材料排放 + 库存变化；调查残差，不得强制归零 | 净材料投入；合格输出；废物；直接排放；库存变化 | 路线物料平衡残差及解释 | `mass-balance-identity` |
| `convert_metered_electricity` | 电力行 | MJ = 计量 kWh × 3.6 | 计量 kWh | MJ 外购电力 | `mass-balance-identity` |
| `convert_liquid_volume_to_mass` | 按体积记录的废水或液体投入 | 质量 = 实测体积 × 声明温度下的密度；浓溶液不得假定水的密度 | 体积；实测密度；温度 | kg 液体质量 | `mass-balance-identity` |
| `allocate_reusable_pallet` | 木托盘投入 | 分配托盘质量 = 托盘质量 × 使用托盘数 / 有记录的预期或实测使用次数，并按披露的复用模型调整托盘损失 | 托盘质量；装运数量；复用次数；损失规则 | 每 1 kg 参考产品的托盘质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 产品分支、材料体系、额定参数、几何尺寸、标准和成品状态应符合声明语义边界，并可追溯至合格输出记录。 | 产品规范、物料清单、图纸和验收记录 |
| `dq_temporal_alignment` | 全部前景行 | 投入、输出、废物、排放及合格产品质量应覆盖同一代表性期间；披露例外及启停处理。 | 表计日期、批次日期、废物联单和生产台账 |
| `dq_completeness` | 过程图和条件行 | 将全部实测前景投入质量和计量前景能源与适用过程记录核对，并逐项识别和解释每个排除或未分配流；不得采用无依据的环境显著性截断阈值。 | 材料和能源核对工作表 |
| `dq_measurement` | 表计、秤和实验室结果 | 记录仪器身份、校准状态、适用时的检出限、气体参考条件，以及化学品的湿基/干基或活性成分基准。 | 校准证书、实验室报告和供应商证书 |
| `dq_upstream_representativeness` | 链接的上游数据集 | 记录每个上游数据集的地理、技术、时期、产品状态和代理使用；未解决代理应在生成的数据包中标记。 | 数据集元数据和供应商信息 |
| `dq_route_transparency` | 条件产品分支过程 | 每个条件行均应标记适用或不适用并给出物理原因；数值未知时不得填零。 | 路线检查表、过程流程图和物料清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品分支、材料排除项、质量基准、市场状态或任一必需限定信息缺失，或对未解决参考产品使用代理 UUID 时，校验失败。 | `un-cpc-3-0-2025` |
| `validate_process_coverage` | 过程图 | 要求纳入两个必需过程；当前景记录显示金属切割、成形、清洗、涂覆或接头制造时，还应纳入条件金属过程。 | `line-power-polymer-insulator-manufacturing`; `elot-ts-1501-04-20-01-01-2023` |
| `validate_atomic_flows` | 清单行 | 每行只能有一个物理、化学、废物或基本流交换；要求方向和流类型准确、明确适用/不适用，且未确认精确 UUID 时必须有未解决记录。 |  |
| `validate_mass_energy_reconciliation` | 前景清单 | 要求按合格输出归一化、披露路线物料平衡残差、核对公用工程，并调查无法解释的重复或遗漏流。 | `mass-balance-identity` |
| `validate_direct_emissions` | NMVOC、化石源 CO2 和细颗粒物 | 要求精确环境仓/粒径、监测或物料平衡方法、治理基准，并从直接排放行中排除上游电力和燃料供应排放。 |  |
| `validate_bilingual_identity` | 带 UUID 的中文显示名 | 要求使用 state-100 的 Tiangong 精确中文 baseName，并与英文清单采用相同 UUID、属性、单位组和 row_id。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明产品分支及生产场址或代表性生产系统的从摇篮到工厂大门前景制造数据包 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品分支、额定参数、材料体系、地理、技术和边界具有代表性时用于产品足迹及 lifecyclemodel 构建；基于前景记录的内部过程改进 |
| excluded_use | 不同绝缘子、配件或导管功能之间的直接比较；未确保性能和期限等效的使用寿命声明；替代玻璃、陶瓷或塑料类别；未另行建模的安装、使用或报废声明 |
| required_metadata | PCR id 和版本；产品分支；产品规范；绝缘与金属材料；电气/机械额定值；适用时的衬层结构；地理；场址/技术；报告期；合格输出质量；分配；上游数据集；包装/复用；末端治理；未解决身份和证据缺口 |
| required_quality_disclosure | 前景覆盖率、时间一致性、表计和秤校准、实验室方法、物料平衡残差、能源分配、条件行决策、上游代理使用，以及不合格品、废料、废水和直接排放处理 |
| update_trigger | 产品分支、配方、金属牌号、衬层结构、生产技术、场址、能源供应、表面处理、末端治理、包装体系、分配方法或适用标准改变，或其他有记录且实质改变归一化材料/能源强度的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 官方类别身份及精确英文分类标题 |
| `iec-61109-2025` | standard | IEC 61109:2025，*Insulators for overhead lines – Composite suspension and tension insulators with AC voltage greater than 1 000 V and DC voltage greater than 1 500 V – Definitions, test methods and acceptance criteria*。https://webstore.iec.ch/en/publication/87026（检索于 2026-09-04） | 复合绝缘子结构、产品限定信息和验收语境 |
| `elot-ts-1501-04-20-01-01-2023` | standard | ELOT TS 1501-04-20-01-01:2023，*Cable ducting system with steel conduits*。https://technical-regulation-information-system.ec.europa.eu/lt/notification/23790/text/D/EN（检索于 2026-09-04） | 钢导管和接头范围、内部绝缘衬层及导管分类限定信息 |
| `line-power-polymer-insulator-manufacturing` | extension_guidance | 武汉线路电力设备有限公司，*Polymer Insulator Manufacturing Process*。https://www.composite-insulators.com/manufacturing-process（检索于 2026-09-04） | 芯棒预处理、压接、硅橡胶注射与固化、检验、标识和包装过程分解 |
| `mass-balance-identity` | method_factor | 第 8 节采用的质量守恒和精确能量单位换算恒等式 | 前景归一化、物料核对和物理单位换算 |
