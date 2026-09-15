---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43220
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 43220次级所列制品的零件

## 1. 范围与适用性

本 PCR 适用于为液泵或液体提升器专门设计、制造并作为独立货物供应的零件。涵盖的典型产品包括泵壳、叶轮、导叶、泵专用轴、转子、活塞、柱塞、隔膜及其他可识别的液泵或液体提升器零件。前景数据包必须识别具体零件，并且只能纳入实际采用的材料和制造路线。

完整液泵和液体提升器、电动机、通用轴承、通用紧固件、不能识别为泵零件的通用密封件、维护或修理服务，以及压缩机、阀门、液压马达或内燃机零件均不在本 PCR 范围内。使用阶段、出厂后的分销、安装、备件更换和寿命终止阶段不属于本门到门制造规则；若研究扩展这些边界，必须单独报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43220 |
| classification_refs | CPC 3.0:43252，43220次级所列制品的零件（精确分类语境） |
| covered_products | 作为独立货物供应并可识别为液泵或液体提升器所用的零件，包括泵壳、叶轮、导叶、泵专用轴、转子、活塞、柱塞和隔膜 |
| excluded_products | 完整液泵或液体提升器；电动机；通用轴承、紧固件和密封件；压缩机、阀门、液压马达和发动机零件；安装及修理服务 |
| representative_product | 一个制成、合格并作为独立货物供应的液泵或液体提升器零件 |
| production_route | 路线特定的成形或模塑、机加工、热处理、水法或其他表面处理、装配、试验、防护和包装；只声明实际执行的工序 |
| market_state | 已清洁并按声明图样或规范验收的制成零件，位于制造厂门口且尚未装入完整液泵或液体提升器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在液泵或液体提升器中承担所声明结构、水力、密封、运动传递或液体提升功能的制成合格零件 |
| How much | 合格参考产品净质量 1 kg |
| How well | 满足声明的图样、材料牌号、尺寸与公差、表面状态和验收试验要求 |
| How long or cycle | 在制造厂门口一次性交付；本门到门制造数据集不以使用寿命归一化 |
| reference_flow_link | 见下列参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 43220次级所列制品的零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称与功能；配套液泵或液体提升器类型；图样或规范；材料及牌号；产品净质量；成形或模塑路线；机加工路线；热处理；表面处理或涂层；验收试验状态；再生含量声明与方法；工厂和地理范围；报告期；所含包装 |

构建前景数据包时，`必需限定信息` 中的每项信息必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息即表示参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有报告量均按 1 kg 合格产品净质量归一化；分母不含不合格品和包装。 |
| `energy_conversion` | 外购电力 | Net calorific value | MJ | 保留计量能源基准；原始记录为 kWh 时按 1 kWh = 3.6 MJ 转换，并保留原始电表值。 |
| `gas_reference_conditions` | 气态天然气 | Volume | m3 | 记录供应方或计量表的基准温度、压力及干湿基准；不同条件下的体积不得未经换算直接合并。 |
| `water_conversion` | 工艺用水和废水 | Mass | kg | 优先采用实测质量；体积转质量必须使用该实际流的有记录密度和基准条件。 |
| `material_mass_balance` | 成形材料及其废物流 | Mass | kg | 各材料族必须分别记录，并在相同报告期基准下核对外购投入、库存变化、退料、参考产品、废料、污泥和其他损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 泵零件制造场址接收边界处的外购材料、外购部件、能源、水、化学品和包装流 |
| starting_condition_role | 门到门前景起点；每项外购投入都必须配置上游数据集 |
| product_classification_scope | 可识别为 CPC 43252 货物的零件；分类仅提供语境，不能代替零件身份声明 |
| recursive_input_rule | 若外购投入本身也是本类别中独立供应的泵零件，则将其一次性记录为带供应商数据集的外购产品投入，不在接收过程中重新展开其制造 |
| upstream_dataset_requirement | 每项外购材料、部件、能源载体、水、化学品和所含包装流均应链接地理、技术和时间代表性适当的上游数据集 |
| disclosure | 声明具体零件、材料路线、成形或模塑路线、机加工、热处理、表面处理、试验、包装、外协工序、排除项及制造厂门之外的任何扩展 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入从外购投入接收至合格零件在制造厂门口放行的工序，包括场内公用工程、不合格品、转移前的废物管理以及随零件实际供应的包装。 | `eu-environmental-footprint-2021` |
| `boundary_upstream` | 外购投入 | 前景之外的上游生产以链接数据集表示；不得以外购投入的上游排放替代前景中的外购投入数量。 | `eu-environmental-footprint-2021` |
| `boundary_route_disclosure` | 条件性制造路线 | 铸造、锻造、聚合物模塑、热处理、水法处理、涂覆和包装仅在实际执行或为声明零件外购时纳入，并披露每条适用路线。 | `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006` |
| `boundary_actual_flows` | 前景完整性 | 即使下列常见行未列出，也必须添加所有实际跨越声明边界的原子材料、化学品、能源、水、废物和直接基本流。 | `eu-environmental-footprint-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pump_part_manufacturing` | 路线特定的泵零件制造 | `required` | 始终适用；声明路线特定的单元操作并省略不适用行 | 前景成形或模塑、机加工、处理、装配、试验、防护及所含包装 | 合格参考产品净质量 1 kg |

### 过程：路线特定的泵零件制造（`pump_part_manufacturing`）

#### 输入

##### 产品流

###### 冷加工碳素钢坯料（`carbon_steel_input`）

仅当声明零件路线消耗碳素钢棒材或杆材时记录。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：实测投产碳素钢坯料净质量，扣除有记录的未使用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-sf-bref-2024`

###### 不锈钢坯料（`stainless_steel_input`）

仅当声明零件含有不锈钢或以不锈钢成形时记录。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：实测投产不锈钢坯料净质量，扣除有记录的未使用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-sf-bref-2024`

###### 未锻轧铝合金炉料（`aluminium_alloy_input`）

仅在适用的铸造或成形路线中记录铝合金炉料。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的铝合金炉料净质量，扣除有记录的退料和内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-sf-bref-2024`

###### 未锻轧铜合金炉料（`copper_alloy_input`）

仅在适用的铸造或成形路线中记录铜或铜合金炉料。

- 选定流：铜及铜合金 `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的铜合金炉料净质量，扣除有记录的退料和内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-sf-bref-2024`

###### 铸铁材料（`cast_iron_input`）

仅在使用时记录铸铁炉料、外购铸件或坯料，并声明准确产品状态和牌号。

- 选定流：铸铁
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的铸铁材料净质量，扣除有记录的退料和内部回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-jrc-sf-bref-2024`

###### 聚丙烯模塑树脂（`polypropylene_input`）

仅在声明采用聚合物模塑泵零件路线时记录聚丙烯树脂。

- 选定流：聚丙烯树脂
- 流属性/单位：Mass / kg
- 数量规则：实测投至模塑工序的聚丙烯树脂净质量，扣除有记录的退料和清洁回用料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 外购丁腈橡胶制品（`nitrile_rubber_input`）

仅当硫化丁腈橡胶制品被装入独立供应的零件时记录。

- 选定流：丁腈橡胶 `ad250520-feb6-401a-9159-1f25c0fd7980`
- 流属性/单位：Mass / kg
- 数量规则：实测装入的合格丁腈橡胶制品质量，包括可归属的不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

###### 外购电力（`electricity_input`）

记录所纳入成形、机加工、处理、装配、试验和辅助工序消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按声明产品和报告期分配的实测外购电力，必要时由 kWh 换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 气态天然气（`natural_gas_input`）

仅当场内熔炼、加热、干燥或其他所纳入热工序消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按有记录基准条件计量并分配至声明产品的天然气净体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006`

###### 工艺用水（`process_water_input`）

记录进入切削液配制、水法清洗、表面处理、漂洗、试验或其他所纳入工序的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测工艺用水净投入，扣除单独计量的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在所纳入碱洗、处理、再生或废水处理步骤消耗氢氧化钠时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的活性氢氧化钠质量；溶液供料时按溶液质量和经验证浓度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 切削液（`cutting_fluid_input`）

记录所纳入切削、镗削、钻削、车削、磨削或珩磨工序消耗的新鲜切削液补加量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：实测进入切削液系统的新鲜浓缩液或直用油补加量；不含内部循环液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`us-niosh-metal-working-fluids-2008`

###### 瓦楞纸箱（`corrugated_box_input`）

仅当瓦楞纸箱在制造厂门口随参考产品实际供应时记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测可归属于放行参考产品的纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格液泵或液体提升器零件（`reference_product`）

仅记录按声明规范验收的制成零件；不合格零件作为废物或返工处理，不进入分母。

- 选定流：43220次级所列制品的零件
- 流属性/单位：Mass / kg
- 数量规则：实测在制造厂门口放行的合格零件净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废钢（`steel_scrap`）

记录作为废料移出前景的分选钢质边角料、切屑、浇道、冒口和不合格钢件。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的废钢净质量，扣除有记录的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-niosh-metal-working-fluids-2008`

###### 不锈钢废料（`stainless_steel_scrap`）

当不锈钢边角料、切屑和不合格品移出前景时，将其单独记录。

- 选定流：不锈钢废料
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的不锈钢废料净质量，扣除有记录的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-niosh-metal-working-fluids-2008`

###### 铝废料（`aluminium_scrap`）

记录作为废料移出前景的铝合金边角料、切屑、浇道、冒口和不合格品。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的铝废料净质量，扣除有记录的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### 废铜（`copper_scrap`）

记录作为废料移出前景的铜合金边角料、切屑、浇道、冒口和不合格品。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的废铜净质量，扣除有记录的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### 铸铁废料（`cast_iron_scrap`）

记录离开前景而非在内部重熔的铸铁浇道、冒口、切屑和不合格品。

- 选定流：铸铁废料
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的铸铁废料净质量，扣除有记录的内部回用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### 聚丙烯废料（`polypropylene_waste`）

记录离开前景且未在内部回用的受污染流道料、修边料和不合格聚丙烯制品。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的聚丙烯废料净质量，扣除有记录的清洁回用料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：

###### 废切削油（`waste_cutting_oil`）

仅在机加工路线使用直用切削油并将其送去处理或处置时记录。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的废切削油质量，扣除返回系统的回收液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-niosh-metal-working-fluids-2008`

###### 废水溶性切削液（`spent_coolant`）

仅在水溶性切削液路线将废液送去处理或处置时记录。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的废切削液质量，扣除返回系统的回收液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-niosh-metal-working-fluids-2008`

###### 废水（`wastewater`）

记录由所纳入清洗、漂洗、水压试验、表面处理或切削液管理产生并送往排水系统或处理的水相废液。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：实测扣除内部回用后离开前景的水相废液净量，并声明处理状态和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 表面处理含金属氢氧化物污泥（`treatment_sludge`）

仅在所纳入水法表面处理或场内废水处理产生脱水含金属污泥时记录。

- 选定流：表面处理含金属氢氧化物污泥
- 流属性/单位：Mass / kg
- 数量规则：实测移出前景的湿污泥或干污泥质量，并声明干物质分数和所含金属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 直接排放至空气的化石源二氧化碳（`fossil_co2`）

仅记录前景边界内直接排放的化石源二氧化碳；外购电力和材料的上游排放保留在链接数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址实测或场址计算的、归属于所纳入场内燃料燃烧和热工序的直接化石源二氧化碳
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用制造过程 | 首先按独立计量的产线、设备、批次、工序或产品族细分，在技术可行时避免分配。 | `eu-environmental-footprint-2021` |
| `allocation_joint_process` | 剩余共用投入和排放 | 无法细分时，使用反映因果关系且有记录的物理驱动因素，如设备时间、处理面积、炉料质量或试验时长；仅对材料和技术路线可比的零件采用质量分配。 | `eu-environmental-footprint-2021` |
| `allocation_scrap` | 废料及可回收输出 | 废料按前景门口输出记录，不在本数据集内计入避免负荷收益；披露销售、内部回用、处理去向及研究采用的任何下游回收方法。 | `eu-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `pump_part_manufacturing` | 外购材料、部件和纸箱 | ERP 领退料记录、磅单和供应商声明 | 材料身份；牌号；产品形态；领料总量；退料；内部回用；再生含量；供应商；批次 | 按生产订单核对领料和退料，并用校准秤验证代表性质量 | kg | 每批，按月汇总 | 至少 12 个代表月或完整的较短生产期 | 生产声明零件的所有产线 | 汇总净消耗质量并除以合格输出质量，各材料分开 | 采购记录、批次追溯、秤校准、核对日志 |
| `cp_energy_records` | `pump_part_manufacturing` | 电力和天然气 | 公用工程计量表、分表日志和发票 | 表计期初期末值；单位；基准条件；产线分配驱动；报告期 | 优先使用过程分表；剩余共用量按披露的因果驱动分配 | MJ；m3 | 每月或更高频 | 与产品输出相同期间 | 所有纳入工序和辅助负荷 | 扣除外送和排除负荷，换算单位、分配并除以合格输出质量 | 表计校准、发票核对、分配工作表 |
| `cp_water_chemical_records` | `pump_part_manufacturing` | 工艺用水、氢氧化钠和切削液 | 计量表、槽罐液位、批记录、采购和库存记录 | 投入质量或体积；浓度；期初库存；采购；期末库存；退料；内部回用 | 计量用水，以物料平衡核对化学品补加量并保留浓度检验 | kg | 每批或每月 | 与产品输出相同期间 | 所有适用水法和机加工工序 | 计算净补加量，按规定换算活性物质量并除以合格输出质量 | 表计校准、库存核对、浓度检验 |
| `cp_product_mass` | `pump_part_manufacturing` | 合格参考产品 | 生产放行、检验和校准称量记录 | 零件号；合格数量；单件或批次净质量；不合格数量；返工；放行日期 | 称量代表性零件或合格批次并与终检放行记录核对 | kg | 每批 | 与清单投入相同期间 | 声明数据集中所有合格零件 | 汇总合格净质量；排除包装、不合格品和在制品 | 秤校准、检验放行、生产核对 |
| `cp_waste_mass` | `pump_part_manufacturing` | 材料废料、废切削液和处理污泥 | 废物容器、磅单、转移联单和内部退料日志 | 废物身份；来源工序；毛重和皮重；含水率或干物质；内部回收；去向 | 各分选流在转移时称量，并单独核对内部回用材料 | kg | 每次转移并按月汇总 | 与产品输出相同期间 | 所有纳入工序 | 按流汇总离开前景的净质量并除以合格输出质量 | 磅单、联单、去向记录、物料平衡核对 |
| `cp_wastewater_records` | `pump_part_manufacturing` | 水相废液 | 排放计量表、批次排放和处理日志 | 体积或质量；密度；处理状态；去向；采样结果；报告期 | 计量连续排放或计算有记录的批次排放，并扣除经验证的内部回用 | kg | 每次排放或每月 | 与产品输出相同期间 | 所有纳入水法工序 | 必要时按有记录密度换算，并将净排放量除以合格输出质量 | 表计校准、批记录、处理和排放记录 |
| `cp_direct_emissions` | `pump_part_manufacturing` | 直接化石源二氧化碳 | 燃料计量表、供应商组成、烟气监测和场址排放清单 | 燃料量；碳含量或排放因子；氧化假设；监测 CO2；分配驱动 | 优先采用校准的直接监测；否则按场址特定燃料记录计算并保留计算依据 | kg | 每月或更高频 | 与产品输出相同期间 | 仅限场内燃烧和热工序 | 排除上游排放，分配直接总量并除以合格输出质量 | 表计校准、供应商证书、计算工作表、监测质控 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 报告期流数量 / 报告期合格产品净质量 | 采集的流数量；合格产品净质量 | 每 1 kg 参考产品的数量 |  |
| `calc_electricity_mj` | 以 kWh 记录的电力 | 电力 MJ = 实测 kWh × 3.6 | 实测 kWh 电力 | MJ 电力 |  |
| `calc_active_naoh` | 氢氧化钠溶液 | 活性 NaOH 质量 = 溶液质量 × 实测 NaOH 质量分数 | 溶液质量；浓度检验 | kg 活性氢氧化钠 |  |
| `calc_material_balance` | 每个声明材料族 | 期初库存 + 采购 - 期末库存 - 有记录退料 = 产品含量 + 外送废料 + 废物所含量 + 其他声明损失 | 库存、采购、退料、产品、废料、污泥和损失记录 | 经核对的材料族平衡 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留零件号、功能、图样或规范版本、材料牌号、路线和验收状态。 | 批准图样、物料清单、工艺卡、检验放行 |
| `dq_temporal` | 所有前景行 | 投入、输出、库存变化和分配驱动采用相同的代表性报告期。 | 带日期的计量、生产、库存和废物记录 |
| `dq_completeness` | 所有纳入工序 | 核对计量表、采购、库存变化、产品、废料、废水、污泥和直接排放；记录每个排除工序和估算残差。 | 核对与缺口日志 |
| `dq_geography_technology` | 链接的上游数据集 | 尽可能匹配供应商地理范围、材料形态和牌号、电力结构、天然气条件、供水、处理路线和技术。 | 供应商与数据集元数据对比 |
| `dq_measurement` | 实测值和计算值 | 保留校准状态、原始单位、换算、浓度、密度、分配驱动、公式和责任审核人。 | 校准证书和计算工作簿 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若输出为完整液泵、非泵零件、缺少泵零件身份的通用商品，或缺少必需的零件和规范限定信息，则数据包校验失败。 | `un-cpc-3-0-structure-2025` |
| `validate_mass_balance` | 材料族记录 | 每个纳入材料族都必须具有材料平衡记录，未解释差额必须在放行前调查。 |  |
| `validate_route` | 过程边界 | 每项适用的成形、模塑、机加工、处理、试验、外协和包装工序必须纳入，或明确披露为前景之外并链接数据集。 | `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006`, `us-niosh-metal-working-fluids-2008` |
| `validate_uuid` | 流身份 | 若 UUID 直读的名称、流类型、分类、属性或单位组与选定交换冲突，则拒绝该 UUID 行；未解决行继续作为明确审查项。 |  |
| `validate_data_quality` | 数据集放行 | 必须记录时间一致性、单位换算、分配驱动、上游代表性和完整性核对。 | `eu-environmental-footprint-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的、作为独立货物供应的液泵或液体提升器零件前景制造数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当零件身份、材料、路线、地理、技术和时间范围兼容时，用于产品特定的从摇篮到大门或全生命周期模型 |
| excluded_use | 缺少额外装配数据的完整液泵生产；使用阶段性能；无关机械零件；未经进一步审查对不同功能或规范进行比较声明 |
| required_metadata | PCR id；零件名称和功能；配套设备类型；图样或规范；材料及牌号；净质量；制造和外协路线；工厂和地理；报告期；分配；包装；未解决身份 |
| required_quality_disclosure | 前景覆盖；计量表和物料平衡核对；时间覆盖；分配驱动；上游数据集匹配；估算；排除项；废水和废物去向；直接排放方法 |
| update_trigger | 零件设计、材料或牌号、超出研究阈值的质量、成形或机加工路线、处理或涂层、供应商结构、能源系统、场址、分配驱动、包装或未解决流身份发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43252 正式身份及其与 43220 次级的关系 |
| `un-cpc-1-1-chinese-2002` | official_guidance | 联合国统计司，《产品总分类版本 1.1》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于 2026-09-05） | 对未改变代码 43252 和 43220 次级的专业中文标题与术语进行核验 |
| `eu-jrc-sf-bref-2024` | official_guidance | 欧盟委员会联合研究中心，《锻造与铸造业最佳可行技术参考文件》，JRC140209，DOI 10.2760/4805267，2024，https://publications.jrc.ec.europa.eu/repository/handle/JRC140209（检索于 2026-09-05） | 条件性铸造或锻造路线以及材料、能源、废料和直接排放采集范围 |
| `eu-jrc-stm-bref-2006` | official_guidance | 欧盟委员会，《金属和塑料表面处理最佳可行技术参考文件》，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-05） | 条件性水法表面处理、电力、水、化学品、废水、污泥和路线披露 |
| `us-niosh-metal-working-fluids-2008` | official_guidance | 美国国家职业安全与健康研究所，《预防金属加工液健康危害》，2008，https://www.cdc.gov/niosh/bulletin/2008/metal-working-fluids.html（检索于 2026-09-05） | 机加工、切削液投入、切屑排出、直油型与水混溶型加工液及其废液区分 |
| `eu-environmental-footprint-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279《关于使用环境足迹方法》，2021 年 12 月 15 日，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-09-05） | 功能单位、参考流、系统边界、清单完整性、多功能过程、数据采集和数据质量规则 |
