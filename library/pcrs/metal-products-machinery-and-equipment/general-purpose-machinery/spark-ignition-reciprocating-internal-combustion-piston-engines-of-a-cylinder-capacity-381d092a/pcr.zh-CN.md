---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-381d092a
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 气缸排量超过1000毫升的点燃往复式活塞内燃发动机

## 1. 范围与适用性

本 PCR 适用于气缸总排量超过 1000 cc、用于机动车辆的一台全新完整点燃往复式活塞内燃发动机从摇篮到制造商工厂门的前景数据生产。前景数据包涵盖材料和零部件供应、为所报告发动机实施的零部件铸造或成形、机械加工、水基清洗、总装、生产试验，以及验收合格发动机向制造商工厂门的交付。供应商过程可采用上游数据集链接而不在前景中重复，但相应材料和零部件负荷仍处于产品系统内。

本 PCR 不包括航空发动机、旋转式发动机、排量不超过 1000 cc 的发动机、压燃式发动机、单独销售的不完整发动机零件、再制造发动机、整车安装、车辆运行、维护、更换和寿命终止。除非声明的产品状态明确包含，否则包装和出厂后配送不纳入边界。具体数据集应声明哪些铸造、机加工、清洗、总装和热试过程在场址内完成，哪些由供应商数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-381d092a |
| classification_refs | CPC 3.0：43122，精确分类语境 |
| covered_products | 气缸总排量超过 1000 cc、用于机动车辆的全新完整点燃往复式活塞发动机 |
| excluded_products | 排量不超过 1000 cc 的发动机；压燃式、旋转式或航空发动机；不完整零件；再制造发动机；整车 |
| representative_product | 在发动机制造商工厂门、排量超过 1000 cc、已总装并通过生产验收且兼容汽油的往复式活塞发动机 |
| production_route | 材料和零部件供应；适用时的铸造/成形；机加工；清洗；总装；冷试，以及实施时的热试 |
| market_state | 全新完整发动机，明确声明干态或加注态，已验收可安装于机动车辆 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台可安装于机动车辆、排量超过 1000 cc、通过生产验收的完整点燃往复式活塞发动机 |
| How much | 工厂门处 1 kg 发动机净质量；同时报告其代表的完整发动机台数 |
| How well | 符合声明的发动机族或型号技术规范及制造商生产验收准则 |
| How long or cycle | 至工厂门验收的一次制造周期；服役寿命和车辆使用不属于本 PCR |
| reference_flow_link | 参考流为验收合格完整发动机的实测净质量；采用同批次发动机实测净质量将一台发动机换算为 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 汽缸容量超过1000毫升的火花往复式活塞内燃机 `573e22c4-3de9-4b1e-a339-0e5a453d1457` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 发动机族和型号；气缸总排量（cc）；点燃和往复式构型；气缸数；进气方式；额定功率；兼容试验燃料；干态或加注态质量基准；所含附件和排放控制部件；制造地理位置和基准年；供应商与场址过程边界；冷试和热试状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和按质量归一化的行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用所声明干态或加注态下验收合格完整发动机的净质量。除非运输包装和工装明确属于销售产品，否则予以排除。 |
| `measurement_count_to_mass` | 发动机台数记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实测批次净质量除以验收合格发动机台数，将台数换算为质量；保留两个原始数值，不使用通用名义发动机质量。 |
| `measurement_energy` | 电力行 | 净热值/能量 | MJ | 保留计量能量，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ。不得将需量、容量或额定功率换算为能量。 |
| `measurement_gas_volume` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力以及体积是常态、标准状态还是实际状态。质量或能量换算应使用供应商或实测因子。 |
| `measurement_bom_mass` | 材料投入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的干湿基准和再生含量基准下核对材料净投入、产品中材料和单独计量的废料；不得由成本推断材料质量。 |

## 5. 系统边界

产品系统为从摇篮到工厂门。原生和再生材料生产及外购发动机零部件生产采用合格上游数据集表示。前景记录所报告发动机族的场址操作，包括适用的铸造或成形、机加工、清洗、总装和生产试验。资本设备、发动机安装、车辆使用、维护和寿命终止不在默认边界内。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 完整发动机产品系统 | 纳入原材料回收与开采、材料加工、发动机零部件生产、发动机总装，以及工厂门验收前产生废物的处理。外购材料和零部件应链接合格上游数据集。 | `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials` |
| `boundary_site_route` | 前景场址操作 | 仅纳入为所声明发动机实际实施的铸造、热处理、机加工和水基清洗过程；在其他地点实施的过程应披露供应商数据集。 | `usphs-1970-automotive-solid-wastes` |
| `boundary_production_test` | 冷试和热生产试验 | 纳入生产试验的全部电力、试验燃料、不合格发动机处置和直接基本流排放。汽油和热试燃烧排放仅在实施带燃料热试时适用。 | `argonne-anl-22-27-vehicle-production` |
| `boundary_no_double_count` | 已链接供应商和场址操作 | 不得在供应商数据集和前景阶段重复计算同一零部件制造、燃料燃烧或废物处理负荷。 |  |
| `boundary_exclusions` | 默认 PCR 边界 | 排除工厂资本品、员工通勤、发动机安装、整车装配、配送、使用、维护和寿命终止；若研究目标明确扩展边界，应单独报告扩展结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的原生或再生材料以及进入产品系统的外购发动机零部件，其供应商生产由上游数据集表示 |
| starting_condition_role | 从摇篮到工厂门的产品系统投入以及前景/供应商边界声明 |
| product_classification_scope | 仅完整 CPC 43122 发动机；不得无说明嵌入同类别完整发动机投入 |
| recursive_input_rule | 若完整 CPC 43122 发动机作为投入进入，应将其记录为独立产品流，并在其合格上游数据集处停止递归展开；不得将其改称零件或原材料 |
| upstream_dataset_requirement | 每种外购材料和零部件应采用地理和技术上具有代表性的数据集；披露再生含量、分配方法、生产地理、基准年和数据缺口 |
| disclosure | 声明发动机型号/族、质量状态、气缸排量、所含附件、供应商与场址过程、铸造和清洗路线、试验路线、不合格发动机处理及全部排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | 材料供应和发动机零部件制造 | required | 每个数据集均必须纳入；供应商操作可链接上游，场址操作应直接采集 | 总装前的材料组成、铸造/成形、机加工和清洗 | 每 kg 验收合格完整发动机的投入和产出 |
| `assembly_and_test` | 发动机总装和生产试验 | required | 每个数据集均必须纳入；燃料热试行仅在实施热试时适用 | 总装、验收试验和完整参考产品放行 | 每 kg 验收合格完整发动机的投入和产出 |

### 过程：材料供应和发动机零部件制造（`component_manufacture`）

#### 输入

##### 产品流

###### 铝合金材料（`cm_aluminium_alloy`）

记录铸造或变形加工发动机零部件所含铝合金质量；当相应零部件制造处于产品系统内时，还应计入实测过程损失。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：质量 / kg
- 数量规则：由产品特定物料清单加单独计量的铝加工损失计算铝合金投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_ledger`
- 来源：`argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials`

###### 合金钢条和杆（`cm_alloy_steel`）

记录进入零部件制造、除锻造或热加工外未经进一步加工的合金钢条或杆质量；牌号和交付形态为产品特定限定信息。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：质量 / kg
- 数量规则：由采购记录和产品特定物料清单计算合金钢条和杆投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_ledger`
- 来源：`argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials`

###### 灰铸铁（`cm_cast_iron`）

将进入缸体、缸盖、凸轮轴或其他发动机零部件的灰铸铁记录为一个质量流。因排序候选无法通过公开 state 100 直读，其天工 UUID 尚未解决。

- 选定流：灰铸铁
- 流属性/单位：质量 / kg
- 数量规则：由采购记录和产品特定物料清单计算灰铸铁投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_ledger`
- 来源：`mrozik-2020-si-engine-materials`; `usphs-1970-automotive-solid-wastes`

###### 丁腈橡胶材料（`cm_nitrile_rubber`）

仅在所声明发动机的密封件、软管或模塑件含丁腈橡胶时记录；其他弹性体应在完成的数据集中设为独立原子行。

- 选定流：丁腈橡胶 `ad250520-feb6-401a-9159-1f25c0fd7980`
- 流属性/单位：质量 / kg
- 数量规则：由产品特定物料清单计算丁腈橡胶投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_ledger`
- 来源：`argonne-anl-22-27-vehicle-production`

###### 切削液（`cm_cutting_fluid`）

记录跨越边界进入发动机零部件机加工的新鲜切削液补加量；循环库存每次循环不得重复计量。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 / kg
- 数量规则：实测新鲜切削液加入量减去退回的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_consumables`
- 来源：`usphs-1970-automotive-solid-wastes`

###### 零部件制造用电（`cm_electricity`）

记录适用铸造、机加工、清洗和零部件搬运操作消耗的外购及场内发电量，并扣除外送电量。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：将因果分配至所声明发动机族的计量电力换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_energy`
- 来源：`argonne-anl-22-27-vehicle-production`

###### 气态天然气（`cm_natural_gas`）

当气态天然气跨越边界用于场内金属熔化、热处理、空间/过程加热或其他发动机零部件操作时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在所声明基准状态下，将计量天然气体积分配给适用发动机操作
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fuel`
- 来源：`usphs-1970-automotive-solid-wastes`

###### 工艺用水（`cm_process_water`）

记录用于机加工液配制、零件清洗及其他发动机零部件操作的工艺用水；冷却水属于独立流，不得合并到本行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：分配给所声明零部件操作的计量工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`usphs-1970-automotive-solid-wastes`

###### 氢氧化钠（`cm_sodium_hydroxide`）

仅当发动机零部件采用碱性水基清洗浴或补充液时记录氢氧化钠；披露供货浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：由采购溶液质量和有文件依据的浓度计算纯氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`usphs-1970-automotive-solid-wastes`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 零部件清洗废水（`cm_cleaning_wastewater`）

记录离开发动机零件清洗过程的水基废水，并声明边界是在场内处理前还是处理后。留在槽内的清洗液、外运废液和下水道排放在无质量平衡换算时不得合并。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：质量 / kg
- 数量规则：转移至所声明处理或排放边界的实测清洗废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_waste`
- 来源：`usphs-1970-automotive-solid-wastes`

###### 废铸造型砂（`cm_spent_foundry_sand`）

仅当发动机零部件砂型铸造处于所声明边界内时记录废铸造型砂。应与喷砂磨料和炉渣分开。

- 选定流：废铸造型砂
- 流属性/单位：质量 / kg
- 数量规则：转移至场外或场内回收的实测废型砂，扣除内部循环砂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_waste`
- 来源：`usphs-1970-automotive-solid-wastes`

##### 基本流

###### 零部件制造化石源二氧化碳（`cm_fossil_co2`）

记录零部件操作中场内燃烧化石天然气直接排放的化石源二氧化碳。电力上游排放保留在电力数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：零部件操作消耗化石天然气对应的烟气测量或燃料碳平衡计算结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_component_direct_emissions`
- 来源：

### 过程：发动机总装和生产试验（`assembly_and_test`）

#### 输入

##### 产品流

###### 总装和试验用电（`at_electricity`）

记录总装工具、搬运、泄漏检查、冷试和生产试验设备用电；当计量条件允许时，与零部件制造用电分开。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：净热值 / MJ
- 数量规则：将总装和试验计量电力因果分配至所声明发动机族的合格和不合格发动机
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`argonne-anl-22-27-vehicle-production`

###### 带燃料热试用汽油（`at_gasoline`）

仅当生产路线包含带燃料热试时记录成品汽油。未改变并返还储罐的燃料不计入净消耗；披露牌号和化石/生物源含量。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：质量 / kg
- 数量规则：热试发放的实测汽油减去可回收返还燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_test_fuel`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格完整发动机（`at_reference_engine`）

仅记录通过所声明生产验收关口的完整发动机。不合格发动机和在制返工品在验收前不得计入参考产品数量。

- 选定流：汽缸容量超过1000毫升的火花往复式活塞内燃机 `573e22c4-3de9-4b1e-a339-0e5a453d1457`
- 流属性/单位：质量 / kg
- 数量规则：所声明干态或加注态下验收合格完整发动机的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格完整发动机参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

###### 热试化石源二氧化碳（`at_fossil_co2`）

记录发动机带燃料热试直接排放的化石源二氧化碳。仅冷试生产时本行不适用，且不包括汽油生产的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：直接测量，或根据热试净消耗汽油的化石碳比例进行碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一生产期每 1 kg 验收合格完整发动机
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_test_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 多阶段或多产品工厂 | 技术可行时，在分配前细分并分别计量零部件制造、总装和试验。 |  |
| `allocation_causal_driver` | 共用电力、燃料、水和耗材 | 采用机时、试验分钟数、单元计量消耗量或加工质量等有文件依据的因果驱动因素分配共用数量；仅当每台发动机资源使用可证明一致时才采用台数。 |  |
| `allocation_scrap` | 可回收金属和其他回收材料 | 将每种回收材料记录为独立物理产出，并披露回收分配约定。若无声明的研究方法，不得从前景消耗中扣除废料收入或避免负荷信用。 | `usphs-1970-automotive-solid-wastes` |
| `allocation_rework_rejects` | 返工和不合格发动机 | 将返工投入和处理负荷分配至产生它们的生产期。参考产品分母仅包括验收合格发动机质量。 |  |
| `allocation_supplier_boundary` | 外购零部件 | 不得分配或重复已包含在供应商链接数据集中的负荷；披露缺失供应商数据采用的截断或替代。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_ledger` | `component_manufacture` | 每项具名材料投入 | 产品 BOM、采购和废料记录 | 材料牌号；供应质量；产品中质量；废料质量；再生含量；零部件供应商；发动机族；合格发动机质量 | 将产品 BOM 与称重收货、供应商声明和废料台账核对 | kg | 工程版本变更时及每月核对 | 代表性生产期，通常至少 12 个月 | 范围内全部报告场址和材料供应商 | 分别汇总每种化学或物理上不同的材料，计入实测过程损失，再除以合格发动机质量 | 已批准 BOM 版本；衡器或发票记录；供应商声明；核对签字 |
| `cp_component_consumables` | `component_manufacture` | 切削液 | 采购、库存和领用记录 | 期初库存；采购；补加；退回；期末库存；浓度；生产线 | 储罐或仓库质量平衡，排除内部循环 | kg | 每月 | 与参考产出同一期间 | 范围内全部机加工单元 | 新鲜净补加量除以合格发动机质量 | 校准秤或供应商发票；储罐核对 |
| `cp_component_energy` | `component_manufacture` | 电力 | 电表读数和生产日志 | 起止读数；分表数值；外送电；机时；合格和不合格发动机质量 | 校准电表，或以因果分配与公用事业账单核对 | kWh 和 MJ | 连续或每月 | 与参考产出同一期间 | 范围内全部零部件操作 | 净电量乘 3.6 后除以合格发动机质量 | 电表校准；账单核对；分配工作表 |
| `cp_component_fuel` | `component_manufacture` | 气态天然气 | 燃气表和供应商记录 | 燃气体积；温度；压力；基准状态；操作；发动机族；合格发动机质量 | 校准燃气表并与供应商结算单核对 | m3 | 连续或每月 | 与参考产出同一期间 | 服务于零部件操作的全部燃烧装置 | 所声明状态下净体积除以合格发动机质量 | 仪表校准；供应商账单；分配工作表 |
| `cp_cleaning_records` | `component_manufacture` | 工艺用水和氢氧化钠 | 仪表、批次单和化学品领用记录 | 水质量或体积；溶液质量；NaOH 浓度；槽液补加和返回；发动机族；合格发动机质量 | 计量水量，并以有文件依据的溶液浓度计算纯 NaOH | kg | 每批及每月 | 与参考产出同一期间 | 每条适用清洗线 | 分别汇总净水量和纯 NaOH 后除以合格发动机质量 | 仪表校准；批次单；化学品证书和浓度计算 |
| `cp_component_waste` | `component_manufacture` | 每项具名废物产出 | 废物转移和内部回收记录 | 废物身份；干湿基准；质量；去向；危险特性；内部回收；发动机族 | 在转移边界称量每种废物流并核对内部循环 | kg | 每次发运及每月 | 与参考产出同一期间 | 范围内全部零部件操作 | 每种废物对外净转移量除以合格发动机质量 | 地磅单；联单；处理收据；含水率声明 |
| `cp_component_direct_emissions` | `component_manufacture` | 化石源二氧化碳 | 烟气测量或燃料碳平衡记录 | 燃料量；碳含量；化石比例；氧化率；实测 CO2；运行期 | 有条件时采用校准直接测量，否则采用有文件依据的碳平衡 | kg | 每次监测或每月计算 | 与参考产出同一期间 | 服务于零部件操作的全部场内化石燃烧 | 化石 CO2 除以合格发动机质量 | 校准和实验室证书或可审计碳平衡工作表 |
| `cp_assembly_energy` | `assembly_and_test` | 电力 | 总装/试验分表和生产日志 | 电表读数；试验分钟数；生产线工时；合格和不合格发动机质量 | 校准分表，或以因果分配与公用事业账单核对 | kWh 和 MJ | 连续或每月 | 与参考产出同一期间 | 总装和生产试验单元 | 净电量乘 3.6 后除以合格发动机质量 | 电表校准；生产和分配记录 |
| `cp_hot_test_fuel` | `assembly_and_test` | 汽油 | 燃料领用、退回和热试记录 | 发放质量；退回质量；牌号；化石比例；发动机族；试验次数；合格和不合格发动机质量 | 称重储罐或校准燃料计量器，并与库存核对 | kg | 每次试验或每班 | 与参考产出同一期间 | 全部带燃料生产试验台 | 发放减退回的汽油净量除以合格发动机质量 | 仪表校准；库存核对；试验日志 |
| `cp_hot_test_emissions` | `assembly_and_test` | 化石源二氧化碳 | 尾气测量或燃料碳平衡记录 | 实测 CO2；燃料碳含量；化石比例；净燃料；氧化率；试验次数 | 直接尾气测量或有文件依据的碳平衡 | kg | 代表性试验监测或每月 | 与参考产出同一期间 | 全部带燃料生产试验台 | 化石 CO2 除以合格发动机质量；仅在无带燃料试验时为零 | 分析仪校准和试验报告或可审计碳平衡工作表 |
| `cp_reference_product` | `assembly_and_test` | 验收合格完整发动机 | 终检、秤量和生产记录 | 发动机型号；序列号或批次；气缸排量；干态/加注态；净质量；合格台数；不合格台数；所含附件 | 与最终验收状态关联的校准秤 | kg 和台 | 每批或连续 | 与全部前景投入同一期间 | 范围内全部发动机终装线 | 汇总合格净质量；台数和不合格质量单独保留 | 秤校准；验收日志；配置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_intensity` | 每项 BOM 材料行 | （产品中材料质量 + 边界内过程损失）/ 验收合格完整发动机质量 | BOM、采购、供应商声明、材料特定废料、合格发动机质量 | 每 kg 合格发动机的材料 kg | `argonne-anl-22-27-vehicle-production`; `mrozik-2020-si-engine-materials` |
| `calc_energy_intensity` | 电力行 | （购入电 + 场内发电自用 - 外送电）× 3.6 / 验收合格完整发动机质量 | kWh 电表记录、分配驱动因素、合格发动机质量 | 每 kg 合格发动机的电力 MJ |  |
| `calc_solution_active_mass` | 氢氧化钠 | 供应溶液质量 × 实测或认证 NaOH 质量分数 / 验收合格完整发动机质量 | 溶液质量、浓度、合格发动机质量 | 每 kg 合格发动机的 NaOH kg |  |
| `calc_waste_intensity` | 每项废物行 | 对外转移废物质量（排除经核实的内部循环）/ 验收合格完整发动机质量 | 转移称重、回收记录、合格发动机质量 | 每 kg 合格发动机的废物 kg | `usphs-1970-automotive-solid-wastes` |
| `calc_fossil_co2` | 直接化石源二氧化碳 | 采用校准直接测量，或净燃料 × 碳质量分数 × 化石比例 × 氧化率 × 44/12；不得加入上游燃料排放 | 燃料和碳记录或直接测量、合格发动机质量 | 每 kg 合格发动机的化石源 CO2 kg |  |
| `calc_reference_flow` | 参考产品 | 合格发动机净质量 / 合格发动机净质量 | 合格发动机质量和台数 | 1 kg 参考产品及其对应发动机台数 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个纳入发动机族证明其为点燃式、往复式、机动车辆用途且气缸总排量超过 1000 cc。 | 工程技术规范、配置记录和最终验收日志 |
| `dq_bom_completeness` | 材料和零部件供应 | 将占发动机净质量至少 1% 的每种物理或化学上不同的材料或外购零部件，以及不论占比的每种危险或高影响材料，表示为独立原子流或合格供应商数据集。将已表示质量与发动机净质量核对，并解释剩余量。 | 已批准 BOM、供应商声明和质量核对工作表 |
| `dq_temporal` | 全部前景行 | 采用一致的代表性生产期，通常至少连续 12 个月；披露起止日期、停产、型号变更和异常生产期。 | 带日期的仪表、发票、生产日志和变更控制记录 |
| `dq_geography_technology` | 上游和前景数据 | 使生产地理、电力供应、材料路线、再生含量、铸造技术、清洗化学和试验路线与所声明发动机相匹配。 | 数据集元数据、供应商声明和路线图 |
| `dq_meter_reconciliation` | 能源、水、燃料和废物 | 将分表与工厂总量核对，并记录分配驱动因素、校准状态、缺失时段和估算。 | 校准证书和签字核对工作表 |
| `dq_no_umbrella_flows` | 完成的清单 | 将路线特定的材料、燃料、化学品、废物和排放添加为独立原子行；不得用合并的公用工程、材料、废物或排放类别代替。 | 清单与采购、仪表、BOM 和废物台账的核查 |
| `dq_uncertainty` | 计算和分配行 | 披露测量不确定性、分配比例、缺失供应商数据和全部替代。 | 计算工作簿、不确定性记录和数据缺口登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份和参考流 | 若参考产品不是气缸排量超过 1000 cc 的完整 CPC 43122 发动机，或未声明参考质量、发动机台数、干态/加注态及所含附件，则拒绝数据集。 | `un-cpc-3-0-structure-2025` |
| `validation_boundary` | 系统边界 | 确认材料/零部件供应、适用零部件操作、总装和生产试验仅纳入一次，并披露供应商与场址责任及排除项。 | `argonne-anl-22-27-vehicle-production`; `usphs-1970-automotive-solid-wastes` |
| `validation_inventory_atomicity` | 过程清单 | 确认每行是一个产品、废物或基本流交换，具有一个适用属性和单位；拒绝合并的材料、公用工程、燃料、废物或排放。 |  |
| `validation_bom_balance` | 材料投入 | 将产品中材料加单独计量损失与合格发动机质量核对；调查并披露超过数据集声明不确定性的无法解释剩余量。 | `mrozik-2020-si-engine-materials` |
| `validation_energy_units` | 电力和气态燃料 | 核验 kWh 到 MJ 的换算、燃气基准状态，并确认未以功率替代能量。 |  |
| `validation_route_conditions` | 条件操作和行 | 仅在有路线证据证明相应操作未发生时，才将天然气、氢氧化钠、废铸造型砂、汽油和直接燃烧排放标记为不适用。 |  |
| `validation_combustion_double_count` | 直接化石源 CO2 | 确认场址和热试直接化石源 CO2 不含上游电力及燃料供应排放，并与同一前景燃料记录关联。 |  |
| `validation_data_quality` | 全部行 | 确认时间一致性、仪表核对、供应商代表性、校准证据和明确的数据缺口披露。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台全新完整 CPC 43122 发动机的从摇篮到工厂门二手数据集或背景数据集 |
| downstream_use | 当参考产品限定信息匹配时，用于车辆生产 LCA、动力总成比较、发动机零部件供应建模和生命周期模型组装 |
| allowed_use | 仅在发动机排量、构型、质量状态、所含附件、地理、技术、生产年份和试验路线相匹配后使用 |
| excluded_use | 航空或旋转式发动机；排量不超过 1000 cc 的发动机；压燃式发动机；再制造发动机；零件产品；使用阶段燃料消耗或尾气建模 |
| required_metadata | PCR id 和版本；发动机族/型号；气缸排量；质量和台数；干态/加注态；所含附件；地理；基准期；供应商与场址边界；材料路线和再生含量；铸造、清洗和试验路线；分配及回收方法 |
| required_quality_disclosure | 前景覆盖；BOM 质量闭合；仪表和秤校准；时间覆盖；供应商数据质量；分配驱动因素；UUID 缺口；范围证据缺口；不确定性和替代 |
| update_trigger | 影响质量或材料的工程变更；新发动机族；排量或燃料兼容性变化；供应商或工厂变化；铸造/清洗/试验路线变化；电力或燃料变化；分配方法变化；数据超过声明的代表性期限 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 43122 官方身份和分类路径 |
| `argonne-anl-22-27-vehicle-production` | 官方指南（`official_guidance`） | Kelly 等，Cradle-to-Grave Lifecycle Analysis of U.S. Light-Duty Vehicle-Fuel Pathways，ANL-22/27，Argonne National Laboratory，2022 年 6 月，https://www.osti.gov/biblio/1875764 | 从摇篮到工厂门的车辆生产阶段、主要材料类别、零部件制造和总装系统边界 |
| `mrozik-2020-si-engine-materials` | 文献（`literature`） | M. Mrozik，Ecological comparative assessment of selected materials used for the construction of spark ignition engines，Combustion Engines 183(4)，2020，https://doi.org/10.19206/CE-2020-402 | 1396-1796 cm3 点燃发动机的产品特定材料组成、BOM 采集和材料敏感性 |
| `usphs-1970-automotive-solid-wastes` | 官方指南（`official_guidance`） | Ralph Stone and Company, Inc.，Solid Wastes in the Automotive Industry，SW-20C，U.S. Public Health Service，1970，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101VAUL.TXT | 发动机铸造、精加工和总装顺序；铸造砂和金属机加工废物的独立识别 |
| `prc-2018-engine-terminology` | 官方指南（`official_guidance`） | 中华人民共和国国务院，《对美加征关税商品清单二》，2018，https://www.gov.cn/xinwen/2018-08/08/5312624/files/a2e1f243401141ecabbe93fa983a6937.pdf | “点燃往复式活塞内燃发动机”和“气缸容量（排气量）超过1000毫升”的专业中文术语 |
