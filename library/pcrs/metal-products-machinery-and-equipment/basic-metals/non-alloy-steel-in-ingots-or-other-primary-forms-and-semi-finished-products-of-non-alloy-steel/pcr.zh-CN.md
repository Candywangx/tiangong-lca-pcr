---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.non-alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-non-alloy-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非合金钢的钢锭或其他初级形式，以及非合金钢的半成品

## 1. 范围与适用性

本 PCR 适用于在生产钢厂门口以钢锭、其他初级形状，或方坯、大方坯、板坯等半成品形态交付的非合金粗钢。它支持高炉-碱性氧气转炉（BF-BOF）和电弧炉（EAF）路线的前景数据包，并在二次冶金和凝固发生于声明边界之前时纳入这些工序。

本 PCR 不包括合金钢和不锈钢、炼钢前作为产品交付的直接还原铁、转炉炼钢前作为产品交付的生铁、钢铁粉末、归入废物或废料的再熔废钢锭，以及下游轧制、锻造、拉拔、涂镀、机加工或制造。数据包必须选择一个实际产品形态和一条生产路线；不得将下列代表性板坯 UUID 改写为钢锭、方坯、大方坯、钢水或合金钢。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.non-alloy-steel-in-ingots-or-other-primary-forms-and-semi-finished-products-of-non-alloy-steel |
| classification_refs | CPC 3.0：41121，精确分类参考 |
| covered_products | 非合金钢锭；其他初级形状非合金钢；下游轧制或制造前的非合金钢方坯、大方坯和板坯 |
| excluded_products | 合金钢和不锈钢；生铁；作为产品交付的直接还原铁；钢铁粉末；废钢锭；轧制、锻造、拉拔、涂镀、机加工或制造的钢产品 |
| representative_product | 用于平轧的连铸非合金钢板坯 |
| production_route | 声明的 BF-BOF 或 EAF 路线，并披露实际含铁炉料、二次冶金以及模铸或连铸状态 |
| market_state | 生产钢厂门口未轧制、未涂镀的非合金粗钢；声明温度、尺寸、牌号和表面处理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适合后续金属加工的声明非合金粗钢初级形状或半成品 |
| How much | 生产钢厂门口 1,000 kg 净合格产品 |
| How well | 符合声明的非合金牌号、化学成分、尺寸、表面状态和验收规范 |
| How long or cycle | 数据包所述时间覆盖期代表的一个生产周期 |
| reference_flow_link | 参考数量等于声明合格产品的净质量；不包括随附垫料和单独供应的包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 用于平轧的连铸钢板坯 `fa93b446-0340-4d7b-9f4d-e3f78789ea94` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品形态；非合金牌号或化学成分规范；BF-BOF 或 EAF 路线；含铁炉料份额；铸造路线；热态或冷态交付状态；表面处理状态；工厂地理范围；生产技术；时间覆盖；再生含量核算方法；共产品处理方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1,000 kg 净合格钢，不包括垫料、外部包装、出厂门前去除的氧化铁皮和单独报告的残渣。 |
| `wet_dry_mass` | 矿石、焦炭、熔剂、粉尘、污泥、氧化铁皮和炉渣 | Mass | kg | 说明各质量为湿基或干基；保留水分测定记录，仅使用实测含水率换算干质量。 |
| `gas_reference_state` | 氧气和气态天然气 | Volume | m3 | 说明所有气体体积的温度和绝对压力；无明确换算时不得混用标准体积与实际体积记录。 |
| `electricity_energy` | 交流电 | Energy | MJ | 保留电表 kWh 原始值，只按精确恒等式 1 kWh = 3.6 MJ 换算；披露电压及输配电损耗处理方法。 |
| `internal_flow_consistency` | 钢水和返回废钢 | Mass | kg | 发送和接收过程边界使用相同的流身份和数量；不得将内部转移计为外部投入或产出。 |

## 5. 系统边界

预期清单边界为从摇篮到工厂门。前景记录覆盖声明路线中钢厂控制的作业，外购材料、燃料、电力、氧气和水则连接各自的上游供应数据集。下游轧制和产品制造不在边界内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入首个钢厂控制作业的供应商门口含铁材料、还原剂、熔剂、气体、电力和水，并连接适当的上游数据集 |
| starting_condition_role | 带上游供应方连接的钢厂前景边界 |
| product_classification_scope | 下游轧制或制造前，呈钢锭、其他初级形状、方坯、大方坯或板坯形态的非合金粗钢 |
| recursive_input_rule | 对已属于本 PCR 类别的外购投入，只作为产品投入记录一次并连接其上游供应数据集；不在接收方前景系统中递归重建其生产。 |
| upstream_dataset_requirement | 每项外购材料和能源投入均应连接地理、技术和状态相容的上游数据集，否则披露未解决的供应方缺口。 |
| disclosure | 披露路线、产品形态、牌号、炉料组合、铸造状态、场址地理范围、时间覆盖、内部循环、外供能源、共产品状态及任何排除的钢厂作业。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | 完整产品系统 | 纳入从上游资源与能源供应到生产钢厂门口的过程；除非发生于声明参考产品出厂门前，不纳入下游轧制或制造。 | `worldsteel-life-cycle-thinking` |
| `sb_route_operations` | 钢厂前景系统 | 按实际路线纳入炼铁、BF-BOF 或 EAF 炼钢、钢包冶金、炉渣处理以及模铸或连续铸造，并披露所有省略作业。 | `eu-jrc-iron-steel-bref-2013` |
| `sb_inventory_coverage` | 前景及连接的上游清单 | 分别记录所有实测材料、非质量能源、水、直接排放、副产品和废物交换，不得以路线平均的能源载体组合代替原子流。 | `worldsteel-life-cycle-thinking` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bf_bof_route` | 高炉-转炉一体化炼铁炼钢 | conditional | 仅当声明产品由高炉-碱性氧气转炉一体化路线生产时纳入。 | 前景炼铁、炼钢和二次冶金 | 转入铸造的非合金钢钢水 |
| `eaf_route` | 电弧炉炼钢 | conditional | 仅当声明产品由电弧炉路线生产时纳入；只有实际装入时才记录直接还原铁。 | 前景熔化、炼钢和二次冶金 | 转入铸造的非合金钢钢水 |
| `casting` | 模铸或连铸及产品搬运 | conditional | 产品在声明边界前凝固时纳入；识别钢锭、方坯、大方坯或板坯铸造，采用模铸时排除连铸结晶器保护渣。 | 前景凝固和工厂门口准备 | 1,000 kg 声明合格产品 |

### 过程：高炉-转炉一体化炼铁炼钢（`bf_bof_route`）

#### 输入

##### 产品流

###### 高炉-转炉路线装入的铁矿球团（`bf_iron_ore_pellets`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：铁矿球团
- 流属性/单位：Mass / kg
- 数量规则：计量跨越供应商至场址边界的高炉级球团干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 高炉-转炉路线装入的冶金焦（`bf_metallurgical_coke`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：冶金焦
- 流属性/单位：Mass / kg
- 数量规则：计量装入的冶金焦干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 转炉装入的预处理废钢铁（`bf_steel_scrap`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：预处理废钢铁
- 流属性/单位：Mass / kg
- 数量规则：计量装入的外购预处理废钢铁质量；内部返回料单独记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 炼钢装入的生石灰熔剂（`bf_burnt_lime`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：生石灰
- 流属性/单位：Mass / kg
- 数量规则：计量装入的生石灰干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 炼铁和转炉使用的工业氧气（`bf_oxygen`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3（体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`）
- 数量规则：计量供应的标准状态氧气体积；披露纯度、基准状态、压力和现场制氧边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 高炉-转炉路线消耗的交流电（`bf_electricity`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量外购和现场发电的消耗量，扣除单独报告的外供电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 高炉-转炉路线使用的工艺补充水（`bf_process_water`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量新水和外部供应的补充水；不计内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：
##### 废物流

本流类型组不规定原子交换。

##### 基本流

本流类型组不规定原子交换。

#### 输出

##### 产品流

###### 转入铸造的非合金钢钢水（`bf_molten_steel`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：非合金钢钢水
- 流属性/单位：Mass / kg
- 数量规则：计量从高炉-转炉路线转入已声明铸造过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：
##### 废物流

###### 送往处理的高炉-转炉炼钢渣（`bf_slag`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：高炉-转炉炼钢渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开炼钢过程的湿质量或干质量；披露水分以及后续是否作为共产品回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

###### 收集的高炉-转炉粉尘和污泥（`bf_dust`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：高炉-转炉粉尘和污泥
- 流属性/单位：Mass / kg
- 数量规则：计量烟气净化和水处理系统收集的干固体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：
##### 基本流

###### 向空气直接排放的化石源二氧化碳（`bf_co2_fossil`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：计量或通过碳平衡计算向空气直接排放的化石源 CO2；除非烟囱条件支持更具体流，否则保持空气/未指定分舱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bf_bof_balance`
- 来源：

### 过程：电弧炉炼钢（`eaf_route`）

#### 输入

##### 产品流

###### 电弧炉装入的预处理废钢铁（`eaf_steel_scrap`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：预处理废钢铁
- 流属性/单位：Mass / kg
- 数量规则：计量装入的外购预处理废钢铁质量；披露等级和残余元素控制
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉装入的直接还原铁（`eaf_direct_reduced_iron`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：直接还原铁
- 流属性/单位：Mass / kg
- 数量规则：使用该含铁炉料时计量其装入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉装入的生石灰熔剂（`eaf_burnt_lime`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：生石灰
- 流属性/单位：Mass / kg
- 数量规则：计量装入的生石灰干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉消耗的石墨电极（`eaf_graphite_electrode`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：石墨电极
- 流属性/单位：Mass / kg
- 数量规则：根据库存变化或采购与库存平衡计算消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉使用的工业氧气（`eaf_oxygen`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3（体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`）
- 数量规则：计量供应的标准状态氧气体积；披露纯度、基准状态、压力和现场制氧边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉路线消耗的交流电（`eaf_electricity`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量外购和现场发电的消耗量，扣除单独报告的外供电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉路线消耗的气态天然气（`eaf_natural_gas`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3（体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`）
- 数量规则：计量消费边界处的气态天然气；披露供应地区和标准基准状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 电弧炉路线使用的工艺补充水（`eaf_process_water`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量新水和外部供应的补充水；不计内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：
##### 废物流

本流类型组不规定原子交换。

##### 基本流

本流类型组不规定原子交换。

#### 输出

##### 产品流

###### 转入铸造的非合金钢钢水（`eaf_molten_steel`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：非合金钢钢水
- 流属性/单位：Mass / kg
- 数量规则：计量从电弧炉路线转入已声明铸造过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：
##### 废物流

###### 送往处理的电弧炉渣（`eaf_slag`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：电弧炉渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开电弧炉过程的湿质量或干质量；披露水分以及后续是否作为共产品回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

###### 收集的电弧炉除尘灰（`eaf_dust`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：电弧炉除尘灰
- 流属性/单位：Mass / kg
- 数量规则：计量电弧炉烟气处理系统收集的干固体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：
##### 基本流

###### 向空气直接排放的化石源二氧化碳（`eaf_co2_fossil`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：计量或通过碳平衡计算向空气直接排放的化石源 CO2；除非烟囱条件支持更具体流，否则保持空气/未指定分舱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eaf_balance`
- 来源：

### 过程：模铸或连铸及产品搬运（`casting`）

#### 输入

##### 产品流

###### 送入凝固工序的非合金钢钢水（`casting_molten_steel`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：非合金钢钢水
- 流属性/单位：Mass / kg
- 数量规则：计量从所选炼钢路线接收的质量；发送端和接收端使用同一内部连接流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 消耗的连铸结晶器保护渣（`casting_mould_powder`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：连铸结晶器保护渣
- 流属性/单位：Mass / kg
- 数量规则：采用连续铸造时，根据采购与库存平衡计算消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 铸造工序消耗的交流电（`casting_electricity`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：交流电
- 流属性/单位：Energy / MJ
- 数量规则：计量铸造和产品搬运消耗的外购及现场发电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 铸造工序使用的工艺补充水（`casting_process_water`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量新水和外部供应的补充水；不计内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：
##### 废物流

本流类型组不规定原子交换。

##### 基本流

本流类型组不规定原子交换。

#### 输出

##### 产品流

###### 声明的代表性非合金钢板坯（`reference_product`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：用于平轧的连铸钢板坯 `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg（质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`）
- 数量规则：计量合格板坯产出并归一化至 1,000 kg；其他涵盖形态必须使用形态特定产品流，不得改写本 UUID 的名称
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：
##### 废物流

###### 铸造和搬运产生的氧化铁皮（`casting_scale`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：钢铁铸造氧化铁皮
- 流属性/单位：Mass / kg
- 数量规则：计量离开过程并送往处理或回收的干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 铸造返回废钢（`casting_return_scrap`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：铸造返回废钢
- 流属性/单位：Mass / kg
- 数量规则：计量内部返回或转移至其他过程的质量；记录去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 铸造操作产生的废水（`casting_wastewater`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：钢铁铸造废水
- 流属性/单位：Volume / m3
- 数量规则：计量处理前或处理后离开铸造过程的废水体积，并披露处理状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：

###### 送往处理的铸造残渣（`casting_slag`）

当该项跨越本过程边界时，将其作为一个原子交换记录。

- 选定流：钢铁铸造残渣
- 流属性/单位：Mass / kg
- 数量规则：计量中间包、钢包或铸造残渣离开过程并送往处理的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 工厂门口声明参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_balance`
- 来源：
##### 基本流

本流类型组不规定原子交换。


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 独立计量的路线过程 | 当炼铁、炼钢、煤气利用、铸造和处理作业的投入产出可分别计量时，通过过程细分避免分配。 | `worldsteel-life-cycle-thinking` |
| `allocation_coproducts` | 外供炉渣、过程煤气、蒸汽、热或电力 | 识别每项产出为共产品或废物。研究项目允许时，对功能等效替代产品采用系统扩展；否则采用项目规定的分配方法，并披露因子和敏感性。 | `worldsteel-life-cycle-thinking` |
| `allocation_internal_returns` | 内部循环的钢、粉尘、氧化铁皮、炉渣、过程煤气、水和热 | 将负荷保留在前景系统内，并在两个过程边界一致记录内部转移；内部循环不得取得外部避免产品信用。 | `worldsteel-life-cycle-thinking` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_bof_balance` | `bf_bof_route` | 每项列出的原子投入和产出 | 校准仪表、地磅单、库存记录、实验室水分试验、烟气监测及废物转移记录 | quantity; unit; wet_or_dry; moisture; gas_reference_state; source_or_destination; meter_id; timestamp; batch_id | 按生产周期核对采购、库存变化、装料、转移、监测和发运记录 | 原始记录单位及归一化 kg、m3 或 MJ | 按炉次或班次记录，按月汇总 | 至少连续 12 个有代表性的月份 | 向声明产品供料的全部 BF-BOF 单元 | 分别汇总各原子交换，从外部总量中剔除内部转移，再按净合格产出归一化 | 校准证书、实验室结果、库存核对、仪表覆盖及签署的物料平衡审查 |
| `cp_eaf_balance` | `eaf_route` | 每项列出的原子投入和产出 | 校准仪表、地磅单、装料记录、库存记录、烟气监测及废物转移记录 | quantity; unit; scrap_grade; DRI_grade; gas_reference_state; source_or_destination; meter_id; timestamp; heat_id | 按炉次和生产周期核对采购、库存变化、装料、转移、监测和发运记录 | 原始记录单位及归一化 kg、m3 或 MJ | 按炉次或班次记录，按月汇总 | 至少连续 12 个有代表性的月份 | 向声明产品供料的全部 EAF 和钢包冶金单元 | 分别汇总各原子交换，从外部总量中剔除内部转移，再按净合格产出归一化 | 校准证书、装料单、库存核对、仪表覆盖及签署的物料平衡审查 |
| `cp_casting_balance` | `casting` | 每项列出的原子投入和产出 | 钢包和中间包称量、铸机生产报表、仪表、库存记录、质量放行记录及废物转移记录 | quantity; unit; product_form; grade; dimensions; temperature_state; source_or_destination; meter_id; timestamp; campaign_id | 按生产周期核对钢水接收、消耗品、合格产品、返回料、残渣和废水 | 原始记录单位及归一化 kg、m3 或 MJ | 按炉次或生产周期记录，按月汇总 | 至少连续 12 个有代表性的月份 | 向声明产品供料的每条铸造线 | 分别汇总各原子交换，并按净合格产品质量归一化 | 衡器校准、产品放行记录、收得率核对、仪表覆盖及签署的物料平衡审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化数量 = 生产周期交换数量 × 1,000 / 生产周期净合格产品质量 | 生产周期交换数量；生产周期净合格产品质量 | 每 1,000 kg 参考产品的交换量 | — |
| `calc_dry_mass` | 湿矿石、焦炭、粉尘、污泥、氧化铁皮或炉渣记录 | 干质量 = 湿质量 ×（1 - 实测水分质量分数） | 湿质量；实测水分质量分数 | 干质量（kg） | — |
| `calc_electricity_mj` | 电力记录 | 电力 MJ = 电表 kWh × 3.6 | 电表 kWh | 电力（MJ） | — |
| `calc_route_mix` | 多路线场址平均值 | 仅用各路线净合格产品质量份额组合分别完整的路线清单；同时保留路线特定结果 | 完整 BF-BOF 清单；完整 EAF 清单；路线产品质量 | 已披露的场址平均清单 | — |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个所代表产品族保留牌号或成分、形态、尺寸、温度状态、表面状态及放行规范。 | 实验室证书、产品放行记录和产品主数据 |
| `dq_route_identity` | 过程系统 | 证明所代表的 BF-BOF 或 EAF 路线，并识别全部供料单元和内部转移。 | 过程图、装料记录、仪表图和场址流程图 |
| `dq_measurement` | 实测交换 | 使用校准仪器或经核对的库存记录，并说明干湿基和气体基准状态。 | 校准证书、库存核对、水分试验和气体条件 |
| `dq_temporal` | 报告期 | 覆盖至少连续 12 个有代表性的月份；较短生产周期必须说明季节性、停机和产品组合限制。 | 带日期的生产和维护记录 |
| `dq_completeness` | 清单 | 核对产品、金属、碳、水和废物平衡；记录缺失仪表、估算值和排除的少量投入。 | 签署的核对记录和完整性登记表 |
| `dq_upstream` | 连接的供应方 | 对主要上游材料和能源匹配地理、技术、产品状态和时间代表性。 | 供应方元数据和代表性审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 拒绝缺少实际产品形态、非合金牌号或成分依据、路线、工厂地理范围或出厂状态的数据包；也拒绝将代表性板坯 UUID 改写为其他形态。 | `un-cpc-v3-structure-2025` |
| `validation_route` | 过程图 | 至少声明一条炼钢路线；参考产品为钢锭、方坯、大方坯或板坯时必须纳入铸造；声明路线未使用时禁止纳入 DRI、保护渣或其他条件行。 | `eu-jrc-iron-steel-bref-2013` |
| `validation_internal_links` | 钢水和内部返回料 | 归一化后，发送和接收数量必须相等且连接流身份相同；报告所有未匹配内部转移。 | — |
| `validation_mass_balance` | 金属投入与产出 | 核对金属炉料与合格钢、内部返回料、渣中金属、粉尘、氧化铁皮和其他实测损失；调查并披露每项不平衡，不得强制闭合。 | — |
| `validation_coproducts` | 炉渣及外供能源载体 | 必须声明产品或废物状态、去向、分配或替代方法、因子，以及重大时的敏感性。 | `worldsteel-life-cycle-thinking` |
| `validation_data_quality` | 完整数据包 | 必须提供可追溯原始记录、时间覆盖、场址覆盖、校准或核对证据，并明确未解决的供应方或 UUID 缺口。 | `worldsteel-life-cycle-thinking` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从经审查的钢厂前景数据包派生的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要非合金粗钢锭、初级形状、方坯、大方坯或板坯投入的产品系统，并核对路线和形态相容性 |
| allowed_use | 在地理、技术、牌号、产品形态、分配和再生含量约定相容时，用于归因型从摇篮到工厂门建模和路线特定供应链建模 |
| excluded_use | 未统一边界时直接比较钢铁路线或材料；替代合金钢或不锈钢；替代下游轧制或制造钢材；未披露地改写代表性板坯 UUID |
| required_metadata | 产品形态；牌号或成分；尺寸；温度和表面状态；炼钢和铸造路线；炉料份额；场址地理范围；技术；参考期；供应方地理范围；共产品方法；再生含量约定；数据质量证据 |
| required_quality_disclosure | 仪表和库存记录覆盖；干湿基换算；气体基准状态；内部转移核对；金属、碳、水和废物平衡；缺失数据；估算值；未解决 UUID；上游代表性 |
| update_trigger | 路线、炉型、炉料组合、产品形态、牌号族、能源供应、共产品处理、供应方数据、场址覆盖或参考期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41121 分类身份及其与合金钢的区别 |
| `eu-jrc-iron-steel-bref-2013` | `official_guidance` | 欧盟委员会联合研究中心，《钢铁生产最佳可行技术参考文件》，2013 年 1 月发布，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/iron-and-steel-production | BF-BOF 与 EAF 过程分解、钢包冶金、炉渣处理和连续铸造 |
| `worldsteel-life-cycle-thinking` | `official_guidance` | 世界钢铁协会，About life cycle thinking，https://worldsteel.org/wider-sustainability/life-cycle-thinking/about-lca-lci/ | 从摇篮到工厂门边界、上游清单覆盖、前景数据质量、循环利用及共产品系统扩展 |
| `chinaisa-steel-products-pcr-2022` | `standard` | 中国钢铁工业协会，《钢铁产品产品种类规则》中文文件，https://www.chinaisa.org.cn/gxportalFile/attach/2022/01/12/0000000000065419.pdf | 仅用于 UNCPC 41121 专业中文术语；未复制方法或数值 |
