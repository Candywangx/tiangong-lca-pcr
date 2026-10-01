---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.aluminium-ores-and-concentrates
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铝矿石与精矿

## 1. 范围与适用性

本 PCR 适用于声明矿山或加工出口的含铝矿石及物理选矿精矿，以铝土矿为代表材料。按实际纳入截至出口的开发、表土及覆盖层剥离、采出、搬运、破碎、粒度分级及可选洗矿脱水。区分一体化采矿与接收带负荷矿石的独立加工。并非所有铝土矿均经洗矿。其他含铝矿物须采用实际矿物组成、采出及选矿证据和独立流身份，不得继承铝土矿洗矿数量。排除拜耳消化或氧化铝精炼、铝冶炼、煅烧耐火产品、成品磨料及客户下游加工。 `iai-bauxite-mining-2026`, `ifc-mining-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.aluminium-ores-and-concentrates |
| classification_refs | CPC 3.0:14230 |
| covered_products | 含铝原矿及物理升级矿石或精矿；每个数据集固定一种矿物、品位及水分状态 |
| excluded_products | 氧化铝化学品及精炼；金属铝；煅烧耐火铝土矿；成品磨料；客户转化 |
| representative_product | 洗后铝土矿代表产品 |
| production_route | 矿山开发与复垦; 矿石采出与运输; 破碎及粒度分级; 洗矿及脱水; 堆存、装载及场址控制 |
| market_state | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应 1 kg 指定含铝矿石或物理精矿，不等效于 1 kg 铝或氧化铝 |
| How much | 1 kg |
| How well | 场址及年份；矿物组成；采矿方式；一体化或独立起点；原矿、破碎或洗矿状态；粒径；收到基水分；适用时干基总及可利用氧化铝和活性硅；出口；产率及拒收；水流域；废物去向；分配；开发及关闭基准；代表 UUID 仅用于洗后铝土矿，未洗矿或其他含铝矿物须独立身份 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 洗后铝矿石 `bd0c6203-d2b3-4e7f-8602-027aa93e87df` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址及年份；矿物组成；采矿方式；一体化或独立起点；原矿、破碎或洗矿状态；粒径；收到基水分；适用时干基总及可利用氧化铝和活性硅；出口；产率及拒收；水流域；废物去向；分配；开发及关闭基准；代表 UUID 仅用于洗后铝土矿，未洗矿或其他含铝矿物须独立身份 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为选定出口正的验收净收到基产品质量（kg），排除包装及拒收。记录每股物流水分 w，干固体质量 m_dry = m_wet × (1 − w)，化验品位注明基准。含氧化铝质量为干固体质量乘匹配干基 Al2O3 比例，而非参考分母。核对干矿石、产品、废石、洗矿细粒、损失、库存变化及转移水；区分循环洗水、新取水及实测退水，不假设通用回收率、品位或密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采矿从地质矿床中的矿石开始；独立物理加工从购入矿石开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 含铝原矿及物理升级矿石或精矿；每个数据集固定一种矿物、品位及水分状态 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址及年份；矿物组成；采矿方式；一体化或独立起点；原矿、破碎或洗矿状态；粒径；收到基水分；适用时干基总及可利用氧化铝和活性硅；出口；产率及拒收；水流域；废物去向；分配；开发及关闭基准；代表 UUID 仅用于洗后铝土矿，未洗矿或其他含铝矿物须独立身份 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明矿山或加工出口的含铝矿石及物理选矿精矿，以铝土矿为代表材料。按实际纳入截至出口的开发、表土及覆盖层剥离、采出、搬运、破碎、粒度分级及可选洗矿脱水。区分一体化采矿与接收带负荷矿石的独立加工。并非所有铝土矿均经洗矿。其他含铝矿物须采用实际矿物组成、采出及选矿证据和独立流身份，不得继承铝土矿洗矿数量。排除拜耳消化或氧化铝精炼、铝冶炼、煅烧耐火产品、成品磨料及客户下游加工。 | `iai-bauxite-mining-2026`, `ifc-mining-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿山开发与复垦 | conditional | 一体化矿山及可归属关闭 | 前景生产 | per 1 kg reference flow |
| extraction | 矿石采出与运输 | conditional | 一体化采矿 | 前景生产 | per 1 kg reference flow |
| preparation | 破碎及粒度分级 | conditional | 实际物理制备或供给矿石 | 前景生产 | per 1 kg reference flow |
| washing | 洗矿及脱水 | conditional | 仅实际湿法选矿路线 | 前景生产 | per 1 kg reference flow |
| dispatch | 堆存、装载及场址控制 | required | 所有声明场址 | 前景生产 | per 1 kg reference flow |

### 过程：矿山开发与复垦 (`development`)

#### 输入

##### 产品流

###### 矿山开发柴油 (`development_diesel`)

实际剥离及复垦设备，按披露寿命产量分配一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 送矿山管理的覆盖层物料 (`overburden`)

实际剥离覆盖层，表土储存及回用另列土地和库存记录。

- 选定流: 送矿山管理的覆盖层物料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_overburden 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_overburden`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### 过程：矿石采出与运输 (`extraction`)

#### 输入

##### 产品流

###### 采出及运输柴油 (`mining_diesel`)

实际设备、运输距离及载荷周期，排除供应方燃烧。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 硝酸铵燃油炸药 (`anfo_explosive`)

仅实际 ANFO 爆破，记录配方及装药；无爆破采出排除此行，每种其他炸药独立列卡。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo_explosive 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo_explosive`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### 基本流

###### 从矿床采出的铝土矿 (`bauxite_resource`)

仅原生铝土矿采出，测量矿石质量、矿物及水分并与覆盖层分离；其他含铝矿物须独立资源身份。

- 选定流: 从矿床采出的铝土矿
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_bauxite_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_bauxite_resource`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 矿山废石 (`waste_rock`)

送明确管理的实际贫化或拒收岩石，测量干固体及浸出潜势。

- 选定流: 矿山废石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_waste_rock 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste_rock`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### 过程：破碎及粒度分级 (`preparation`)

#### 输入

##### 产品流

###### 供给铝土矿 (`purchased_ore`)

仅独立铝土矿加工，供应方承担采出及约定运输，不再同时计入直接矿山资源。

- 选定流: 供给铝土矿
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_purchased_ore 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_ore`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 破碎及分级用电 (`crusher_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎机、筛及输送机，排除重复洗矿及交付表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_crusher_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_crusher_power`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 粒度分选拒收矿石 (`sizing_reject`)

仅离开生产路线的拒收部分，化验水分及铝硅含量。

- 选定流: 粒度分选拒收矿石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sizing_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sizing_reject`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### 过程：洗矿及脱水 (`washing`)

#### 输入

##### 产品流

###### 供给洗矿补充水 (`supplied_wash_water`)

仅购入新增补充量，内部循环洗水作为平衡记录。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_wash_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_wash_water`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 洗矿及脱水用电 (`wash_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅实际擦洗机、泵、筛及脱水单元。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_wash_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_power`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### 基本流

###### 河水取用 (`river_water`)

仅直接取水，分别测量流域及进水，不与购水重复。

- 选定流: 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_river_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_river_water`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 富黏土铝土矿洗矿细粒 (`clay_fines`)

仅实际送管理的湿尾矿，测量水、干固体及残余铝，避免重复内部回用。

- 选定流: 富黏土铝土矿洗矿细粒
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_clay_fines 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_clay_fines`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 转交处理的洗矿排污水 (`wash_effluent`)

仅实际转交处理，直接排放须独立物种、介质及退水量记录。

- 选定流: 转交处理的洗矿排污水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wash_effluent 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_effluent`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### 过程：堆存、装载及场址控制 (`dispatch`)

#### 输入

##### 产品流

###### 装载柴油 (`loading_diesel`)

仅实际堆存及装载设备，与采矿运输分离。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 场址控制用电 (`site_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际排水、抑尘及尾矿辅助设备，共用表计分配一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_site_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_site_power`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 洗后铝土矿代表产品 (`final_product`)

已确认代表 UUID 仅适用于匹配状态的洗后铝土矿；原矿、未洗矿及其他含铝矿物须采用相同声明质量参考下的独立实际产品身份。

- 选定流: 洗后铝矿石 `bd0c6203-d2b3-4e7f-8602-027aa93e87df`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### 基本流

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅前景柴油及实际其他化石燃烧，记录燃料或碳平衡和因子出处，不采用通用矿山强度。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### 矿物 PM10 排入室外空气 (`pm10_air`)

仅实测或核对的采出、破碎、搬运及道路逸散粉尘，其他粒径部分须独立身份及数量。

- 选定流: 矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `iai-bauxite-mining-2026`, `ifc-mining-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 按实测细分采出、破碎、洗矿及品位分选活动。开发及关闭按披露的可归属寿命适销产量分配，不将全部开发负荷逐年全额计入。实际联产品须保留未分配清单；分选品级不自动成为独立联产品，黏土细粒及废石也不因出售或回用自动成为无负荷产品。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_overburden | development | `overburden` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采集匹配测量、地磅或矿浆流量记录，代表水分及固体化验、矿物组成和管理去向。核对内部返回；开发记录已分配寿命基准，不逐年重复全额计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_bauxite_resource | extraction | `bauxite_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo_explosive | extraction | `anfo_explosive` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采集匹配测量、地磅或矿浆流量记录，代表水分及固体化验、矿物组成和管理去向。核对内部返回；开发记录已分配寿命基准，不逐年重复全额计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purchased_ore | preparation | `purchased_ore` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_crusher_power | preparation | `crusher_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sizing_reject | preparation | `sizing_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采集匹配测量、地磅或矿浆流量记录，代表水分及固体化验、矿物组成和管理去向。核对内部返回；开发记录已分配寿命基准，不逐年重复全额计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_wash_water | washing | `supplied_wash_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_river_water | washing | `river_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wash_power | washing | `wash_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_clay_fines | washing | `clay_fines` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采集匹配测量、地磅或矿浆流量记录，代表水分及固体化验、矿物组成和管理去向。核对内部返回；开发记录已分配寿命基准，不逐年重复全额计入。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wash_effluent | washing | `wash_effluent` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_site_power | dispatch | `site_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | dispatch | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | dispatch | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按校准净装载称量及库存转移核对，独立记录正的验收收到基 kg D。逐代表批次采样水分、矿物、适用时总或可利用氧化铝及活性硅。匹配所选原矿或洗矿状态，干基化验与湿质量参考分离。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 矿山或加工装载出口的一种实际矿石品位及实测收到基水分 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为选定出口正的验收净收到基产品质量（kg），排除包装及拒收。记录每股物流水分 w，干固体质量 m_dry = m_wet × (1 − w)，化验品位注明基准。含氧化铝质量为干固体质量乘匹配干基 Al2O3 比例，而非参考分母。核对干矿石、产品、废石、洗矿细粒、损失、库存变化及转移水；区分循环洗水、新取水及实测退水，不假设通用回收率、品位或密度。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为选定出口正的验收净收到基产品质量（kg），排除包装及拒收。记录每股物流水分 w，干固体质量 m_dry = m_wet × (1 − w)，化验品位注明基准。含氧化铝质量为干固体质量乘匹配干基 Al2O3 比例，而非参考分母。核对干矿石、产品、废石、洗矿细粒、损失、库存变化及转移水；区分循环洗水、新取水及实测退水，不假设通用回收率、品位或密度。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应 1 kg 指定含铝矿石或物理精矿，不等效于 1 kg 铝或氧化铝 |
| excluded_use | 氧化铝化学品及精炼；金属铝；煅烧耐火铝土矿；成品磨料；客户转化 |
| required_metadata | 场址及年份；矿物组成；采矿方式；一体化或独立起点；原矿、破碎或洗矿状态；粒径；收到基水分；适用时干基总及可利用氧化铝和活性硅；出口；产率及拒收；水流域；废物去向；分配；开发及关闭基准；代表 UUID 仅用于洗后铝土矿，未洗矿或其他含铝矿物须独立身份 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| iai-bauxite-mining-2026 | extension_guidance | International Aluminium Institute, The Aluminium Story, Mining: Process, web snapshot 1 October 2026, Mining: The process. https://alustory.international-aluminium.org/mining-refining/process-mining/ | 露天采出、表土及覆盖层分离、可选破碎洗矿及精炼厂交接，不采用通用品位或消耗量。 |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水、废物、排放、开发及关闭；不采用产品特定默认因子。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
