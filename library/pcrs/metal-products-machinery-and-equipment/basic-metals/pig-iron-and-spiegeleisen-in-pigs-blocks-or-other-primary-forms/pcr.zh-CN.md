---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.pig-iron-and-spiegeleisen-in-pigs-blocks-or-other-primary-forms
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 锭状、块状或其他初级形状的生铁和镜铁

## 1. 范围与适用性

本 PCR 适用于生产钢铁厂出厂边界处，以锭、块或其他初级形状交付的固态生铁或镜铁前景数据包。覆盖高炉炼铁、铸锭或等效凝固、高炉煤气净化，以及报告设施内实施的矿渣和煤气洗涤水处理。

生铁凭其铁碳组成和不可实用锻轧状态与钢及其他铁合金区分；镜铁是本边界内的高锰产品。数据集应声明产品种类、化学成分或牌号、物理形状、高炉路线、生产场址与地理范围、报告期，以及煤气、矿渣和废水是否在场内处理。其他熔融还原路线须先建立并审查路线特定过程图，方可使用本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id（规范 PCR 标识） | pcr.metal-products-machinery-and-equipment.basic-metals.pig-iron-and-spiegeleisen-in-pigs-blocks-or-other-primary-forms |
| classification_refs（分类引用） | CPC 3.0：41111（精确分类语境；接受映射另行治理） |
| covered_products（覆盖产品） | 采用高炉路线生产、呈锭状、块状或其他初级形状的固态生铁和镜铁 |
| excluded_products（排除产品） | 直接还原铁和海绵铁；铁或钢的颗粒及粉末；镜铁以外的铁合金；粗钢或钢半成品；报告边界处的液态转运铁；下游铸件 |
| representative_product（代表产品） | 生产钢铁厂出厂边界处的固态生铁 |
| production_route（生产路线） | 高炉炉料准备、热风炼铁、出铁、煤气净化、铸锭或等效凝固；适用时包括场内矿渣与废水处理 |
| market_state（市场状态） | 生产钢铁厂出厂边界处、可供下游金属生产内部转运或销售的无包装固态初级形状 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What（功能） | 为下游金属生产提供已声明的初级形状固态生铁或镜铁 |
| How much（数量） | 1,000 kg 产品净质量 |
| How well（质量水平） | 产品身份、化学成分或牌号及物理形状符合已声明的销售或内部转运规范，并符合生铁或镜铁边界 |
| How long or cycle（持续时间或周期） | 一个完整生产批次或报告期产量，按钢铁厂出厂边界处 1,000 kg 归一化 |
| reference_flow_link（参考流链接） | `cast_primary_form_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 锭状、块状或其他初级形状的生铁或镜铁 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | product_kind（产品种类）: pig_iron 或 spiegeleisen; chemistry_or_grade（化学成分或牌号）; carbon_mass_fraction（碳质量分数）; manganese_mass_fraction（锰质量分数）; physical_form（物理形状）; blast_furnace_route（高炉路线）; production_site（生产场址）; geography（地理范围）; reporting_period（报告期）; product_temperature_state（产品温度状态）: solid; allocation_method（分配方法）; gas_treatment_route（煤气处理路线）; slag_destination（矿渣去向）; wastewater_treatment_route（废水处理路线） |

构建前景数据包时，`必需限定信息` 所列项目应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失任一项目即视为该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id（规则标识） | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品及质量归一化清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用钢铁厂出厂边界处固态产品净质量；不含包装、运输设备及未出厂内部返回物。 |
| `measurement_material_mass` | 固体和液体物料交换 | 质量 | kg | 记录收料、期初期末库存、内部返回及实测产出，以无重复方式计算净消耗或净产量。 |
| `measurement_gas_volume` | 天然气和高炉煤气 | 体积 | Nm3 | 声明标准体积的温压基准；归一化前将全部气体体积换算到同一已声明基准状态。 |
| `measurement_electricity` | 跨越过程边界的外购和场内交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 分过程记录以 kWh 计量的净电量，并按精确换算关系 3.6 MJ/kWh 转为天工流的基准属性；不得与燃料或回收煤气能量合并。 |
| `measurement_water` | 补充、冷却、粒化、洗涤及排放水 | 体积 | m3 | 边界取水与排水应同内部循环水分开记录；无专用表计时须披露估算。 |
| `measurement_emissions` | 直接空气和水基本流 | 质量 | kg | 采用经验证的连续监测、配合流量测量的代表性采样或有记录的物料衡算求质量，并保留浓度、流量、持续时间和运行状态原始记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition（声明的起始条件） | 外购或转入的含铁炉料、生产镜铁时使用的锰矿石、还原剂、熔剂、氧气、电力、水、耐火材料消耗品和燃料到达高炉前景边界 |
| starting_condition_role（起始条件角色） | 高炉炼铁接收投入品处的前景门；上游生产与入厂运输仍以链接的上游数据集表示 |
| product_classification_scope（产品分类范围） | 锭状、块状或其他初级形状的生铁和镜铁；CPC 3.0 代码 41111 仅作为分类语境 |
| recursive_input_rule（递归投入规则） | 同类别的生铁或镜铁投入应作为带有自身数据集的上游产品投入记录，不得在本前景数据包内递归展开 |
| upstream_dataset_requirement（上游数据集要求） | 每种外购物料、燃料、电力供应、水供应及外部废物处理服务均应采用在地理和技术上具有代表性的上游数据集 |
| disclosure（披露要求） | 声明产品种类与化学成分、路线、场址与地理范围、报告期、炉料组成、燃料喷吹、煤气净化路线、矿渣去向、水循环配置、分配方法，以及任何被排除的场内操作 |

| rule_id（规则标识） | 适用对象 | 规则 | source_ids（来源标识） |
| --- | --- | --- | --- |
| `boundary_foreground_chain` | 高炉产品系统 | 纳入高炉炼铁、归属于高炉的热风生产、出铁、铸锭或凝固，以及为形成钢铁厂出厂边界固态产品所必需的场内煤气、矿渣和水处理操作。 | `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | 外购投入与服务 | 将外购炉料、还原剂、熔剂、公用工程、消耗品及外部处理的生产和入厂运输表示为链接的上游数据集，不得作为无追踪截断项。 | `worldsteel-lci-methodology-2017` |
| `boundary_downstream_exclusion` | 报告门之后的活动 | 排除转炉或电弧炉炼钢、下游成品铸造、产品加工、使用和寿命终结。资本货物及非常规事故不在默认边界内；如对研究目标具有实质影响，应予披露。 | `worldsteel-lci-methodology-2017` |
| `boundary_recursive_input` | 同类别投入 | 在进入系统的生铁或镜铁产品数据集处停止递归展开，并披露其数量和数据集身份。 |  |

## 6. 过程清单结构

### 过程图

| process_id（过程标识） | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `blast_furnace_ironmaking` | 高炉炼铁与出铁场 | required | 覆盖路线始终纳入 | 前景还原、熔融、热风操作、出铁及铁水与矿渣分离 | 出铁铁水质量（kg） |
| `pig_casting_and_cooling` | 铸锭与冷却 | required | 达到已声明固态初级形状时始终纳入 | 前景凝固与产品整理 | 合格固态初级形状产品质量（kg） |
| `blast_furnace_gas_cleaning` | 高炉煤气净化与回收 | required | 始终纳入；仅在采用湿法净化时适用湿洗相关行 | 前景煤气净化与回收煤气生产 | 处理的原始炉顶煤气标准体积（Nm3） |
| `blast_furnace_slag_processing` | 高炉矿渣处理 | conditional | 熔融矿渣在场内粒化、风冷、调质或处置时纳入 | 前景共产品制备或废物处理 | 接收熔融矿渣质量（kg） |
| `gas_scrubbing_wastewater_treatment` | 煤气洗涤废水处理 | conditional | 湿法煤气净化产生并在场内处理废水时纳入 | 前景水处理与排放 | 处理废水体积（m3） |

### 过程：高炉炼铁与出铁场 (`blast_furnace_ironmaking`)

#### 输入

##### 产品流

###### 块铁矿石炉料 (`bf_lump_iron_ore`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 块铁矿石
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 铁矿烧结矿炉料 (`bf_iron_ore_sinter`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 铁矿烧结矿
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 铁矿球团矿炉料 (`bf_iron_ore_pellets`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 铁矿球团矿
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 镜铁用锰矿石 (`bf_manganese_ore`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 锰矿石
- 流属性/单位： 质量 / kg
- 数量规则： 镜铁生产批次的计量净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 合格固态镜铁产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-cn-2020-chapter-72`

###### 冶金焦炭还原剂 (`bf_metallurgical_coke`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 冶金焦炭
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 喷吹煤粉 (`bf_pulverized_coal`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 喷吹煤粉
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量或称量的喷吹质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 天然气喷吹或热风炉燃料 (`bf_natural_gas`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3
- 数量规则： 在已声明基准状态下计量的标准体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_gases`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 重质燃料油喷吹 (`bf_heavy_fuel_oil`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 重质燃料油
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的消耗质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 石灰石熔剂 (`bf_limestone`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 石灰石
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 白云石熔剂 (`bf_dolomite`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 白云石
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 橄榄石熔剂 (`bf_olivine`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 橄榄石
- 流属性/单位： 质量 / kg
- 数量规则： 报告期内计量的净入炉质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 富氧用氧气 (`bf_oxygen`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / Nm3
- 数量规则： 报告期内计量的氧气供应标准体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 高炉用电 (`bf_electricity`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 过程消耗的净计量电量，按精确换算关系 3.6 MJ/kWh 从 kWh 转为 MJ
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_electricity`
- 来源： `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

###### 高炉补充水 (`bf_makeup_water`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 数量规则： 边界计量取水量减去有记录的返还供应方水量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_water`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 铝碳质耐火材料衬里 (`bf_alumina_carbon_refractory`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 铝碳质耐火材料
- 流属性/单位： 质量 / kg
- 数量规则： 安装质量减去回收可再用存量后，按产品产量分摊
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 高炉出铁口炮泥 (`bf_taphole_clay`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉出铁口炮泥
- 流属性/单位： 质量 / kg
- 数量规则： 计量领用质量减去退回的未用材料质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 液态生铁或镜铁 (`bf_molten_pig_iron`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 液态生铁或镜铁
- 流属性/单位： 质量 / kg
- 数量规则： 转入铸锭的铁水称量质量或物料衡算质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_outputs`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 高炉原始炉顶煤气 (`bf_raw_top_gas`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉原始炉顶煤气
- 流属性/单位： 体积 / Nm3
- 数量规则： 转入煤气净化的计量标准体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_gases`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 熔融高炉矿渣 (`bf_molten_slag`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 熔融高炉矿渣
- 流属性/单位： 质量 / kg
- 数量规则： 矿渣称量质量或物料衡算产出质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_outputs`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 废物流

###### 出铁场收集粉尘 (`bf_cast_house_dust`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 出铁场收集粉尘
- 流属性/单位： 质量 / kg
- 数量规则： 从收集设备移出的净计量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_bf_wastes`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 基本流

###### 排放到空气的二氧化碳 (`bf_carbon_dioxide_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 经验证的监测排放质量或碳平衡排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排放到空气的一氧化碳 (`bf_carbon_monoxide_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排放到空气的一氧化碳
- 流属性/单位： 质量 / kg
- 数量规则： 采用经验证的浓度、流量和时间计算排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排放到空气的二氧化硫 (`bf_sulfur_dioxide_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排放到空气的二氧化硫
- 流属性/单位： 质量 / kg
- 数量规则： 采用经验证的浓度、流量和时间计算排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排放到空气的一氧化氮 (`bf_nitrogen_monoxide_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排放到空气的一氧化氮
- 流属性/单位： 质量 / kg
- 数量规则： 采用经验证的分物种浓度、流量和时间计算排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排放到空气的二氧化氮 (`bf_nitrogen_dioxide_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排放到空气的二氧化氮
- 流属性/单位： 质量 / kg
- 数量规则： 采用经验证的分物种浓度、流量和时间计算排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排放到空气的粒径不大于 10 µm 颗粒物 (`bf_pm10_air`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排放到空气的粒径不大于 10 µm 颗粒物
- 流属性/单位： 质量 / kg
- 数量规则： 采用经验证的浓度、流量和时间计算排放质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_bf_air_emissions`
- 来源： `eu-jrc-iron-steel-bref-2013`

### 过程：铸锭与冷却 (`pig_casting_and_cooling`)

#### 输入

##### 产品流

###### 铸锭用液态生铁或镜铁 (`cast_molten_pig_iron`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 液态生铁或镜铁
- 流属性/单位： 质量 / kg
- 数量规则： 铸锭接收铁水的称量质量或物料衡算质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cast_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 铸锭用电 (`cast_electricity`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 过程消耗的净计量电量，按精确换算关系 3.6 MJ/kWh 从 kWh 转为 MJ
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cast_electricity`
- 来源： `worldsteel-lci-methodology-2017`

###### 铸锭冷却水 (`cast_cooling_water`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 冷却水
- 流属性/单位： 体积 / m3
- 数量规则： 边界计量的补充水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cast_water`
- 来源： `worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格固态初级形状产品 (`cast_primary_form_product`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 锭状、块状或其他初级形状的生铁或镜铁
- 流属性/单位： 质量 / kg
- 数量规则： 在钢铁厂出厂门放行的合格产品称量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cast_product_output`
- 来源： `un-cpc-v3-structure-2025`; `eu-cn-2020-chapter-72`

##### 废物流

###### 不合格生铁或镜铁铸块 (`cast_rejects`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 不合格生铁或镜铁铸块
- 流属性/单位： 质量 / kg
- 数量规则： 离开合格产品流的不合格品称量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cast_materials`
- 来源： `worldsteel-lci-methodology-2017`

##### 基本流

### 过程：高炉煤气净化与回收 (`blast_furnace_gas_cleaning`)

#### 输入

##### 产品流

###### 待净化原始炉顶煤气 (`gas_cleaning_raw_top_gas`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉原始炉顶煤气
- 流属性/单位： 体积 / Nm3
- 数量规则： 进入煤气净化的计量标准体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_gases`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 煤气净化用电 (`gas_cleaning_electricity`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 煤气净化消耗的净计量电量，按精确换算关系 3.6 MJ/kWh 从 kWh 转为 MJ
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_electricity`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 煤气洗涤水 (`gas_cleaning_scrubbing_water`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 煤气洗涤水
- 流属性/单位： 体积 / m3
- 数量规则： 边界计量的湿式洗涤器补充水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_water`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净化高炉煤气 (`gas_cleaning_clean_gas`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 净化高炉煤气
- 流属性/单位： 体积 / Nm3
- 数量规则： 离开煤气净化系统的计量标准体积，并按去向分列
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_gases`
- 来源： `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 高炉煤气净化粗灰 (`gas_cleaning_coarse_dust`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉煤气净化粗灰
- 流属性/单位： 质量 / kg
- 数量规则： 从干式预除尘设备移出的净计量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_wastes`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 高炉煤气净化污泥 (`gas_cleaning_sludge`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉煤气净化污泥
- 流属性/单位： 质量 / kg
- 数量规则： 移出物的湿基或干基净质量，并声明固体基准
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_wastes`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 高炉煤气洗涤废水 (`gas_cleaning_wastewater`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉煤气洗涤废水
- 流属性/单位： 体积 / m3
- 数量规则： 离开煤气净化水循环的计量废水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_gas_cleaning_water`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 基本流

### 过程：高炉矿渣处理 (`blast_furnace_slag_processing`)

#### 输入

##### 产品流

###### 待处理熔融高炉矿渣 (`slag_processing_molten_slag`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 熔融高炉矿渣
- 流属性/单位： 质量 / kg
- 数量规则： 处理过程接收矿渣的称量质量或物料衡算质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_slag_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 矿渣粒化水 (`slag_processing_granulation_water`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 矿渣粒化水
- 流属性/单位： 体积 / m3
- 数量规则： 边界计量的粒化补充水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slag_water`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 矿渣处理用电 (`slag_processing_electricity`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 矿渣处理消耗的净计量电量，按精确换算关系 3.6 MJ/kWh 从 kWh 转为 MJ
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slag_electricity`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粒化高炉矿渣 (`slag_granulated_product`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 粒化高炉矿渣
- 流属性/单位： 质量 / kg
- 数量规则： 可销售产出的干基当量称量质量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_slag_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

###### 风冷高炉矿渣 (`slag_air_cooled_product`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 风冷高炉矿渣
- 流属性/单位： 质量 / kg
- 数量规则： 可销售产出的称量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slag_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 送处置的高炉矿渣 (`slag_disposal_waste`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 送处置的高炉矿渣
- 流属性/单位： 质量 / kg
- 数量规则： 送往处置的称量质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_slag_materials`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 基本流

### 过程：煤气洗涤废水处理 (`gas_scrubbing_wastewater_treatment`)

#### 输入

##### 产品流

###### 废水处理用电 (`wastewater_treatment_electricity`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 废水处理消耗的净计量电量，按精确换算关系 3.6 MJ/kWh 从 kWh 转为 MJ
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_electricity`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 废物流

###### 煤气洗涤废水进水 (`wastewater_scrubber_feed`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 高炉煤气洗涤废水
- 流属性/单位： 体积 / m3
- 数量规则： 进入处理系统的计量废水体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_feed`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 煤气洗涤废水处理污泥 (`wastewater_treatment_sludge`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 煤气洗涤废水处理污泥
- 流属性/单位： 质量 / kg
- 数量规则： 移出物的计量湿基或干基质量，并声明固体基准
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_sludge`
- 来源： `eu-jrc-iron-steel-bref-2013`

##### 基本流

###### 排入淡水的水 (`wastewater_water_freshwater`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的水
- 流属性/单位： 体积 / m3
- 数量规则： 经处理出水的计量排放体积
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排入淡水的悬浮物 (`wastewater_suspended_solids`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的悬浮物
- 流属性/单位： 质量 / kg
- 数量规则： 经验证的浓度乘以排放体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排入淡水的铁 (`wastewater_iron`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的铁
- 流属性/单位： 质量 / kg
- 数量规则： 经验证的总铁浓度乘以排放体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排入淡水的铅 (`wastewater_lead`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的铅
- 流属性/单位： 质量 / kg
- 数量规则： 经验证的总铅浓度乘以排放体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排入淡水的锌 (`wastewater_zinc`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的锌
- 流属性/单位： 质量 / kg
- 数量规则： 经验证的总锌浓度乘以排放体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

###### 排入淡水的易释放氰化物 (`wastewater_free_cyanide`)

按本卡所述过程边界记录该原子交换，并按指定采集协议取得或计算数量。

- 选定流： 排入淡水的易释放氰化物
- 流属性/单位： 质量 / kg
- 数量规则： 经验证的易释放氰化物浓度乘以排放体积
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1,000 kg 合格固态初级形状产品
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_discharge`
- 来源： `eu-jrc-iron-steel-bref-2013`

## 7. 分配与共产品处理

| rule_id（规则标识） | 适用对象 | 规则 | source_ids（来源标识） |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 分别计量的过程链 | 首先通过将炼铁、铸锭、煤气净化、矿渣处理和废水处理保持为分别计量的单元过程来避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_system_expansion` | 可销售的高炉煤气和矿渣 | 仅当被替代功能、质量、市场去向和替代比均有记录时，才对净外供煤气或矿渣采用系统扩展。抵扣应单独报告；影响实质性时应开展敏感性分析。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recovery` | 内部再利用的煤气、粉尘、污泥、矿渣和不合格金属 | 将内部回收建模为内部产品或废物流转，不得同时计为外部产出和新的外部投入。 | `worldsteel-lci-methodology-2017` |
| `allocation_energy_partition` | 电力、蒸汽、热水、压缩空气和鼓风服务 | 按计量的交付能量或另一种有记录的物理关系分摊共享能源服务；能源服务不得采用质量分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_fallback` | 禁止系统扩展的研究规则 | 采用与共产品功能一致且有记录的物理关系，并披露偏离、因子和敏感性。仅在不存在可辩护的物理关系，且价格、期间和地理范围均有报告时，才允许经济分配。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id（协议标识） | process_id（过程标识） | 流角色 | 记录类型 | raw_fields（原始字段） | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_materials` | `blast_furnace_ironmaking` | 炉料、还原剂、熔剂、氧气、耐火材料和出铁口消耗品 | 汽车衡、给料机、库存、发票和领料记录 | opening_stock; receipts; transfers_in; closing_stock; transfers_out; measured_feed; product_grade | 核对库存变动与经校准给料机或汽车衡汇总值 | kg | 每班或每批；按月汇总 | 与产品产出的报告期相同 | 数据集所含全部高炉 | 净消耗 = 期初库存 + 收料 + 转入 - 期末库存 - 转出；与计量给料量核对 | 校准记录、库存核对、材料证书和差异调查 |
| `cp_bf_gases` | `blast_furnace_ironmaking` | 气态天然气和原始炉顶煤气 | 气体流量计和组成分析 | normal_volume; temperature; pressure; moisture; lower_heating_value; destination | 在已声明基准状态下采用经校准流量计量 | Nm3 | 连续；按月汇总 | 与产品产出的报告期相同 | 所有纳入的高炉和热风炉 | 汇总有效时间区间体积；仅按有记录的相邻期间方法填补缺口 | 流量计校准、数据可用率报告和气体分析 |
| `cp_bf_electricity` | `blast_furnace_ironmaking` | 过程用电 | 结算电表或分表数据 | imported_kWh; exported_kWh; meter_id; allocation_key | 经校准计量，并对共享负荷采用有记录的分摊 | kWh | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入的高炉、出铁场及可归属热风设备 | 净输入减输出；共享负荷按交付服务分摊 | 电表校准及与全场电力平衡核对 |
| `cp_bf_water` | `blast_furnace_ironmaking` | 补充水 | 水表和水平衡记录 | withdrawal_m3; supplier_return_m3; recycled_m3; meter_id | 边界计量，循环水另行记录 | m3 | 连续或每日；按月汇总 | 与产品产出的报告期相同 | 纳入的高炉和出铁场水系统 | 边界取水减去返还供应方水量；排除内部循环 | 水表校准和闭合水平衡审查 |
| `cp_bf_outputs` | `blast_furnace_ironmaking` | 铁水和熔融矿渣 | 铁水包称重、液位或体积记录及生产日志 | tap_id; molten_iron_kg; slag_kg; transfer_destination | 可用时直接称量，否则采用经验证的容器体积与密度平衡 | kg | 每炉次 | 与产品产出的报告期相同 | 供应已声明产品的每次出铁 | 按产品生产批次和去向汇总有效炉次 | 衡器校准、炉次核对和物料衡算闭合 |
| `cp_bf_wastes` | `blast_furnace_ironmaking` | 出铁场粉尘 | 废物容器称重和去向记录 | container_id; gross_mass; tare_mass; moisture; destination | 对每次外运或每个容器称重；采用干基时予以报告 | kg | 每次移出 | 与产品产出的报告期相同 | 所有纳入的出铁场收集系统 | 按去向汇总净质量；内部回收另行记录 | 衡器记录、废物转移联单和含水率试验 |
| `cp_bf_air_emissions` | `blast_furnace_ironmaking` | 直接空气基本流 | 连续监测、烟道测试、气体流量、运行日志和碳平衡 | concentration; flow_rate; duration; oxygen_reference; operating_state; fuel_carbon | 经验证的监测，或配合流量测量的代表性采样；有依据时对 CO2 采用碳平衡 | kg | 连续或符合许可要求的监测期 | 代表报告期内正常和异常运行 | 所有实质性排气筒和已量化捕集点 | 按时间区间将浓度和流量换算为质量；汇总有效区间并披露缺口 | 校准、实验室 QA/QC、检出限、覆盖率和不确定性 |
| `cp_cast_materials` | `pig_casting_and_cooling` | 熔融投入和不合格铸块 | 铁水包称重和铸锭生产日志 | molten_input_kg; reject_kg; return_destination; product_kind | 核对熔融投入、合格产品、不合格品和返回物 | kg | 每次铸锭或每批 | 与产品产出的报告期相同 | 生产已声明产品的全部铸锭线 | 按产品生产批次汇总；不得重复计算返回的不合格品 | 衡器校准和铸锭物料衡算闭合 |
| `cp_cast_electricity` | `pig_casting_and_cooling` | 铸锭用电 | 分表数据 | imported_kWh; exported_kWh; meter_id | 经校准的分表计量 | kWh | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入的铸锭和产品搬运设备 | 净计量消耗 | 电表校准及与全场平衡核对 |
| `cp_cast_water` | `pig_casting_and_cooling` | 冷却补充水 | 水表 | makeup_m3; recycled_m3; blowdown_m3 | 边界计量，循环水另行记录 | m3 | 连续或每日；按月汇总 | 与产品产出的报告期相同 | 纳入的铸锭水循环 | 仅汇总补充水，并与排污和损失核对 | 水表校准和水平衡闭合 |
| `cp_cast_product_output` | `pig_casting_and_cooling` | 合格参考产品 | 经校准产品秤和质量放行记录 | product_mass_kg; product_kind; grade; chemistry; physical_form; release_status | 称量合格放行产品并关联实验室证书 | kg | 每批次 | 与全部清单行的报告期相同 | 数据集表示的全部合格产出 | 仅汇总合格批次；将清单归一化至 1,000 kg | 衡器校准、批次可追溯性和化学成分证书 |
| `cp_gas_cleaning_gases` | `blast_furnace_gas_cleaning` | 原始和净化高炉煤气 | 气体流量计、组成分析和去向日志 | raw_Nm3; clean_Nm3; temperature; pressure; lower_heating_value; destination | 在共同基准状态下采用经校准的进出口气体计量 | Nm3 | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入高炉的完整煤气净化系统 | 核对原始、净化、放散和燃烧体积 | 流量计校准、气体分析和体积平衡闭合 |
| `cp_gas_cleaning_electricity` | `blast_furnace_gas_cleaning` | 煤气净化用电 | 分表数据 | imported_kWh; exported_kWh; meter_id | 经校准的分表计量 | kWh | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入的净化系统 | 净计量消耗 | 电表校准及与全场平衡核对 |
| `cp_gas_cleaning_water` | `blast_furnace_gas_cleaning` | 洗涤补充水和废水 | 水表 | makeup_m3; recycled_m3; wastewater_m3; solids | 经校准的进出口计量 | m3 | 连续或每日；按月汇总 | 与产品产出的报告期相同 | 仅限湿法净化系统 | 核对补充、循环、蒸发、污泥含水和废水 | 水表校准和水平衡闭合 |
| `cp_gas_cleaning_wastes` | `blast_furnace_gas_cleaning` | 粗灰和污泥 | 容器称重、含水率试验和去向记录 | gross_mass; tare_mass; moisture; solids; destination | 对每次移出称重并声明湿基或干基 | kg | 每次移出 | 与产品产出的报告期相同 | 纳入的干式和湿式净化阶段 | 按物料和去向汇总净质量 | 衡器记录、含水率试验和废物转移联单 |
| `cp_slag_materials` | `blast_furnace_slag_processing` | 熔融矿渣、矿渣产品和处置矿渣 | 渣罐称重、皮带秤、产品发运和废物联单 | input_kg; granulated_kg; air_cooled_kg; disposal_kg; moisture; destination | 按路线核对处理投入和全部产出 | kg | 每批或每次发运 | 与产品产出的报告期相同 | 全部场内矿渣路线 | 按一致的含水基准和去向汇总 | 衡器校准、发运记录、规格试验和物料衡算闭合 |
| `cp_slag_water` | `blast_furnace_slag_processing` | 粒化补充水 | 水表 | makeup_m3; recycled_m3; blowdown_m3 | 边界计量，循环水另行记录 | m3 | 连续或每日；按月汇总 | 与产品产出的报告期相同 | 仅限湿法粒化路线 | 仅汇总补充水并核对循环 | 水表校准和水平衡闭合 |
| `cp_slag_electricity` | `blast_furnace_slag_processing` | 矿渣处理用电 | 分表数据 | imported_kWh; exported_kWh; meter_id | 经校准的分表计量 | kWh | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入的矿渣处理设备 | 净计量消耗 | 电表校准及与全场平衡核对 |
| `cp_wastewater_feed` | `gas_scrubbing_wastewater_treatment` | 洗涤废水进水 | 进水流量计和采样 | inflow_m3; suspended_solids; iron; lead; zinc; cyanide | 经校准流量计和代表性混合样 | m3 | 连续计量流量；按控制计划采样 | 与产品产出的报告期相同 | 纳入洗涤水的场内处理 | 汇总有效进水区间并保留浓度记录 | 流量计校准、样品流转记录、实验室 QA/QC 和检出限 |
| `cp_wastewater_electricity` | `gas_scrubbing_wastewater_treatment` | 处理用电 | 分表数据 | imported_kWh; exported_kWh; meter_id | 经校准的分表计量 | kWh | 连续；按月汇总 | 与产品产出的报告期相同 | 纳入的处理设备 | 净计量消耗 | 电表校准及与全场平衡核对 |
| `cp_wastewater_sludge` | `gas_scrubbing_wastewater_treatment` | 处理污泥 | 容器称重、固体含量试验和联单 | gross_mass; tare_mass; solids_fraction; destination | 对每次移出称重并声明湿基或干基 | kg | 每次移出 | 与产品产出的报告期相同 | 纳入的处理系统 | 按去向汇总净质量 | 衡器记录、固体含量试验和废物转移联单 |
| `cp_wastewater_discharge` | `gas_scrubbing_wastewater_treatment` | 水和污染物排放 | 出水流量计和实验室分析 | discharge_m3; suspended_solids; total_iron; total_lead; total_zinc; easily_released_cyanide | 经校准流量计配合合格的瞬时样或混合样 | m3 和 kg | 连续计量流量；按控制计划采样 | 代表报告期 | 每个纳入的排放口 | 水量取自流量计；污染物质量 = 浓度 × 对应排放体积 | 流量计校准、样品流转记录、实验室 QA/QC、检出限和数据覆盖率 |

### 计算规则

| rule_id（规则标识） | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids（来源标识） |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期行数量 / 合格固态产品质量 × 1,000 kg | 行数量；合格产品质量 | 每 1,000 kg 参考产品的数量 |  |
| `calc_stock_consumption` | 库存物料 | 净消耗 = 期初库存 + 收料 + 转入 - 期末库存 - 转出 | 库存和移动记录 | 物料净投入 |  |
| `calc_gas_reference_condition` | 气体体积 | 使用记录的绝对压力和温度将实测体积换算至已声明标准状态；统一采用一种含湿基准。 | 实测体积；压力；温度；含湿基准 | Nm3 气体 |  |
| `calc_emission_mass` | 受监测的空气和水排放 | 排放质量 = 对匹配的浓度 × 流量 × 持续时间区间求和，并记录单位换算和检出限处理 | 浓度；流量；区间持续时间 | 排放物质质量（kg） | `eu-jrc-iron-steel-bref-2013` |
| `calc_coproduct_balance` | 煤气和矿渣 | 核对产生量与内部使用、销售、外部转移、燃烧或处置；仅净外供共产品进入系统扩展。 | 产生；内部使用；销售；转移；燃烧；处置 | 按去向分列的共产品数量 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id（要求标识） | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 将每个合格批次关联至产品种类、化学成分或牌号、碳和锰质量分数、物理形状及放行状态。 | 实验室证书和批次放行记录 |
| `dq_temporal_alignment` | 所有前景行 | 使用与合格产品产出相同的报告期；说明停产、换炉衬、异常运行和数据缺口。 | 报告日历、运行日志和覆盖率报告 |
| `dq_technology_geography` | 数据集范围 | 声明高炉、热风炉、燃料喷吹、煤气净化、铸锭、矿渣和废水处理技术及生产地理范围。 | 过程说明和场址边界图 |
| `dq_meter_quality` | 计量的物料、能源、气体和水 | 使用经校准的仪表或衡器；记录校准状态并量化估算占比。 | 校准证书和估算日志 |
| `dq_mass_balance` | 炼铁、铸锭、煤气净化、矿渣和废水 | 在过程层面闭合质量或体积平衡，并调查实质性未解释残差。 | 签署的平衡工作表和差异调查 |
| `dq_emission_quality` | 直接排放 | 报告方法、检出限、采样代表性、数据覆盖率、氧和湿度基准及不确定性。 | 监测 QA/QC 和实验室报告 |
| `dq_upstream_representativeness` | 链接的上游数据集 | 优先采用能代表来源地理和技术的供应商，以及电力、燃料、矿石、焦炭、熔剂、水和处理数据集；披露通用替代数据。 | 供应商身份和数据集选择记录 |
| `dq_uuid_status` | 参考流和清单流 | 在混合检索及公共 state_code=100 直读确认语义身份、属性、单位组、状态、地理、技术和备注之前，天工 UUID 单元格保持为空。 | 审查工作流中的 UUID 审计记录 |

## 9. 校验规则

| rule_id（规则标识） | 适用对象 | 规则 | source_ids（来源标识） |
| --- | --- | --- | --- |
| `validation_reference_product` | 参考流 | 缺少产品种类、化学成分或牌号、碳和锰质量分数、物理形状、高炉路线、门点固态状态、场址、地理范围或报告期时，完整性校验失败。 | `un-cpc-v3-structure-2025`; `eu-cn-2020-chapter-72` |
| `validation_process_coverage` | 过程图 | 必须纳入炼铁、铸锭和煤气净化；已声明场址在边界内运行矿渣和废水处理时，也必须纳入这些过程。 | `eu-jrc-iron-steel-bref-2013`; `worldsteel-lci-methodology-2017` |
| `validation_mass_balance` | 过程清单 | 合格产品、铁水、矿渣、煤气、废物和内部返回物必须在已披露场址阈值内与实测投入核对；未解决残差必须修正或说明。 | `worldsteel-lci-methodology-2017` |
| `validation_utility_separation` | 能源和水 | 拒绝合并公用工程行。电力、每种燃料、每股水流和回收高炉煤气必须分别记录，并采用已声明计量基准。 | `worldsteel-lci-methodology-2017` |
| `validation_coproducts` | 煤气和矿渣处理 | 必须提供按去向分列的数量以及分配或系统扩展文件；禁止将内部再利用产出计作外部避免产品抵扣。 | `worldsteel-lci-methodology-2017` |
| `validation_emissions` | 直接空气和水排放 | 必须提供物质特定行、接收环境区室、监测或计算方法、报告期覆盖，以及可追溯的原始浓度和流量记录。 | `eu-jrc-iron-steel-bref-2013` |
| `validation_uuid_and_ranges` | 发布就绪性 | 未解决的精确流 UUID 和独立范围证据必须显式保留。它们不阻止候选方法学编写，但在作出依赖这些内容的发布声明之前必须审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role（数据集角色） | 针对一种已声明生铁或镜铁产品、路线、场址、地理范围和报告期的前景生产数据集 |
| downstream_use（下游用途） | 经审查和发布后用作 `secondary_dataset` 或 `background_dataset` |
| allowed_use（允许用途） | 在产品化学成分、路线、地理范围、分配和边界相容时，用于下游钢铁产品从摇篮到大门或大门到大门建模 |
| excluded_use（排除用途） | 不得直接表示 DRI、海绵铁、镜铁以外的铁合金、粗钢或半成品钢、下游铸件、无扩展方法的其他炼铁路线，亦不得用于缺少相容功能语境的比较声明 |
| required_metadata（必需元数据） | 产品种类；牌号和化学成分；碳和锰质量分数；物理形状；场址；地理范围；报告期；高炉和热风炉技术；炉料与喷吹路线；煤气、矿渣和水路线；分配方法；上游数据集身份；参考产品 UUID 状态 |
| required_quality_disclosure（必需质量披露） | 一手数据覆盖率；仪表校准；估算占比；物料衡算闭合；排放监测覆盖率和不确定性；共产品去向和替代假设；通用上游数据替代；未解决 UUID 和范围证据 |
| update_trigger（更新触发条件） | 产品化学成分或形状、高炉或喷吹路线、炉料组合、能源供应、煤气净化、铸锭、矿渣或水处理、共产品去向、分配方法、场址地理范围或报告期代表性发生实质变化 |

## 11. 数据源

| source_id（来源标识） | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-02） | CPC 41111 分类身份和英文名称 |
| `un-cpc-v11-chinese-2004` | official_guidance | 联合国统计司，《产品总分类（CPC）版本 1.1》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-02） | 专业中文类别术语 |
| `eu-cn-2020-chapter-72` | standard | 欧盟委员会，《欧盟委员会实施条例（EU）2020/1577》，《合并关税表》第 72 章注释，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32020R1577（检索日期：2026-09-02） | 生铁、镜铁、铁合金与钢的化学区分 |
| `eu-jrc-iron-steel-bref-2013` | official_guidance | 欧盟委员会联合研究中心，《钢铁生产最佳可行技术参考文件》，EUR 25521 EN，2013，doi:10.2791/97469，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf（检索日期：2026-09-02） | 高炉过程分解、投入、产出、煤气净化、矿渣处理、水处理和监测 |
| `worldsteel-lci-methodology-2017` | method_factor | 世界钢铁协会，《生命周期清单方法学报告》，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-02） | 声明单位、钢铁厂边界、数据采集、地理与技术披露以及共产品系统扩展 |
