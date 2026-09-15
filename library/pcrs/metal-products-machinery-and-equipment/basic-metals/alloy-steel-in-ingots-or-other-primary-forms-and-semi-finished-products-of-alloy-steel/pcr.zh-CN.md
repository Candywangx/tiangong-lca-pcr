---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 合金钢锭或其他初级形状产品及合金钢半成品

## 1. 范围与适用性

本 PCR 适用于以钢锭、连铸或模铸板坯、方坯、矩形坯或其他已声明初级形状或半成品形态出厂的合金钢前景数据包。不锈钢及其他合金钢仅在产品仍处于 CPC 41122 初级形状边界内时纳入。每个数据集应代表一种已声明牌号或成分规范、一种交付形态和一种路线特定的生产组合。

边界终点为合格产品在钢铁厂具备发运条件之时。热轧、冷轧、锻造、挤压、拉拔、涂覆、机加工、成品制造、钢铁厂大门之后的配送、使用和寿命终结均排除。铁合金、生铁、直接还原铁或热压铁块以及废钢是投入而非参考产品。可纳入场内炼铁，但不得隐含平均不同工艺路线、不兼容牌号或形态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-alloy-steel |
| classification_refs | CPC 3.0: 41122, exact |
| covered_products | 合金钢锭及其他初级形状产品；铸造板坯、方坯、矩形坯及其他合金钢半成品；处于 CPC 41122 初级形状状态的不锈钢牌号亦在范围内 |
| excluded_products | 非合金钢；铁合金；作为产品销售的直接还原铁；热轧或冷轧产品；棒材、线材、型材、管材、锻件、涂层产品及制成品 |
| representative_product | 在钢铁厂大门交付的一种已声明合金钢牌号净可售钢锭、板坯、方坯、矩形坯或其他已声明初级形状半成品 |
| production_route | 已声明的高炉—转炉、直接还原、全废钢电弧炉、混合炉料电弧炉或其他有文件记录的路线，随后进行二次冶金和模铸或连铸 |
| market_state | 钢铁厂大门处的固态、未轧制初级形状或半成品合金钢，已声明牌号、形态、尺寸、精整状态和可售质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一种已声明钢锭或初级形状半成品合金钢以供下游加工 |
| How much | 钢铁厂大门处 1,000 kg 净可售合金钢 |
| How well | 符合已声明牌号或成分规范、交付形态、尺寸和精整状态 |
| How long or cycle | 一个生产批次或生产期直至具备发运条件；不表示使用寿命 |
| reference_flow_link | 铸造、切头尾、火焰清理或其他已声明初步精整之后，且在下游轧制或成形之前的净可售质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 已声明钢锭或初级形状半成品形态的合金钢（UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金类别及牌号或成分限值；钢锭、板坯、方坯、矩形坯或其他形态；尺寸；炼钢路线及铁源份额；铸造路线；再生金属投入份额及核算方法；精整状态；场址和地理范围；生产期；钢铁厂大门边界 |

每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量铸造损耗和已声明初步精整后的净可售质量；排除运输包装。 |
| `metal_mass_consistency` | 金属、产品、废钢、渣、尘和氧化铁皮行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留湿基或干基及化验基准；仅在水分和化验数据可审计时换算。 |
| `gas_volume_basis` | 天然气、氧气和氩气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留仪表参比温度和压力，且不得合并气体种类。 |
| `electricity_energy_basis` | 交流电行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 3.6 MJ/kWh 将 kWh 换算为 MJ，并保留电压、仪表位置和供电来源。 |
| `internal_transfer_identity` | 铁水、直接还原铁或热压铁块以及钢液转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 生产过程输出与消费过程投入采用相同数量、身份、状态和期间；仅在汇总时抵销。 |

## 5. 系统边界

前景数据包涵盖材料接收和处理、数据集声称的场内铁源生产、初炼钢、二次冶金与合金调整、铸造及已声明初步精整、所归属的场内运输与能源和煤气系统、水管理、排放控制，以及钢铁厂大门之前产生残余物的处理或回收。外购投入需要兼容的上游数据集；除非该投入确实在已声明场址边界内生产，否则不得作为前景过程重建。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明铁源以场内加工的矿石或球团、外购铁水、外购直接还原铁或热压铁块，还是制备废钢进入，并确定每条路线的首个前景保管点。 |
| starting_condition_role | 防止一体化炼铁、外购中间体和再生金属投入在炼钢交汇处遗漏或重复核算。 |
| product_classification_scope | 轧制、锻造、挤压、拉拔、涂覆或制品制造之前的固态合金钢锭、其他初级形状及铸造合金钢半成品。 |
| recursive_input_rule | 场内返回的合金钢切头尾或废品分别作为产生过程输出和消费过程投入记录一次，再在汇总时抵销；外购废钢采用上游数据集且不是参考产品。 |
| upstream_dataset_requirement | 每项外购矿石、球团、焦炭、直接还原铁或热压铁块、铁水、废钢、铁合金、熔剂、脱氧剂、气体、燃料、电力、水和结晶器耗材均关联物态、地理和技术兼容的上游数据集。 |
| disclosure | 披露地理范围、期间、牌号或牌号组合、交付形态、路线和炉料份额、铸造路线、再生含量核算、过程煤气进出口、外购中间体、共产品处理、废物去向和排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 前景系统及所关联上游系统 | 纳入直至具备发运条件的炼钢及必要场内辅助服务，并关联外供材料、能源和耗材的上游生产与运输且避免重复核算。 | worldsteel-lci-methodology-2017 |
| `boundary_route_specificity` | 高炉—转炉、直接还原和电弧炉路线 | 仅建模已声明路线过程和炉料份额；保留路线特定的直接排放和中间体。 | eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry |
| `boundary_downstream_exclusion` | 初级铸造之后的作业 | 排除下游轧制、锻造、挤压、拉拔、涂覆和制成品制造；识别所纳入的初步精整及其计量损耗。 | unsd-cpc-3.0-2025 |
| `boundary_internal_flows` | 内部材料和过程煤气 | 一致记录生产和消费，仅在汇总时抵销相同内部转移，并披露净输入和净输出。 | worldsteel-lci-methodology-2017 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `iron_unit_production` | 场内铁源生产 | conditional | 仅在场内还原矿石、球团或其他含铁炉料时纳入；区分高炉和直接还原作业。 | 生产铁水或直接还原铁或热压铁块。 | 按 1,000 kg 参考产品归一化的计量转移量。 |
| `primary_steelmaking` | 初炼钢 | required | 选择并披露转炉、电弧炉或其他有文件记录的技术及金属炉料份额。 | 生产路线特定钢液。 | 按 1,000 kg 参考产品归一化的钢液产出量。 |
| `secondary_metallurgy` | 二次冶金与合金调整 | required | 纳入实际钢包、真空、搅拌、加热、脱氧和合金添加作业。 | 达到最终成分和铸造条件。 | 按 1,000 kg 参考产品归一化的精炼钢液产出量。 |
| `primary_casting` | 模铸或连铸及初步精整 | required | 选择模铸或连铸，且仅纳入已声明大门之前的精整。 | 生产净可售参考产品。 | 1,000 kg 净可售参考产品。 |

### 过程：场内铁源生产（`iron_unit_production`）

#### 输入

##### 产品流

###### 铁矿石炉料（`iron_ore_feed`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明块矿、粉矿或造块入料状态的铁矿石
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量收到的原状矿石；仅在场内加工矿石时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铁矿球团（`iron_ore_pellets`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明还原级别的铁矿球团
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量球团接收量或装料量；仅在场内加工球团时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 冶金焦炭（`metallurgical_coke`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：冶金焦炭
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量装料量；仅在使用焦炭时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### 直接还原或炼铁用天然气（`natural_gas_iron_reduction`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅当天然气跨越本过程边界时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### 铁源生产用电（`electricity_iron_unit`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量外购和归属的场内电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铁源生产用氧（`oxygen_iron_unit`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅在喷吹氧气时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至炼钢的铁水（`hot_metal_intermediate`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明化学成分和温度的铁水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量；仅适用于铁水路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 转移至炼钢的直接还原铁（`direct_reduced_iron_intermediate`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明直接还原铁或热压铁块状态的直接还原铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移量；仅适用于场内直接还原
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

##### 废物流

###### 炼铁渣（`ironmaking_slag`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明铁源路线产生的炼铁渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按内部再利用、外部回收或处理去向计量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_iron_unit_records`
- 来源：worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

##### 基本流

###### 铁源生产直接排放的化石源二氧化碳（`fossil_co2_iron_unit`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：碳平衡或经核验的烟道及过程煤气计量，且不得重复核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_iron_unit_records`
- 来源：ipcc-2006-metal-industry

### 过程：初炼钢（`primary_steelmaking`）

#### 输入

##### 产品流

###### 铁水炉料（`hot_metal_charge`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明化学成分和温度的铁水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量装料量；仅适用于铁水路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 直接还原铁或热压铁块炉料（`dri_hbi_charge`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明直接还原铁或热压铁块状态的直接还原铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量装料量；仅在使用直接还原铁或热压铁块时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### 经制备的废钢炉料（`ferrous_scrap_charge`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明合金兼容类别的经制备废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按类别及内部或外部来源计量装料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### 冶金用生石灰熔剂（`quicklime_flux`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：冶金用生石灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量初炼钢装料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry

###### 初炼钢用电（`electricity_primary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量外购和归属的场内电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 初炼钢用氧（`oxygen_primary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量输送至已声明炉体的氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 初炼钢用天然气（`natural_gas_primary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅适用于本过程边界内燃烧器或加热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至精炼的合金钢液（`liquid_alloy_steel`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明炉次成分和温度的合金钢液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量出钢钢液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

###### 初炼钢渣（`primary_slag`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明炉体路线产生的初炼钢渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按回收或处理去向计量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### 初炼钢除尘灰（`primary_dust`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：收集的初炼钢除尘灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向计量收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 基本流

###### 初炼钢直接排放的化石源二氧化碳（`fossil_co2_primary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：碳平衡或经核验的烟道计量；适用时纳入电极碳且不得重复核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_primary_steelmaking_records`
- 来源：ipcc-2006-metal-industry
### 过程：二次冶金与合金调整（`secondary_metallurgy`）

#### 输入

##### 产品流

###### 进入二次冶金的钢液（`liquid_steel_refining_input`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明炉次成分和温度的合金钢液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量投入量并与初炼钢输出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铬铁添加料（`ferrochromium_alloy`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明牌号的铬铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉次添加量；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 镍铁添加料（`ferronickel_alloy`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明牌号的镍铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉次添加量；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 锰铁添加料（`ferromanganese_alloy`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明牌号的锰铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉次添加量；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 硅铁添加料（`ferrosilicon_alloy`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明牌号的硅铁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉次添加量；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铝脱氧剂（`aluminium_deoxidizer`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明纯度和形态的铝脱氧剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量炉次添加量；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 钢包搅拌用氩气（`argon_stirring`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明纯度的工业氩气
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或按批次发放的体积；仅在使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 二次冶金用生石灰（`quicklime_secondary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：冶金用生石灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量二次冶金装料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 二次冶金用电（`electricity_secondary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量外购和归属的场内电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 二次冶金用氧（`oxygen_secondary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅在使用氧气时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 钢包加热用天然气（`natural_gas_ladle`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅适用于钢包或精炼燃烧器
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至铸造的精炼合金钢液（`refined_liquid_alloy_steel`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明最终成分和铸造温度的精炼合金钢液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移至所选铸造路线的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

###### 二次冶金渣（`secondary_slag`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明合金牌号的二次冶金渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按回收或处理去向计量净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### 二次冶金除尘灰（`secondary_dust`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：收集的二次冶金除尘灰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理去向计量收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 基本流

###### 二次冶金直接排放的化石源二氧化碳（`fossil_co2_secondary`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：碳平衡或经核验的烟道计量且不得重复核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_secondary_metallurgy_records`
- 来源：ipcc-2006-metal-industry

### 过程：模铸或连铸及初步精整（`primary_casting`）

#### 输入

##### 产品流

###### 进入铸造的精炼钢液（`refined_liquid_steel_casting`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：具有已声明最终成分和铸造温度的精炼合金钢液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量投入量并与二次冶金输出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 连铸结晶器保护渣（`continuous_casting_mould_flux`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明配方的连铸结晶器保护渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量领用量；仅适用于连铸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铸造用冷却水（`cooling_water_casting`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明来源和水质的铸造冷却补充水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：扣除内部循环后的计量补水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铸造用电（`electricity_casting`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量外购和归属的场内电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铸造与精整用天然气（`natural_gas_casting`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量体积；仅适用于铸造或所纳入精整的燃烧器
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净可售合金钢初级形状或半成品（`reference_product_output`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明钢锭或初级形状半成品形态的合金钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据参考流定义为 1,000 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：unsd-cpc-3.0-2025

##### 废物流

###### 合金钢铸造切头尾及废品废钢（`casting_scrap`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明牌号类别的合金钢铸造切头尾及废品废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按内部回炉或外部去向计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：worldsteel-lci-methodology-2017; eu-jrc-iron-steel-bref-2013

###### 铸造或初步精整产生的氧化铁皮（`mill_scale`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：铸造或已声明初步精整产生的氧化铁皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按回收或处理去向计量收集质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

###### 铸造冷却废水（`casting_wastewater`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：已声明处理或排放边界处的铸造冷却废水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：扣除循环后按去向计量净体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-iron-steel-bref-2013

##### 基本流

###### 铸造与精整直接排放的化石源二氧化碳（`fossil_co2_casting`）

该原子交换跨越已声明过程边界时予以记录。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：碳平衡或经核验的烟道计量且不得重复核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_casting_records`
- 来源：ipcc-2006-metal-industry

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 路线过程和计量公用工程 | 优先细分单独计量过程以避免分配；共享公用工程采用有文件记录的因果计量、运行时间或能量平衡归属。 | worldsteel-lci-methodology-2017 |
| `allocation_internal_recycling` | 返回废钢、尘、氧化铁皮、渣和过程煤气 | 在过程边界记录生产和消费，随后抵销相同内部转移；留在系统内的材料不得获得外部信用。 | worldsteel-lci-methodology-2017 |
| `allocation_external_coproducts` | 有证实市场用途的净外供渣、过程煤气或回收材料 | 仅在记录实际用途和功能等效替代产品时采用系统扩展；披露替代假设和敏感性。 | worldsteel-lci-methodology-2017 |
| `allocation_waste_status` | 无证实市场需求或用途的残余物 | 建模实际废物处理或处置；同一残余物既回收又作为废物时拆分数量。 | worldsteel-lci-methodology-2017 |
| `allocation_multiple_grades` | 同期生产多个可售牌号或形态 | 优先按炉次细分；仍有共享负荷时按净可售质量分配，并披露受影响过程、产品和敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_iron_unit_records` | iron_unit_production | 材料、公用工程、中间体、残余物和直接排放记录 | 秤；库存；仪表；化验；烟道及过程煤气记录 | 生产期；路线；身份；质量；化验；气体条件；能量；碳；去向 | 将记录与铁源产出及关联炉次核对。 | kg; m3; MJ | 每炉次、班次或生产期；每月核对 | 12 个代表性月份或完整较短生产期 | 所有归属的场内铁源作业 | 按路线求和，扣除库存变化并通过关联炉次归一化。 | 校准；化验；签署平衡；停机日志 |
| `cp_primary_steelmaking_records` | primary_steelmaking | 炉料、公用工程、钢液、残余物和直接排放记录 | 炉次单；称量斗；仪表；分析；烟气记录 | 炉次；路线；身份和来源；质量；气体；能量；出钢量；成分；碳；去向 | 按炉次核对炉料、钢液、残余物和碳。 | kg; m3; MJ | 每炉次；每月核对 | 12 个代表性月份或完整较短生产期 | 所有炉体和归属辅助设施 | 按路线汇总合格炉次并归一化至参考流。 | 设备校准；完整炉次单；实验室和烟气核对 |
| `cp_secondary_metallurgy_records` | secondary_metallurgy | 钢液、合金、气体、能量、残余物和直接排放记录 | 炉次单；领料；秤；仪表；成分分析 | 炉次；转移质量；合金身份和化验；添加量；气体；能量；成分；温度；去向 | 将每项添加料和公用工程关联炉次并核对至铸造。 | kg; m3; MJ | 每炉次；每月核对 | 12 个代表性月份或完整较短生产期 | 所有用于已声明牌号的精炼装置 | 汇总炉次特定记录并归一化至参考流。 | 证书；校准；成分；炉次谱系 |
| `cp_casting_records` | primary_casting | 钢液、耗材、水、能量、产品、残余物和直接排放记录 | 铸造日志；秤；仪表；质量和发运记录 | 炉次；路线；投入；形态；尺寸；耗材；水；能量；产品；残余物；去向 | 核对从炉次至铸造、精整和放行的谱系。 | kg; m3; MJ | 每炉次或浇次；每月核对 | 12 个代表性月份或完整较短生产期 | 所有铸造和所纳入精整作业 | 汇总待发产品及归属交换并归一化至 1,000 kg。 | 校准；铸造日志；放行；废物和废水记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化量 = 归属交换量 / 净可售产品质量 × 1,000 kg | 已核对交换量；净可售质量 | 每 1,000 kg 参考产品的交换量 |  |
| `calc_electricity_mj` | 交流电 | MJ = kWh × 3.6；归属前分别保留供电来源 | kWh 或 MWh；仪表边界；来源 | 各过程 MJ |  |
| `calc_internal_transfer_cancel` | 中间体、返回材料和过程煤气 | 匹配身份和期间，要求输出与投入相等，仅在过程完整性检查后抵销。 | 生产输出；消费投入；身份；期间 | 内部转移净值为零并保留过程毛流量 | worldsteel-lci-methodology-2017 |
| `calc_direct_fossil_co2` | 化石源二氧化碳直接排放 | CO2 = 净氧化化石碳 × 44/12；扣除产品、残余物和净外供中的碳并避免能源部门重复核算。 | 计量投入产出；含碳量；气体转移；烟道数据 | 各过程 kg 化石源二氧化碳 | ipcc-2006-metal-industry |
| `calc_mass_balance` | 各过程及完整数据包 | 核对金属投入与产品、转移、渣、尘、氧化铁皮、废钢及库存变化；调查而非强制消除残差。 | 计量质量流；化验；库存 | 有符号残差及处置记录 | eu-jrc-iron-steel-bref-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明牌号或成分、形态、尺寸、铸造路线、精整状态和可售质量；禁止不兼容的未声明平均。 | 规范；炉次证书；放行；发运记录 |
| `dq_route_and_charge` | 铁源及初炼钢路线 | 声明路线、技术、场内或外购中间体以及铁水、直接还原铁或热压铁块和废钢份额。 | 路线图；炉次单；质量平衡；供应商记录 |
| `dq_temporal_representativeness` | 所有记录 | 使用连续 12 个代表性月份，除非较短完整生产期即全部生产期；解释停机和排除。 | 日历；生产、停机和维护日志 |
| `dq_meter_and_assay` | 计量量 | 保留校准、仪表位置、气体条件、取样方法、实验室结果及湿基或干基。 | 校准；仪表图；实验室证书；程序 |
| `dq_completeness` | 过程清单 | 覆盖每个适用过程和原子交换角色；仅以路线证据标记不适用。 | 完整性矩阵；签署平衡审查 |
| `dq_residue_destination` | 渣、尘、氧化铁皮、废钢和废水 | 分别量化内部再利用、外部回收、处理和处置。 | 转移票据；合同；证书；内部记录 |
| `dq_source_compatibility` | 关联上游数据集 | 选择物态、地理、技术和边界兼容的数据集并披露代理。 | 数据集元数据；供应商声明；代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_quantity` | 参考产品 | 归一化净可售产出必须等于 1,000 kg，采用 Mass 和 kg。 |  |
| `validate_required_qualifiers` | 参考流元数据 | 缺失牌号、形态、尺寸、路线和炉料份额、铸造路线、再生投入核算、地理、期间或精整状态时判定不完整。 | unsd-cpc-3.0-2025 |
| `validate_route_processes` | 过程图和清单 | 必须纳入初炼钢、二次冶金和铸造；仅在场内进行时要求铁源生产，并拒绝未声明路线交换。 | eu-jrc-iron-steel-bref-2013; ipcc-2006-metal-industry |
| `validate_internal_transfers` | 内部转移 | 生产和消费数量、身份及期间必须在抵销前一致。 | worldsteel-lci-methodology-2017 |
| `validate_direct_co2` | 化石源二氧化碳行 | 核对计算与计量二氧化碳，并证明燃烧排放和过程排放未重复核算。 | ipcc-2006-metal-industry |
| `validate_mass_balance` | 过程和数据包总量 | 报告每项有符号残差并调查，不得将不明残差赋给产品。 | eu-jrc-iron-steel-bref-2013 |
| `validate_coproduct_claims` | 外供共产品 | 仅在记录用途、功能等效性、替代产品、数量和敏感性时允许避免负荷声明。 | worldsteel-lci-methodology-2017 |
| `validate_uuid_status` | 参考流和清单流 | 激活前，直读核验每个 UUID 为公开状态 100 且名称、类型、分类、属性、单位组、物态、地理、技术和备注匹配；未解决行保持显式。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于下游轧制或成形之前的合金钢锭及铸造合金钢半成品的背景或供应商特定建模 |
| allowed_use | 已声明或兼容的牌号、初级形态、路线、地理、期间、大门边界和精整状态；仅按产量加权份额汇总。 |
| excluded_use | 非合金钢；铁合金生产；轧制、锻造、拉拔、挤压、涂覆或成品钢；未披露平均；使用或寿命终结声明；未协调比较。 |
| required_metadata | PCR id 和版本；牌号或成分；形态和尺寸；路线和炉料份额；铸造路线；场址和地理；期间；再生投入方法；精整；上游数据集；共产品和废物处理；所有者及审查状态 |
| required_quality_disclosure | 一手数据覆盖；仪表和化验质量；代表性；质量平衡残差；未解决 UUID；代理；分配；排除和缺口 |
| update_trigger | 牌号类别、形态、路线或炉料份额、铸造技术、场址边界、主要能源、共产品处理、期间发生变化，或获得已核验 UUID 和独立范围证据 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3.0-2025` | official_guidance | 联合国统计司：《CPC 第 3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41122 身份和初级形状边界 |
| `worldsteel-lci-methodology-2017` | method_factor | 世界钢铁协会：《生命周期清单方法报告》，2017 年。https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 | 从摇篮到大门边界、辅助过程、内部循环、共产品和废物处理 |
| `eu-jrc-iron-steel-bref-2013` | official_guidance | Remus, R.; Aguado-Monsonet, M. A.; Roudier, S.; Delgado Sancho, L.《钢铁生产最佳可行技术参考文件》，欧盟委员会联合研究中心，EUR 25521 EN，2013 年。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 高炉—转炉和电弧炉分解、二次冶金、铸造以及材料、能源、水、废物和排放监测 |
| `ipcc-2006-metal-industry` | method_factor | IPCC：《2006 年 IPCC 国家温室气体清单指南》第 3 卷第 4 章“金属工业排放”。https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_4_Ch4_Metal_Industry.pdf | 路线区分、工厂活动数据和直接化石源二氧化碳碳平衡 |
