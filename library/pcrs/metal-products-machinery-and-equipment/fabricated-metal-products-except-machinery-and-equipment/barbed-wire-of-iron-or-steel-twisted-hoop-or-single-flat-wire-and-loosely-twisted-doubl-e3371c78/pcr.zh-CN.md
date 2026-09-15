---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.barbed-wire-of-iron-or-steel-twisted-hoop-or-single-flat-wire-and-loosely-twisted-doubl-e3371c78
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 带刺的铁丝或钢丝；铁或钢制的围栏用的旋绞环箍或扁型单丝及松纹双股丝

## 1. 范围与适用性

本 PCR 覆盖钢铁制带刺围栏用丝，以及本产品类别中明确定义的围栏用旋绞环箍、扁型单丝和松纹双股丝的工厂门生产。产品以卷材交付时，只要声明结构、钢种、丝径、刺形、镀层状态、镀层工序顺序和销售单元包装，本 PCR 可用于无镀层和镀锌产品。

前景边界始于接收钢丝，止于工厂门的可销售带刺丝净重卷材；边界包括成形、绞合、加刺、卷绕、场内条件性连续热浸镀锌和条件性钢制捆扎带。边界不包括外购钢丝所含的上游炼钢和拉丝、围网、立柱、门、绝缘电线、安装、使用、维护、工厂门后运输及报废阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.barbed-wire-of-iron-or-steel-twisted-hoop-or-single-flat-wire-and-loosely-twisted-doubl-e3371c78 |
| classification_refs | CPC 3.0：42946（精确分类语境） |
| covered_products | 钢铁制带刺丝；围栏用旋绞环箍或扁型单丝及松纹双股丝；无镀层或镀锌的可销售卷材 |
| excluded_products | 捆包铁丝；丝网、丝布、格栅和网；围栏立柱和门；绞合缆；绝缘电线；有色金属或塑料围栏用丝 |
| representative_product | 以工厂门卷材交付的双股低碳钢带刺围栏用丝；镀层状态须声明，但不形成单独 PCR 身份 |
| production_route | 接收钢丝后进行成形、绞合、加刺和卷绕；仅当连续热浸镀锌发生于前景边界内时纳入该工序 |
| market_state | 干燥、可销售的工厂门卷材；产品净重与包装质量分开 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为带刺或规定绞合形式围栏屏障构件的钢铁丝 |
| How much | 1,000 kg 带刺丝净产品 |
| How well | 符合声明的钢丝结构、钢种、丝径、抗拉或强度等级、刺形与刺距、镀层规范及适用采购规范 |
| How long or cycle | 至少连续 12 个月的一个生产报告期；无年度数据时采用有文件证明的代表性生产活动期 |
| reference_flow_link | `barbed_wire_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净产品 |
| 参考产品流 | 带刺的铁丝或钢丝 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢丝结构；铁或钢的牌号和碳含量类别；主丝和刺丝直径；抗拉或强度等级；刺形与刺距；镀层材料及镀层质量或厚度；镀层工序顺序以及外购或场内镀层；卷重；包装组件；生产地域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及按质量归一化的材料行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量干燥的可销售带刺丝净重，不含托盘和捆扎带；所有清单行按 1,000 kg 净产品归一化。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按来源和电压保留电表记录；按 1 kWh = 3.6 MJ 转换为 MJ，且不得把上游发电排放计作前景直接排放。 |
| `gas_reference_conditions` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明结算或标准温度和压力，并在归一化前把实测体积换算至声明的参考条件。 |
| `water_mass_conversion` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先进行质量计量；按体积计量时，保留体积记录，并用有文件证明的计量条件下密度计算质量。 |
| `chemical_solution_basis` | 盐酸和助镀化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告交付溶液或产品质量，并单独声明浓度和再生成分；不得混用活性物质质量与溶液质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告场址接收的钢丝卷材，具有钢种、丝径、镀层状态、供应商和交付质量记录 |
| starting_condition_role | 前景门槛投入；其上游数据集承载接收前已完成的炼钢、轧制、拉丝及任何镀层负荷 |
| product_classification_scope | CPC 42946 定义的特定钢铁制带刺和绞合围栏用丝形式；邻近的网、缆、捆包丝、立柱和门产品不在范围内 |
| recursive_input_rule | 作为返工料或进料的外购带刺丝须作为单独披露的次级产品投入，并配套自身上游数据集；不得递归套用本 PCR，也不得并入钢丝行 |
| upstream_dataset_requirement | 采用与声明钢种、丝径、镀层状态、地域、技术和交付边界一致的供应商特定或代表性钢丝数据集；外购镀层钢丝的上游数据集必须已包含镀层负荷 |
| disclosure | 声明成形路线、股数与形状、刺形和刺距、镀层路线和顺序、场内或外购镀层、产品得率、废料去向、包装、场址地域、技术及报告期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景产品系统 | 纳入从接收钢丝到成形、绞合、加刺、卷绕、条件性镀层、检验及销售单元捆扎的全部场内作业；边界止于工厂门。 | `un-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_coating_route` | 镀层产品 | 仅在连续热浸镀锌发生于场内时纳入；若采购预镀层钢丝，则把镀层置于上游并禁止重复计算。 | `eu-jrc-fmp-bref-2022` |
| `boundary_exclusions` | 下游生命周期 | 除非研究在本工厂门数据集之外明确增加相应阶段，否则排除围栏立柱、网、门、安装、使用、维护、下游运输和报废。 | `un-cpc-3-0-structure-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `barbed_wire_manufacturing` | 带刺丝成形、条件性镀锌、卷绕和发运准备 | required | 始终纳入成形、绞合/加刺和卷绕；仅在各自声明条件适用时实例化镀层和捆扎带行 | 前景生产 | 工厂门 1,000 kg 可销售带刺丝净重 |

### 过程：带刺丝成形、条件性镀锌、卷绕和发运准备（`barbed_wire_manufacturing`）

#### 输入

##### 产品流

###### 接收钢丝（`steel_wire`）

钢丝作为主丝和刺丝的金属进料跨越前景门槛。只有当主丝和刺丝具有相同 TianGong 身份、钢种和镀层状态时才可合并其质量；否则应在数据集中分别实例化该行。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：根据接收、库存和退料记录核算的生产路线钢丝净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 外购电力（`electricity`）

记录经计量或有充分依据分配给成形、绞合、卷绕、通风及场内镀锌辅助设备的电力。上游发电排放保留在电力供应数据集中。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：换算为 MJ 并分配给声明产品路线的外购计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`eu-jrc-fmp-bref-2022`

###### 工艺用水（`process_water`）

仅当镀锌漂洗、槽液补充和冷却处于前景路线内时，纳入跨越场址边界的工艺用水。闭路循环水不计入总投入，但须记录补充水和排放水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于声明生产路线的计量工艺补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`eu-jrc-fmp-bref-2022`

###### 场内酸洗用盐酸（`hydrochloric_acid`）

仅在场内连续镀锌线用盐酸酸洗钢丝时纳入。声明交付浓度，扣除退回或回收溶液，不得把溶液质量换成纯 HCl 质量。

- 选定流：盐酸 `964d524a-87f5-4b63-a856-2e31a8f21b67`
- 流属性/单位：Mass / kg
- 数量规则：适用酸洗步骤消耗的交付盐酸溶液净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 场内镀锌用锌金属（`zinc_metal`）

仅对场内镀锌纳入加入熔融槽的锌金属。记录合金牌号，并区分总加入量和返回槽内的回收锌。

- 选定流：锌金属
- 流属性/单位：Mass / kg
- 数量规则：归属于声明镀层产品的锌金属净加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 助镀槽用氯化锌（`zinc_chloride`）

仅当场内镀锌助镀槽添加氯化锌时纳入。记录产品纯度和净添加量，不得把循环槽液存量计作投入。

- 选定流：氯化锌 `e5d10a05-c796-4974-9871-fad1bfb5ddb8`
- 流属性/单位：Mass / kg
- 数量规则：适用助镀槽添加的氯化锌产品净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 助镀槽用氯化铵（`ammonium_chloride`）

仅当场内氯化锌/氯化铵助镀槽添加氯化铵时纳入。记录产品纯度，并与氯化锌分开记录净添加量。

- 选定流：氯化铵 `0d0e3c27-1f93-4dc1-80d0-392a3226cd4f`
- 流属性/单位：Mass / kg
- 数量规则：适用助镀槽添加的氯化铵产品净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`eu-jrc-fmp-bref-2022`

###### 锌槽用天然气（`natural_gas`）

仅在气态天然气直接加热场内锌槽或配套干燥器时纳入。声明体积参考条件，并排除无关场址作业用气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：适用镀锌设备消耗的计量或分表分配天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`eu-jrc-fmp-bref-2022`

###### 钢制捆扎带（`steel_strapping`）

仅当钢制捆扎带随可销售卷材离开工厂时纳入。不得把可重复使用的搬运捆扎带或托盘计入参考产品净重。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass / kg
- 数量规则：与参考产品一同发运的不可返还钢制捆扎带领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售带刺丝净产品（`barbed_wire_product`）

这是离开前景系统的参考产品。只计量合格干燥产品，并声明结构、尺寸、强度等级、镀层和卷重。

- 选定流：带刺的铁丝或钢丝
- 流属性/单位：Mass / kg
- 数量规则：合格可销售带刺丝卷材的实测净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 钢丝废料（`steel_wire_scrap`）

记录离开前景路线的切头、开机钢丝、报废刺段和其他钢丝废料。保留去向和回收状态，不得从钢丝总投入中扣除废料。

- 选定流：废钢丝 `89e89b90-d82e-4631-b2ab-cd3c5986ca0e`
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统的钢丝废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste`
- 来源：

###### 锌浮渣（`zinc_dross`）

仅对场内镀锌纳入从镀槽清除的锌浮渣。回收量作为具有去向的废物输出记录；不得在本工厂门清单内计入回收信用。

- 选定流：锌浮渣
- 流属性/单位：Mass / kg
- 数量规则：从适用镀槽清除并离开前景系统的锌浮渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste`
- 来源：`eu-jrc-fmp-bref-2022`

###### 含铁酸性漂洗废水（`acidic_rinse_wastewater`）

纳入场内酸洗和漂洗后送往场内或场外处理的酸性含水废物流。应在处理前报告，且不得与无关生活污水或冷却水排放合并。

- 选定流：含铁酸性漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：由适用酸洗和漂洗工序送往处理的计量或储槽质量平衡废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste`
- 来源：`eu-jrc-fmp-bref-2022`

##### 基本流

###### 排放到空气的化石源二氧化碳（`carbon_dioxide_fossil`）

只记录前景镀锌设备燃烧天然气产生的直接化石源二氧化碳。排除上游电力和燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：归属于适用前景天然气燃烧的设施记录直接化石源二氧化碳排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内镀锌的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：

###### 排放到空气的氯化氢（`hydrogen_chloride_to_air`）

纳入场内盐酸酸洗经声明治理系统后的氯化氢排放。采用烟道测量或有文件证明的场址质量平衡，不得与其他酸性气体合并。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：适用酸洗工序经治理后的氯化氢实测或设施记录排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 需要场内盐酸酸洗的带刺丝净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emissions`
- 来源：`eu-jrc-fmp-bref-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 场址共享作业 | 优先采用工序拆分、分表、生产订单和材料领用记录，把成形及镀锌交换直接归属于声明产品路线。 | |
| `allocation_shared_operations` | 剩余共享交换 | 无法拆分时，仅在说明质量能反映物理关系后，按合格线材产品净重分配共享交换；披露分配比例和敏感性。 | |
| `allocation_scrap_and_dross` | 钢丝废料和锌浮渣 | 按实测质量和去向分别报告各残余物，不得从总投入中扣除，也不得在本工厂门数据集内采用避免负荷信用。 | `eu-jrc-fmp-bref-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `barbed_wire_manufacturing` | 钢丝、酸、锌、助镀盐和钢制捆扎带投入 | 采购、收货、领用、退料和库存记录 | 材料身份；供应商；批次；交付状态；浓度或牌号；期初库存；收货；领用；退料；期末库存；质量；适用路线 | 按期初库存加收货减退料和期末库存核算净消耗；把领料与生产订单关联 | kg | 每月并作年度核算 | 至少连续 12 个月或有文件证明的代表性活动期 | 报告场址内服务于声明产品的全部生产线和库房 | 汇总可归属于路线的净消耗量，并按合格产品净重归一化 | 经校准的秤；库存核对；供应商证书；批次与生产订单关联 |
| `cp_energy_and_water` | `barbed_wire_manufacturing` | 电力、天然气和工艺用水 | 公用工程总表、分表和账单记录 | 仪表编号；起止读数；单位；气体参考条件；分配动因；停机时间；产品路线；产出质量 | 优先使用专用仪表；否则核对场址总量，仅分配有文件证明的路线消耗 | MJ, m3, kg | 每月 | 至少连续 12 个月或有文件证明的代表性活动期 | 声明前景边界内的设备和公用工程 | 按第 4 节换算单位，汇总合格消耗量，并按合格产品净重归一化 | 仪表校准；账单；场址核对；分配工作表 |
| `cp_product_and_waste` | `barbed_wire_manufacturing` | 参考产品、钢丝废料、锌浮渣和含铁酸性漂洗废水 | 生产、秤量、地磅、储槽和废物转移记录 | 产品编码；结构；镀层状态；毛重；皮重；净重；废品质量；废物身份；去向；回收状态；废水体积或质量；密度 | 称量产品和固体残余物；处理前计量或储槽平衡废水；核对产出和废品记录 | kg | 每批或每次发运并按月汇总 | 与投入相同的期间 | 范围内全部成形、镀锌和发运作业 | 分别汇总每项原子输出，并按 1,000 kg 合格产品净重归一化 | 经校准的秤；皮重记录；废物联单；储槽校准；生产核对 |
| `cp_air_emissions` | `barbed_wire_manufacturing` | 直接化石源二氧化碳和氯化氢 | 排放清单、燃料记录和烟道检测记录 | 排放身份；源设备；测量期间；适用时的实测浓度和流量；报告质量；治理状态；分配基准 | 使用设施核证的直接排放记录；氯化氢优先采用与运行小时关联的代表性治理后烟道测量 | kg | 每次检测以及每月或年度排放核对 | 代表性检测加与清单相同的生产期间 | 仅前景燃烧和酸洗排放点 | 汇总归属于路线的直接排放，并按合格产品净重归一化 | 烟道检测报告；仪器校准；燃料和运行小时核对；排放审批记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | 产品和包装投入 | 期初库存 + 收货 - 退料 - 期末库存；仅分配有文件证明的生产订单领用 | 库存、收货、退料和领用记录 | 报告期内每项原子材料投入的净 kg 数 | |
| `calc_reference_normalization` | 每一清单行 | 清单行报告期数量 / 合格产品净重 × 1,000 kg | 经核对的清单行数量；合格带刺丝净产出 | 每 1,000 kg 参考产品的清单行数量 | |
| `calc_route_exclusion` | 条件性镀层和包装行 | 只有路线记录证明相应作业或发运组件不存在时，才把该行标记为不适用；不得填入任意零值 | 路线声明；镀层顺序；采购规范；包装材料清单 | 每个条件行有文件证明的适用状态 | `eu-jrc-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 生产记录须匹配声明的结构、材料、直径、刺形、强度等级、镀层和卷重；不合格产品须分开。 | 产品规范；检验记录；生产订单；供应商或客户证书 |
| `dq_completeness` | 全部清单行 | 覆盖报告期至少 95% 的生产日，并核对遗漏日期、库存变化、返工和异常作业。 | 覆盖率计算；异常清单；库存核对 |
| `dq_route_consistency` | 镀层相关行 | 证明镀层为上游外购或场内实施，并一致地应用所有适用的酸、助镀剂、锌、水、燃料、残余物和排放行。 | 路线图；采购规范；槽液记录；仪表和废物记录 |
| `dq_measurement` | 仪表和秤 | 使用经校准或核证的仪器，并记录共用仪表的任何分配，包括重要共享负荷的敏感性。 | 校准证书；仪表图；分配工作表 |
| `dq_temporal_geographic` | 发布数据集 | 报告场址地域、技术、数据年份、产能利用率和代表性；不得在不保留场址级记录和权重的情况下合并场址。 | 场址元数据；年度生产报告；场址级汇总文件 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 缺失任何必需限定信息，或把带刺丝与捆包铁丝、网、立柱、门、缆或非金属围栏产品混合时，拒绝该数据包。 | `un-cpc-3-0-structure-2025` |
| `validate_mass_reconciliation` | 钢和锌材料平衡 | 确认领用钢和锌与合格产品、库存变化、废料、浮渣及有文件证明的过程损失相核对；调查无法解释的差额。 | |
| `validate_coating_consistency` | 镀层产品路线 | 要求声明唯一镀层工序顺序，并确认预镀层外购钢丝的上游镀层负荷未在前景镀锌行中重复计入。 | `eu-jrc-fmp-bref-2022` |
| `validate_direct_emissions` | 基本流输出 | 确认直接化石源二氧化碳仅包括前景燃烧，氯化氢仅对应适用的治理后酸洗排放。 | `eu-jrc-fmp-bref-2022` |
| `validate_inventory_completeness` | 报告期 | 把产品产出、材料、公用工程、废物和直接排放核对到相同场址、路线和期间，并披露排除项和数据缺口。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset` |
| downstream_use | 作为消耗已声明带刺丝卷材的 `process` 和 `lifecyclemodel` 模型的工厂门背景投入 |
| allowed_use | 当结构、钢种、尺寸、强度、镀层、地域、技术和时期相容时，用于需要钢铁制带刺或规定绞合围栏用丝的研究 |
| excluded_use | 捆包铁丝、丝网、围栏立柱或门、绞合缆、绝缘电线、有色金属或塑料围栏产品、已安装围栏系统，或未增加其他生命周期阶段的从摇篮到坟墓声明 |
| required_metadata | 规范 PCR id；产品结构；钢种；主丝和刺丝直径；强度等级；刺形和刺距；镀层材料及质量或厚度；镀层工序顺序；卷材净重；包装；场址地域；技术；报告期；上游钢丝数据集 |
| required_quality_disclosure | 前景覆盖率；仪表和秤质量；路线适用性；分配比例；材料和产品核对；直接排放方法；未解决数据和 UUID 身份；代表性限制 |
| update_trigger | 钢种或钢丝结构、成形技术、镀层材料或顺序、能源来源、治理、包装、场址地域、分配方法发生变化，或数据超过五年 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，CPC 42946。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-05） | 正式产品身份、分类边界、所覆盖围栏用丝形式以及与邻近产品类别的区分 |
| `un-cpc-v1-1-zh-2008` | 正式指南（`official_guidance`） | 联合国统计司，《产品总分类》第 1.1 版中文版，M 系列第 77 号/第 1.1 版，条目 42946。https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-05） | 核验未变化的带刺和绞合围栏用丝产品身份的专业中文术语 |
| `eu-jrc-fmp-bref-2022` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工业最佳可行技术参考文件》，EUR 31321 EN，JRC131649，2022。DOI：10.2760/196475；https://publications.jrc.ec.europa.eu/repository/handle/JRC131649（检索日期：2026-09-05） | 从钢丝到成品的边界、拉丝语境、连续钢丝镀锌顺序、盐酸酸洗、氯化锌/氯化铵助镀剂、锌槽加热、用水、氯化氢治理、废水和锌浮渣的过程分解 |
