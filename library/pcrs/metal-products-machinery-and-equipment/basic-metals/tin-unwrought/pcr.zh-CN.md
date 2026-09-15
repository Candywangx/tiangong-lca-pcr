---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tin-unwrought
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧锡

## 1. 范围与适用性

本 PCR 适用于以进厂锡精矿、进厂废锡，或经声明的原生与再生含锡原料混合物为原料，生产具有未锻轧市场形态锡产品的前景过程。其范围涵盖厂内原料制备、火法还原或再生回收、适用时的精炼、铸造或粒化至所声明的未锻轧形态、内部回收循环、直接排放控制，以及工艺残余物管理，终点为生产设施大门。

本 PCR 涵盖仍处于未锻轧市场状态的非合金锡和锡合金。最终产品为锡矿石和精矿的情形不在范围内；半成品条、杆、型材、丝、板、片、带、箔、管、粉末和片状粉末，锡制品，除非发生于所声明前景设施内部的采矿和选矿，以及使用和生命终结阶段，也不在范围内。外购原料、电力、燃料、氧气、水、化学品和运输的上游生产通过关联的上游数据集表示，不在前景清单中重复计算。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tin-unwrought |
| classification_refs | CPC 3.0：41443，Tin, unwrought（`un-cpc-3-0-structure-2025`） |
| covered_products | 以声明的未锻轧形态销售的非合金锡和锡合金，包括锭、块、板坯、方坯、粗锭、饼或颗粒，条件是该形态为设施大门处直接产品，而非半成品。 |
| excluded_products | 作为最终产品销售的锡矿石和精矿；未经回收即销售的废锡；锡半成品；粉末和片状粉末；制成品；未声明锡品级、合金组成或未锻轧形态的产品。 |
| representative_product | 铸锭形态的精炼非合金锡；国际锡业协会研究以纯度 99.95% 的精炼锡作为其功能单位代表产品（`international-tin-association-refined-tin-lca`）。 |
| production_route | 经声明的氧化物锡精矿原生火法还原路线、从含锡废料或残余物回收的再生路线，或两者按实测组成的组合，并衔接路线特定的精炼及未锻轧形态生产。 |
| market_state | 位于生产设施大门、可销售的固态未锻轧锡；应声明品级或合金组成、物理形态、原生/再生原料占比、地理位置和技术。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 位于生产设施大门、具有声明品级和物理形态的可销售未锻轧锡。 |
| How much | 1 kg 可销售未锻轧锡净质量。 |
| How well | 符合生产者声明的品级或合金规范；不含生产包装，并扣除返料、内部循环料和不合格料。 |
| How long or cycle | 一个生产报告期归一化至一个放行产品批次；不规定使用期限。 |
| reference_flow_link | `tin_unwrought_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未锻造的锡 `07de00e1-3c49-4ce8-9ca2-effb07762623` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品级或合金牌号及组成；未锻轧物理形态；按含锡量计的原生和再生原料占比；原料类型及供应商边界；生产技术；设施地理位置；报告期；产品水分或表面状态约定；分配与回收模型；直接排放和残余物处理边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和固体物料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的净质量。扣除托盘、模具、返料和生产包装；声明原料与产品的水分和表面状态约定。 |
| `tin_content_basis` | 原生/再生原料占比和锡回收率 | 含锡质量 | kg Sn | 对每个原料和产出批次进行代表性取样和化验，以确定含锡量；在回收率或路线占比计算中不得用物料总质量替代含锡质量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 转换前保留电表原始记录。记录以 kWh 表示时，按 3.6 MJ/kWh 相乘，并披露电压、电网或合同电力组合和输配损失边界。 |
| `gas_reference_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积以及参比温度、压力和干/湿基约定；仅在声明参比条件后，方可换算供应商标方或标准立方米。 |
| `water_mass_conversion` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量计量；如由经校准的体积记录换算，应使用在声明温度下实测或有据可查的密度；仅计入新鲜补充水或净转移水，并披露循环水。 |
| `direct_air_emissions` | 化石源二氧化碳、二氧化硫和颗粒物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告前景设施的直接末端治理后排放。不得将上游电力或外购燃料供应链排放加入这些行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 含锡精矿、废锡或另一种明确声明的含锡再生原料在前景设施大门接收；记录其实测湿基或干基质量、代表性化验结果、水分、来源和产品/废物状态。 |
| starting_condition_role | 未锻轧锡生产从大门到大门的前景起始条件；上游采矿、选矿、设施外废料收集与预处理以及运输作为上游系统关联。 |
| product_classification_scope | 参考产出为 CPC 3.0 子类 41443；投入的分类不重新定义规范 PCR 身份。 |
| recursive_input_rule | 属于同一产品类别的任何外购未锻轧锡均作为独立投入记录，并具有其自身上游数据集，不在本前景生产系统内递归建模。内部返锡作为内部循环记录，并从外购投入总量中排除。 |
| upstream_dataset_requirement | 每项外购原料、能源载体、公用工程和化学品都需要地理、技术、状态及交付边界适宜的上游数据集，或明确的数据缺口；再生原料还需声明回收或截断模型。 |
| disclosure | 声明原料路线和占比、含锡量化验基准、预处理归属、技术、内部循环、精炼顺序、合金添加、产品品级与形态、治理配置、水循环、残余物去向、分配方法以及时间和地理覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_feed_gate` | 前景起始边界 | 从明确识别的含锡原料实测接收点开始；不得默默纳入或排除上游采矿、选矿、废料制备或运输。 | `ec-jrc-nfm-bref-2017` |
| `boundary_route_condition` | 原生与再生路线适用性 | 至少声明一条实际生产路线。仅对原生精矿还原路线记录 `tin_concentrate`，仅对再生原料路线记录 `tin_scrap`；混合路线分别记录两者。 | `ec-jrc-nfm-bref-2017`; `international-tin-association-refined-tin-lca` |
| `boundary_internal_recycle` | 返回的粉尘、浮渣、炉渣和金属 | 为质量平衡跟踪内部返回量，但不得把同一物料同时计作外部产出和内部循环。 | `ec-jrc-nfm-bref-2017` |
| `boundary_facility_gate` | 参考产品终止边界 | 符合要求的未锻轧锡完成称量并在生产设施大门放行时结束；下游加工、制造、使用和生命终结阶段不在范围内。 | `un-cpc-3-0-structure-2025`; `international-tin-association-refined-tin-lca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tin_unwrought_production` | 原料制备、锡回收、精炼、铸造和排放控制 | required | 始终纳入实测前景生产系统；必须启用至少一条已声明的原生或再生原料路线，而路线特定交换仅在相应条件适用时记录。 | 从进厂含锡原料到可销售未锻轧锡的前景生产，包括内部回收和直接排放治理。 | 1 kg 可销售未锻轧锡净产出 |

### 过程：原料制备、锡回收、精炼、铸造和排放控制（`tin_unwrought_production`）

#### 输入

##### 产品流

###### 原生路线锡精矿（`tin_concentrate`）

仅当氧化物锡精矿跨越设施边界用于原生火法生产时记录本交换。保持每批供应商原料总质量、干质量、水分和锡化验结果之间的关联。

- 选定流：锡精矿 `134347e0-d564-42f8-a82c-328a2b6f9618`
- 流属性/单位：Mass / kg
- 数量规则：报告期产品系统消耗的进厂锡精矿实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_assay`
- 来源：`ec-jrc-nfm-bref-2017`

###### 再生路线废锡（`tin_scrap`）

仅当废锡已跨越设施边界用于回收时，单独记录其进厂量。声明其法定产品/废物状态、污染、预处理和含锡量化验结果。

- 选定流：废锡 `e7221683-4cdd-4aa4-ab05-95a830757c21`
- 流属性/单位：Mass / kg
- 数量规则：报告期产品系统消耗的进厂废锡实测干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_assay`
- 来源：`ec-jrc-nfm-bref-2017`

###### 原生路线冶金焦（`metallurgical_coke`）

仅当冶金焦实际作为氧化物锡原料的含碳还原剂加入时记录。其他碳质物料属于不同交换，需在前景实施中另设清单行。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：Mass / kg
- 数量规则：冶金焦实测加入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_assay`
- 来源：`ec-jrc-nfm-bref-2017`

###### 外购电力（`electricity`）

记录在声明边界内由原料制备、炉窑、精炼、铸造、通风、治理、水处理以及直接配套厂内设备消耗的计量电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至前景产品系统并换算为 MJ 的计量外购电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_meter`
- 来源：`ec-jrc-nfm-bref-2017`

###### 气态天然气（`natural_gas`）

仅记录在场址内用于干燥、炉窑燃烧、精炼锅、铸造或后燃烧器的天然气。其他燃料须作为独立实施行记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明参比条件下计量的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_oxygen_meter`
- 来源：`ec-jrc-nfm-bref-2017`

###### 工业氧气（`industrial_oxygen`）

仅记录用于富氧或氧化的外购或独立计量工业氧气。环境燃烧空气不得作为本产品投入计量。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在声明参比条件下计量的工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_and_oxygen_meter`
- 来源：`ec-jrc-nfm-bref-2017`

###### 工艺用水补充量（`process_water`）

记录跨越设施边界或单独建模的场内供水边界的新鲜工艺补充水。披露内部循环水，但不得反复计作投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：扣除回流水或循环水后的实测工艺用水净补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`ec-jrc-nfm-bref-2017`

###### 氢氧化钠（`sodium_hydroxide`）

仅当氢氧化钠在前景边界内经声明的浸出、除杂、烟气处理或废水处理步骤中消耗时记录。其他碱类属于独立交换。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：以 100% 氢氧化钠当量计的实测消耗质量，并保留溶液浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_assay`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售未锻轧锡净产出（`tin_unwrought_output`）

这是完成适用的精炼、合金调整以及铸造或粒化后的参考产品。对齐的中文版本在参考产品流中使用 TianGong 的准确中文 `baseName`，而专业 PCR 标题单独保留。

- 选定流：未锻造的锡 `07de00e1-3c49-4ce8-9ca2-effb07762623`
- 流属性/单位：Mass / kg
- 数量规则：实测合格净产出除以其自身，以建立恰好 1 kg 的参考产出；分别报告总产出、返料和不合格扣除量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_release_mass`
- 来源：`un-cpc-3-0-structure-2025`; `international-tin-association-refined-tin-lca`

##### 废物流

###### 净外运锡冶炼渣（`tin_smelting_slag`）

仅当锡冶炼渣离开前景系统去往回收、处理或处置时，记录其实测质量。返回炉内的炉渣属于内部循环，不作为外部废物产出。

- 选定流：锡冶炼渣
- 流属性/单位：Mass / kg
- 数量规则：离开前景边界的实测净质量，并按去向和危险废物状态分类
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_dispatch`
- 来源：`ec-jrc-nfm-bref-2017`

###### 净外运锡生产袋式除尘器粉尘（`tin_baghouse_dust`）

仅当锡生产袋式除尘器捕集粉尘离开前景系统时记录。返回内部的粉尘记入内部循环台账，并从本净产出中排除。

- 选定流：锡生产袋式除尘器粉尘
- 流属性/单位：Mass / kg
- 数量规则：运出前景边界的捕集粉尘实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_dispatch`
- 来源：`ec-jrc-nfm-bref-2017`

###### 净外运锡精炼浮渣（`tin_refining_dross`）

仅当声明的锡精炼操作产生的浮渣离开前景系统时记录。保留杂质组成和回收或处置去向。

- 选定流：锡精炼浮渣
- 流属性/单位：Mass / kg
- 数量规则：运出前景边界的浮渣实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_dispatch`
- 来源：`ec-jrc-nfm-bref-2017`

##### 基本流

###### 直接排放至空气的化石源二氧化碳（`fossil_carbon_dioxide_to_air`）

记录前景边界内含碳还原和场内化石燃料燃烧产生的直接化石源二氧化碳。排除上游电力和燃料供应排放。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：连续排放监测实测总量，或采用声明的计算方法，根据经核对的燃料和还原剂碳记录计算直接化石源 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

###### 直接排放至空气的二氧化硫（`sulfur_dioxide_to_air`）

当含硫原料、燃料或处理步骤使其适用时，记录直接排放至室外空气的末端治理后二氧化硫。所需的排放至未特指空气的准确 TianGong UUID 尚未解决。

- 选定流：二氧化硫（排放至空气，未特指）
- 流属性/单位：Mass / kg
- 数量规则：前景设施末端治理后烟道和量化无组织源释放的二氧化硫实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

###### 直接排放至空气的颗粒物（`particulate_matter_to_air`）

在缺少粒径特定测量时，记录末端治理后直接排放至空气的总颗粒物。不得将袋式除尘器捕集粉尘加入本排放基本流。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：前景设施末端治理后烟道和量化无组织源释放的颗粒物实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锡净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 路线、精炼和回收子过程 | 通过分别计量原生和再生原料生产期、回收步骤以及独立计量的共产品操作来避免分配。 |  |
| `allocation_internal_returns` | 内部返回的锡金属、炉渣、浮渣和粉尘 | 将声明前景边界内返回的物料作为内部循环：为过程控制和质量平衡保留其数量，但既不给予外部产出信用，也不再次施加上游负荷。 | `ec-jrc-nfm-bref-2017` |
| `allocation_external_coproducts` | 离开系统的可销售金属、合金或回收化合物 | 报告每项外部共产品的质量、所含金属、质量、去向和收入。若细分不能避免分配，则在所选物理、经济或替代方法及其理由经审查和披露前，数据集不完整；不得默认为按总质量分配。 |  |
| `allocation_secondary_feed` | 废锡和其他再生原料 | 在关联上游数据集和前景产品系统中一致采用一种已声明的回收模型；披露无负荷截断、再生含量、生命终结或替代选择，并防止重复计算避免负荷信用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_assay` | `tin_unwrought_production` | 精矿、废锡、焦炭和氢氧化钠投入 | 地磅、批次单、供应商证书和实验室化验 | 时间戳；物料身份；供应商；毛重、皮重和净重；水分；适用时的锡化验；溶液浓度；批次；去向 | 经校准称量关联代表性取样和实验室或供应商化验；核对接收、库存变化和返回量。 | kg；质量分数 | 每次接收和每批次 | 完整报告期，包括期初和期末库存 | 所有前景接收和储存点 | 消耗量 = 接收量 + 期初库存 - 期末库存 - 外运量；溶液换算为 100% 活性质量，湿固体换算至声明干基 | 校准记录；监管链；取样计划；化验方法；证书；库存核对 |
| `cp_electricity_meter` | `tin_unwrought_production` | 外购电力投入 | 结算电表和分表 | 时间戳；电表编号；读数；单位；过程区域；电压；电网或合同；输入/输出 | 读取经校准电表；仅依据有文件支持的运行小时或工程证据分配共用负荷。 | kWh | 每小时或更细，按月汇总 | 完整报告期 | 边界内全部过程及直接配套区域 | 净输入 kWh 减去单独建模的输出，按 3.6 MJ/kWh 换算并以产品净产出归一化 | 电表校准；账单；缺失数据日志；分配工作表 |
| `cp_gas_and_oxygen_meter` | `tin_unwrought_production` | 天然气和工业氧气投入 | 交接或过程流量计 | 时间戳；气体身份；体积；温度；压力；干/湿基约定；流量计编号；过程区域 | 使用经校准流量计或经核对的供应商交付和储罐记录；各气体分开记录。 | 声明条件下的 m3 | 连续或每次交付 | 完整报告期 | 边界内所有使用点 | 核对期初/期末库存与采购量，再分别归一化每种气体 | 校准；供应商声明；参比条件计算；平衡闭合 |
| `cp_water_balance` | `tin_unwrought_production` | 工艺用水补充量 | 水表和储罐平衡 | 时间戳；水源；补充水；排水；循环水；蒸发估算；库存变化；单位；密度基准 | 分别计量补充水和排水；量化循环水用于披露，但不得重复计作外部投入。 | kg，或具有密度的 m3 | 每日或更细 | 完整报告期和代表性运行状态 | 边界内所有过程、冷却、烟气净化和处理系统 | 外部净补充量 = 流入量 + 期初库存 - 期末库存 - 外运未用水；按 `water_mass_conversion` 将体积换算为质量 | 经校准流量计；水平衡闭合；密度记录；维护和泄漏日志 |
| `cp_product_release_mass` | `tin_unwrought_production` | 参考产品产出 | 认证产品秤和放行记录 | 批次；品级/合金；组成；形态；毛重、皮重和净重；不合格质量；返回质量；放行状态 | 称量每批放行产品，并将实验室放行结果关联至同一批次。 | kg | 每批次 | 完整报告期 | 所有产品铸造、粒化、储存和发运点 | 可销售净产出 = 放行合格质量 - 返回质量；全部交换按该产出归一化 | 校准；放行证书；化验；库存核对 |
| `cp_residue_dispatch` | `tin_unwrought_production` | 炉渣、袋式除尘器粉尘和精炼浮渣产出 | 容器秤、转移联单和去向记录 | 残余物身份；来源；质量；水分；组成；危险状态；内部返回；接收方；处理路线 | 对每次残余物移动称量，并区分内部返回和外部发运。 | kg | 每次移动 | 完整报告期 | 所有残余物产生、储存、返回和发运点 | 外部净产出 = 边界外发运量 - 纳入边界时外部处理后返回的物料；不得包含内部循环 | 秤校准；废物联单；化验；监管链；去向接收证明 |
| `cp_direct_air_emissions` | `tin_unwrought_production` | 直接 CO2、SO2 和颗粒物产出 | 连续监测仪、烟道测试、燃料/还原剂记录和无组织估算 | 排放源；污染物；浓度；流量；运行时间；燃料/还原剂数量及碳；治理状态；不确定性；检出限 | 使用有效连续监测或代表性烟道测试；仅在无法测量时计算，并记录因子和氧化假设。 | kg 及排放源测量单位 | 安装设备时连续；否则每次代表性监测期 | 覆盖正常运行、启动、停机和物料变化 | 边界内每个有组织源和量化无组织源 | 对浓度 × 干烟气流量按时间积分，与计算方法核对；不得从已经是末端治理后的测量值中再扣除捕集残余物；按产品净产出归一化 | 监测 QA/QC；测试报告；校准气体；运行日志；不确定性和数据缺口记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期交换量 / 报告期可销售未锻轧锡净质量 | 交换量；`cp_product_release_mass` 净产出 | 每 1 kg 参考产品的交换量 |  |
| `calc_dry_feed` | 含水精矿、废料和残余物 | 干质量 = 净湿质量 ×（1 - 实测水分质量分数） | 经校准质量；代表性水分 | kg 干物料 |  |
| `calc_contained_tin` | 原料、产品、残余物和共产品 | 含锡量 = 干物料质量 × 代表性锡质量分数 | 干质量；化验结果 | kg Sn 和锡回收核对 |  |
| `calc_route_share` | 原生/再生混合生产 | 路线占比 = 该声明路线外部含锡原料的入厂含锡量 / 所有外部含锡原料的总入厂含锡量 | 按原料批次和路线划分的含锡量 | 原生和再生锡投入占比 |  |
| `calc_electricity_mj` | 外购电力 | 电力（MJ）= 电表电量（kWh）× 3.6 | 净输入 kWh | MJ 电力 |  |
| `calc_solution_active_mass` | 氢氧化钠溶液 | 活性 NaOH 质量 = 溶液质量 × 经认证或实测的 NaOH 质量分数 | 溶液质量；浓度 | kg 100% NaOH 当量 |  |
| `calc_direct_co2` | 未连续监测的直接化石源 CO2 | 对每种化石燃料和还原剂分别采用声明的碳平衡法或经接受的管辖区方法；保留含碳量、氧化率和非能源用途假设 | 燃料和焦炭用量；碳分析；经接受的因子；产品/残余物中实测留存碳 | kg 直接化石源 CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | 产品和含锡原料 | 将每个批次关联至准确物料身份、产品/废物状态、品级/组成、路线和边界；不得将原生和再生原料合并为未经化验的笼统总量。 | 批次谱系；供应商文件；化验；路线台账 |
| `dq_measurement` | 质量、能源、气体和水记录 | 使用经校准仪表，并保留单位、参比条件、缺失数据处理和换算记录。 | 校准证书；仪表日志；换算工作表 |
| `dq_temporal` | 报告期 | 覆盖具有代表性的连续时期，包括计划和非计划运行状态；披露排除项、停机、库存变化和生产期变化。 | 生产日历；停机日志；库存核对 |
| `dq_completeness` | 清单 | 核对外购原料、含锡量、产品、残余物、内部返回、能源、水和直接排放；调查实质性缺口，不得以未特指交换强行平衡。 | 经签署的质量/能源/水平衡；缺口日志；纠正措施 |
| `dq_abatement_and_destination` | 直接排放和残余物 | 明确测量为治理前或治理后，并保留实际残余物去向、内部返回状态和处理证据。 | 烟道示意图；治理运行日志；联单；处理凭证 |
| `dq_representativeness` | 发布数据集 | 声明设施地理位置、炉型和精炼技术、原料组合、品级/形态、年份以及分配/回收模型；无经审查的汇总设计时，不得将单一设施宣称为行业平均。 | 数据集元数据；技术说明；取样和汇总记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考流 UUID、Mass 属性、质量单位组和 1 kg 参考数量必须相符；数据包必须声明品级/合金、形态、路线占比、地理位置、技术和报告期。 | `un-cpc-3-0-structure-2025` |
| `validate_route_applicability` | 条件性原料和公用工程行 | 无声明原生还原路线时，原生路线精矿或焦炭数量无效；无声明再生路线时，废锡数量无效；条件性公用工程和化学品必须对应一个已命名的消耗操作。 | `ec-jrc-nfm-bref-2017` |
| `validate_tin_balance` | 原料、产品、共产品、残余物和内部返回 | 使用相容的干质量和化验基准计算含锡平衡。存在无法解释的不平衡，或以原料总质量代替含锡量，均构成错误。 |  |
| `validate_no_double_counting` | 内部循环和外部产出 | 同一炉渣、粉尘、浮渣或返料金属不得同时作为内部返回和外部产出，再生原料信用不得重复计算。 | `ec-jrc-nfm-bref-2017` |
| `validate_direct_emissions` | CO2、SO2 和颗粒物 | 直接排放行必须仅表示前景设施，声明末端治理状态和排放源覆盖，并排除上游电力和燃料供应排放。 | `ec-jrc-nfm-bref-2017` |
| `validate_atomic_exchanges` | 过程清单 | 每个选定流必须为一种具体物料、废物或排放。实际路线使用而本 PCR 未列出的燃料、熔剂、合金添加剂、处理药剂、废物或污染物，必须另设行，不得合并为笼统交换。 |  |
| `validate_unresolved_uuids` | 炉渣、粉尘、浮渣和二氧化硫行 | UUID 为空的行可按其准确声明的物理身份采集，但不得用笼统代理或错误环境介质代理表示；应持续标记以待 UUID 解决。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 位于生产设施大门的可销售未锻轧锡前景生产数据集。 |
| downstream_use | 经方法和数据质量审查后，可作为 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 用于要求设施特定或汇总未锻轧锡生产的产品碳足迹和 LCA 模型；用于品级、形态、路线组合、地理、技术、分配和回收模型相容的供应链建模。 |
| excluded_use | 锡矿精矿、锡半成品或锡制品；未声明的合金品级；由单一场址外推的笼统全球或全国平均值；无明确模型的后果型回收主张；替代路线或品级不相容的生产。 |
| required_metadata | PCR id 和版本；流 UUID；品级/合金组成；未锻轧形态；设施地理；技术；原料身份；按含锡量计的原生/再生占比；上游边界；报告期；分配和回收模型；治理和水系统；残余物去向。 |
| required_quality_disclosure | 初级数据占比；时间、地理和技术代表性；计量和化验覆盖；含锡平衡；缺失数据处理；不确定性；分配敏感性；未解决 UUID 行；与本 PCR 的偏离。 |
| update_trigger | 原料路线或占比、炉型/精炼/铸造技术、能源供应、产品品级或形态、治理、水系统、残余物去向、分配/回收模型、设施地理位置发生实质变化，或数据时效已不能代表当前运行。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0 Structure》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04）。 | CPC 41443 官方产品身份和分类边界。 |
| `ec-jrc-nfm-bref-2017` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries》，2017，DOI 10.2760/8224，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索日期：2026-09-04）。 | 以碳或焦炭还原原生氧化物原料、再生含锡原料、精炼路线、物料/能源/氧气/燃气/水/残余物/直接排放清单结构，以及治理、内部回收和水管理边界规则。 |
| `international-tin-association-refined-tin-lca` | 文献（`literature`） | 国际锡业协会，《Life Cycle Assessment of tin production》，https://www.internationaltin.org/reports/lifecycle-assessment-of-tin-production/（检索日期：2026-09-04）。 | 代表性精炼锡产品、原生和再生生产覆盖、功能单位背景以及从摇篮到大门的边界比较。 |
| `china-customs-hs-8001-terminology-2011` | 官方指南（`official_guidance`） | 中华人民共和国海关总署 2011 年第 49 号公告附件《中国政府和哥斯达黎加共和国政府自由贸易协定》项下产品特定原产地规则，品目 8001“未锻轧锡”；转载于《中国对外经济贸易文告》2011 年第 53 期，https://zjjcmspublic.oss-cn-hangzhou-zwynet-d01-a.internet.cloud.zj.gov.cn/jcms_files/jcms1/web2757/site/picture/zcom/upload/20111130/U201111301322643543135.pdf（检索日期：2026-09-04）。 | 专业中文产品类别标题和官方税则术语。 |
