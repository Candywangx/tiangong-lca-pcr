---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-marine-mammals
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 海洋哺乳动物脂肪、油及其分提物

## 1. 范围与适用性

本 PCR 涵盖来自已声明海洋哺乳动物物种的脂肪、油及物理分提物，其交付状态应声明为粗制、熬制、精炼或分提。只有当前景数据包识别物种、来源种群或种群单元及地理位置、原料来源路线、产品状态、预期市场用途，以及取得、持有、加工、运输和销售所依据的法律与伦理适用性时，本 PCR 才适用。

本 PCR 不构成对捕猎、贸易、加工、食品用途、饲料用途、化妆品用途或任何其他用途的许可。符合性要求每个来源批次和目的市场都有文件化监管链。许可缺失、相互矛盾、过期或不适用的批次不得表述为符合本 PCR 的产品数据集。

CPC 21526 与鱼肝油、其他鱼油、其他熬制动物脂肪以及另行分类的化学改性动物脂肪不同。Codex CXS 329-2017 是鱼油标准，不适用于海洋哺乳动物脂肪或油。Codex CXS 211-1999 不作为本类别的组成、身份或工艺规范。本 PCR 不转用鱼油或命名动物脂肪的组成表、污染物概况、工艺假设或数值范围。

本 PCR 使用的资料不能支持跨物种的统一组成或统一生产路线。因此，生产者应使用物种、批次、场址、路线和产品状态特定的前景记录。精炼、物理分提、脱臭、冬化、混合、包装和储存仅在实际实施并声明时纳入。氢化及 CPC 21526 范围外的其他化学改性，以及无法单独量化海洋哺乳动物成分的混合物不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fats-and-oils-and-their-fractions-of-marine-mammals |
| classification_refs | CPC 3.0: 21526 - Fats and oils and their fractions, of marine mammals |
| covered_products | 已声明物种的海洋哺乳动物脂肪、油及物理分提物，状态为粗制、熬制、精炼或分提，且法律适用性和监管链已有文件证明 |
| excluded_products | 鱼肝油；其他鱼油；陆生动物脂肪；植物油；身份不明或无法量化的混合物；非法或许可文件不完整的材料；CPC 21526 范围外的化学改性动物脂肪 |
| representative_product | 在声明工厂门和产品状态下的 1 kg 已声明物种的海洋哺乳动物脂肪、油或物理分提物 |
| production_route | 合格来源材料或同类别油的接收；条件性预处理与油回收；条件性精炼与物理分提；成品整理、储存和交付 |
| market_state | 散装或包装；粗制、熬制、精炼或物理分提；明确声明预期用途和目的市场适用性 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明产品条件下的已声明物种的海洋哺乳动物脂肪、油或物理分提物 |
| How much | 1 kg 产品净重 |
| How well | 符合生产者声明的产品规格和目的市场要求；物种、来源、产品状态、预期用途和监管链完整 |
| How long or cycle | 声明批次在工厂门交付时；不赋予服务期限 |
| reference_flow_link | `product_finishing_storage` 中的参考产品输出归一化为 1 kg 产品净重 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Fats and oils and their fractions, of marine mammals `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 海洋哺乳动物常用名和学名；来源种群或种群单元及地理位置；原料来源路线；取得和加工司法辖区；许可和监管链引用；产品状态；适用时的物理分提物身份；预期用途；目的市场；工厂门地理位置；批次和生产日期；净重基准 |

构建前景数据包时，每项必需限定信息均应记录在数据集元数据、过程说明、参考流备注、产品说明或等效的可审计字段中。“海洋油”或“动物油”等通用标签不充分。参考流 UUID 只识别天工产品流，不证明物种、组成、合法性、伦理、质量或市场适用性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 数据集按声明工厂门的 1 kg 参考产品净重归一化；包装质量不计入参考产品质量。 |
| `batch_mass_reconciliation` | 每个前景批次和物理分提物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的湿基、干基或收到状态基准上使用经校准的批次测量，并声明该基准；核对投入、产品、共产品、残余物、存量和测得损失。 |
| `moisture_and_nonlipid_basis` | 来源材料和中间油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 当水分和非脂质含量实质影响产率或可比性时应记录；没有实测批次数据和明确公式时，不得在收到状态、干基或脂质基准之间换算。 |
| `utility_conversion` | 电力、燃料、蒸汽、冷却和热 | 按计量方式采用能量或质量 | 声明的仪表单位和换算后的 SI 单位 | 保留实测单位、换算因子和能源载体；电力和热能分开报告，不得从产品质量推断。 |
| `fraction_identity` | 每个分提输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明切割段或规格及实测质量分别记录各分提物；不得跨物种、批次或技术推断统一分提产率或组成。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_scope_identity` | 产品类别选择 | 仅纳入 CPC 3.0 子类 21526 产品；鱼油、其他动物脂肪和化学改性动物脂肪不使用本 PCR。 | `unsd-cpc-3-exp-notes-2025` |
| `sb_regulatory_chain` | 每个来源批次和目的市场 | 识别物种、来源种群或种群单元及地理位置、取得路线、适用司法辖区、许可文件、监管链转移、加工适用性、预期用途和目的市场状态；该链条不完整或不适用时不得判为符合。 |  |
| `sb_upstream_acquisition` | 第一个前景门之前的来源材料取得 | 当前景边界外发生捕猎、收集、登陆、胴体处理、副产品产生和运输时，将其连接到具体上游数据集；披露被排除阶段，不得用法律或伦理筛查替代环境清单。 | `eu-pef-2021` |
| `sb_foreground_route` | 运营者控制的加工 | 纳入从工厂门交付以前实际实施的接收、预处理、油回收、分离、精炼、物理分提、成品整理、储存、处理和现场公用工程。 | `eu-pef-2021` |
| `sb_same_category_input` | 进入前景加工的外购海洋哺乳动物油或分提物 | 将同类别投入保留为具有自身上游数据集和限定信息的显式产品流；不得在接收过程中递归重建其上游生产。 |  |
| `sb_cxs_fish_oil_exclusion` | 产品规格和校验 | 不得将 CXS 329-2017 的鱼油身份、组成范围或加工假设用于海洋哺乳动物脂肪或油。 | `codex-cxs-329-2017` |
| `sb_named_animal_fat_limit` | 产品规格和校验 | 不得将 CXS 211-1999 用作海洋哺乳动物的组成、身份或工艺规范。 | `codex-cxs-211-1999` |
| `sb_fdm_bat_scope_limit` | 技术和排放声明 | 不得将 EU FDM BAT 表述为初级熬炼或脂肪熔炼的产品特定 BAT 依据；其声明范围排除了来自动物副产品的初级产品，例如熬炼和脂肪熔炼。 | `eu-fdm-bat-2019` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在第一个前景受控接收点的合法合格、已声明物种的含脂材料或同类别油/分提物 |
| starting_condition_role | 在保留监管链和物理链的同时，将上游取得与运输数据集和前景加工区分 |
| product_classification_scope | 仅 CPC 3.0 子类 21526 |
| recursive_input_rule | 显式记录外购 CPC 21526 投入并连接其上游数据集；不得以内部循环或无限定的通用动物油/鱼油代理替代 |
| upstream_dataset_requirement | 对声明起始条件以前所有材料阶段使用物种、地理、取得路线和时期有代表性的数据集，并保留许可与监管链元数据 |
| disclosure | 声明物种、种群或种群单元及地理位置、取得和材料路线、法律和伦理适用性、许可证或其他许可引用、监管链转移、加工路线、产品状态、预期用途、目的市场、截断、分配选择和数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_receipt_qualification` | 来源接收与合格判定 | required | 始终纳入；没有来源与监管链合格判定的数据集不得符合 | 前景门、身份控制和合格批次质量平衡 | kg 合格来源材料或同类别油 |
| `primary_oil_recovery` | 初级油回收与分离 | conditional | 当前景运营者接收含脂组织、脂肪或其他来源材料而非已回收油时纳入 | 前景预处理、熬制或其他声明回收和分离 | kg 回收油中间体 |
| `oil_refining` | 油精炼 | conditional | 纳入每项实际实施的精炼操作 | 使用实际技术去除或转化声明杂质 | kg 精炼油输出 |
| `physical_fractionation` | 物理分提 | conditional | 当声明产品为物理分提物或产生共分提物时纳入 | 前景分离为声明的物理分提物 | kg 目标分提物和各共分提物 |
| `product_finishing_storage` | 产品整理、储存与交付 | required | 始终纳入；包装是否纳入取决于交付形态 | 前景产品汇总、储存、可选包装和工厂门交付 | 1 kg 参考产品净重 |

### 过程：来源接收与合格判定（`source_receipt_qualification`）

#### 输入

##### 产品流

###### 已声明物种的来源材料或同类别油（`received_source_material`）

分别记录每个接收批次。记录应区分含脂材料和已回收油或分提物，并将实物批次连接到完整监管链及上游数据集。

- 选定流：已声明物种的海洋哺乳动物来源材料或 CPC 21526 油/分提物；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收毛重和净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个产出参考产品的生产批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_chain_and_receipt`

###### 入厂运输服务（`inbound_transport`）

记录从上游数据集门到第一个前景门的实际起点、方式、距离、载荷、温控和行程分配。

- 选定流：方式特定的运输服务；未选择天工 UUID
- 流属性/单位：Transport service / tkm 或实际承运活动单位
- 数量规则：根据已核实货运质量和路线距离计算，或使用承运人直接记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个产出参考产品的生产批次
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_source_chain_and_receipt`

##### 废物流

#### 输出

##### 产品流

###### 合格来源材料（`accepted_source_material`）

记录物种、文件和物理验收后放行到下一项声明操作的实测质量。

- 选定流：合格的已声明物种来源材料或油中间体；未选择天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_chain_and_receipt`

##### 废物流

###### 拒收或隔离材料（`rejected_source_material`）

分别记录拒收、隔离、退回、销毁或转用材料及原因和最终去向。不得将法律上不合格的材料作为合格投入。

- 选定流：去向特定的拒收材料或废物；未选择天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

### 过程：初级油回收与分离（`primary_oil_recovery`）

#### 输入

##### 产品流

###### 合格含脂材料（`recovery_feed`）

记录进入实际回收操作的合格批次质量及收到状态基准。

- 选定流：合格的已声明物种含脂材料；未选择天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按回收批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 回收用水或蒸汽（`recovery_water_steam`）

分别记录跨越过程边界且已计量的工艺水和蒸汽，并保留实测状态和单位。

- 选定流：场址特定的水和蒸汽供应流；未选择天工 UUID
- 流属性/单位：Volume、mass 或 energy / 实测仪表单位
- 数量规则：分配至回收批次的计量用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_steam`

###### 回收电力与燃料（`recovery_energy`）

分别记录电力、各类燃料和外购热。不得根据其他物种、批次或鱼油工艺推断回收能耗。

- 选定流：场址和能源载体特定的能源供应流；未选择天工 UUID
- 流属性/单位：Energy 或 mass / 能源载体计量单位
- 数量规则：分配至回收批次的计量或发票核对用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuels`

#### 输出

##### 产品流

###### 回收油中间体（`recovered_oil_intermediate`）

记录分离油质量和声明状态。除非其作为声明粗制或熬制产品直接进入产品整理，否则为内部中间体。

- 选定流：已声明物种的海洋哺乳动物回收油中间体；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测回收油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 固体残余物和非油材料（`recovery_residues`）

按实际法律状态和去向分别记录各残余物或共产品；不得仅为避免分配而把可销售输出标为废物。

- 选定流：去向特定的残余物、共产品或废物；未选择天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按输出和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个回收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

###### 回收废水（`recovery_wastewater`）

记录排放或转移废水的体积，以及所选处理数据集所需的实测特征。

- 选定流：去向特定的废水流；未选择天工 UUID
- 流属性/单位：Volume / m3；污染物负荷另行保留
- 数量规则：按批次或报告期计量或由质量平衡推算的排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个回收批次或经核对的报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

##### 基本流

###### 回收过程直接排放（`recovery_direct_emissions`）

仅记录跨越环境边界的实测或按许可方法计算的排放；被捕集的流应连接处理，不作为直接排放报告。

- 选定流：构建数据集时选择污染物特定基本流；不推断 UUID
- 流属性/单位：Mass / kg 污染物
- 数量规则：按报告期实测或依批准方法计算的负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个经核对的生产输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`

### 过程：油精炼（`oil_refining`）

#### 输入

##### 产品流

###### 精炼进料油（`refining_feed_oil`）

记录进入声明精炼序列的各油进料的物种、来源批次、状态和实测质量。

- 选定流：已声明物种的回收或外购海洋哺乳动物油；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按精炼批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个精炼批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 精炼用水、能源与加工助剂（`refining_utilities_aids`）

实际使用时，分别记录水、电力、燃料、热、过滤介质、吸附剂、碱、酸和其他助剂，并保留浓度及回收或丢弃去向。

- 选定流：实际场址特定公用工程和加工助剂流；不推断 UUID
- 流属性/单位：Mass、volume 或 energy / 实测单位
- 数量规则：按精炼批次计量、称量或发票核对的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个精炼批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_aids`

#### 输出

##### 产品流

###### 精炼油中间体（`refined_oil_intermediate`）

记录实测精炼油质量和实际实施的操作。不得仅凭过程名称声称统一组成或质量等级。

- 选定流：已声明物种的精炼海洋哺乳动物油中间体；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测精炼油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个精炼批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 精炼残余物和废助剂（`refining_residues`）

按实测质量和去向分别记录皂脚、胶质、废介质、馏出物、污泥或其他实际输出，不假设任何具名残余物必然产生。

- 选定流：实际去向特定的精炼残余物或废物；不推断 UUID
- 流属性/单位：Mass / kg
- 数量规则：按流和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个精炼批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

###### 精炼废水（`refining_wastewater`）

记录实际排放或转移体积和实测特征；内部回用水不得计入排放总量。

- 选定流：去向特定的废水流；未选择天工 UUID
- 流属性/单位：Volume / m3；污染物负荷另行保留
- 数量规则：按批次或经核对报告期计量的排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个精炼批次或报告期
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

##### 基本流

###### 精炼直接排放（`refining_direct_emissions`）

使用实测或批准的计算记录，记录实际精炼系统的污染物特定直接释放。

- 选定流：构建数据集时选择污染物特定基本流；不推断 UUID
- 流属性/单位：Mass / kg 污染物
- 数量规则：实测或依批准方法计算的负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个经核对的精炼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`

### 过程：物理分提（`physical_fractionation`）

#### 输入

##### 产品流

###### 分提进料油（`fractionation_feed_oil`）

记录进入实际物理分提操作的油的实测质量、物种、批次组成和状态。

- 选定流：已声明物种的海洋哺乳动物油进料；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按分提批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 分提能源与辅助材料（`fractionation_energy_auxiliaries`）

针对实际技术分别记录电力、热、冷却、制冷剂补充以及过滤或分离助剂。

- 选定流：实际场址特定的能源和辅助材料流；不推断 UUID
- 流属性/单位：Mass 或 energy / 实测单位
- 数量规则：按分提批次计量或称量的用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities_and_aids`

#### 输出

##### 产品流

###### 目标物理分提物（`target_fraction`）

记录进入产品整理的分提物的实测质量和声明切割段或规格。

- 选定流：已声明物种的海洋哺乳动物油目标分提物；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测目标分提物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 共分提物（`co_fractions`）

按实测质量、规格和去向分别记录其他每种可销售分提物。

- 选定流：已声明物种的海洋哺乳动物油共分提物；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测各共分提物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 分提损失和废介质（`fractionation_waste`）

仅记录实际不合格材料、从系统移除的未回收滞留物和废介质，并记录各自实测质量和去向。

- 选定流：实际去向特定的分提废物；不推断 UUID
- 流属性/单位：Mass / kg
- 数量规则：按流和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个分提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

##### 基本流

###### 制冷剂和分提直接排放（`fractionation_direct_emissions`）

使用设备维护记录或批准的监测方法记录实际制冷剂损失和其他直接释放。

- 选定流：构建数据集时选择物质特定基本流；不推断 UUID
- 流属性/单位：Mass / kg 物质
- 数量规则：实测或根据维护记录计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个经核对的分提输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions_monitoring`

### 过程：产品整理、储存与交付（`product_finishing_storage`）

#### 输入

##### 产品流

###### 进入整理的声明油或分提物（`finishing_feed`）

记录从最后一个适用生产操作转移来的实测质量和产品状态。

- 选定流：声明的物种特定粗制、熬制、精炼或分提海洋哺乳动物油；未选择其他天工 UUID
- 流属性/单位：Mass / kg
- 数量规则：按产品批次实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个成品批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 包装材料（`packaging_materials`）

当包装在声明工厂门内提供时，分别记录初级、次级和运输包装；包装质量不计入参考产品质量。

- 选定流：材料特定包装流；不推断 UUID
- 流属性/单位：Mass 或 count / 实测单位
- 数量规则：按发运产品分配的称量或物料清单用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个发运参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_storage`

###### 整理与储存能源（`finishing_storage_energy`）

记录产品整理、维持声明储存条件和交付所用的电力、热、冷却及其他能源。

- 选定流：场址和能源载体特定的能源供应流；不推断 UUID
- 流属性/单位：Energy 或 mass / 能源载体计量单位
- 数量规则：按实测运行驱动因素和储存时间分配的计量用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个发运参考产品
- 基准类型：储存期限（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_storage`

#### 输出

##### 产品流

###### 参考海洋哺乳动物脂肪、油或分提物（`reference_product`）

记录完全合格产品的交付净重。数据集应携带全部参考流限定信息，不得暗示天工 UUID 提供认证或法律批准。

- 选定流：Fats and oils and their fractions, of marine mammals `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测批次输出固定归一化为 1 kg 参考产品净重
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门交付的 1 kg 参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 不合格产品和包装废物（`finishing_waste`）

分别记录不合格油、清洗清理材料、作为废物回收的泄漏物和包装废物，以及实际处理或回收去向。

- 选定流：去向特定的产品或包装废物；不推断 UUID
- 流属性/单位：Mass / kg
- 数量规则：按流和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个成品批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_discharge`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 物种、来源批次、路线和单独计量操作 | 优先细分和直接归属；记录允许单独建模时，不得合并不同物种、法律来源路线或产品状态。 | `eu-pef-2021` |
| `allocation_internal_transfers` | 前景过程之间转移的中间油 | 延续实测中间体质量和可直接归属的公用工程，不得创建人为共产品收益或递归同类别投入。 |  |
| `allocation_marketable_outputs` | 油、物理分提物及其他可销售输出 | 识别每种可独立使用的输出并优先归属直接测得操作；仍有共同负担时，选择能够反映过程的物理关系；没有可辩护物理关系时使用经济分配，并披露方法和理由。 | `eu-pef-2021` |
| `allocation_fractionation` | 目标分提物和共分提物 | 不得假设组成、价值或产率相同；使用实测分提物质量和产品特定记录，披露共同负担分配，并检验一个实质上合理的替代分配基准。 |  |
| `allocation_residue_status` | 残余物、回收材料和废物 | 根据实际法律状态、用途和去向确定产品、共产品、残余物或废物状态；不得为避免分配而把可销售输出改称废物，没有文件化替代或终止废物模型时不得计入回收收益。 |  |
| `allocation_upstream_source` | 与其他活动或产品共同产生的来源材料 | 使用上游数据集经评审的多功能处理并披露；不得仅因材料被称为副产品而赋予零上游负担。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_chain_and_receipt` | `source_receipt_qualification` | 来源身份、法律与伦理适用性、监管链、接收和合格质量及运输 | 许可文件；物种记录；种群或种群单元及地理位置；取得路线；监管链文件；验收和称量记录；运输路线 | lot_id; common_name; scientific_name; stock_population; origin_geography; acquisition_route; jurisdictions; permit_or_authorization_ids; validity_dates; custody_parties_and_dates; intended_use; destination_market; gross_mass; tare_mass; accepted_mass; rejection_mass; origin; mode; distance; payload | 对照批次身份和有效期核验文件；保留副本或耐久引用；使用经校准接收秤和承运记录 | kg; km; tkm | 每个批次和货运 | 数据集表示的全部批次 | 每条供应路线和接收场址 | 不跨物种或不相容许可路线聚合；仅对相容批次按质量加权 | 许可有效性检查；监管链核对；秤校准；货运证据；异常日志 |
| `cp_batch_mass_balance` | all production processes | 进料、中间体、产品、共产品、残余物、存量和损失质量 | 称重单；罐计量；经校准仪表；批记录；库存移动 | batch_id; lot_ids; opening_stock; each_input_mass; each_output_mass; closing_stock; moisture_or_basis; measurement_time; instrument_id | 在一致声明基准上测量每次转移并核对批次 | kg | 每批；每报告期至少核对存量 | 表示的全部生产批次 | 每个前景场址和适用单元过程 | 仅在批次核对后归一化；按合格产品输出质量加权聚合 | 校准记录；签署批记录；核对残差和调查 |
| `cp_water_and_steam` | `primary_oil_recovery` | 水和蒸汽 | 仪表；冷凝水记录；公用工程日志 | meter_id; opening_reading; closing_reading; water_source; steam_mass_or_energy; batch_or_period; allocation_driver | 优先直接计量；否则用文件化运行驱动因素核对分表期 | m3; kg; MJ | 每批或最短有代表性的计量期 | 包含清洗的代表性运行期 | 每场址和相关操作 | 仅分配给使用该公用工程的操作并按核对输出归一化 | 仪表校准；读数日志；分配计算 |
| `cp_energy_and_fuels` | all production processes | 电力、燃料、外购热和冷却 | 分表；燃料领用；发票；设备日志 | carrier; quantity; unit; meter_or_invoice_id; batch_or_period; operating_driver; allocation_factor | 尽可能按能源载体和操作计量；将发票与场址总量核对 | kWh; MJ; kg; m3 | 每批或每月并进行运行核对 | 代表性运行和季节期 | 每场址和技术 | 能源载体分开；使用实测运行驱动因素分配共享能源 | 仪表校准；发票核对；计算记录 |
| `cp_utilities_and_aids` | `oil_refining`; `physical_fractionation` | 水、能源、冷却、加工助剂、过滤介质和制冷剂补充 | 领用记录；配方；称量记录；仪表；维护日志 | material_or_carrier; concentration; quantity; unit; batch_id; recovered_quantity; disposal_route | 称量、计量或将领用量与批次及留存库存核对 | kg; m3; kWh; MJ | 每批或每次领用 | 全部适用批次 | 每场址和技术 | 各助剂和能源载体分开报告；仅扣除有记录的退回未用库存 | 校准仪器；领退记录；批次签核 |
| `cp_waste_and_discharge` | all production processes | 拒收材料、残余物、共产品、固体废物和废水 | 称量记录；转移联单；发票；罐或流量计；实验室结果 | stream_id; legal_status; mass_or_volume; destination; treatment; sale_or_transfer_value_if_applicable; flow; pH; temperature; relevant_pollutant_concentrations | 测量每个材料流和排放；按所选处理或排放模型表征废水 | kg; m3; kg pollutant | 每批或每次转移；废水按监测计划 | 表示的全部生产和排放期 | 每个场址和排放或转移点 | 各流和去向分开；使用匹配流量和浓度记录计算负荷 | 秤或仪表校准；转移联单；实验室 QA；去向证据 |
| `cp_emissions_monitoring` | all production processes | 直接空气和水排放及制冷剂损失 | 烟道或排放监测；许可计算；泄漏和维护记录 | substance; source; concentration; flow; duration; direct_mass; method; detection_limit; service_addition; recovered_refrigerant; period | 使用适用的批准监测或质量平衡方法，区分捕集流和直接释放流 | kg substance; concentration and flow units | 按许可或方法频率，并在重大工艺变化后 | 表示的全部运行期 | 先按来源记录，再经论证聚合 | 使用匹配测量计算负荷；按核对产品输出归一化 | 方法引用；校准；实验室 QA；维护和异常记录 |
| `cp_packaging_and_storage` | `product_finishing_storage` | 包装、储存期限、产品交付和分配的储存能源 | 物料清单；包装领用；仓储日志；能源表；发运称重 | packaging_material; quantity; unit; batch_id; storage_condition; entry_time; dispatch_time; storage_energy; allocation_driver; net_product_mass | 将包装领用和储存记录与发运批次核对；按文件化驱动因素计量或分配储存能源 | kg; item; day; kWh; MJ | 每个发运批次；能源按月或更短 | 表示的全部储存和发运产品 | 每个仓库和交付形态 | 包装不计入参考质量；按占用容量与时间或更佳实测驱动因素分配储存能源 | 物料清单检查；库存核对；仪表和发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_received_mass` | 每个来源批次 | 接收净重 = 装载毛重 - 皮重；在记录取样或存量调整后，合格和拒收质量应与接收净重核对 | gross_mass; tare_mass; accepted_mass; rejection_mass; documented_adjustment | kg 合格和拒收来源材料 |  |
| `calc_transport_service` | 入厂货运 | 运输服务 = 已核实载荷质量（吨）× 路线距离（公里）；纳入空返或多点配送时记录分配 | payload_mass; route_distance; trip_allocation | 按方式和路线的 tkm | `eu-pef-2021` |
| `calc_batch_mass_balance` | 每个生产批次 | 质量平衡残差 = 实测投入总量 + 期初存量 - 实测输出总量 - 期末存量；调查并披露实质残差，不得强制归零 | input_masses; output_masses; opening_stock; closing_stock | kg 残差及其占实测投入总量百分比 |  |
| `calc_process_yield` | 回收、精炼和分提 | 过程产率 = 同一声明基准上的合格输出实测质量 / 过程进料实测质量；按物种、批次混合、产品状态和技术分别报告 | qualified_output_mass; feed_mass; measurement_basis | kg/kg 过程进料 |  |
| `calc_utility_intensity` | 各适用过程 | 公用工程强度 = 分配到过程的公用工程量 / 合格过程输出实测质量；水、电力、各燃料、热和冷却分开 | utility_quantity; allocation_driver; qualified_output_mass | 公用工程单位/kg 过程输出 |  |
| `calc_pollutant_load` | 实测废水或废气流 | 污染物负荷 = 匹配的流体积或气流量 × 实测浓度；记录单位换算和采样代表性 | flow_or_volume; concentration; operating_time; conversion_factor | kg 污染物/报告期 |  |
| `calc_reference_normalization` | 成品数据集 | 归一化清单量 = 经核对的前景量 / 工厂门交付的合格参考产品净重 kg 数 | foreground_amount; qualified_reference_product_mass | 清单量/1 kg 参考产品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_chain` | 每个来源批次 | 物种、种群或种群单元及地理位置、取得路线、司法辖区、许可有效性、监管链转移、预期用途和目的市场适用性应完整且相互一致。 | 来源记录、许可引用、监管链记录和批次核对 |
| `dqr_species_route_separation` | 全部聚合数据 | 不得聚合不同物种、实质不同来源路线、不相容法律状态或实质不同产品状态，除非保留单独结果并披露聚合理由。 | 分拆批次表和聚合记录 |
| `dqr_measurement` | 质量、公用工程、助剂、废物和排放 | 使用经校准或其他受控的测量系统；保留原始读数、单位、换算因子、分配驱动因素、检出限和更正记录。 | 校准、仪表、实验室、发票和计算记录 |
| `dqr_temporal` | 前景数据集 | 覆盖有代表性的生产期和所有重要运行模式、清洗、开停车、储存和季节条件；披露排除期或异常期。 | 生产日历、运行日志和覆盖评估 |
| `dqr_completeness` | 每个过程 | 核对实际路线识别的全部重要质量、水、能源、助剂、产品、共产品、废物、废水和直接排放；分别解释零值、不适用和缺失值。 | 过程流程图、平衡表和缺口日志 |
| `dqr_no_cross_species_defaults` | 所有定量值 | 没有明确的经评审代理理由和不确定性评估时，不得代入鱼油、陆生动物脂肪、其他物种或其他技术数值；本 PCR 不提供此类默认值。 | 来源适用性评审和不确定性记录 |
| `dqr_source_applicability` | 外部标准和指南 | 引用来源仅用于声明目的：CPC 用于类别范围，CXS 211 和 CXS 329 用于负面适用性筛查；EU FDM BAT 仅用于说明初级熬炼和脂肪熔炼不在其范围内，并禁止在此套用其 BAT-AEL 和环境绩效值；EU PEF 用于生命周期方法和披露背景。 | 来源—规则追溯和审查者检查 |
| `dqr_quantitative_evidence` | 产率、组成、公用工程、助剂、排放、废物和分配因子 | 使用前景记录或经评审的代表性批次证据。缺少可靠跨物种范围是一项数据要求，并非编造数值的许可。 | 采集协议输出和经评审证据记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 核对产品流 UUID `e203a8c3-0e12-46f4-bef7-fb2bb53cc8a3`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、参考单位 kg，以及按 1 kg 产品净重归一化。 |  |
| `val_product_scope` | 产品身份 | 核对 CPC 21526 范围、声明海洋哺乳动物物种和产品状态，并排除鱼油、其他动物脂肪、身份不明混合物和子类范围外化学改性产品。 | `unsd-cpc-3-exp-notes-2025` |
| `val_regulatory_chain` | 每个表示的批次 | 物种、来源地理和种群或种群单元、取得路线、适用司法辖区、许可有效性、监管链转移、加工适用性、预期用途或目的市场状态缺失、矛盾、过期或不适用时判定不符合。 |  |
| `val_route_completeness` | 过程图 | 纳入每项实际实施操作，仅排除确实不存在的条件过程；把前景门外全部上游取得和运输连接到合格数据集。 | `eu-pef-2021` |
| `val_mass_balance` | 每个批次和聚合 | 检查测量基准一致，并核对投入、输出、共产品、残余物、存量和损失；调查并披露实质残差。 |  |
| `val_inventory_completeness` | 每个纳入过程 | 对实际路线相关的水、能源载体、助剂、输出、废物、废水、直接排放、包装和储存，核实采集值或明确不适用声明。 |  |
| `val_allocation` | 多功能过程 | 核实优先尝试细分和直接归属，识别每种可销售输出，披露剩余分配关系和理由，并检验实质上合理的替代方案。 | `eu-pef-2021` |
| `val_standard_non_transfer` | 标准使用 | 若把 CXS 329 鱼油值或 CXS 211 命名动物脂肪值用作海洋哺乳动物组成、身份、工艺或数值默认值，则判定不符合。 | `codex-cxs-329-2017`; `codex-cxs-211-1999` |
| `val_bat_claim` | BAT 或监管声明 | 若声称 EU FDM BAT 为初级熬炼或脂肪熔炼提供产品特定 BAT，则判定不符合；实际适用的司法辖区要求应另行记录。 | `eu-fdm-bat-2019` |
| `val_data_quality` | 发布候选 | 核实时间、技术、地理、物种、路线和产品状态代表性；列出数据缺口和代理使用；不得把推理估算发布为实测前景值。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 物种、路线、场址和产品状态特定的前景单元过程或聚合过程数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 通过符合性检查后，用于声明地理、时期、路线、产品状态、预期用途和目的市场下的海洋哺乳动物脂肪、油或物理分提物 LCA 建模 |
| excluded_use | 法律、伦理、可持续性、食品安全、饲料安全或贸易认证；鱼油代理；未经评审的跨物种或跨路线替代；对非法或许可不完整材料建模；通用组成声明 |
| required_metadata | 全部参考流限定信息；纳入和排除过程；上游数据集链接；物种和来源路线；监管链引用；产品和分提状态；预期用途和目的市场；时间、技术和地理覆盖；截断；分配；采集协议；数据所有者和评审状态 |
| required_quality_disclosure | 前景与次级数据；测量基准和校准；批次覆盖和质量平衡残差；代理使用；分配敏感性；缺失的定量范围证据；不确定性；来源适用和不适用声明 |
| update_trigger | 物种、来源种群或地理位置、许可或贸易制度、目的市场适用性、取得路线、技术、产品状态或分提物、场址、分配、数据时效、重要产率或公用工程概况、排放控制发生变化，或获得经评审定量证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-exp-notes-2025` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0 Explanatory Notes》，子类 21526，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别身份，以及与鱼油、其他动物脂肪和化学改性动物脂肪的区分 |
| `codex-cxs-211-1999` | 标准（`standard`） | Codex Alimentarius，CXS 211-1999，Standard for Named Animal Fats。https://workspace.fao.org/sites/codex/Standards/CXS%20211-1999/CXS_211e.pdf | 仅作负面适用性筛查；不作为海洋哺乳动物身份、组成、工艺或数值来源 |
| `codex-cxs-329-2017` | 标准（`standard`） | Codex Alimentarius，CXS 329-2017，Standard for Fish Oils。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+329-2017%2FCXS_329e.pdf | 确认鱼油适用范围；禁止外推至海洋哺乳动物脂肪和油的负面适用性筛查 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会建议 (EU) 2021/2279，2021-12-15，关于环境足迹方法的使用。https://eur-lex.europa.eu/eli/reco/2021/2279/oj | 生命周期边界、高质量和可核验数据、上游连接、分配层级及披露背景；不提供产品特定数值 |
| `eu-fdm-bat-2019` | 官方指南（`official_guidance`） | 欧盟委员会实施决定 (EU) 2019/2031，食品、饮料和乳制品行业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | 仅用于范围限制：不涉及动物副产品初级生产，例如熬炼和脂肪熔炼；不得在本 PCR 套用 FDM BAT-AEL 或环境绩效值 |
