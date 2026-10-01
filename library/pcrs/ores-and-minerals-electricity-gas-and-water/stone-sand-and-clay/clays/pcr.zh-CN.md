---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.clays
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 黏土

## 1. 范围与适用性

本 PCR 适用于 CPC 通过 HS 2507/2508 定义的高岭土及其他高岭质黏土、膨润土、球黏土耐火普通黏土及漂白土，以及红柱石蓝晶石矽线石莫来石熟料土和迪纳斯土等耐火原料矿物。覆盖一种声明原矿、干磨、湿法精制、矿浆、干燥或实际煅烧原料出口，适用时包括实际耐火原料热转化。排除膨胀黏土及下游成型烧成陶瓷耐火制品。区分一体化矿床采出与接收带负荷矿物的独立加工。各黏土品种不共享通用组成洗选产率膨胀可塑性需水量化学处理或煅烧路线。记录实际采挖水力地下开采、破碎磨制、打浆分级、磁选浮选化学精制、脱水干燥活化热转化分级装载，不要求所有工序发生。耐火矿物分选及供给氧化铝二氧化硅路线采用实际进料及物相化验；HS 身份不规定合成配方。纳入截至出口可归属开发关闭及水粉尘废物控制。 `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.clays |
| classification_refs | CPC 3.0:15400 |
| covered_products | 黏土原料及 HS 2507/2508 耐火原料矿物，未煅烧或实际煅烧，固定矿物身份品级水分矿浆固含及出口 |
| excluded_products | 膨胀黏土；成型烧成砖瓦陶瓷耐火制品；已安装耐火系统；含油废漂白土；以铝土矿氧化铝为参考产品；下游配制钻井泥浆涂料水泥及采出服务 |
| representative_product | 声明原料出口的高岭土 |
| production_route | 矿床开发及关闭; 黏土及耐火矿物采出; 机械制备及分级; 湿法精制及活化; 干燥及耐火原料热转化; 水残渣及排放管理; 验收矿物产品装载 |
| market_state | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明市场状态供应 1 kg 指定黏土耐火原料，不宣称膨胀黏土涂布高岭土及耐火矿物性能等效 |
| How much | 1 kg |
| How well | 场址年份；黏土品种或耐火矿物物相身份及来源；实际采出选矿活化热处理路线；未煅烧煅烧矿浆状态；粒径分布矿物氧化物杂质化验；水分固含；相关白度可塑性膨胀吸附耐火品级证据；碳酸盐有机碳结构水及灼减基准；实际装载出口；水流域退水；残渣去向；分配寿命产量 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明原料出口的高岭土 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；黏土品种或耐火矿物物相身份及来源；实际采出选矿活化热处理路线；未煅烧煅烧矿浆状态；粒径分布矿物氧化物杂质化验；水分固含；相关白度可塑性膨胀吸附耐火品级证据；碳酸盐有机碳结构水及灼减基准；实际装载出口；水流域退水；残渣去向；分配寿命产量 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为一种所选产品状态独立称量的正验收净收到基装载质量（kg），排除包装拒收及其他适销品级。矿浆 D 包括声明载水，另记录固体比例。湿基游离水分 w 满足 0 <= w < 1；扣游离水固体 = D*(1-w)。矿物结构水及煅烧损失不能作为游离水分。干基矿浆换算需匹配实测固含密度及实际状态。矿物氧化物固体杂质拒收添加物库存及热转化与新水循环蒸发排水分别核对。实际脱羟物相转化可改变质量，不设通用产率灼减因子，不能仅因铝硅酸盐煅烧自动产生 CO2。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采矿从实际矿物矿床开始，独立加工从供给黏土耐火矿物及实际独立来源合成进料开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 黏土原料及 HS 2507/2508 耐火原料矿物，未煅烧或实际煅烧，固定矿物身份品级水分矿浆固含及出口 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；黏土品种或耐火矿物物相身份及来源；实际采出选矿活化热处理路线；未煅烧煅烧矿浆状态；粒径分布矿物氧化物杂质化验；水分固含；相关白度可塑性膨胀吸附耐火品级证据；碳酸盐有机碳结构水及灼减基准；实际装载出口；水流域退水；残渣去向；分配寿命产量 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于 CPC 通过 HS 2507/2508 定义的高岭土及其他高岭质黏土、膨润土、球黏土耐火普通黏土及漂白土，以及红柱石蓝晶石矽线石莫来石熟料土和迪纳斯土等耐火原料矿物。覆盖一种声明原矿、干磨、湿法精制、矿浆、干燥或实际煅烧原料出口，适用时包括实际耐火原料热转化。排除膨胀黏土及下游成型烧成陶瓷耐火制品。区分一体化矿床采出与接收带负荷矿物的独立加工。各黏土品种不共享通用组成洗选产率膨胀可塑性需水量化学处理或煅烧路线。记录实际采挖水力地下开采、破碎磨制、打浆分级、磁选浮选化学精制、脱水干燥活化热转化分级装载，不要求所有工序发生。耐火矿物分选及供给氧化铝二氧化硅路线采用实际进料及物相化验；HS 身份不规定合成配方。纳入截至出口可归属开发关闭及水粉尘废物控制。 | `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿床开发及关闭 | conditional | 实际一体化采矿及可归属复垦 | 前景生产 | per 1 kg reference flow |
| extraction | 黏土及耐火矿物采出 | conditional | 实际原生矿床采出 | 前景生产 | per 1 kg reference flow |
| mechanical | 机械制备及分级 | conditional | 实际破碎磨制打浆分选 | 前景生产 | per 1 kg reference flow |
| refining | 湿法精制及活化 | conditional | 实际品级特定湿法化学路线 | 前景生产 | per 1 kg reference flow |
| thermal | 干燥及耐火原料热转化 | conditional | 实际干燥煅烧转化，原矿浆不默认发生 | 前景生产 | per 1 kg reference flow |
| controls | 水残渣及排放管理 | conditional | 实际控制处理范围 | 前景生产 | per 1 kg reference flow |
| dispatch | 验收矿物产品装载 | required | 所有声明产品出口 | 前景生产 | per 1 kg reference flow |

### 过程：矿床开发及关闭 (`development`)

#### 输入

##### 产品流

###### 开发及复垦柴油 (`development_diesel`)

实际剥离修复，按实测寿命产量归属一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 矿物矿床覆盖层 (`overburden`)

实际剥离覆盖层，表土回用及生境特定土地交换另列。

- 选定流: 矿物矿床覆盖层
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_overburden 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_overburden`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：黏土及耐火矿物采出 (`extraction`)

#### 输入

##### 产品流

###### 矿物采出柴油 (`mining_diesel`)

实际采挖水力地下运输机械，不设通用露天路线。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 采出机械用电 (`mining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际水力泵或地下通风搬运，区分表计及路线适用。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_power`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

##### 基本流

###### 矿床中的高岭土资源 (`kaolin_resource`)

仅已确认原生高岭土资源，其他黏土及各耐火矿物须独立特定资源身份，不在供给进料下重复资源。

- 选定流: 高岭土 `fe0acd60-3ddc-11dd-aab8-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_kaolin_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_kaolin_resource`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：机械制备及分级 (`mechanical`)

#### 输入

##### 产品流

###### 供给原料高岭土 (`supplied_kaolin`)

仅独立高岭土加工，其他矿物进料须具名独立投入卡及供应负荷。

- 选定流: 供给原料高岭土
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_kaolin 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_kaolin`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 供给原料蓝晶石精矿 (`supplied_kyanite`)

仅供给蓝晶石的实际耐火矿物制备转化，红柱石矽线石熟料土迪纳斯土进料属于独立实际身份。

- 选定流: 供给原料蓝晶石精矿
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_kyanite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_kyanite`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿物制备用电 (`mechanical_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎磨机分级打浆或矿物分选设备，记录品级特定工序及表计分配。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mechanical_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mechanical_power`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 购入工艺补充水 (`process_water`)

实际打浆洗选矿浆新购入水，直接取水须特定资源流域行，循环抵消。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_process_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_process_water`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：湿法精制及活化 (`refining`)

#### 输入

##### 产品流

###### 湿法精制用电 (`refining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际水力分级磁选浮选过滤脱水，不重复机械表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_refining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_refining_power`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 硫酸药剂 (`sulfuric_acid`)

仅实际硫酸精制，记录交付浓度有效质量及残余去向，不作为通用黏土药剂。

- 选定流: 硫酸药剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sulfuric_acid 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sulfuric_acid`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 连二亚硫酸钠漂白药剂 (`sodium_dithionite`)

仅实际确认连二亚硫酸钠路线，来源 hydrosulfite 用词本身不能确定盐身份剂量。

- 选定流: 连二亚硫酸钠漂白药剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_dithionite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_dithionite`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 碳酸钠活化药剂 (`sodium_carbonate`)

仅实际膨润土纯碱活化，量化有效比例保留药剂及水，其他添加物分别另列。

- 选定流: 碳酸钠活化药剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_carbonate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_carbonate`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 矿物精制粗粒杂质固体 (`refining_reject`)

一种实测组成湿干基准的实际矿物杂质残渣流，化学不同废流须独立卡。

- 选定流: 矿物精制粗粒杂质固体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_refining_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_refining_reject`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：干燥及耐火原料热转化 (`thermal`)

#### 输入

##### 产品流

###### 干燥天然气 (`drying_gas`)

仅实际燃气干燥，带组成热值基准，湿矿浆供给不假定干燥，其他燃料热源分别另列。

- 选定流: 干燥天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_drying_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_drying_gas`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 煅烧天然气 (`calciner_gas`)

仅实际燃气原料煅烧转化，区分干燥，不设标准温度燃气剂量。

- 选定流: 煅烧天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_calciner_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_calciner_gas`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 热转化用电 (`thermal_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际炉或热处理辅助设备，包括仅实际电力制莫来石路线，披露炉范围负荷。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_thermal_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_power`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 氧化铝合成进料 (`alumina_feed`)

仅实际耐火原料莫来石合成供给氧化铝，矿物转化路线不虚构添加氧化铝。

- 选定流: 氧化铝合成进料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_alumina_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_alumina_feed`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 二氧化硅合成进料 (`silica_feed`)

仅实际耐火原料莫来石合成供给二氧化硅，实测物相组成及供应负荷，不设固定化学计量配方。

- 选定流: 二氧化硅合成进料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_silica_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_silica_feed`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 拒收煅烧矿物固体 (`thermal_reject`)

实际不合格煅烧原料转交管理，内部再磨抵消，成品耐火制品废物位于出口外。

- 选定流: 拒收煅烧矿物固体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_thermal_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_reject`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：水残渣及排放管理 (`controls`)

#### 输入

##### 产品流

###### 水及粉尘控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际收尘废水处理回用泵，共用表计分配一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 转交处置的矿物除尘灰 (`filter_dust`)

实际捕集灰转交管理，排除内部回用，合格矿物品级出售另列。

- 选定流: 转交处置的矿物除尘灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_filter_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_filter_dust`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 转交处理的矿物工艺废水 (`wastewater`)

实际转交处理，带固体 pH 化学化验及体积，直接环境排放须特定受纳介质物种。

- 选定流: 转交处理的矿物工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

##### 基本流

###### 矿物 PM10 排入室外空气 (`pm10_air`)

控制后实际采出磨制干燥煅烧颗粒释放，带实际矿物组成粒径，不因湿法设零。

- 选定流: 矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

仅实际前景化石燃料燃烧；若实际存在矿物碳酸盐分解及原料有机碳，须独立来源特定 CO2 记录。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

###### 矿物脱羟水蒸气排入空气 (`structural_water_air`)

仅实际原料矿物热转化结构水释放，区分游离水干燥实测物相变化及其他质量损失。

- 选定流: 矿物脱羟水蒸气排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_structural_water_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_structural_water_air`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

### 过程：验收矿物产品装载 (`dispatch`)

#### 输入

##### 产品流

###### 矿物产品装载柴油 (`loading_diesel`)

实际净验收产品装载，排除独立计量采矿运输及出口外下游交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 声明原料出口的高岭土 (`final_product`)

代表高岭土产品身份尚未解决。其他黏土及耐火原料矿物须实际特定产品参考及匹配状态，资源高岭土不能替代产品 UUID。

- 选定流: 声明原料出口的高岭土
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `epa-clay-1995`, `wco-hs25-2022`, `ifc-mining-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分采矿品级精制矿浆出货及热转化。共同分选品级及矿物副产品保留未分配清单；论证物理因果或经济替代，质量水分期间敏感性保持一致。购入耐火矿物或合成进料须自带上游负荷，不自动设无负荷残渣。开发关闭按披露寿命验收产量计一次。内部粗粒矿浆粉尘回用不重复新增进料或自动避免产品抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_overburden | development | `overburden` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_kaolin_resource | extraction | `kaolin_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_power | extraction | `mining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_kaolin | mechanical | `supplied_kaolin` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_kyanite | mechanical | `supplied_kyanite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mechanical_power | mechanical | `mechanical_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_process_water | mechanical | `process_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_refining_power | refining | `refining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sulfuric_acid | refining | `sulfuric_acid` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对交付净化学品进料质量浓度有效或矿物物相化验库存变化及实际保留去除比例，关联供应负荷，各添加物独立记录，不假定配方剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_dithionite | refining | `sodium_dithionite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对交付净化学品进料质量浓度有效或矿物物相化验库存变化及实际保留去除比例，关联供应负荷，各添加物独立记录，不假定配方剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_carbonate | refining | `sodium_carbonate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对交付净化学品进料质量浓度有效或矿物物相化验库存变化及实际保留去除比例，关联供应负荷，各添加物独立记录，不假定配方剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_refining_reject | refining | `refining_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_drying_gas | thermal | `drying_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_calciner_gas | thermal | `calciner_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_alumina_feed | thermal | `alumina_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对交付净化学品进料质量浓度有效或矿物物相化验库存变化及实际保留去除比例，关联供应负荷，各添加物独立记录，不假定配方剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_silica_feed | thermal | `silica_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 核对交付净化学品进料质量浓度有效或矿物物相化验库存变化及实际保留去除比例，关联供应负荷，各添加物独立记录，不假定配方剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_reject | thermal | `thermal_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_filter_dust | controls | `filter_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_structural_water_air | controls | `structural_water_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用匹配进料产品物相游离水及热质量损失化验，结合实际处理量捕集冷凝水及可得实测气体水分。区分结构水游离水蒸发及碳其他损失，记录不确定性并核对转化后验收 D。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按校准秤或流量称重独立记录验收净装载 kg D，核对库存退货包装。记录产品物种物相及湿基游离水或矿浆固含；矿浆体积按匹配实测密度换算。煅烧品级需转化后质量物相及独立结构水碳灼减化验，不用原高岭土质量替代。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 装载点一种实际黏土或耐火原料矿物品级，声明原矿精制矿浆干燥煅烧状态及实测水分固含 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为一种所选产品状态独立称量的正验收净收到基装载质量（kg），排除包装拒收及其他适销品级。矿浆 D 包括声明载水，另记录固体比例。湿基游离水分 w 满足 0 <= w < 1；扣游离水固体 = D*(1-w)。矿物结构水及煅烧损失不能作为游离水分。干基矿浆换算需匹配实测固含密度及实际状态。矿物氧化物固体杂质拒收添加物库存及热转化与新水循环蒸发排水分别核对。实际脱羟物相转化可改变质量，不设通用产率灼减因子，不能仅因铝硅酸盐煅烧自动产生 CO2。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为一种所选产品状态独立称量的正验收净收到基装载质量（kg），排除包装拒收及其他适销品级。矿浆 D 包括声明载水，另记录固体比例。湿基游离水分 w 满足 0 <= w < 1；扣游离水固体 = D*(1-w)。矿物结构水及煅烧损失不能作为游离水分。干基矿浆换算需匹配实测固含密度及实际状态。矿物氧化物固体杂质拒收添加物库存及热转化与新水循环蒸发排水分别核对。实际脱羟物相转化可改变质量，不设通用产率灼减因子，不能仅因铝硅酸盐煅烧自动产生 CO2。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明市场状态供应 1 kg 指定黏土耐火原料，不宣称膨胀黏土涂布高岭土及耐火矿物性能等效 |
| excluded_use | 膨胀黏土；成型烧成砖瓦陶瓷耐火制品；已安装耐火系统；含油废漂白土；以铝土矿氧化铝为参考产品；下游配制钻井泥浆涂料水泥及采出服务 |
| required_metadata | 场址年份；黏土品种或耐火矿物物相身份及来源；实际采出选矿活化热处理路线；未煅烧煅烧矿浆状态；粒径分布矿物氧化物杂质化验；水分固含；相关白度可塑性膨胀吸附耐火品级证据；碳酸盐有机碳结构水及灼减基准；实际装载出口；水流域退水；残渣去向；分配寿命产量 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| epa-clay-1995 | official_guidance | US EPA, AP-42 section 11.25 Clay Processing, January 1995, original PDF pp.1–3 and 8. https://www.epa.gov/sites/default/files/2020-10/documents/c11s25.pdf | 黏土品种特定采出、干湿机械加工、化学精制及热调质；仅采用定性路线，不采用历史产率水分温度及排放因子。 |
| wco-hs25-2022 | official_guidance | WCO, HS Nomenclature 2022, Chapter 25, original PDF p.2, headings 2507/2508. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | CPC 所定义黏土税目产品边界，包括耐火原料矿物及煅烧状态；不提供工艺配方或数量。 |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水、废物、排放、开发及关闭；不采用产品特定默认因子。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
