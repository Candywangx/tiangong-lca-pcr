---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.gypsum-anhydrite-limestone-flux-limestone-and-other-calcareous-stone-of-a-kind-used-for-cb4995bb
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 石膏；硬石膏；石灰石熔剂；制造石灰或水泥用石灰石及其他钙质石材

## 1. 范围与适用性

本 PCR 适用于声明原矿出口供应的未煅烧石膏硬石膏石灰石熔剂及制造石灰水泥用石灰石其他钙质石材。覆盖采石或实际地下采出及接收带负荷矿物的独立制备，包括保留声明原矿身份的原料或实际破碎洗选干燥磨制品级，不将类别缩减为石膏。二水石膏与天然硬石膏是不同矿物状态，干燥不得暗中变成灰泥煅烧。石灰石熔剂及钙质化学制造进料采用实际矿物氧化物杂质及反应质量证据，不设通用纯 CaCO3 组成。工业副产石膏若实际按本未煅烧类别供应，须确认身份品级及产生过程分配截断，独立记录实际接收脱水洗选干燥及供应负荷，天然石膏依据不能证明其纯度或上游零负荷。仅纳入至明确选定出口的可归属开发关闭搬运控制及交付。排除煅烧灰泥石灰熟料水泥制造及石膏成品。 `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.gypsum-anhydrite-limestone-flux-limestone-and-other-calcareous-stone-of-a-kind-used-for-cb4995bb |
| classification_refs | CPC 3.0:15200 |
| covered_products | 未煅烧石膏及硬石膏；石灰石熔剂；石灰石及其他钙质石灰水泥进料，固定实际物相来源品级原矿出口 |
| excluded_products | 煅烧石膏半水石膏灰泥；石膏板及配制制品；生石灰熟石灰；熟料水泥；规格石材制品或普通骨料参考；未认定为本产品的受污染废矿物 |
| representative_product | 交付声明工厂出口的天然石膏 |
| production_route | 矿物矿床开发及关闭; 硫酸盐碳酸盐矿物采出; 原矿制备及调质; 水残渣及粉尘控制; 纳入的矿物交付; 验收矿物供应 |
| market_state | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明状态供应1 kg合格未煅烧石膏硬石膏或钙质熔剂进料，不宣称硫酸盐碳酸盐矿物性能等效 |
| How much | 1 kg |
| How well | 场址年份；石膏硬石膏碳酸盐物相来源；采石地下或供给副产路线；实际加工及无煅烧；硫酸盐碳酸盐氧化物杂质化验；游离水分与结晶水；声明用途级配纯度反应性；矿山工厂收料出口及纳入运输；验收净产出库存；水流域退水；废物去向；供应分配截断；开发寿命产量；代表 UUID 仅用于中国采出并交付工厂天然石膏，其他矿物来源状态出口须独立身份 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 天然石膏 `a4be0b17-8763-439c-a818-30b9b4afeed3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；石膏硬石膏碳酸盐物相来源；采石地下或供给副产路线；实际加工及无煅烧；硫酸盐碳酸盐氧化物杂质化验；游离水分与结晶水；声明用途级配纯度反应性；矿山工厂收料出口及纳入运输；验收净产出库存；水流域退水；废物去向；供应分配截断；开发寿命产量；代表 UUID 仅用于中国采出并交付工厂天然石膏，其他矿物来源状态出口须独立身份 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为声明出口独立称量正验收净收到基原矿质量（kg），排除包装退货拒收。测量湿基游离水分 w，0 <= w <1；扣游离水矿物质量 = D*(1-w)，保留 D 为参考分母。石膏结晶水属于矿物物相，不是游离水；天然硬石膏不能假定石膏含水量。原验收矿物固体物相杂质拒收浆渣固体库存粉尘与取水循环蒸发排水分别核对。体积记录需实测堆积密度水分。任何实际脱水或脱碳触发产品状态出口审查，不自动等同原石膏石灰石。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原生采出从实际石膏硬石膏钙质矿床开始，独立调质从供给具名带上游负荷原矿副产品开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 未煅烧石膏及硬石膏；石灰石熔剂；石灰石及其他钙质石灰水泥进料，固定实际物相来源品级原矿出口 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；石膏硬石膏碳酸盐物相来源；采石地下或供给副产路线；实际加工及无煅烧；硫酸盐碳酸盐氧化物杂质化验；游离水分与结晶水；声明用途级配纯度反应性；矿山工厂收料出口及纳入运输；验收净产出库存；水流域退水；废物去向；供应分配截断；开发寿命产量；代表 UUID 仅用于中国采出并交付工厂天然石膏，其他矿物来源状态出口须独立身份 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明原矿出口供应的未煅烧石膏硬石膏石灰石熔剂及制造石灰水泥用石灰石其他钙质石材。覆盖采石或实际地下采出及接收带负荷矿物的独立制备，包括保留声明原矿身份的原料或实际破碎洗选干燥磨制品级，不将类别缩减为石膏。二水石膏与天然硬石膏是不同矿物状态，干燥不得暗中变成灰泥煅烧。石灰石熔剂及钙质化学制造进料采用实际矿物氧化物杂质及反应质量证据，不设通用纯 CaCO3 组成。工业副产石膏若实际按本未煅烧类别供应，须确认身份品级及产生过程分配截断，独立记录实际接收脱水洗选干燥及供应负荷，天然石膏依据不能证明其纯度或上游零负荷。仅纳入至明确选定出口的可归属开发关闭搬运控制及交付。排除煅烧灰泥石灰熟料水泥制造及石膏成品。 | `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿物矿床开发及关闭 | conditional | 一体化原生采矿及可归属复垦 | 前景生产 | per 1 kg reference flow |
| extraction | 硫酸盐碳酸盐矿物采出 | conditional | 实际采石或地下采矿 | 前景生产 | per 1 kg reference flow |
| preparation | 原矿制备及调质 | conditional | 实际破碎筛分洗选脱水干燥磨制，保留原料状态 | 前景生产 | per 1 kg reference flow |
| controls | 水残渣及粉尘控制 | conditional | 实际场址控制管理 | 前景生产 | per 1 kg reference flow |
| delivery | 纳入的矿物交付 | conditional | 仅明确位于声明出口内的交付 | 前景生产 | per 1 kg reference flow |
| dispatch | 验收矿物供应 | required | 声明装载或工厂收料出口 | 前景生产 | per 1 kg reference flow |

### 过程：矿物矿床开发及关闭 (`development`)

#### 输入

##### 产品流

###### 开发及复垦柴油 (`development_diesel`)

实际剥离修复设备，按实测寿命产量归属一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 矿物矿床覆盖层 (`overburden`)

实际剥离覆盖物，区分矿物拒收保留表土及生境特定土地转变。

- 选定流: 矿物矿床覆盖层
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_overburden 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_overburden`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：硫酸盐碳酸盐矿物采出 (`extraction`)

#### 输入

##### 产品流

###### 采矿及场内运输柴油 (`mining_diesel`)

实际采石地下机械移动，区分交付燃料及装载表计。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 采出机械用电 (`mining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际钻孔泵送地下通风搬运，记录实际路线，避免重复共用计量。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_power`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际 ANFO 爆破，无爆破石膏石灰石路线排除，其他实际炸药雷管逐项另列。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

##### 基本流

###### 矿床中的石膏矿物 (`gypsum_resource`)

仅实际原生石膏矿床质量，保留二水物矿物化验，不假定纯 CaSO4。

- 选定流: 矿床中的石膏矿物
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gypsum_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gypsum_resource`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿床中的硬石膏矿物 (`anhydrite_resource`)

仅实际天然硬石膏原生采出，不用排入环境水空气的通用硫酸盐替代。

- 选定流: 矿床中的硬石膏矿物
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anhydrite_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anhydrite_resource`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿床中的石灰石矿物 (`limestone_resource`)

仅实际原生石灰石矿床，其他钙质岩性须独立资源身份组成。

- 选定流: 矿床中的石灰石矿物
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_limestone_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_limestone_resource`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：原矿制备及调质 (`preparation`)

#### 输入

##### 产品流

###### 供给原料石膏 (`supplied_gypsum`)

仅独立天然石膏制备，带供应物相状态负荷，一体化内部进料抵消。

- 选定流: 供给原料石膏
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_gypsum 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_gypsum`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 供给原料硬石膏 (`supplied_anhydrite`)

仅实际供给硬石膏，带矿物杂质化验及上游负荷，不以石膏水合身份替代。

- 选定流: 供给原料硬石膏
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_anhydrite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_anhydrite`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 供给化学制造用原料石灰石 (`supplied_limestone`)

仅独立石灰石熔剂石灰水泥进料制备，带实际碳酸盐杂质品级及供应负荷。

- 选定流: 供给化学制造用原料石灰石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_limestone 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_limestone`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 供给未煅烧脱硫石膏联产品 (`supplied_fgd_gypsum`)

仅确认未煅烧脱硫石膏产品，带产生过程分配截断杂质水分状态证据及实际供应负荷。按废物分类进料须独立废流身份，其他工业石膏分别另列。

- 选定流: 供给未煅烧脱硫石膏联产品
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_fgd_gypsum 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_fgd_gypsum`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿物制备用电 (`preparation_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎筛磨分级过滤脱水泵，不设通用磨制干燥工序，不引入煅烧设备。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_preparation_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_preparation_power`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 购入矿物洗选补充水 (`wash_water`)

仅实际洗选新购入水，直接取水须独立资源流域行，排除内部循环。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wash_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_water`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 原矿干燥天然气 (`dryer_natural_gas`)

仅实际燃气去除游离水，确认保留矿物物相，其他燃料热源分别另列。若石膏被煅烧须改为不同产品出口。

- 选定流: 原矿干燥天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_dryer_natural_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dryer_natural_gas`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 拒收矿物岩块 (`mineral_reject`)

实际不合格固体岩块转交管理，独立指定石膏硬石膏碳酸盐品级，不假定处置抵扣。

- 选定流: 拒收矿物岩块
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mineral_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mineral_reject`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿物洗选污泥 (`wash_sludge`)

实际洗出湿细粉杂质流，实测固含矿物状态及管理去向，排除内部回收固体。

- 选定流: 矿物洗选污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_wash_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wash_sludge`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：水残渣及粉尘控制 (`controls`)

#### 输入

##### 产品流

###### 水及粉尘控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际收尘风机处理回用泵，共用表计归属一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 转交处置的矿物除尘灰 (`collector_dust`)

实际捕集灰转交管理，适销产品及内部返送具有不同平衡角色。

- 选定流: 转交处置的矿物除尘灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_collector_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_collector_dust`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 转交处理的矿物工艺废水 (`wastewater`)

实际排污转交处理，带体积硫酸盐碳酸盐杂质化验，环境排放须独立体积具名物种。

- 选定流: 转交处理的矿物工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

##### 基本流

###### 矿物 PM10 排入室外空气 (`pm10_air`)

控制后实际采石运输破碎磨制干燥颗粒释放，带矿物粒径基准。

- 选定流: 矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅实际前景燃料燃烧，带可追溯燃料碳因子，机械石灰石加工不是脱碳，石膏结晶水不是二氧化碳。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

###### 溶解硫酸盐排入受纳水体 (`sulfate_water`)

仅实际含硫酸盐排水，指定受纳介质，分别测量溶解硫酸盐净水体积背景，不假定全部石膏损失。

- 选定流: 溶解硫酸盐排入受纳水体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sulfate_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sulfate_water`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：纳入的矿物交付 (`delivery`)

#### 输入

##### 产品流

###### 纳入矿物交付的柴油 (`delivery_diesel`)

仅选定收料出口前明确前景建模交付的燃料，记录实际路线载荷空返。外包运输供应负荷独立关联，不重复此燃料。仅矿山装载出口排除下游交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_delivery_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_diesel`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：验收矿物供应 (`dispatch`)

#### 输入

##### 产品流

###### 验收矿物搬运柴油 (`loading_diesel`)

出口内实际装载收料搬运，区分采出运输交付燃料。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 交付声明工厂出口的天然石膏 (`final_product`)

已核验代表为中国采出并交付工厂的天然石膏，纳入至该收料出口约定交付；仅矿山石膏其他地域工业石膏硬石膏石灰石熔剂其他钙质进料须独立实际产品身份。

- 选定流: 天然石膏 `a4be0b17-8763-439c-a818-30b9b4afeed3`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epa-gypsum-1993`, `epa-crushed-stone-2004`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分矿物采出品级制备及可选交付。共同品级保留未分配清单，并按匹配质量水分期间论证物理因果或经济替代。工业副产石膏须记录产生过程分配截断及实际调质运输；避免处置及天然石膏替代均不自动产生抵扣。开发关闭按实测寿命验收产量计入一次。拒收物作其他用途出售不自动成为无负荷联产品，内部回用不重复新增供应负荷。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_overburden | development | `overburden` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_gypsum_resource | extraction | `gypsum_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anhydrite_resource | extraction | `anhydrite_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_limestone_resource | extraction | `limestone_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_power | extraction | `mining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_gypsum | preparation | `supplied_gypsum` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将净收到质量游离水实际结晶矿物物相杂质反应品级化验匹配供应批次，核对期初末库存内部转移。保留来源产生过程身份上游分配截断交付供应方，不假定原生替代或零负荷。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_anhydrite | preparation | `supplied_anhydrite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将净收到质量游离水实际结晶矿物物相杂质反应品级化验匹配供应批次，核对期初末库存内部转移。保留来源产生过程身份上游分配截断交付供应方，不假定原生替代或零负荷。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_limestone | preparation | `supplied_limestone` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将净收到质量游离水实际结晶矿物物相杂质反应品级化验匹配供应批次，核对期初末库存内部转移。保留来源产生过程身份上游分配截断交付供应方，不假定原生替代或零负荷。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_fgd_gypsum | preparation | `supplied_fgd_gypsum` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将净收到质量游离水实际结晶矿物物相杂质反应品级化验匹配供应批次，核对期初末库存内部转移。保留来源产生过程身份上游分配截断交付供应方，不假定原生替代或零负荷。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_preparation_power | preparation | `preparation_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wash_water | preparation | `wash_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_dryer_natural_gas | preparation | `dryer_natural_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配干燥周期计量实际燃料组成热值，记录进出游离水矿物物相检查及热设置；归属原料输出前区分游离水去除与化学结合水释放。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mineral_reject | preparation | `mineral_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wash_sludge | preparation | `wash_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_collector_dust | controls | `collector_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sulfate_water | controls | `sulfate_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将代表溶解硫酸盐浓度 mg/L 与同期间校准受纳水净排放 m3 配对：硫酸盐 kg = 浓度 mg/L * 体积 m3 /1000。分别保留背景参考水采样及不确定性，不自动以化学计量换算。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 在选定装载或工厂收料点按校准秤独立称量正净验收 kg D，核对包装退货库存。将矿物物相游离水化学品级化验匹配同批次。体积记录须实测堆积密度水分，物相变化须审查出口。代表工厂交付 UUID 不能以同一身份代表仅矿山出口。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种带实际水分化学物相的原料加工未煅烧矿物品级，位于声明矿山加工装载或明确纳入的工厂收料交付出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为声明出口独立称量正验收净收到基原矿质量（kg），排除包装退货拒收。测量湿基游离水分 w，0 <= w <1；扣游离水矿物质量 = D*(1-w)，保留 D 为参考分母。石膏结晶水属于矿物物相，不是游离水；天然硬石膏不能假定石膏含水量。原验收矿物固体物相杂质拒收浆渣固体库存粉尘与取水循环蒸发排水分别核对。体积记录需实测堆积密度水分。任何实际脱水或脱碳触发产品状态出口审查，不自动等同原石膏石灰石。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为声明出口独立称量正验收净收到基原矿质量（kg），排除包装退货拒收。测量湿基游离水分 w，0 <= w <1；扣游离水矿物质量 = D*(1-w)，保留 D 为参考分母。石膏结晶水属于矿物物相，不是游离水；天然硬石膏不能假定石膏含水量。原验收矿物固体物相杂质拒收浆渣固体库存粉尘与取水循环蒸发排水分别核对。体积记录需实测堆积密度水分。任何实际脱水或脱碳触发产品状态出口审查，不自动等同原石膏石灰石。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明状态供应1 kg合格未煅烧石膏硬石膏或钙质熔剂进料，不宣称硫酸盐碳酸盐矿物性能等效 |
| excluded_use | 煅烧石膏半水石膏灰泥；石膏板及配制制品；生石灰熟石灰；熟料水泥；规格石材制品或普通骨料参考；未认定为本产品的受污染废矿物 |
| required_metadata | 场址年份；石膏硬石膏碳酸盐物相来源；采石地下或供给副产路线；实际加工及无煅烧；硫酸盐碳酸盐氧化物杂质化验；游离水分与结晶水；声明用途级配纯度反应性；矿山工厂收料出口及纳入运输；验收净产出库存；水流域退水；废物去向；供应分配截断；开发寿命产量；代表 UUID 仅用于中国采出并交付工厂天然石膏，其他矿物来源状态出口须独立身份 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-gypsum-1993 | official_guidance | US EPA, AP-42 section 11.16 Gypsum Manufacturing, July 1993, reformatted January 1995, original PDF pp.1–2. https://www.epa.gov/sites/default/files/2020-10/documents/c11s16.pdf | 原石膏采石地下开采破碎筛分及煅烧前实际干燥磨制，仅提供定性过程出口依据，不采用历史数量默认值。 |
| epa-crushed-stone-2004 | official_guidance | US EPA, AP-42 section 11.19.2 Crushed Stone Processing and Pulverized Mineral Processing, August 2004, original PDF pp.1–5. https://www.epa.gov/sites/default/files/2020-10/documents/c11s1902.pdf | 实际石灰石钙质岩采出破碎筛分磨制及粉尘控制，不涉及石灰水泥煅烧或假设纯组成。 |
| wco-hs25-2022 | official_guidance | WCO, HS Nomenclature 2022 Chapter25, original PDF p.4, headings2520/2521 and downstream2522/2523. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | 石膏硬石膏石灰石熔剂及石灰水泥原料石材边界，区别于灰泥石灰水泥；仅确定身份，不提供过程数量。 |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水、废物、排放、开发及关闭；不采用产品特定默认因子。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
