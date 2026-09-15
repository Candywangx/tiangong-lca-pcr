---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-ferro-alloys
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他铁合金

## 1. 范围与适用性

本 PCR 适用于除单独分类的锰铁、铬铁和镍铁以外的铁合金工厂门口生产。涵盖的产品包括硅铁、钒铁、钼铁、钨铁、钛铁、铌铁、硼铁、磷铁以及符合所声明剩余类别边界的其他铁基中间合金。数据包必须识别一种实际合金牌号；本 PCR 不允许对化学成分或生产路线不同的合金采用未说明的平均值。

前景边界始于承担上游负荷的原料与能源进入铁合金工厂，止于通过成分检验的可销售产品到达工厂门口。边界包括场内原料处理、还原或重熔、出炉与钢包处理、凝固、破碎、筛分、内部回用，以及与生产相关的空气污染控制操作。边界不包括已由供应商数据集表示的上游采矿与生产、出厂后的运输、在炼铁或炼钢中的使用、下游钢铁生产及资本品；研究目标明确要求时除外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-ferro-alloys |
| classification_refs | CPC 3.0：41115 其他铁合金 |
| covered_products | 已声明牌号的硅铁、钒铁、钼铁、钨铁、钛铁、铌铁、硼铁、磷铁及其他剩余铁合金 |
| excluded_products | 锰铁；铬铁；镍铁；生铁与镜铁；直接还原铁；铁或钢粉末；粗钢；纯合金元素金属；不作为铁合金销售的工业硅 |
| representative_product | 生产厂内经成分检验且可销售的已声明牌号其他铁合金 |
| production_route | 场址声明的碳热矿热炉还原、金属热或硅热还原、感应或其他重熔路线，或有文件依据的其他路线；未经独立清单不得合并不同路线 |
| market_state | 生产厂门口的固态块、粒或粉末，并声明合金牌号、粒度等级和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一种已声明牌号、用于合金化、脱氧或作为工艺添加剂的其他铁合金 |
| How much | 1 kg 净可销售产品 |
| How well | 符合生产者声明的化学成分、碳含量、物理形态、粒度等级和验收规范 |
| How long or cycle | 数据集所代表的一个生产批次或报告期；不赋予服务期限抵扣 |
| reference_flow_link | reference_product_other_ferroalloy |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口 1 kg 净可销售其他铁合金 |
| 参考产品流 | 其他铁合金（已声明牌号，工厂内） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号与成分；碳含量；还原或重熔路线；炉型或反应容器类型；工厂地理位置；产品形态与粒度等级；具有实质影响时的水分；包装状态；报告期；电力供应；碳质还原剂来源；炉气去向；炉渣、粉尘和不合格产品去向 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用工厂门口验收合格产品的净质量；排除托盘和包装，在水分实质影响可比性时报告水分。 |
| `grade_assay` | 产品和中间合金 | 质量分数 | kg/kg | 报告用于识别声明牌号的批次加权化学检验结果和碳含量；不得仅凭商品名推断牌号。 |
| `energy_conversion` | 电力和其他计量能源 | 能量 | kWh 或 MJ | 保留所计量的能源载体与单位；记录每项换算因子，不得将电力与热或燃料合并。 |
| `mass_reconciliation` | 每条生产路线 | 质量 | kg | 对同一报告期的炉料、可销售产品、内部回用物料、炉渣、捕集粉尘和其他已记录损失进行核对，并解释未解决的差额。 |
| `air_emission_mass` | 直接大气排放 | 质量 | kg | 按声明的大气隔室和监测基准报告污染物质量；保留干湿基、氧修正、捕集、火炬或回收假设。 |

## 5. 系统边界

纳入将接收的原料转化为声明可销售牌号所需的全部场内操作，包括配料准备、炉或反应容器运行、出炉、钢包处理、浇铸或粒化、破碎与筛分、内部回用以及粉尘或炉气控制设施的运行。电力、矿石、精矿、还原剂、熔剂、废钢预处理和包装的上游生产应链接为背景数据集，不得在前景过程中重复建模。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在铁合金工厂边界接收的、已声明成分和状态的矿石、精矿、氧化物、铁源、还原剂、熔剂、电极、电力和水 |
| starting_condition_role | 铁合金前景生产路线中承担上游负荷的投入 |
| product_classification_scope | CPC 41115 剩余边界内一种已声明牌号的其他铁合金；单独分类的锰铁、铬铁和镍铁不在范围内 |
| recursive_input_rule | 当投入本身属于其他铁合金时，应将其作为具有牌号、路线和供应商数据集的独立上游产品记录；不得在自身内部递归复制同一前景路线 |
| upstream_dataset_requirement | 每项采购材料和能源均应链接到地理与技术具有代表性的从摇篮到工厂门口数据集；否则应披露具名数据缺口，不得用代理 UUID 替代 |
| disclosure | 声明产品成分与形态、工艺路线、炉体封闭形式、电力供应、碳源来源、内部回用、炉气捕集或利用、炉渣与粉尘去向、分配、地理位置和报告期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_plant_gate` | 前景系统 | 始于承担上游负荷的投入接收，止于合格产品离开生产厂；纳入与生产相关的场内污染控制操作。 | `us-epa-ap42-ferroalloy-1995` |
| `boundary_route_separation` | 多路线工厂 | 碳热、金属热、重熔和产品整理清单保持分开，直至确需对计量的共用服务执行有记录的分配。 | `us-epa-ap42-ferroalloy-1995` |
| `boundary_offgas_residues` | 炉气、炉渣和粉尘 | 按场址实际去向记录炉气燃烧、回收或火炬，捕集粉尘，以及炉渣回用、销售、循环或处置。 | `us-epa-ap42-ferroalloy-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| carbothermic_smelting | 碳热矿热炉冶炼 | conditional | 声明合金采用碳还原矿热炉或等效电阻炉生产时纳入 | 前景还原、出炉和一次炉气控制 | kg 熔融或浇铸路线产品 |
| metallothermic_reduction | 金属热或硅热还原 | conditional | 铝、硅或二者共同还原声明金属氧化物生成铁合金时纳入 | 前景反应、出炉和一次粉尘控制 | kg 熔融或浇铸路线产品 |
| product_conditioning | 产品冷却、破碎、筛分和放行 | required | 始终纳入；仅在有证据表明可销售产品绕过某项操作时将其记为零 | 前景整理和工厂门口放行 | 1 kg 净可销售其他铁合金 |

### 过程：碳热矿热炉冶炼（`carbothermic_smelting`）

#### 输入

##### 产品流

###### 石英原料（`cb_quartz`）

仅当石英作为声明牌号的含硅反应物入炉时记录。

- 选定流：石英（已声明冶金级）
- 流属性/单位：质量 / kg
- 数量规则：计量干基或收到基质量并保留水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 氧化铁精矿（`cb_iron_oxide_concentrate`）

当已声明化学组成的含铁氧化物原料跨越工厂边界时记录。

- 选定流：氧化铁精矿（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：计量接收质量并保留水分和铁品位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 废钢铁源（`cb_steel_scrap`）

经预处理的废钢作为炉料铁源时记录。

- 选定流：废钢（已声明牌号和预处理状态）
- 流属性/单位：质量 / kg
- 数量规则：扣除拒收量后的计量入炉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 冶金焦还原剂（`cb_metallurgical_coke`）

将焦炭作为一种独立碳质还原剂记录，不得与木炭、煤或木片合并。

- 选定流：冶金焦（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：计量入炉质量并保留水分、灰分和碳基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 石灰石熔剂（`cb_limestone`）

石灰石作为声明炉次熔剂入炉时记录。

- 选定流：石灰石（已声明熔剂级）
- 流属性/单位：质量 / kg
- 数量规则：计量入炉质量并保留水分和碳酸盐基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 石墨电极消耗（`cb_graphite_electrode`）

记录声明炉型所用电极的净消耗量。

- 选定流：石墨电极（已声明炉用牌号）
- 流属性/单位：质量 / kg
- 数量规则：期初库存加接收量减期末库存和可回收残段
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cb_electrodes`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 炉用电力（`cb_electricity`）

将矿热炉及其专用控制设施消耗的电力与其他能源载体分开记录。

- 选定流：交流电（实际场址供应）
- 流属性/单位：能量 / MJ
- 数量规则：归属于炉次的计量电力，按有记录的换算规则转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cb_electricity`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 冷却水补水（`cb_cooling_water`）

仅记录进入工厂系统的补水；循环水在运行元数据中单独报告，不得反复计为边界投入。

- 选定流：冷却水补水（已声明水源和处理状态）
- 流属性/单位：质量 / kg
- 数量规则：分配给炉次的计量补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_water`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熔融或浇铸碳热铁合金中间体（`cb_molten_alloy`）

记录转入整理工序的实际声明合金牌号，并保留其物理状态。

- 选定流：熔融或浇铸其他铁合金中间体（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：与出炉量和保留库存核对的计量转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cb_product`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 废物流

###### 碳热铁合金炉渣（`cb_slag`）

仅当实际场址去向符合数据集废物流定义时将炉渣记为废物；内部循环或作为共产品出售应另行披露。

- 选定流：碳热铁合金炉渣（已声明成分）
- 流属性/单位：质量 / kg
- 数量规则：按声明去向离开过程的计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 捕集炉尘（`cb_captured_dust`）

记录由袋式除尘器、洗涤器或其他一次控制设施去除的颗粒物，并声明其处理状态和去向。

- 选定流：捕集碳热铁合金炉尘
- 流属性/单位：质量 / kg
- 数量规则：计量捕集质量，相关时按含水率修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cb_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 基本流

###### 排入大气的化石源一氧化碳（`cb_co_air`）

记录经燃烧、回收或火炬之后未捕集或排放的化石源一氧化碳。生物源一氧化碳属于不同交换，不得并入本行。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg；单位组为质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：批次化石源一氧化碳烟道与无组织排放的监测或工程计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cb_air_emissions`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 排入大气的化石源二氧化碳（`cb_co2_air`）

记录冶金焦、化石源电极消耗和其他声明化石碳源产生的直接化石源二氧化碳。生物源二氧化碳属于不同交换，不得并入本行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg；单位组为质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：批次直接化石源二氧化碳的监测或碳平衡计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸碳热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cb_air_emissions`
- 来源：`us-epa-ap42-ferroalloy-1995`

### 过程：金属热或硅热还原（`metallothermic_reduction`）

#### 输入

##### 产品流

###### 五氧化二钒原料（`mt_vanadium_pentoxide`）

仅对消耗五氧化二钒的声明钒铁路线记录。

- 选定流：五氧化二钒（已声明纯度和物理状态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量并保留化验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 三氧化钼原料（`mt_molybdenum_trioxide`）

仅对消耗三氧化钼的声明钼铁路线记录。

- 选定流：三氧化钼（已声明纯度和物理状态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量并保留化验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 三氧化钨原料（`mt_tungsten_trioxide`）

仅对消耗三氧化钨的声明钨铁路线记录。

- 选定流：三氧化钨（已声明纯度和物理状态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量并保留化验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 五氧化二铌原料（`mt_niobium_pentoxide`）

仅对消耗五氧化二铌的声明铌铁路线记录。

- 选定流：五氧化二铌（已声明纯度和物理状态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量并保留化验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 二氧化钛原料（`mt_titanium_dioxide`）

仅对消耗含二氧化钛原料的声明钛铁路线记录。

- 选定流：二氧化钛（已声明纯度和物理状态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量并保留化验结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 铝还原剂（`mt_aluminium`）

声明金属热反应使用铝时，将其作为独立还原剂记录。

- 选定流：金属铝（已声明纯度和颗粒形态）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 硅铁还原剂（`mt_ferrosilicon_reductant`）

声明硅热反应使用硅铁时，将其作为独立还原剂记录。

- 选定流：硅铁（已声明硅含量和碳含量牌号）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 废钢铁源（`mt_steel_scrap`）

经预处理的废钢作为金属热炉料铁源时记录。

- 选定流：废钢（已声明牌号和预处理状态）
- 流属性/单位：质量 / kg
- 数量规则：扣除拒收量后的计量入料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 氧化钙熔剂（`mt_calcium_oxide`）

仅在氧化钙作为声明反应的熔剂加入时记录。

- 选定流：氧化钙（已声明熔剂级）
- 流属性/单位：质量 / kg
- 数量规则：计量入料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_materials`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 辅助电力（`mt_electricity`）

记录配料、预热、抽风和专用路线设备的电力，不得与燃料合并。

- 选定流：交流电（实际场址供应）
- 流属性/单位：能量 / MJ
- 数量规则：归属于金属热批次的计量电力，按有记录的换算规则转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mt_electricity`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熔融或浇铸金属热铁合金中间体（`mt_molten_alloy`）

记录转入整理工序的实际声明合金牌号，并保留其物理状态。

- 选定流：熔融或浇铸其他铁合金中间体（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：与反应批次和保留库存核对的计量回收合金质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mt_product`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 废物流

###### 金属热反应渣（`mt_slag`）

按实际循环、销售、处理或处置去向记录已声明化学组成的反应渣。

- 选定流：金属热铁合金反应渣（已声明成分）
- 流属性/单位：质量 / kg
- 数量规则：按声明去向离开过程的计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 捕集反应粉尘（`mt_captured_dust`）

记录配料、反应、出炉和冷却环节捕集的颗粒物，并声明其实际处理状态和去向。

- 选定流：捕集金属热铁合金反应粉尘
- 流属性/单位：质量 / kg
- 数量规则：计量捕集质量，相关时按含水率修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 熔融或浇铸金属热路线产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mt_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 基本流

### 过程：产品冷却、破碎、筛分和放行（`product_conditioning`）

#### 输入

##### 产品流

###### 熔融或浇铸铁合金中间体（`pc_molten_alloy`）

记录进入冷却或整理的路线关联中间体，并保留合金牌号和生产过程。

- 选定流：熔融或浇铸其他铁合金中间体（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：来自声明上游路线的计量转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_pc_internal_transfer`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 整理用电（`pc_electricity`）

记录冷却辅助设备、破碎、筛分、输送和专用除尘设施的电力。

- 选定流：交流电（实际场址供应）
- 流属性/单位：能量 / MJ
- 数量规则：归属于产品整理的计量电力，按有记录的换算规则转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_pc_electricity`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售已声明牌号其他铁合金（`reference_product_other_ferroalloy`）

本项是完成验收检验和最终质量确定后的参考产品。

- 选定流：其他铁合金（已声明牌号，工厂内）
- 流属性/单位：质量（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ kg；单位组为质量单位组（`93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：按定义为 1 kg 净合格产品；归一化前采集批次总产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口 1 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_pc_product_release`
- 来源：`unstats-cpc-3-2025`；`us-epa-ap42-ferroalloy-1995`

##### 废物流

###### 不合格铁合金废料（`pc_offspec_scrap`）

仅当不合格或粒度不合格的合金离开内部循环并符合声明废物流状态时将其记为废物。

- 选定流：不合格其他铁合金废料（已声明牌号）
- 流属性/单位：质量 / kg
- 数量规则：按内部循环、外部回收、销售或处置的实际去向计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pc_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

###### 捕集破碎筛分粉尘（`pc_captured_dust`）

记录产品破碎、粉碎、筛分、转运和储存过程中捕集的粉尘及其实际去向。

- 选定流：捕集其他铁合金破碎筛分粉尘
- 流属性/单位：质量 / kg
- 数量规则：归属于声明产品批次的计量捕集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pc_residues`
- 来源：`us-epa-ap42-ferroalloy-1995`

##### 基本流

###### 排入大气的剩余 PM10（`pc_pm10_air`）

记录产品整理除尘后排放的空气动力学直径不大于 10 微米的剩余颗粒物。

- 选定流：颗粒物 PM10（排入大气）
- 流属性/单位：质量 / kg
- 数量规则：归属于声明批次的监测或工程计算排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净可销售其他铁合金
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_pc_air_emissions`
- 来源：`us-epa-ap42-ferroalloy-1995`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 路线和批次清单 | 记录允许时，优先通过独立计量和过程细分避免对碳热、金属热、重熔和产品整理过程进行分配。 |  |
| `allocation_internal_recycling` | 内部循环的合金、炉渣和粉尘 | 前景系统内部循环物料的负荷与抵扣均留在系统内；不得为内部转移虚构输出共产品。 | `us-epa-ap42-ferroalloy-1995` |
| `allocation_exported_coproduct` | 销售炉渣、回收炉气或其他输出共产品 | 可计量时采用有文件依据的物理因果关系；否则按干质量分配未解决的共用负荷，报告敏感性，并披露产品价格但不得默认为经济分配依据。 | `us-epa-ap42-ferroalloy-1995` |
| `allocation_shared_services` | 共用电力、水、抽风和整理服务 | 按因果相关的计量表、运行时间、气量或设备处理量分配；仅在无更相关记录时按产品质量分配，并披露受影响比例。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cb_materials` | carbothermic_smelting | 炉料 | 地磅单、配料单、接收化验单 | 物料身份；供应商；批号；湿质量；水分；品位；入炉质量；退料 | 核对接收、库存变化和炉次配料单 | kg | 每次接收和配料 | 完整声明批次或年度期间 | 范围内全部碳热炉 | 按原子物料汇总入炉质量并除以路线产出 | 校准秤、供应商证书、水分与化验记录 |
| `cp_cb_electrodes` | carbothermic_smelting | 石墨电极 | 库存与维护记录 | 期初库存；接收；期末库存；可回收残段；电极牌号 | 库存平衡计算 | kg | 每报告期 | 与炉产出相同期间 | 范围内全部碳热炉 | 净消耗质量除以路线产出 | 盘点、采购记录、维护日志 |
| `cp_cb_electricity` | carbothermic_smelting | 炉用电力 | 结算表或分表记录 | 表号；期初和期末读数；损耗；批次归属；供应组合 | 校准电表读数 | kWh | 连续或每批 | 与炉产出相同期间 | 炉及专用控制设施 | 汇总归属读数，转换为 MJ 后除以路线产出 | 电表校准及与场址账单核对 |
| `cp_cb_water` | carbothermic_smelting | 冷却水补水 | 水分表和处理日志 | 水源；处理状态；补水体积或质量；排污；循环量 | 分表读数和水平衡 | kg | 每日或连续 | 与炉产出相同期间 | 炉冷却系统 | 仅计边界补水并除以路线产出 | 流量计校准和水平衡闭合 |
| `cp_cb_product` | carbothermic_smelting | 熔融或浇铸路线产品 | 出炉、钢包、浇铸和库存记录 | 合金牌号；出炉质量；转移质量；化验；库存变化 | 核对出炉、转移和库存 | kg | 每炉或每批 | 完整声明批次 | 全部碳热路线产出 | 净转移牌号特定质量 | 秤校准、化验证书、签字生产记录 |
| `cp_cb_residues` | carbothermic_smelting | 炉渣和捕集粉尘 | 容器、料斗、地磅和去向记录 | 残余物身份；质量；水分；成分；去向；内部回用 | 直接称量并核对去向 | kg | 每次移动 | 与炉产出相同期间 | 全部路线残余物去向 | 按原子残余物和去向汇总 | 称量票、实验室成分、转移联单 |
| `cp_cb_air_emissions` | carbothermic_smelting | 一氧化碳和二氧化碳 | 连续监测、烟气测试、炉气利用、火炬和碳平衡记录 | 气量；浓度；温度；压力；水分；氧；运行时间；碳源；回收与火炬 | 经验证监测或有文件依据的物料衡算 | kg | 连续或具有批次代表性的测试 | 与炉产出相同期间 | 范围内烟囱和物料无组织源 | 分别计算各污染物并除以路线产出 | 标气、烟气测试报告、不确定性和数据覆盖声明 |
| `cp_mt_materials` | metallothermic_reduction | 氧化物原料、还原剂、铁源和熔剂 | 批次单、接收化验单和称量记录 | 物料身份；纯度；物理状态；批号；入料质量；退料 | 批次称量与接收和库存核对 | kg | 每个反应批次 | 完整声明批次 | 范围内全部金属热容器 | 分别汇总各原子物料并除以路线产出 | 校准秤、供应商化验、批次授权 |
| `cp_mt_electricity` | metallothermic_reduction | 辅助电力 | 分表或设备工时记录 | 电表读数；设备负荷；运行时间；批次归属；供应组合 | 直接计量；无分表时采用有文件依据的负荷乘时间计算 | kWh | 每批或每报告期 | 与反应产出相同期间 | 专用准备、抽风和搬运设备 | 汇总归属电力，转换为 MJ 后除以路线产出 | 电表校准或设备规范与运行日志 |
| `cp_mt_product` | metallothermic_reduction | 熔融或浇铸路线产品 | 批次收得率、出炉、浇铸和化验记录 | 合金牌号；回收质量；残留金属；化验；库存变化 | 核对反应批次和回收合金 | kg | 每批 | 完整声明批次 | 全部金属热路线产出 | 净转移牌号特定质量 | 校准秤、化验证书、签字批次记录 |
| `cp_mt_residues` | metallothermic_reduction | 反应渣和捕集粉尘 | 容器、地磅和去向记录 | 残余物身份；质量；水分；成分；去向；内部回用 | 直接称量并核对去向 | kg | 每次移动 | 与反应产出相同期间 | 全部路线残余物去向 | 按原子残余物和去向汇总 | 称量票、实验室成分、转移联单 |
| `cp_pc_internal_transfer` | product_conditioning | 输入合金中间体 | 转移和库存记录 | 来源过程；牌号；物理状态；转移质量；期初和期末库存 | 核对路线产出与整理接收 | kg | 每次转移 | 完整声明批次 | 范围内全部整理线 | 进入整理的净牌号特定质量 | 秤校准和跨过程核对 |
| `cp_pc_electricity` | product_conditioning | 整理用电 | 分表或设备工时记录 | 电表读数；产线；运行时间；产品牌号；供应组合 | 直接计量；无分表时采用有文件依据的负荷乘时间计算 | kWh | 连续或每班 | 与可销售产出相同期间 | 冷却、破碎、筛分、输送和专用控制设施 | 汇总归属电力，转换为 MJ 后除以合格产品 | 电表校准或设备规范与运行日志 |
| `cp_pc_product_release` | product_conditioning | 可销售产品 | 包装、发运、库存和质量放行记录 | 牌号；批号；毛质量；包装皮重；净质量；化验；粒度；水分；放行状态 | 核对合格净质量、发运和库存变化 | kg | 每个放行批次 | 完整声明批次 | 全部产品放行点 | 按声明牌号汇总合格净产品 | 校准秤、实验室证书、放行授权 |
| `cp_pc_residues` | product_conditioning | 不合格废料和捕集粉尘 | 拒收、容器、地磅和去向记录 | 残余物身份；牌号；质量；水分；去向；内部回用 | 直接称量并核对去向 | kg | 每次移动 | 与可销售产出相同期间 | 全部整理残余物去向 | 按原子残余物和去向汇总 | 称量票、拒收记录、转移联单 |
| `cp_pc_air_emissions` | product_conditioning | PM10 | 烟气测试、除尘控制和运行记录 | 气量；PM10 浓度；运行时间；控制状态；物料处理量 | 与实际控制运行关联的经验证烟气测试或工程计算 | kg | 具有批次代表性的测试及每次控制状态变化 | 与可销售产出相同期间 | 整理排气口和识别出的无组织源 | 计算排放 PM10 并除以合格产品 | 烟气测试报告、控制维护日志、不确定性声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 每项期间总交换量除以同一声明产品牌号的合格净质量；除非应用有记录的分配规则，否则不同牌号或路线保持分开。 | 期间交换量；合格净产品质量；牌号；路线 | 每 1 kg 参考产品的交换量 |  |
| `calc_stock_balance` | 电极和库存物料 | 消耗量 = 期初库存 + 接收量 - 期末库存 - 外部退回或转移量；核对未解释损失。 | 期初库存；接收；期末库存；退回；转移 | 净消耗质量 |  |
| `calc_carbon_emissions` | 直接一氧化碳和二氧化碳 | 使用经验证的浓度与流量监测或有文件依据的碳平衡；仅在计量时扣除回收或输出的含碳气体，并避免重复计算后续燃烧。 | 气量；浓度；时间；水分；氧；碳投入；回收炉气；火炬记录 | 分开的一氧化碳与二氧化碳直接排放质量 | `us-epa-ap42-ferroalloy-1995` |
| `calc_mass_reconciliation` | 各路线和整理过程 | 比较物料总投入与产品、内部转移、残余物、已测排放和库存变化；保留并调查差额，不得强行闭合。 | 物料投入；产品；残余物；已测排放；库存变化 | 有记录的路线质量平衡差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别一种合金牌号、化学检验结果、碳含量、物理形态、粒度等级和验收规范。 | 批次放行和实验室证书 |
| `dq_route_identity` | 全部前景过程 | 识别还原或重熔路线、炉或容器类型、封闭与炉气控制配置，以及场内执行的物料准备。 | 工艺流程图、设备台账、批次日志 |
| `dq_temporal_alignment` | 全部交换 | 对物料、能源、生产、残余物和排放使用同一报告期；披露缺口、停机和异常批次。 | 期间核对和覆盖声明 |
| `dq_geographic_technology` | 上游链接 | 选择与声明地理位置、技术、产品状态和牌号匹配的供应商数据集；记录未解决身份，不得静默使用代理。 | 供应商元数据和 UUID 审计记录 |
| `dq_completeness` | 清单 | 将每项实际使用的物料、能源载体、废物和直接排放作为一条原子交换纳入，并与源记录核对。 | 签字完整性检查表以及质量或能量核对 |
| `dq_uncertainty` | 计算值和监测值 | 保留仪表、化验、采样、排放测试、分配和数据缺口不确定性，并说明其对归一化结果的影响。 | 校准、实验室 QA、烟气测试 QA 和不确定性声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品类别 | 缺少合金牌号、成分、碳含量、路线、物理形态或工厂门口状态的数据包应判为不合格。 | `unstats-cpc-3-2025` |
| `validation_exclusions` | 产品类别 | 本 PCR 不得用于锰铁、铬铁、镍铁、生铁、直接还原铁、铁或钢粉末、粗钢或纯合金元素金属。 | `unstats-cpc-3-2025` |
| `validation_reference_mass` | 参考流 | 确认归一化产出为 1 kg 净合格产品且不含包装皮重。 |  |
| `validation_route_processes` | 过程图 | 要求纳入适用生产路线和产品整理，并解释每项通常相关但被省略的操作。 | `us-epa-ap42-ferroalloy-1995` |
| `validation_atomic_inventory` | 清单 | 拒绝合并的公用工程、燃料、原料、废物或排放；每行必须识别一种物理或化学交换。 |  |
| `validation_internal_transfers` | 路线与整理链接 | 考虑有记录的库存变化和损失后，确认牌号特定的上游路线产出等于整理投入。 |  |
| `validation_offgas_residues` | 直接排放和废物 | 确认适用时报告一氧化碳、二氧化碳、炉渣、捕集粉尘、PM10 和不合格产品，并声明其实际回收、回用、销售或处置去向。 | `us-epa-ap42-ferroalloy-1995` |
| `validation_uuid_status` | 全部含 UUID 行 | 仅接受经过直接审计且公开 `state_code=100` 的天工身份，其名称、流类型、分类、属性、单位组、产品状态、地理、技术和备注必须与该行一致。 |  |
| `validation_range_evidence` | 定量 QA 范围 | 不得用少于两项相互独立、原文已核验且系统边界、功能单位和产品状态兼容的来源推断外部范围；证据不足时省略范围并保留前景采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成方法和身份审查后可发布的牌号、路线、场址和期间特定前景生产数据集 |
| downstream_use | 供消耗生产厂门口已声明其他铁合金的系统使用的次级数据集或背景数据集 |
| allowed_use | 合金牌号、物理形态、地理位置、生产路线、电力供应、碳源来源和残余物处理兼容或经明确调整的研究 |
| excluded_use | 未指定平均铁合金；单独分类的锰铁、铬铁或镍铁；纯合金元素金属；下游炼钢；无代表性说明的不同路线或牌号 |
| required_metadata | PCR id 与版本；产品与牌号；成分与碳含量；形态与粒度；路线与设备；工厂地理位置；报告期；产量；电力供应；还原剂来源；炉气、炉渣、粉尘和不合格产品去向；分配；UUID 审计状态 |
| required_quality_disclosure | 一手数据覆盖；仪表和化验 QA；烟气测试或计算基准；质量平衡差额；分配比例；上游数据集代表性；未解决 UUID 和范围证据需求；不确定性和数据缺口 |
| update_trigger | 合金牌号或规范、生产路线、炉或控制设施、电力供应、还原剂来源、残余物去向、分配、工厂地理位置发生变化，或投入、排放、生产效率发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unstats-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版结构与解释性说明》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv 和 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-09-04） | 官方产品分类身份，以及相对于单独列出的锰铁、铬铁和镍铁的剩余类别边界 |
| `us-epa-ap42-ferroalloy-1995` | 官方指南（`official_guidance`） | 美国环境保护署，《AP-42 第 12.4 节 铁合金生产》，1986 年 10 月，1995 年 1 月重新排版，https://www.epa.gov/sites/production/files/2020-11/documents/c12s04.pdf（检索日期：2026-09-04） | 铁合金定义、矿热炉与金属热路线分解、原料准备、出炉和产品整理、炉渣与粉尘处理及直接大气排放覆盖 |
| `cn-mofcom-ferroalloy-2009` | 官方指南（`official_guidance`） | 中华人民共和国商务部，《商务部公告 2009 年第 93 号》及所附铁合金出口许可申报企业分类，https://www.mofcom.gov.cn/zcfb/blgg/art/2009/art_25c5e2496e634d28b4ba58211d059275.html（检索日期：2026-09-04） | 核验“其他铁合金”等专业中文术语及代表性合金品种名称 |
