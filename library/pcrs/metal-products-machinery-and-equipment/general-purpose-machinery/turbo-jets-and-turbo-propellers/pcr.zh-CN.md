---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.turbo-jets-and-turbo-propellers
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 涡轮喷气发动机和涡轮螺旋桨发动机

## 1. 范围与适用性

本 PCR 支持完整涡轮喷气发动机和涡轮螺旋桨发动机制造及工厂放行的从摇篮到工厂大门前景数据包。民用或军用产品均可适用，但须声明发动机型号、构型、生产场址、报告期和放行状态。

本类别包括主要以喷气推力提供有用输出的完整涡轮喷气发动机，以及由燃气涡轮向螺旋桨系统提供轴功率的完整涡轮螺旋桨发动机。除非分类映射另经审查，否则不包括涡轮风扇发动机；亦不包括往复式航空发动机、涡轮喷气发动机以外的反作用式发动机、其他用途燃气轮机、单独销售的发动机零件、飞机安装、配送、使用、维护、大修和寿命终止。日常制造以外的研制和认证试验，除非研究目标明确纳入并给出分配依据，否则予以排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0：43132，精确分类语境 |
| covered_products | 作为可销售推进装置放行的完整涡轮喷气发动机和完整涡轮螺旋桨发动机 |
| excluded_products | 未经审查映射的涡轮风扇发动机；往复式航空发动机；其他反作用式发动机；非航空燃气轮机；单独销售的零件；修理或大修发动机 |
| representative_product | 处于声明交付构型且经检验放行的完整涡轮喷气发动机或涡轮螺旋桨发动机 |
| production_route | 指定材料和部件接收；适用时的场内部件制造和热处理；适用时的表面处理和清洗；最终装配、检验和生产试验 |
| market_state | 制造商工厂大门处的成品发动机，并声明干/湿交付状态、已安装附件、防护材料和包装边界 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并放行能够提供声明额定推力的完整涡轮喷气发动机，或能够提供声明额定轴功率的完整涡轮螺旋桨发动机 |
| How much | 工厂大门处成品发动机净质量 1 kg |
| How well | 符合声明的发动机型号或型号设计、构型、质量验收状态、额定推力或轴功率以及交付状态 |
| How long or cycle | 一次生产和放行事件；使用寿命和飞行运行不属于本从摇篮到工厂大门功能单位 |
| reference_flow_link | 1 kg 参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 涡轮喷气发动机和涡轮螺旋桨发动机 `fb78e875-8bc6-484d-b2c4-ede9c1726721` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机类型：涡轮喷气或涡轮螺旋桨；制造商和型号；额定推力或轴功率及额定基准；交付构型和已安装附件；干质量或湿质量状态及所含流体；生产场址和地理范围；报告期；新造或大修状态；验收和认证语境；包装和运输支架边界 |

构建前景数据包时，所有必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_engine_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过受控放行记录测量或取得交付构型发动机净质量。排除可重复使用的试验工装和运输支架；声明是否包括工作流体、防护介质、附件和一次性包装。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明气体计量体积的温度、压力和干/湿基准；归一化前将全部记录换算到同一声明参考条件。 |
| `electricity_energy_basis` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能，并按 1 kWh = 3.6 MJ 换算；不得把遗留记录中关联的质量属性 UUID 文本解释为质量计量。 |
| `inventory_mass_normalization` | 质量型清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告总投入、退回材料、分类废料、废物和直接排放，再以放行参考发动机质量归一化经分配的数量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground_system_boundary | 在声明产品实际发生相应操作时，纳入报告制造商控制的材料和部件接收、部件制造、热处理、表面处理、清洗、装配、检验、日常生产试验、防护和工厂放行。 | `us-epa-aerospace-sector-notebook-1998` |
| `sb_upstream_inputs` | product_and_energy_inputs | 每项跨越前景边界的外购材料、部件、化学品、燃料、电力供应、供水和废物处理服务，均须链接产品状态、地理、技术和交付边界相容的上游数据集。 | `eu-pef-method-2021` |
| `sb_complete_inventory` | foreground_inventory | 保留所有环境相关的物质与能源流、产品、废物和直接排放；除下列典型卡片外，还须把产品特定 BOM 和过程交换作为独立原子行补充。 | `eu-pef-method-2021` |
| `sb_test_boundary` | production_testing | 纳入可归属于放行发动机的日常生产和验收试验。研制、原型和型号认证试验默认排除，除非目标明确纳入且记录分配。试车台燃料和实测排气交换须分别记录。 | `us-epa-aerospace-sector-notebook-1998`; `icao-aircraft-engine-emissions-standards` |
| `sb_excluded_life_cycle` | downstream_life_cycle | 默认边界排除飞机集成、工厂大门后的配送、飞行运行、维护、修理、大修和寿命终止。 | `un-cpc-3-0-structure-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在发动机制造边界接收的外购材料坯料和部件，并声明供应商、牌号或零件标识、质量、交付状态和上游数据集覆盖 |
| starting_condition_role | 从摇篮到工厂大门前景起点；上游生产和入厂交付仍作为相链接的背景过程 |
| product_classification_scope | 完整涡轮喷气发动机和涡轮螺旋桨发动机；CPC 3.0 子类 43132 仅为分类语境，不包括单独销售的零件 |
| recursive_input_rule | 作为投入接收并装入的完整发动机仍作为独立产品流记录，并链接自身上游数据集，不得改标为前景产出；外购零件按其实际产品标识逐项记录 |
| upstream_dataset_requirement | 有供应商特定数据时优先采用；否则采用地理、技术、时间和产品状态相容的背景数据集，并披露代理 |
| disclosure | 声明自制/外购边界、场内过程集合、合金牌号和产品形态、发动机构型、试验计划、直接排放计量方法、废料去向、废水处理、分配选择以及所有遗漏或代理交换 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件制造和热处理 | conditional | 纳入前景控制下实施的各项制造、机械加工、连接和热处理；否则用各外购零件自身的上游数据集表示。 | 前景生产 | 转入装配的合格部件质量 |
| `surface_treatment` | 表面处理和清洗 | conditional | 前景控制下实施化学铣削、清洗、阳极氧化、电镀、涂覆、钝化或相关精整时纳入。 | 前景调质 | 转入装配的已处理部件质量 |
| `final_assembly_testing` | 最终装配、检验和生产试验 | required | 纳入整机装配和检验；为放行发动机或生产批次实施试车台运行时纳入该运行。 | 前景生产与放行 | 合格成品发动机净质量 kg |

### 过程：部件制造和热处理（`component_fabrication`）

#### 输入

##### 产品流

###### 镍基高温合金坯料（`nickel_alloy_stock`）

记录前景部件制造所消耗的具体镍基高温合金牌号和接收形态。

- 选定流：镍基高温合金坯料
- 流属性/单位：Mass / kg
- 数量规则：供应商入库量加期初库存，减期末库存和有据可查的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 钛合金坯料（`titanium_alloy_stock`）

记录前景部件制造所消耗的具体钛合金牌号和接收形态。

- 选定流：钛合金坯料
- 流属性/单位：Mass / kg
- 数量规则：供应商入库量加期初库存，减期末库存和有据可查的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 铝合金坯料（`aluminium_alloy_stock`）

记录前景部件制造所消耗的具体铝合金牌号和接收形态。

- 选定流：铝合金坯料
- 流属性/单位：Mass / kg
- 数量规则：供应商入库量加期初库存，减期末库存和有据可查的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 不锈钢坯料（`stainless_steel_stock`）

记录前景部件制造所消耗的具体不锈钢牌号和接收形态。

- 选定流：不锈钢坯料
- 流属性/单位：Mass / kg
- 数量规则：供应商入库量加期初库存，减期末库存和有据可查的退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 部件制造外购电力（`component_electricity`）

记录机械加工、成形、连接、热处理、通风及可直接归属辅助设备的计量用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程分表电量，或按因果关系分配的工厂总表电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_utilities`

###### 热处理天然气（`heat_treatment_natural_gas`）

采用该路线时，记录前景控制热处理设备燃烧的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量的气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_utilities`

###### 热加工工业氧气（`thermal_process_oxygen`）

记录适用的热切割、连接或可控气氛操作所用供应氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件取得的供应商或过程流量计体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_utilities`

###### 机械加工切削液（`cutting_fluid`）

记录进入机械加工系统的切削液补加质量；系统内回收循环量不计入外购总量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：外购补加量加期初库存，减期末库存和外部退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_materials`
- 来源：`us-epa-aerospace-sector-notebook-1998`

#### 输出

##### 废物流

###### 镍合金制造废料（`nickel_alloy_scrap`）

记录离开前景控制的分类镍合金切屑、边角料和不合格坯料。

- 选定流：镍合金制造废料
- 流属性/单位：Mass / kg
- 数量规则：按合金族取得称重交运量或扣除皮重后的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_wastes`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 钛合金制造废料（`titanium_alloy_scrap`）

记录离开前景控制的分类钛合金切屑、边角料和不合格坯料。

- 选定流：钛合金制造废料
- 流属性/单位：Mass / kg
- 数量规则：按合金族取得称重交运量或扣除皮重后的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_wastes`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 铝制造废料（`aluminium_alloy_scrap`）

记录离开前景控制的分类铝合金切屑、边角料和不合格坯料。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：称重交运量或扣除皮重后的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_wastes`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 不锈钢制造废料（`stainless_steel_scrap`）

记录离开前景控制的分类不锈钢切屑、边角料和不合格坯料。

- 选定流：不锈钢制造废料
- 流属性/单位：Mass / kg
- 数量规则：按不锈钢牌号族取得称重交运量或扣除皮重后的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_wastes`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 废机械加工冷却液（`spent_coolant`）

记录移交处理的废机械加工冷却液，不包括仍在系统内循环的冷却液。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：外运处理时的称重质量或由体积换算的质量，并披露含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_wastes`
- 来源：`us-epa-aerospace-sector-notebook-1998`

##### 基本流

###### 部件过程燃烧产生的化石源二氧化碳（`component_fossil_carbon_dioxide_to_air`）

仅记录前景部件过程边界内燃料燃烧直接排放的化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或根据实测燃料含碳量和氧化率计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_emissions`

###### 部件过程燃烧产生的化石源一氧化碳（`component_fossil_carbon_monoxide_to_air`）

记录前景燃烧设备直接排入空气的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或采用披露的设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_emissions`

###### 部件过程燃烧产生的氮氧化物（`component_nitrogen_oxides_to_air`）

记录直接排入空气的氮氧化物，并声明 NO2 当量等报告基准。

- 选定流：排入空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或采用披露的设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_emissions`

### 过程：表面处理和清洗（`surface_treatment`）

#### 输入

##### 产品流

###### 表面处理工艺用水（`surface_process_water`）

记录声明路线中清洗、化学铣削、漂洗、淬火或水性精整的供水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供水质量，或以实测/有据密度将计量体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 表面处理外购电力（`surface_electricity`）

记录可归属于表面处理的槽体、泵、抽风、烘箱、涂覆设备和废水处理用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程分表电量，或按因果关系分配的工厂总表电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`

###### 铝化学铣削用氢氧化钠（`sodium_hydroxide`）

记录适用铝化学铣削槽的纯氢氧化钠当量；实际使用的其他蚀刻剂须另行记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘经核实的氢氧化钠质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-sector-notebook-1998`

#### 输出

##### 废物流

###### 金属精整废水（`metal_finishing_wastewater`）

记录表面处理后、场内或场外处理前离开该过程的水性废物流，并披露 pH、金属、油及相关工艺化学品。

- 选定流：金属精整工艺废水
- 流属性/单位：Mass / kg
- 数量规则：处理分配前的计量排放质量，或以实测密度将体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-aerospace-sector-notebook-1998`

### 过程：最终装配、检验和生产试验（`final_assembly_testing`）

#### 输入

##### 产品流

###### 装配和检验外购电力（`assembly_electricity`）

记录装配工具、受控环境、检验、仪器和可直接归属辅助设备用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：过程分表电量，或按因果关系分配的工厂总表电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`

###### 最终清洗和试验工艺用水（`final_cleaning_process_water`）

在进行最终清洗、泄漏试验或其他水性检验时记录其供水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供水质量，或以实测/有据密度将计量体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_records`
- 来源：`us-epa-aerospace-sector-notebook-1998`

###### 试车台煤油型喷气燃料（`test_kerosene_jet_fuel`）

记录可归属于放行发动机或生产批次的生产/验收试验实际燃烧的煤油型航空涡轮燃料。

- 选定流：煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位：Mass / kg
- 数量规则：经校准试车台燃料计取得的质量，并扣除回流和留存燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test_cell_records`
- 来源：`icao-aircraft-engine-emissions-standards`

#### 输出

##### 产品流

###### 合格成品发动机（`finished_engine`）

记录处于声明工厂大门交付状态的完整合格发动机净质量。

- 选定流：涡轮喷气发动机和涡轮螺旋桨发动机 `fb78e875-8bc6-484d-b2c4-ede9c1726721`
- 流属性/单位：Mass / kg
- 数量规则：仅计合格发动机的受控放行质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_engine_mass`

##### 基本流

###### 试车台燃料燃烧产生的化石源二氧化碳（`test_fossil_carbon_dioxide_to_air`）

记录前景生产边界内试车台燃料燃烧产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排气质量，或根据实测试验燃料和核实含碳量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_cell_records`
- 来源：`icao-aircraft-engine-emissions-standards`

###### 试车台燃料燃烧产生的化石源一氧化碳（`test_fossil_carbon_monoxide_to_air`）

记录试车台直接排放的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对可归属试验时段的排放浓度和排气流量积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_cell_records`
- 来源：`icao-aircraft-engine-emissions-standards`

###### 试车台燃料燃烧产生的氮氧化物（`test_nitrogen_oxides_to_air`）

记录试车台直接排放的氮氧化物，并声明 NO2 当量等报告基准。

- 选定流：排入空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：对可归属试验时段的排放浓度和排气流量积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_cell_records`
- 来源：`icao-aircraft-engine-emissions-standards`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | multi_product_processes | 首先通过分表计量、批次追溯、过程细分或技术合理的系统扩展避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | shared_facility_inputs_and_outputs | 无法细分时，按机时、槽负荷、试车台时间或实测质量处理量等有据可查的因果物理驱动因子，分配共用电力、燃料、水、化学品、废物和直接排放。 | `eu-pef-method-2021` |
| `allocation_engine_variants` | shared_engine_family_production | 发动机变型的质量或加工差异显著时，不得仅按台数分配；采用发动机特定记录或合理的质量、机时、试验时间驱动因子，并披露敏感性。 | `eu-pef-method-2021` |
| `allocation_scrap` | recyclable_scrap | 在应用研究声明的回收方法前，记录总材料投入和分类废料质量；不得以废料冲减投入并再次计入回收收益；须披露去向、质量和分配约定。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | 材料投入 | ERP 收货与领料；BOM；库存台账 | 材料标识；牌号；形态；供应商；收货、领用、退回质量；期初期末库存；批次；发动机型号 | 对采购、仓储和工单记录进行核对 | kg | 每次收货和领料；每月核对 | 具有代表性的连续 12 个月或完整生产活动 | 全部前景部件过程 | 净消耗质量按工单或有据物理驱动因子分配 | 校准秤；供应商证书；库存核对；异常日志 |
| `cp_component_utilities` | `component_fabrication` | 电力和工艺气体 | 分表与燃料/气体账单 | 表计标识；起止读数；能量或体积；参考条件；设备；运行时间；批次 | 优先校准分表；否则核对工厂总表并按因果关系分配 | MJ; m3 | 连续或逐批；每月核对 | 与产品产出相同报告期 | 全部可归属制造与热处理设备 | 汇总校正读数，扣除非生产用途，按实测设备时间或处理量分配 | 表计校准；账单核对；分配工作表 |
| `cp_component_wastes` | `component_fabrication` | 分类废料和废切削液 | 地磅单与废物联单 | 废物标识；合金族；毛重皮重；适用时含水率；去向；日期；批次 | 每批交运称重或使用经验证的容器质量 | kg | 每次交运 | 与产品产出相同报告期 | 全部前景部件过程 | 按废物标识汇总净质量，并按追溯工单或因果驱动因子分配 | 衡器校准；联单；回收或处理收据 |
| `cp_component_emissions` | `component_fabrication` | 直接燃烧排放 | 烟道测量与燃料记录 | 设备；燃料量；燃料碳；浓度；排气流量；运行时间；因子来源；污染物基准 | 优先直接测量；否则按实测活动量和有据因子计算 | kg | 每次监测活动及每月活动记录 | 与产品产出相同报告期 | 仅前景燃烧源 | 对实测质量速率积分，或实测活动量乘有据因子 | 校准记录；实验室报告；计算工作簿 |
| `cp_surface_records` | `surface_treatment` | 水、电力、化学品和废水 | 槽液补加日志；表计；化学品证书；废水记录 | 槽体标识；化学品溶液质量；浓度；水电读数；处理质量；废水体积或质量；密度；去向 | 核对批次日志、表计、采购和排放记录 | kg; MJ | 逐批或连续；每月核对 | 与处理部件相同报告期 | 全部前景表面处理线 | 计算纯化学品投入；汇总公用工程和废物；按槽负荷或处理质量分配 | 表计校准；浓度化验；排放记录；质量平衡 |
| `cp_assembly_records` | `final_assembly_testing` | 装配电力和工艺用水 | 分表；工单；清洗与检验日志 | 发动机序列号或批次；表计读数；操作；用水量；用时；合格或报废状态 | 按序列号/批次采集并与工厂表计核对 | MJ; kg | 每台或每批；每月核对 | 与放行发动机相同报告期 | 最终装配与检验区域 | 按有据因果处理分配给合格和报废生产 | 表计校准；工单关闭；检验记录 |
| `cp_test_cell_records` | `final_assembly_testing` | 试验燃料和直接排气 | 试车台运行文件及校准仪器 | 发动机序列号；燃料标识和质量；推力或轴功率设置；运行时间；污染物浓度；排气流量；中止运行；试验目的 | 在可归属生产试验期间，对校准燃料与排放测量积分 | kg | 每次试验运行 | 完整报告期 | 服务声明发动机的全部生产试车台 | 汇总生产和验收运行；批次试验分配给代表发动机；另行披露研制试验 | 仪器校准；签署试验报告；运行到发动机追溯 |
| `cp_finished_engine_mass` | `final_assembly_testing` | 合格参考产品 | 放行证书和受控称重记录 | 发动机序列号；型号；构型；干/湿状态；附件和流体；毛重及排除支撑物质量；验收日期 | 最终校准称重或受控构型质量声明 | kg | 每台放行发动机 | 完整报告期 | 全部声明生产场址 | 汇总合格发动机净质量；报废或返工产品另记 | 衡器校准；构型记录；放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | material input rows | 净消耗质量 = 收货量 + 期初库存 - 期末库存 - 有据退回量；归一化前核清无法解释的差异。 | 收货质量；期初库存；期末库存；退回质量 | 按原子材料标识的净投入 | `us-epa-aerospace-sector-notebook-1998` |
| `calc_reference_normalization` | all inventory rows | 归一化数量 = 报告期经分配交换量 ÷ 相同期间和范围的合格成品发动机净质量总和。 | 经分配交换；合格发动机质量 | 每 1 kg 参考产品的交换量 | `eu-pef-method-2021` |
| `calc_solution_active_mass` | sodium hydroxide | 纯氢氧化钠质量 = 溶液质量 × 实测或认证质量分数；若载体水具有实质性，应保留在水平衡中。 | 溶液质量；氢氧化钠质量分数 | kg 氢氧化钠 | `us-epa-aerospace-sector-notebook-1998` |
| `calc_gas_reference_volume` | natural gas and industrial oxygen | 按计量标准或记录的压缩因子方法，将实测体积换算到声明参考温度和压力；不得混用未换算条件。 | 实测体积；温度；压力；参考条件；压缩因子基准 | 声明参考条件下的 m3 |  |
| `calc_measured_emission_mass` | direct exhaust emissions | 在可归属运行时间内，对污染物浓度乘校正排气流量积分，并记录干/湿和参考氧修正。 | 浓度；排气流量；运行时间；修正基准 | kg 污染物 | `icao-aircraft-engine-emissions-standards` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 每项放行质量记录均须追溯到发动机序列号或生产批次、类型、型号、构型、输出额定值、验收状态和干/湿交付状态。 | 放行证书；构型记录；受控质量记录 |
| `dq_temporal_alignment` | all foreground exchanges | 全部交换采用共同报告期；记录库存结转、在制品、异常停机和产量变化。 | 报告期核对和异常日志 |
| `dq_meter_quality` | measured utilities and emissions | 保留表计标识、校准状态、读数间隔、缺失数据处理及任何参考条件换算。 | 校准证书；原始表计导出；计算记录 |
| `dq_completeness` | BOM and process inventory | 核对材料投入、合格产品、废料、废物和库存变化；解释全部物料残差及任何遗漏流。 | 质量平衡工作表；BOM 核对；遗漏登记 |
| `dq_background_match` | upstream datasets | 检查产品状态、合金或化学品牌号、地理、技术、时间、属性、单位和交付边界；披露所有代理。 | 数据集选择日志和代理理由 |
| `dq_test_traceability` | production testing | 区分生产、验收、认证、研制、中止和返工试验，并将纳入的燃料和排放追溯到发动机或代表批次。 | 试车台运行登记和分配工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | foreground_dataset_conformance | 确认参考产品是完整涡轮喷气发动机或涡轮螺旋桨发动机，而非零件、其他反作用式发动机、其他燃气轮机、飞机或大修服务，并包含所有必需限定信息。 | `un-cpc-3-0-structure-2025`; `sastind-turbojet-2013`; `sastind-turboprop-2013` |
| `val_reference_mass` | foreground_dataset_conformance | 确认全部清单数量采用同一合格发动机净质量分母和声明的干/湿、附件、流体、包装及运输支架边界。 |  |
| `val_atomic_inventory` | foreground_dataset_conformance | 确认每行仅含一个产品、废物或基本交换；把所有产品特定 BOM 材料、化学品、燃料、废物和直接排放补充为独立行，并拒绝集合标签。 | `eu-pef-method-2021` |
| `val_uuid_semantics` | foreground_dataset_conformance | 通过公开 state-100 标识、双语名称、流类型、分类、属性、单位组、产品状态、地理、技术和一般评注核实每个 UUID；未解决标识保持空白。 |  |
| `val_boundary_and_allocation` | foreground_dataset_conformance | 确认已声明并一致应用自制/外购边界、排除的研制和下游阶段、试验归属、共用资源分配、废料处理和代理数据集。 | `eu-pef-method-2021` |
| `val_mass_and_energy_reconciliation` | foreground_dataset_conformance | 放行前检查物料与能量核对、表计/账单合计、合格和报废生产、在制品及无法解释的残差。 | `eu-pef-method-2021` |
| `val_direct_emissions` | foreground_dataset_conformance | 确认直接燃烧和试车台排放仅含前景释放，且不重复上游电力或燃料供应排放。 | `icao-aircraft-engine-emissions-standards` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明完整涡轮喷气发动机或涡轮螺旋桨发动机构型的从摇篮到工厂大门前景生产数据集 |
| downstream_use | 在范围和限定信息相容时，可作为飞机、推进系统、资本货物和供应链生命周期模型的 secondary_dataset 或 background_dataset |
| allowed_use | 产品碳足迹、生命周期清单构建、供应商比较、设计研究，以及发动机类型、构型、技术、地理、时间和工厂大门边界相容的背景建模 |
| excluded_use | 飞行运行或任务燃油消耗建模；维护或大修建模；认证排放合规声明；未经功能修正比较不同推力或轴功率等级；未经审查映射表示涡轮风扇发动机或单独销售零件 |
| required_metadata | PCR id 和版本状态；发动机类型与型号；制造商；生产场址和地理；报告期；额定推力或轴功率及其基准；干/湿质量状态；交付附件和流体；自制/外购边界；过程路线；试验分配；背景数据集；分配方法 |
| required_quality_disclosure | 一手数据占比；表计和衡器质量；BOM 与质量平衡闭合；时间代表性；产量；报废/返工产品；试验覆盖；代理使用；未解决流标识；缺失范围证据；不确定性与局限 |
| update_trigger | 发动机型号或构型、合金或供应商路线、生产技术、场址能源系统、表面处理路线、试验计划、分配方法、环境控制、报告期或背景数据集代表性发生实质变化 |

## 11. 数据源

| 来源 | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43132 正式分类标识及相邻范围排除 |
| `sastind-turbojet-2013` | official_guidance | 国家国防科技工业局，《涡轮喷气发动机》，2013-09-29，https://www.sastind.gov.cn/n10086205/n10086408/n10104260/c10104725/content.html（检索于 2026-09-05） | 专业中文术语与涡轮喷气发动机产品边界 |
| `sastind-turboprop-2013` | official_guidance | 国家国防科技工业局，《涡轮螺旋桨发动机》，2013-09-29，https://www.sastind.gov.cn/n10086205/n10086408/n10104260/c10104735/content.html（检索于 2026-09-05） | 专业中文术语与涡轮螺旋桨发动机产品边界 |
| `us-epa-aerospace-sector-notebook-1998` | official_guidance | 美国环境保护署，Profile of the Aerospace Industry, Sector Notebook Project，1998 年 11 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000HO7.TXT（检索于 2026-09-05） | 航空发动机制造过程分解、常见材料族、机械加工、热处理、表面精整、试验、废水、废料和排放 |
| `eu-pef-method-2021` | method_factor | 欧盟委员会建议 (EU) 2021/2279，Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-05） | 功能单位与参考流、完整性、前景/背景清单、分配层级、数据质量和透明度 |
| `icao-aircraft-engine-emissions-standards` | official_guidance | 国际民用航空组织，Local Air Quality Technology Standards，https://www.icao.int/environmental-protection/LAQ/technology-standards（检索于 2026-09-05） | 适用喷气发动机试车台燃料流量和排气测量语境；不作为制造数值范围 |
