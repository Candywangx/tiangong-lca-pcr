---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-buffalo
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水牛乳制黄油及其他脂肪和油

## 1. 范围与适用性

本 PCR 仅适用于完全源自水牛乳或水牛乳制品的黄油及其他脂肪和油。范围包括 CPC 3.0 子类 22242 下的水牛乳黄油、乳脂涂抹物、分提或未分提的乳脂、无水乳脂、黄油油、酥油及其他产品形态。应根据所声明的产品形态和生产路线确定适用的条件性过程。

牛乳来源产品（CPC 22241）、牛和水牛以外其他动物乳来源产品（CPC 22249）、混合动物种乳产品，以及以非乳成分替代乳成分的产品均不在范围内。Codex CXS 279-1971、CXS 280-1973 和 CXS 206-1999 只用于支持产品身份和路线区分；其中的组成、质量、污染物、添加剂和标签限值不得作为默认生命周期清单数量。

前景数据包覆盖从可追溯水牛乳、水牛稀奶油或合格水牛乳中间品进入场址起，经脂肪分离或浓缩、成型、后处理、包装、储存、场内公用工程、清洗以及废物或废水处理，直至所声明工厂大门的实际路线。水牛养殖和原乳生产作为上游关联数据集，除非由同一主体直接控制并明确扩展进入前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-buffalo |
| classification_refs | CPC 3.0: 22242, exact |
| covered_products | 完全源自水牛乳或水牛乳制品的黄油及其他脂肪和油，包括黄油、乳脂涂抹物、乳脂、分提乳脂、无水乳脂、黄油油和酥油 |
| excluded_products | CPC 22241 牛乳产品；CPC 22249 其他动物乳产品；混合动物种乳产品；植物脂肪或其他非乳替代品；真实身份并非水牛乳脂产品的产品 |
| representative_product | 工厂大门处已包装的水牛乳黄油或所声明水牛乳脂产品 |
| production_route | 接收并核验动物种和批次；适用时进行稀奶油分离或标准化；按实际路线进行搅乳、脂肪浓缩、重组、分提、脱水或酥油后处理；包装；储存；公用工程、清洗和废水支持 |
| market_state | 工厂大门处的包装或散装产品；声明物理状态、盐或发酵剂状态、乳脂产品名称、包装形式和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 水牛乳黄油或另一种完全源自水牛乳的已声明脂肪或油产品 |
| How much | 1 kg 净产品 |
| How well | 声明产品族、水牛专属来源、物理状态、配方或含盐状态、包装状态和适用产品身份声明 |
| How long or cycle | 一个生产批次直至所声明工厂大门；不表示使用阶段持续时间 |
| reference_flow_link | 1 kg 净产品由下列 Tiangong 产品流和质量参照表示 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 从水牛奶中提取的黄油和其他油脂 `554cfc76-a4ac-4cda-9e06-d60256918b58` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 水牛专属乳来源；产品名称；生产路线；批次或生产活动；净质量或干质量基准；用于换算时的水分或固形物基准；适用时的加盐、发酵、重组、分提、脱水或酥油状态；包装形式；储存条件；工厂大门；地理范围；参考期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 kg 净产品质量报告参考产品，并声明该质量是否排除包装。 |
| `mass_basis_conversion` | 材料投入、中间品、共产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实测湿基、干基、脂肪、水分或固形物基准；只能使用批次特定实测组成数据换算，并保留原始测量和换算记录。 |
| `energy_carrier_units` | 电力、燃料、蒸汽、热水和制冷 | 为载能体选定的能量或质量/体积属性 | 声明来源单位和归一化单位 | 保留仪表、发票和燃料单位；记录所有换算因子，并将结果归一化到 1 kg 净参考产品。 |
| `water_stream_units` | 工艺、清洗、冷却、冷凝和废水流 | 为该水流选定的体积或质量属性 | m3 或 kg | 按用途和处理需要区分水流；质量与体积换算时声明密度假设。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `buffalo_origin_boundary` | 产品和乳品投入 | 仅纳入有文件证明为水牛乳或水牛乳制品的批次；从本 PCR 数据集中排除牛乳、其他动物乳和混合动物种乳投入。 | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `foreground_gate_boundary` | 前景场址 | 纳入接收、动物种与批次核验、储存、适用的分离或标准化、脂肪浓缩或搅乳、适用的后处理或脱水、包装、储存、清洗、公用工程以及场内废物或废水作业，直至所声明工厂大门。 | `eu-fdm-bat-2019-2031` |
| `upstream_link_boundary` | 外购投入 | 对边界外的水牛乳或水牛乳中间品、载能体、工艺水、配料、清洗剂、制冷剂、包装、外包处理或运输关联可追溯上游数据集。 | `eu-pef-2021-2279` |
| `direct_emission_boundary` | 前景排放 | 纳入实测或计算的直接大气和水体排放、制冷剂损失、外送废水、残余物、拒收物和包装废物；不得把 Codex 质量准则或 BAT 性能水平转换为清单值。 | `eu-fdm-bat-2019-2031` |
| `route_condition_boundary` | 产品变体 | 只应用所声明产品实际采用的单元过程：黄油路线的搅乳、CXS 280 产品族近乎完全去除水和非脂固形物的路线，以及实际发生的重组、分提、加盐、发酵或酥油后处理。 | `codex-cxs-279-1971`; `codex-cxs-280-1973` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景场址大门验收的可追溯水牛乳、水牛稀奶油或合格水牛乳中间品，并记录动物种来源、供应商、批次、质量、组成基准、温度或储存状态和验收状态 |
| starting_condition_role | 上游关联的乳品投入和第一个前景保管点 |
| product_classification_scope | 仅 CPC 3.0 子类 22242；排除牛乳 22241、其他动物乳 22249 和混合动物种投入 |
| recursive_input_rule | 已符合本 PCR 类别的投入仍作为显式产品投入并关联供应商数据集和批次；除非有意扩展边界，否则不得在接收过程中递归展开其既往生产 |
| upstream_dataset_requirement | 使用具有地理、技术、参考期、组成基准、分配和数据质量披露的动物种特定水牛乳或水牛乳中间品上游数据集；通用或牛乳代理必须明确披露为非一致项，不得作为精确水牛数据 |
| disclosure | 声明起始乳品材料、排除的上游活动、纳入的场址过程、产品路线、共产品、分配决策、外包作业、包装状态、储存和工厂大门终点 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_storage` | 水牛乳品投入接收与储存 | required |  | 前景保管、身份核验和冷藏或受控储存 | 验收水牛乳品投入和转移质量 |
| `fat_separation_standardisation` | 脂肪分离与标准化 | conditional | 场内分离全脂水牛乳、标准化稀奶油或调整脂肪含量时纳入 | 前景乳品分级和中间品制备 | 乳品投入及各分离产出质量 |
| `butter_or_fat_formation` | 黄油或乳脂成型 | required |  | 前景搅乳、浓缩、重组或其他已声明成型步骤 | 产品中间品和共产品质量 |
| `dehydration_fractionation_finishing` | 脱水、分提与路线特定后处理 | conditional | 无水乳脂、黄油油、酥油、分提、熔融、加盐、发酵或其他后处理变体适用时纳入 | 前景路线特定后处理 | 投入中间品和后处理散装产品质量 |
| `packaging_and_product_storage` | 包装与产品储存 | required |  | 前景最终包装、冷藏或受控储存和工厂大门产出 | 1 kg 净参考产品 |
| `utilities_cleaning_wastewater` | 公用工程、清洗与废水管理 | required |  | 共享前景支持和直接环境交换 | 分配至 1 kg 净参考产品的服务 |

### 过程：水牛乳品投入接收与储存（`receipt_and_storage`）

#### 输入

##### 产品流

###### 验收水牛乳品材料（`buffalo_dairy_input`）

记录跨越场址大门的每批水牛乳、水牛稀奶油或合格水牛乳中间品。供应商和动物种文件必须排除混合动物种材料。

- 选定流：水牛乳、水牛稀奶油或所声明水牛乳中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次在所记录湿基、干基、脂肪或固形物基准上实测验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`unsd-cpc-3-0-2025`; `codex-cxs-206-1999`

###### 接收与储存能源（`receipt_storage_energy`）

记录卸料、泵送、冷却和生产前储存所用的计量或分配电力、燃料、蒸汽或制冷服务。

- 选定流：所声明电力、燃料、蒸汽或制冷服务
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：有分表时使用计量量，否则按最短代表性场址区间采用有文件支持的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 拒收或泄漏乳品材料（`receipt_dairy_rejects`）

按去向记录拒收批次、泄漏和清线乳品材料，不得与验收投入相抵。

- 选定流：送往所声明回收、处理或处置的水牛乳品拒收物或泄漏物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按事件和去向称量或由质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

#### 输出

##### 产品流

###### 转入生产的水牛乳品材料（`accepted_dairy_to_production`）

记录从储存转入下一个适用过程的质量和组成基准。

- 选定流：转入生产的验收水牛乳品材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，并与验收投入、储存变化、拒收和泄漏核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次及每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：

##### 废物流

##### 基本流

### 过程：脂肪分离与标准化（`fat_separation_standardisation`）

#### 输入

##### 产品流

###### 进入分离的水牛乳品材料（`separation_dairy_input`）

记录转移的水牛乳、稀奶油或中间品及其批次特定组成基准。

- 选定流：进入分离机或标准化步骤的水牛乳品材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每过程批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`codex-cxs-206-1999`

###### 分离与标准化能源（`separation_energy`）

记录本步骤分离机、泵、热处理、冷却和保温设备的能源。

- 选定流：所声明电力、燃料、蒸汽或制冷服务
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：计量过程量或有文件支持的区间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 所声明过程产出及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 水牛稀奶油或标准化脂肪中间品（`buffalo_fat_intermediate`）

记录转入成型步骤的水牛乳脂中间品，包括质量和实测组成基准。

- 选定流：水牛稀奶油或标准化水牛乳脂中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分离批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：

###### 水牛脱脂乳共产品（`buffalo_skim_coproduct`）

将每一具有市场用途或场内用途的水牛脱脂乳组分与脂肪中间品分开记录。

- 选定流：水牛脱脂乳或其他所声明乳品共产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向实测共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分离批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 分离残余物与损失（`separation_residues`）

按去向记录非产品残余物、分离污泥和未回收乳品损失。

- 选定流：送往所声明去向的分离残余物或乳品损失
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量数量或批次质量平衡残差，并保留推导过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分离批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：

##### 基本流

### 过程：黄油或乳脂成型（`butter_or_fat_formation`）

#### 输入

##### 产品流

###### 成型步骤水牛乳品进料（`formation_dairy_input`）

记录进入搅乳、浓缩、重组或其他已声明成型设备的水牛稀奶油、水牛乳脂中间品或合格水牛乳投入批次。

- 选定流：所声明成型步骤水牛乳品进料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次投入质量和组成基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每成型批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 成型能源（`formation_energy`）

记录所声明成型路线使用的电力、热、冷却、压缩空气或其他能源服务。

- 选定流：所声明电力、燃料、蒸汽、冷却或压缩空气服务
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：计量过程量或有文件支持的区间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成型产出及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bat-2019-2031`

###### 水、盐、发酵剂或路线配料（`formation_auxiliaries`）

仅记录实际加入的饮用水、盐、发酵剂或其他所声明路线投入。不得根据 Codex 允许配料或组成条款推断数量。

- 选定流：所声明工艺水或路线配料
- 流属性/单位：为该材料选定的质量或体积 / kg 或 m3
- 数量规则：通过秤、投料或领用记录实测批次加入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每成型批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_cip_ingredients`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已成型水牛乳脂产品（`formed_buffalo_fat_product`）

记录转入可选后处理或直接转入包装的黄油或乳脂中间品。

- 选定流：已成型水牛乳黄油或脂肪中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测产出质量和声明产品族
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每成型批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

###### 酪乳或水相乳品共产品（`formation_dairy_coproduct`）

仅在有文件证明具有有益用途或市场去向时，将酪乳或其他独立使用的水相乳品流记录为共产品。

- 选定流：酪乳或所声明水牛乳品水相共产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向实测共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每成型批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 成型损失和非产品乳品流（`formation_losses`）

按处理去向记录产品损失、冲洗材料和无有益用途的乳品流。

- 选定流：成型损失或非产品乳品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量量或批次质量平衡残差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每成型批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：

##### 基本流

### 过程：脱水、分提与路线特定后处理（`dehydration_fractionation_finishing`）

#### 输入

##### 产品流

###### 进入后处理的水牛乳脂中间品（`finishing_product_input`）

记录转入熔融、脱水、分提、重组、加盐、发酵、风味形成或其他已声明后处理路线的批次。

- 选定流：进入后处理的水牛乳脂中间品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次投入质量和组成基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每后处理批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`codex-cxs-280-1973`

###### 后处理能源与辅料（`finishing_energy_auxiliaries`）

记录路线特定的热、真空、冷却、电力、水和实际添加剂或配料，不应用通用配方。

- 选定流：所声明能源服务、工艺水或路线辅料
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：实际后处理路线的计量、称量或批次领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 后处理产出及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`codex-cxs-280-1973`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 后处理散装水牛乳脂产品（`finished_bulk_product`）

记录转入包装的散装黄油、乳脂、黄油油、酥油、分提物或其他范围内产品。

- 选定流：所声明后处理散装水牛乳脂产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测净散装产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每后处理批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：`codex-cxs-279-1971`; `codex-cxs-280-1973`

##### 废物流

###### 去除的水相或非脂材料（`finishing_removed_material`）

记录后处理去除的水、非脂固形物、不合格材料和残余物，并按实际回收、处理或排放路线分类。

- 选定流：送往所声明去向的去除水相或非脂材料
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：实测数量或由批次质量平衡计算的数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每后处理批次及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：`codex-cxs-280-1973`

##### 基本流

### 过程：包装与产品储存（`packaging_and_product_storage`）

#### 输入

##### 产品流

###### 进入包装的散装产品（`bulk_product_to_packaging`）

记录进入包装线的范围内后处理散装产品质量。

- 选定流：后处理散装水牛乳黄油或脂肪产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次或包装运行投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装运行及每 1 kg 净参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dairy_mass_traceability`
- 来源：

###### 一级、二级和三级包装（`packaging_materials`）

按材料、质量、适用的再生含量声明和包装层级分别记录各包装材料及可重复使用运输物品。

- 选定流：所声明包装材料或可重复使用运输物品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，或按实测单件质量换算的件数
- 数量规则：采购和产线领用记录减有文件支持的退回量，并以包装运行产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

###### 包装与储存能源（`packaging_storage_energy`）

记录直至所声明大门的包装线电力、压缩空气、冷库或受控储存能源及相关公用工程需求。

- 选定流：所声明电力、燃料、制冷或压缩空气服务
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：包装和储存区间的计量量或有文件支持的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品及所声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门净参考产品（`reference_product_output`）

产出为满足参考流限定信息的所声明水牛乳黄油或脂肪产品。1 kg 净产品不包含包装质量。

- 选定流：从水牛奶中提取的黄油和其他油脂 `554cfc76-a4ac-4cda-9e06-d60256918b58`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：所声明工厂大门处 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`unsd-cpc-3-0-2025`

##### 废物流

###### 包装拒收物与产品损失（`packaging_rejects`）

按去向分别记录包装边角料、损坏包装、不合格包装产品以及回收或废弃产品。

- 选定流：所声明包装拒收物或包装产品损失
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按包装运行和去向称量或通过库存核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 基本流

###### 制冷剂排放（`refrigerant_release`）

根据维护记录和库存核对记录范围内冷却与储存造成的直接制冷剂损失。

- 选定流：所声明制冷剂对空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以期初库存、补充、回收、期末库存和有文件支持的设备转移进行制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：所声明参考期内每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_effluent`
- 来源：`eu-fdm-bat-2019-2031`

### 过程：公用工程、清洗与废水管理（`utilities_cleaning_wastewater`）

#### 输入

##### 产品流

###### 共享能源与燃料（`shared_energy_fuel`）

记录服务于范围内路线的燃料、电力、蒸汽发生投入、压缩空气、冷却和其他共享公用工程。

- 选定流：所声明共享电力、燃料、蒸汽、冷却或压缩空气投入
- 流属性/单位：载能体特定能量、质量或体积 / 声明来源单位
- 数量规则：以有文件支持的因果仪表或服务驱动量将计量场址或公用工程量分配至范围内路线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_fuel`
- 来源：`eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 清洗水与化学品（`cleaning_water_chemicals`）

记录罐、管道、分离机、搅乳器、后处理设备、包装设备和地面使用的水及各清洗或消毒化学品，并保留 CIP 周期和加药记录。

- 选定流：工艺水或所声明清洗与消毒化学品
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按清洗周期计量水量及实测化学品领用或加药量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清洗周期及每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_cip_ingredients`
- 来源：`eu-fdm-bat-2019-2031`

##### 废物流

###### 送往处理的废水（`wastewater_to_treatment`）

按体积、去向以及场内或场外处理分别记录工艺、清洗、冷却和生活废水流。

- 选定流：送往处理的所声明废水流
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按水流和去向计量或由水平衡计算流量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 处理污泥与分离残余物（`treatment_residues`）

按湿基或干基及去向记录废水处理污泥、筛渣、回收脂肪和其他分离残余物。

- 选定流：所声明处理污泥或分离残余物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量量或有文件支持的处理清单平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_waste_mass`
- 来源：`eu-fdm-bat-2019-2031`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 对水体直接排放（`direct_water_releases`）

场内排放时，将出水体积和每种监测污染物负荷作为独立基本交换记录。场外废水仍作为送往接收处理过程的废物流。

- 选定流：所声明对水体基本排放
- 流属性/单位：污染物特定质量 / kg
- 数量规则：由时间匹配的出水流量和浓度记录计算监测期负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：匹配报告期内每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_effluent`
- 来源：`eu-fdm-bat-2019-2031`

###### 对空气直接燃烧或工艺排放（`direct_air_releases`）

记录范围内公用工程和工艺设备相关的实测或有计算依据的直接空气排放。不得以 BAT 相关性能值替代场址数据。

- 选定流：所声明对空气基本排放
- 流属性/单位：污染物特定质量 / kg
- 数量规则：匹配的烟气监测、燃料记录与批准因子，或其他有文件支持的场址计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：匹配报告期内每 1 kg 净参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions_effluent`
- 来源：`eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 分离、成型、后处理、包装和共享公用工程 | 首先使用过程细分、独立仪表、批次记录和路线特定清单，在能够分离直接归属流时避免分配。 | `eu-pef-2021-2279` |
| `allocation_system_expansion_check` | 多功能过程 | 无法细分时评估系统扩展能否表示附加共产品功能；报告扩展功能，不得在采用扩展后仍把结果表述为没有扩展的单一产品结果。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 水牛脱脂乳、酪乳、回收脂肪及其他共产品 | 未采用细分和系统扩展时，只有在相关可量化物理关系能够反映投入、产出和所提供功能之间因果关系的情况下才能使用该关系，并保留批次组成和质量证据。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | 其余多功能情形 | 只有在说明细分、系统扩展和相关物理关系均不适用后，才能采用经济分配等其他关系；使用过程阶段、地理和参考期特定记录并披露敏感性。 | `eu-pef-2021-2279` |
| `allocation_no_default_factor` | 所有共产品系统 | 本 PCR 不提供统一分配因子；必须对实际场址和参考期披露所选方法、共产品状态、数据源、计算及上下游乳品阶段的一致性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dairy_mass_traceability` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage | 乳品投入、中间品和产品质量与身份 | 秤票、罐计量、批次单、实验室组成记录、供应商证明 | 供应商；农场或加工者；动物种；批次；产品名称；毛重和皮重；净重；湿/干/脂肪/固形物基准；采样时间；试验方法；转移时间；去向 | 经校准的秤或罐计量并关联批次和动物种文件 | kg 及所声明组成基准 | 每次接收、转移和成品批次 | 完整参考期，包括期初期末库存 | 每个纳入场址、罐和产线 | 按批次核对期初库存 + 接收 - 转移 - 拒收 - 期末库存；按净产品质量归一化完整路线 | 校准状态；保管链记录；动物种声明；采样和试验记录；核对签署 |
| `cp_energy_and_fuel` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage; utilities_cleaning_wastewater | 电力、燃料、热、制冷和压缩空气需求 | 分表、总表、发票、燃料交付、锅炉或制冷日志 | 仪表 id；载能体；期初/期末读数；倍率；燃料量；热值或换算基准；运行小时；过程线；停机；产品质量 | 优先过程分表；否则采用具有因果分配说明的最短代表性区间 | 来源单位及归一化 kWh、MJ、kg 或 m3 | 连续或每计费/生产区间 | 完整参考期并含库存变化 | 每个纳入公用工程和生产线 | 汇总匹配消耗量，扣除有文件支持的输出，按因果驱动量分配共享服务，并按净产品归一化 | 仪表校准；发票核对；换算来源；运行日志；分配复核 |
| `cp_water_cip_ingredients` | butter_or_fat_formation; dehydration_fractionation_finishing; utilities_cleaning_wastewater | 工艺水、配料、清洗水和化学品 | 水表、CIP 日志、加药记录、批次领用记录 | 水流；仪表；周期 id；化学品或配料；采购浓度；剂量；回用；漂洗终点；批次；产线；产品质量 | 计量水量及经校准的加药或称量领用并关联周期和批次 | m3 或 kg | 每批次或 CIP 周期；有计量时连续 | 完整参考期并含异常清洗 | 每条纳入产线、CIP 回路和公用工程区 | 按用途和水流汇总；有文件支持的回用只扣除一次；按净产品归一化 | 仪表和加药校准；CIP 轨迹；采购核对；回用记录；卫生放行 |
| `cp_coproduct_waste_mass` | receipt_and_storage; fat_separation_standardisation; butter_or_fat_formation; dehydration_fractionation_finishing; packaging_and_product_storage; utilities_cleaning_wastewater | 共产品、拒收物、残余物、污泥和产品损失 | 秤票、批次平衡、废物联单、回收或销售记录 | 水流身份；质量；湿/干基；批次；去向；有益用途证据；适用废物代码；计算投入 | 优先直接称量，否则使用匹配批次记录形成的质量平衡 | kg | 每批次、发运或废物收集 | 完整参考期 | 每个纳入过程和去向 | 按产品、共产品、废物和去向分别汇总；不得用有益产出抵扣投入 | 秤校准；去向接收单；质量平衡闭合；分类批准 |
| `cp_packaging_records` | packaging_and_product_storage | 包装投入、可重复使用物品、拒收物和包装产出 | 采购、物品规格、产线领用、退回、拒收和成品记录 | 材料；供应商；单件质量；件数；包装层级；再生含量声明；重复使用次数；领用；退回；拒收；包装净产品 | 称量代表性物品或使用经核验规格；核对件数和产线领用 | kg 和件数 | 每次包装运行；规格变化时核查 | 完整参考期 | 每条包装线和产品形式 | 以经核验单件质量换算件数；扣除有文件支持的退回；按净产品分别报告各材料 | 单件质量样本；供应商规格；领退核对；拒收记录 |
| `cp_direct_emissions_effluent` | packaging_and_product_storage; utilities_cleaning_wastewater | 制冷剂损失、废水流量和污染物及直接空气排放 | 制冷剂维护日志、出水流量计、实验室结果、烟气试验、燃料记录、许可报告 | 物质；设备或排口；期初/期末库存；补充；回收；流量；浓度；采样时间；方法；运行状态；燃料使用；因子来源 | 质量平衡、直接监测或由时间匹配的实测活动和批准因子计算 | kg、m3、浓度单位和 kg 负荷 | 每次维护事件及法律或技术适当的监测频率 | 与生产参考期和运行状态匹配 | 每个范围内设备、烟囱和排口 | 计算物质特定质量；以浓度 × 匹配流量计算水负荷；只在时间匹配后归一化 | 维护发票；保管链；实验室资质；仪表校准；因子/版本记录；许可报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | 所有定量清单行 | 归一化量 = 匹配前景量 / 匹配净参考产品质量；保留未归一化记录和基准 | 前景量；净参考产品质量；批次或区间关联 | 每 1 kg 净参考产品的量 | `eu-pef-2021-2279` |
| `dairy_batch_mass_balance` | 接收、分离、成型、后处理和包装 | 期初库存 + 投入 = 产出 + 期末库存 + 实测损失 + 核对残差；调查残差，不得静默分摊 | 期初期末库存；投入/产出/共产品/废物质量；组成基准 | 带符号批次平衡和有文件说明的残差 |  |
| `water_pollutant_load` | 对水体直接排放 | 污染物负荷 = 单位换算后时间匹配的出水体积 × 浓度；各物质分别报告 | 流量；浓度；采样期；换算因子 | 按排口和期间的污染物质量 | `eu-fdm-bat-2019-2031` |
| `refrigerant_mass_balance` | 制冷设备 | 排放 = 期初库存 + 补充 - 回收量 - 期末库存 - 有文件支持的设备转移，并核对符号和库存 | 制冷剂库存、补充、回收、转移 | 按物质的制冷剂排放质量 | `eu-fdm-bat-2019-2031` |
| `multifunctionality_decision` | 共产品和共享服务 | 首先应用细分或系统扩展；均未采用时，使用有依据的物理关系，否则使用其他已披露关系并做敏感性分析 | 过程图；独立记录；共产品量和属性；使用时的市场数据 | 带方法记录的分配或扩展清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_identity` | 所有乳品投入和产品 | 保留批次层面水牛专属证据；任何牛乳、其他动物乳或混合动物种批次均从本 PCR 数据集中排除。 | 供应商声明、保管链、接收记录、产品规格及适用核验试验 |
| `dq_completeness` | 前景清单 | 覆盖参考期内所有适用过程及材料、能源、水、共产品、废物、直接排放、包装和储存记录，并解释遗漏。 | 过程流程图、记录清单、仪表清单、质量和水平衡及完整性复核 |
| `dq_representativeness` | 前景和上游数据集 | 披露技术、地理和时间代表性及精度；对重要过程使用较高质量数据，不得把牛乳代理表述为精确水牛数据。 | 数据质量评估、数据集元数据、来源记录和代理理由 |
| `dq_temporal_matching` | 活动和排放数据 | 将生产、公用工程、库存、废水、直接排放、共产品和废物匹配到同一批次或可辩护报告区间。 | 带时间戳记录、区间核对、运行日志和归一化工作表 |
| `dq_measurement_traceability` | 实测和计算量 | 保留原始读数、校准状态、单位换算、计算公式、因子身份与版本、复核者和更正历史。 | 校准证书、原始导出、受控计算、因子引用和复核签署 |
| `dq_no_generic_performance_values` | 产品规格和 BAT 证据 | 不得将 Codex 组成或质量限值、BAT 相关消耗或排放性能值作为通用前景 LCI；应使用场址、批次、供应商或批准因子记录。 | 来源用途复核和行级 evidence_kind 审计 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品流 UUID 必须为 `554cfc76-a4ac-4cda-9e06-d60256918b58`，Mass UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，单位必须为 kg，且不得附加数据集版本。 |  |
| `validate_buffalo_only_scope` | 产品和乳品投入 | 每项乳品投入和参考产品都必须有水牛专属文件；从本 PCR 数据集中剔除牛乳、其他动物乳、混合动物种乳和替代脂肪记录。 | `unsd-cpc-3-0-2025`; `codex-cxs-206-1999` |
| `validate_product_route` | 产品身份和过程图 | 所声明产品名称和实际路线必须选择适用的黄油、乳脂、黄油油、酥油、分提、重组、加盐、发酵、脱水、包装和储存过程，不得把 Codex 许可当作过程实际发生的证明。 | `codex-cxs-279-1971`; `codex-cxs-280-1973` |
| `validate_reference_amount` | 定量清单 | 归一化后产品产出必须等于 1 kg 净产品；包装质量必须单列，所有湿基、干基、脂肪、水分或固形物换算必须保留批次特定证据。 |  |
| `validate_process_and_record_coverage` | 前景清单 | 每个必需过程和适用条件性过程都必须关联材料、能源、水、共产品、废物、直接排放、包装和储存前景记录，或说明不适用。 | `eu-fdm-bat-2019-2031` |
| `validate_mass_and_stream_balance` | 乳品和水系统 | 从接收到产出的乳品质量平衡及分流水平衡必须在场址定义且有文件说明的测量不确定度内核对；无法解释的残差是 finding，不得隐藏为分配。 | `eu-fdm-bat-2019-2031` |
| `validate_allocation_hierarchy` | 多功能过程 | 在采用物理或其他分配前，数据集必须记录细分和系统扩展核查，识别全部共产品和共享服务，并保留所选关系及敏感性证据。 | `eu-pef-2021-2279` |
| `validate_source_use` | 数值和方法声明 | 每个非前景数值因子必须给出来源和版本；Codex 组成或质量限值及 BAT 性能值不得作为默认 LCI 数量。 | `codex-cxs-279-1971`; `codex-cxs-280-1973`; `eu-fdm-bat-2019-2031` |
| `validate_data_quality` | 数据集画像 | 必须披露完整性、方法一致性、技术、地理和时间代表性、精度、文件化、命名和复核状态。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明水牛乳黄油或脂肪产品路线的前景单元过程或聚合 gate-to-gate 数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当动物种来源、产品形态、路线、地理、技术、参考期、边界、分配、包装、储存和数据质量相容时，用于所声明 CPC 22242 水牛乳产品的 LCA 建模 |
| excluded_use | 牛乳产品；其他动物乳产品；混合动物种产品；表述为水牛特定数据的通用乳脂平均值；替代脂肪产品；缺少所需上游水牛乳数据集时的 cradle-to-gate 声明；忽略重要边界或分配差异的比较 |
| required_metadata | PCR id；Tiangong 参考 UUID；水牛专属证据；产品名称和限定信息；场址和地理；参考期；路线和技术；纳入与排除过程；上游数据集链接；共产品和分配；包装；储存；记录覆盖；归一化工作表；来源和因子版本 |
| required_quality_disclosure | 完整性；方法一致性；技术、地理和时间代表性；精度；测量不确定度；缺失记录；代理使用；质量和水平衡结果；分配敏感性；复核状态；对本 PCR 的偏离 |
| update_trigger | 动物种来源证据变化；产品或路线变化；重要过程、技术、能源、水、包装、储存、废物处理、共产品用途或分配变化；参考期滚动；重要数据质量提升；来源修订；或用经核验前景/水牛特定数据替换临时或代理投入 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 22242, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期 2026-08-12） | 水牛乳类别精确身份、所含产品形态以及对 CPC 22241 和 22249 的排除 |
| `codex-cxs-279-1971` | standard | Codex Alimentarius, CXS 279-1971, Standard for Butter，官方标准目录：https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/（访问日期 2026-08-12） | 黄油身份、仅源自乳的要求、水包油路线概念和可能的路线配料；组成和质量值不作为 LCI 默认值 |
| `codex-cxs-280-1973` | standard | Codex Alimentarius, CXS 280-1973, Standard for Milkfat Products，官方标准目录：https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/（访问日期 2026-08-12） | 无水乳脂、乳脂、黄油油和酥油的身份与路线区分；组成和质量值不作为 LCI 默认值 |
| `codex-cxs-206-1999` | standard | Codex Alimentarius, CXS 206-1999, General Standard for the Use of Dairy Terms，官方标准目录：https://www.fao.org/fao-who-codexalimentarius/codex-texts/all-standards/en/（访问日期 2026-08-12） | 乳制品身份、动物种声明、重组或复原状态以及对误导性混合或替代产品的排除 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, ELI: https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（访问日期 2026-08-12） | 功能单位结构、参考流、系统边界、分配层级、数据采集重要性和数据质量披露 |
| `eu-fdm-bat-2019-2031` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, ELI: https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（访问日期 2026-08-12） | 过程流程清单、水、能源、原材料、废水、废气和残余物记录、监测策略、清洗/CIP 和资源效率做法；BAT 性能值不作为 LCI 默认值 |
