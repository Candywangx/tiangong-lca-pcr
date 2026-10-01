---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.nickel-ores-and-concentrates
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 镍矿石及精矿

## 1. 范围与适用性

本 PCR 适用于声明矿山制备装载或明确纳入交付出口供应的镍矿物矿石及精矿。覆盖硫化矿、红土氧化含水硅酸盐矿及其他已独立确认镍类别的矿物矿石，包括含镍钴镍铜品级。依实际矿物组成及作业条件纳入露天地下采矿、独立供给矿石制备，以及实际破碎筛分洗选擦洗分选磁重选磨矿浮选精矿浓密过滤。红土矿或仅矿石输出不强制浮选；区分褐铁矿层与腐泥土层，保留实际黏土水分铁镁硅伴生金属证据。其他矿物矿及新路线须独立地质身份和实际过程交换采集，不假定硫化矿强度。仅输出仍有已确认矿石矿物精矿身份时纳入合格热矿物制备，实测物相变化硫水尾气平衡。熔炼冰镍镍铁镍生铁溶解浸出液化学沉淀混合氢氧化物硫化物硫酸镍氧化镍化学品及精镍金属属于不同产品，商业名称含精矿不能将沉淀化学品变为矿物精矿。排除将回收金属工业炉渣当作矿物矿石进料；回收旧矿山库存地质物料保留实际上游截断及复垦负荷。仅纳入至选定出口的可归属开发关闭搬运尾矿水尾气控制及约定运输。 `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.nickel-ores-and-concentrates |
| classification_refs | CPC 3.0:14220 |
| covered_products | 镍矿物矿石及精矿：硫化矿红土氧化含水硅酸盐及其他已确认镍类别矿物品级；实际合格常规制备进料，伴生金属独立化验 |
| excluded_products | 镍铜钴熔炼锍；镍铁镍生铁；金属回收废金属；工业炉渣；浸出液；化学沉淀 MHP/MSP、硫酸镍氧化镍化学品；纯运输服务或独立声明钴铜贵金属参考类别 |
| representative_product | 声明工厂出口的镍钴矿石 |
| production_route | 矿山开发及关闭; 镍矿物采出; 红土矿制备; 镍矿物选矿; 合格矿物热制备; 尾矿水尾气管理; 纳入矿物交付; 验收矿物产品搬运 |
| market_state | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明市场状态供应1 kg验收镍矿物矿石或精矿，含镍量为单独计算限定信息，不是1 kg镍金属 |
| How much | 1 kg |
| How well | 场址年份；地质矿物矿石身份；硫化红土褐铁矿层红土腐泥土层或其他确认路线；露天地下供给库存路线；矿石精矿；实际制备热物相；干基镍钴铜铁镁硅硫及相关有害元素化验；游离结合水；粒径；实际出口运输；验收质量库存；实测回收率；尾矿废物去向；水流域退水；共同产品供应分配及开发寿命产量；代表 UUID 仅用于相容工厂出口的镍钴矿产品质量流，其他矿石品级精矿须独立精确身份 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 镍钴矿石 `63f90633-2913-4600-a84e-3cc59f562a03` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；地质矿物矿石身份；硫化红土褐铁矿层红土腐泥土层或其他确认路线；露天地下供给库存路线；矿石精矿；实际制备热物相；干基镍钴铜铁镁硅硫及相关有害元素化验；游离结合水；粒径；实际出口运输；验收质量库存；实测回收率；尾矿废物去向；水流域退水；共同产品供应分配及开发寿命产量；代表 UUID 仅用于相容工厂出口的镍钴矿产品质量流，其他矿石品级精矿须独立精确身份 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消内部转移。测量湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。测量干基镍质量分数 g，0 <= g <=1；含镍 kg = D*(1-w)*g，保留 D 为清单分母。红土含水矿物结合水不是游离水，披露干燥化验方法热物相，脱羟不能暗中改干基。核对进料产品分离精矿尾矿拒收库存干矿物固体及逐项镍钴铜组分，区别于新水循环蒸发排放。回收率须库存调整后匹配进出干质量化验，精矿品位或精炼产率均不能证明采矿回收率。热制备须实测物相水硫及实际氧化尾气平衡，新增实际气体污染物逐项另列。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化采出从实际具名含镍地质矿床开始，独立制备从具名供应及上游负荷矿石开始；内部转移抵消 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 镍矿物矿石及精矿：硫化矿红土氧化含水硅酸盐及其他已确认镍类别矿物品级；实际合格常规制备进料，伴生金属独立化验 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；地质矿物矿石身份；硫化红土褐铁矿层红土腐泥土层或其他确认路线；露天地下供给库存路线；矿石精矿；实际制备热物相；干基镍钴铜铁镁硅硫及相关有害元素化验；游离结合水；粒径；实际出口运输；验收质量库存；实测回收率；尾矿废物去向；水流域退水；共同产品供应分配及开发寿命产量；代表 UUID 仅用于相容工厂出口的镍钴矿产品质量流，其他矿石品级精矿须独立精确身份 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于声明矿山制备装载或明确纳入交付出口供应的镍矿物矿石及精矿。覆盖硫化矿、红土氧化含水硅酸盐矿及其他已独立确认镍类别的矿物矿石，包括含镍钴镍铜品级。依实际矿物组成及作业条件纳入露天地下采矿、独立供给矿石制备，以及实际破碎筛分洗选擦洗分选磁重选磨矿浮选精矿浓密过滤。红土矿或仅矿石输出不强制浮选；区分褐铁矿层与腐泥土层，保留实际黏土水分铁镁硅伴生金属证据。其他矿物矿及新路线须独立地质身份和实际过程交换采集，不假定硫化矿强度。仅输出仍有已确认矿石矿物精矿身份时纳入合格热矿物制备，实测物相变化硫水尾气平衡。熔炼冰镍镍铁镍生铁溶解浸出液化学沉淀混合氢氧化物硫化物硫酸镍氧化镍化学品及精镍金属属于不同产品，商业名称含精矿不能将沉淀化学品变为矿物精矿。排除将回收金属工业炉渣当作矿物矿石进料；回收旧矿山库存地质物料保留实际上游截断及复垦负荷。仅纳入至选定出口的可归属开发关闭搬运尾矿水尾气控制及约定运输。 | `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 矿山开发及关闭 | conditional | 一体化采矿及可归属开发复垦 | 前景生产 | per 1 kg reference flow |
| extraction | 镍矿物采出 | conditional | 实际露天地下采矿，其他已确认来源须独立方法及新增交换 | 前景生产 | per 1 kg reference flow |
| laterite | 红土矿制备 | conditional | 实际氧化含水硅酸盐矿接收筛分擦洗分选，非强制浮选 | 前景生产 | per 1 kg reference flow |
| concentration | 镍矿物选矿 | conditional | 实际硫化或其他矿物特定选矿，包括实测磁重选浮选回路 | 前景生产 | per 1 kg reference flow |
| thermal | 合格矿物热制备 | conditional | 仅实际干燥或保留确认矿物进料身份制备，非下游金属生产 | 前景生产 | per 1 kg reference flow |
| controls | 尾矿水尾气管理 | conditional | 实际废物排水污染控制范围 | 前景生产 | per 1 kg reference flow |
| delivery | 纳入矿物交付 | conditional | 仅明确纳入收料出口运输 | 前景生产 | per 1 kg reference flow |
| dispatch | 验收矿物产品搬运 | required | 每个声明矿物输出出口 | 前景生产 | per 1 kg reference flow |

### 过程：矿山开发及关闭 (`development`)

#### 输入

##### 产品流

###### 镍矿开发柴油 (`development_diesel`)

实际开发复垦机械，按实测寿命产量计一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：镍矿物采出 (`extraction`)

#### 输入

##### 产品流

###### 镍矿采出场内运输柴油 (`mining_diesel`)

实际机械矿石废石运输，区分后续场外交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 镍矿采出用电 (`mining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际钻孔输送排水地下通风，按回路归属。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_power`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际 ANFO 爆破，无爆破红土挖掘排除；其他炸药雷管逐项另列。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 地质矿床中的含镍硫化矿石 (`sulfide_resource`)

实际地质硫化矿采出，实测矿物化验；矿石产品不是基本资源。

- 选定流: 地质矿床中的含镍硫化矿石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sulfide_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sulfide_resource`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 地质矿床中的含镍红土矿石 (`laterite_resource`)

实际红土地质采出，实测褐铁矿腐泥土层化验；其他矿物矿床须逐项独立身份。

- 选定流: 地质矿床中的含镍红土矿石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_laterite_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laterite_resource`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 镍矿废石 (`waste_rock`)

实际拒收岩转交管理，带产酸矿物化验；区别于放置表土及矿石库存。

- 选定流: 镍矿废石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_waste_rock 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste_rock`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：红土矿制备 (`laterite`)

#### 输入

##### 产品流

###### 供给含镍红土矿石 (`supplied_laterite`)

独立实际氧化含水硅酸盐供给矿石，带上游供应矿层水分化验，一体化内部进料抵消。

- 选定流: 供给含镍红土矿石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_laterite 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_laterite`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 红土制备用电 (`laterite_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际筛分擦洗分选输送脱水，不强加硫化矿磨浮。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_laterite_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laterite_power`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 购入红土洗选补充水 (`laterite_water`)

仅实际新购入洗水，使用直接水源时另列，回水非新供应。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_laterite_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laterite_water`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 拒收红土矿物粗粒部分 (`laterite_reject`)

仅实际不合格固体粒级，保留镍及管理去向，不将全部粗粒当无矿。

- 选定流: 拒收红土矿物粗粒部分
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_laterite_reject 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laterite_reject`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 红土洗选细粉污泥 (`laterite_sludge`)

仅实际转交细粉，带固含矿物金属，适销富镍细粉或内部回收独立分类。

- 选定流: 红土洗选细粉污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_laterite_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laterite_sludge`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：镍矿物选矿 (`concentration`)

#### 输入

##### 产品流

###### 供给镍钴矿石 (`supplied_ore`)

仅相容工厂供给矿石产品质量流，确认实际硫化或其他矿物路线，通用身份不能证明硫化化验；其他品级须独立身份。

- 选定流: 镍钴矿石 `63f90633-2913-4600-a84e-3cc59f562a03`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_ore 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_ore`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 镍矿物选矿用电 (`mill_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际破碎磁重选磨矿浮选脱水回路，表计计一次，排除未发生工序。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mill_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mill_power`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 钢磨矿球 (`steel_media`)

仅实际耗用钢球，磨棒衬板其他介质使用时分别另列。

- 选定流: 钢磨矿球
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_steel_media 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_media`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 购入选矿补充水 (`process_water`)

仅实际回路新购入水，内部回水排除外部供应。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_process_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_process_water`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 戊基黄原酸钾 (`pax`)

仅实际矿物回路确认捕收剂配方剂量；其他捕收剂逐项另列。

- 选定流: 戊基黄原酸钾
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pax 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pax`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 甲基异丁基甲醇 (`mibc`)

仅实际确认 MIBC 起泡剂，其他实际起泡剂逐项另列。

- 选定流: 甲基异丁基甲醇
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mibc 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mibc`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 浮选调 pH 生石灰 (`lime`)

仅实际氧化钙药剂，带有效含量；熟石灰须独立产品身份。

- 选定流: 浮选调 pH 生石灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_lime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lime`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 阴离子聚丙烯酰胺絮凝剂 (`flocculant`)

仅实际浓密尾矿指定聚合物，其他配方另列。

- 选定流: 阴离子聚丙烯酰胺絮凝剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_flocculant 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_flocculant`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 适销铜矿物精矿 (`copper_concentrate`)

仅实际分离称量铜精矿，镍混合精矿内嵌铜不是独立实物输出。

- 选定流: 适销铜矿物精矿
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_copper_concentrate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_copper_concentrate`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### 废物流

###### 镍矿物选矿尾矿浆 (`tailings`)

实际最终未回收尾矿，带固含矿物金属硫及管理去向，排除内部中矿。

- 选定流: 镍矿物选矿尾矿浆
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_tailings 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tailings`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：合格矿物热制备 (`thermal`)

#### 输入

##### 产品流

###### 矿物进料热制备天然气 (`thermal_natural_gas`)

仅实际燃气干燥或确认矿物进料制备，区分游离结合水物相变化及硫氧化；其他燃料热源另列。

- 选定流: 矿物进料热制备天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_thermal_natural_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_natural_gas`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 矿物进料热制备用电 (`thermal_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅矿物出口内实际干燥制备设备，非熔炉高压酸浸精炼用电。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_thermal_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_power`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：尾矿水尾气管理 (`controls`)

#### 输入

##### 产品流

###### 尾矿水尾气控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际尾矿回水排水处理尾气控制，共用加工热表计归属一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 水处理生石灰 (`water_treatment_lime`)

仅实际排水中和药剂，区别于浮选调 pH 投入。

- 选定流: 水处理生石灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_water_treatment_lime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_treatment_lime`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 从河流取用的淡水 (`surface_water`)

实际直接河流水源流域季节，场址用途分别归属；地下水源须独立行。

- 选定流: 从河流取用的淡水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_surface_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_water`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 废物流

###### 镍矿水处理污泥 (`treatment_sludge`)

实际污泥带干固体金属转交管理。

- 选定流: 镍矿水处理污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_treatment_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_treatment_sludge`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 转交处理的镍矿工艺废水 (`wastewater`)

实际外部处理转移，直接受纳水体积物种另列。

- 选定流: 转交处理的镍矿工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_wastewater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 处置的镍矿物除尘灰 (`collector_dust`)

仅实际捕集灰处置，区别于内部返送适销矿物回收。

- 选定流: 处置的镍矿物除尘灰
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_collector_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_collector_dust`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

##### 基本流

###### 镍矿物 PM10 排入室外空气 (`pm10_air`)

控制后实际矿山运输选厂释放，实测粒径金属基准，其他污染物种分别另列。

- 选定流: 镍矿物 PM10 排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pm10_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm10_air`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 化石二氧化碳排入室外空气 (`co2_air`)

实际前景燃烧，带可追溯燃料碳证据，不重复上游燃料燃烧。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 二氧化硫排入室外空气 (`so2_air`)

仅控制后实际燃料硫或合格热矿物制备，不假定矿石硫排放或纳入熔炼。

- 选定流: 二氧化硫排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_so2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_so2_air`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

###### 溶解镍排入受纳水体 (`nickel_water`)

仅实际受纳介质释放，匹配溶解镍净体积背景；管理尾矿镍不自动是水排放。

- 选定流: 溶解镍排入受纳水体
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_nickel_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_nickel_water`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：纳入矿物交付 (`delivery`)

#### 输入

##### 产品流

###### 纳入镍矿物交付柴油 (`delivery_diesel`)

实际前景交付至明确纳入收料出口，带路线载荷返程，供应运输另列不重复燃料。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_delivery_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_diesel`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

### 过程：验收矿物产品搬运 (`dispatch`)

#### 输入

##### 产品流

###### 镍矿物出口搬运柴油 (`loading_diesel`)

实际装载收料搬运，区别于矿山运输交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_loading_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_loading_diesel`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

#### 输出

##### 产品流

###### 声明工厂出口的镍钴矿石 (`final_product`)

代表为已核验镍钴矿石产品质量流、工厂生产混合，仅用于相容实际矿石状态及选定工厂装载收料边界。镍矿物精矿无钴其他品级及热进料须独立实际身份；已核验8.6%镍精矿不是通用品位默认值。

- 选定流: 镍钴矿石 `63f90633-2913-4600-a84e-3cc59f562a03`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `bgs-nickel-2008`, `wco-hs26-2022`, `ifc-mining-2007`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分实际采区矿石制备及独立分离精矿。保留镍铜钴贵金属共同未分配清单，以实际计价化验加工费价格敏感性论证物理因果或匹配经济分配。一份混合精矿中的嵌入金属不是多份实物输出；仅实际回收称量时计独立铜钴矿物精矿。供给旧库存矿石记录上游分配或有据截断及实际复垦运输负荷，不假定零负荷。开发关闭按实测寿命验收产量计入一次，不自动取得避免金属处置或内部回用抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sulfide_resource | extraction | `sulfide_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_laterite_resource | extraction | `laterite_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_power | extraction | `mining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_laterite | laterite | `supplied_laterite` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_laterite_power | laterite | `laterite_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_laterite_water | laterite | `laterite_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_laterite_reject | laterite | `laterite_reject` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_laterite_sludge | laterite | `laterite_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_ore | concentration | `supplied_ore` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mill_power | concentration | `mill_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_steel_media | concentration | `steel_media` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_process_water | concentration | `process_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_surface_water | controls | `surface_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pax | concentration | `pax` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录一种实际供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存内部回用。产品质量与有效化学品质量不同，实测换算，不合并药剂或假定剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mibc | concentration | `mibc` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录一种实际供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存内部回用。产品质量与有效化学品质量不同，实测换算，不合并药剂或假定剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_lime | concentration | `lime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录一种实际供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存内部回用。产品质量与有效化学品质量不同，实测换算，不合并药剂或假定剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_flocculant | concentration | `flocculant` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录一种实际供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存内部回用。产品质量与有效化学品质量不同，实测换算，不合并药剂或假定剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_copper_concentrate | concentration | `copper_concentrate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tailings | concentration | `tailings` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对同批次期间匹配校准净湿质量游离水固含及干基镍钴铜矿物硫相关铁镁硅化验。核对库存转移，独立指定资源供给产品废物联产品供应去向。保留红土矿层干燥化验方法，不设品位回收率默认值。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_natural_gas | thermal | `thermal_natural_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_water_treatment_lime | controls | `water_treatment_lime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 记录一种实际供应配方有效含量耗用质量稀释水及匹配回路期间，核对库存内部回用。产品质量与有效化学品质量不同，实测换算，不合并药剂或假定剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_treatment_sludge | controls | `treatment_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_wastewater | controls | `wastewater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_collector_dust | controls | `collector_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pm10_air | controls | `pm10_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_so2_air | controls | `so2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_nickel_water | controls | `nickel_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 将同期间溶解镍浓度 mg/L 与校准受纳水净排放 m3 配对：镍 kg = 浓度 mg/L * 体积 m3 /1000。分别保留总量溶解量背景参考水介质不确定性。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_diesel | delivery | `delivery_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 在选定出口按校准秤独立称量正验收净矿物 kg D，核对包装退货拒收库存。将批次游离水 w 及干基镍分数 g 匹配矿物矿层钴铜化验。干质量 = D*(1-w)；含镍 = D*(1-w)*g，保持 D 为分母。声明干燥化验方法，不将红土结合水暗中当游离水。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种在声明装载收料出口验收的镍矿物矿石或精矿品级，带实测游离水矿物物相及干基镍伴生元素化验 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消内部转移。测量湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。测量干基镍质量分数 g，0 <= g <=1；含镍 kg = D*(1-w)*g，保留 D 为清单分母。红土含水矿物结合水不是游离水，披露干燥化验方法热物相，脱羟不能暗中改干基。核对进料产品分离精矿尾矿拒收库存干矿物固体及逐项镍钴铜组分，区别于新水循环蒸发排放。回收率须库存调整后匹配进出干质量化验，精矿品位或精炼产率均不能证明采矿回收率。热制备须实测物相水硫及实际氧化尾气平衡，新增实际气体污染物逐项另列。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为声明出口独立称量正验收净收到基矿物产品 kg，排除包装拒收及抵消内部转移。测量湿基游离水分 w，0 <= w <1；干矿物质量 = D*(1-w)。测量干基镍质量分数 g，0 <= g <=1；含镍 kg = D*(1-w)*g，保留 D 为清单分母。红土含水矿物结合水不是游离水，披露干燥化验方法热物相，脱羟不能暗中改干基。核对进料产品分离精矿尾矿拒收库存干矿物固体及逐项镍钴铜组分，区别于新水循环蒸发排放。回收率须库存调整后匹配进出干质量化验，精矿品位或精炼产率均不能证明采矿回收率。热制备须实测物相水硫及实际氧化尾气平衡，新增实际气体污染物逐项另列。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明市场状态供应1 kg验收镍矿物矿石或精矿，含镍量为单独计算限定信息，不是1 kg镍金属 |
| excluded_use | 镍铜钴熔炼锍；镍铁镍生铁；金属回收废金属；工业炉渣；浸出液；化学沉淀 MHP/MSP、硫酸镍氧化镍化学品；纯运输服务或独立声明钴铜贵金属参考类别 |
| required_metadata | 场址年份；地质矿物矿石身份；硫化红土褐铁矿层红土腐泥土层或其他确认路线；露天地下供给库存路线；矿石精矿；实际制备热物相；干基镍钴铜铁镁硅硫及相关有害元素化验；游离结合水；粒径；实际出口运输；验收质量库存；实测回收率；尾矿废物去向；水流域退水；共同产品供应分配及开发寿命产量；代表 UUID 仅用于相容工厂出口的镍钴矿产品质量流，其他矿石品级精矿须独立精确身份 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| bgs-nickel-2008 | official_guidance | British Geological Survey, Bide, Hetherington and Gunn, Nickel Mineral Commodity Profile, September2008, original PDF pp.6–9. https://nora.nerc.ac.uk/id/eprint/8725/1/0910_Nickel_Profile.pdf | 定性露天地下硫化矿及红土矿开采、实际硫化矿物分离、精矿脱水及与下游熔炼浸出精炼的区别，不采用历史品位回收率矿山尺寸浸出条件或市场默认值。 |
| wco-hs26-2022 | official_guidance | WCO HS Nomenclature2022 Chapter26, original PDF pp.1–2, mineralogical Note2 and heading2604. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0526_2022e.pdf?la=en | 矿物矿石精矿身份及与冰镍残余物的区别，仅用于产品边界，不建立新 HS 映射或提供过程数量。 |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | 矿山水、废物、排放、开发及关闭；不采用产品特定默认因子。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
