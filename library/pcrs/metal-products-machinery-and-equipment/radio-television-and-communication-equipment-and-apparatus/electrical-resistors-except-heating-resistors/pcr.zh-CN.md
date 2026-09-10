---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-resistors-except-heating-resistors
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电阻器（加热电阻器除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 47120 成品电阻器的前景生产，包括固定电阻器以及变阻器和电位器等可变电阻器，但不包括加热电阻器。当产品的主要功能为提供电阻或可调电阻时，本 PCR 覆盖分立式表面贴装、引线式、底盘安装式、预调式、单圈和多圈产品。

生产路线从申报工厂门接收外购构成材料、零件和同类别中间产品开始，到经测试、标识并包装的成品电阻器在工厂门交付为止。生产者必须声明实际代表的电阻器系列和技术；未实际发生的路线特定工序不得按已发生建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-resistors-except-heating-resistors |
| classification_refs | CPC 3.0 `47120`，电阻器（加热电阻器除外），精确对应 |
| covered_products | 成品固定电阻器和电阻网络；薄膜、箔式、合成式、线绕式和金属条式电阻技术；包括变阻器、电位器、预调式和多圈式在内的可变电阻器 |
| excluded_products | 加热电阻器；未组装的电阻元件或通用电阻及导电材料；半导体器件、电容器和其他更宽泛的电子元件组；主要功能并非电阻器的含电阻器组件；安装、使用、维护和寿命终止活动 |
| representative_product | 符合所声明固定或可变电阻器规格并完成电气测试的成品电阻器 |
| production_route | 工厂生产组合，涵盖材料准备、电阻元件成形、端接和机械装配，以及精整、测试、标识和包装；不适用的路线步骤须声明 |
| market_state | 在工厂门完成制造、检验放行并可销售的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有所声明产品与性能规格的成品电阻器（加热电阻器除外） |
| How much | 1 kg 合格成品电阻器净质量 |
| How well | 符合所声明的固定或可变类型、技术、电阻值或调节范围、公差、额定耗散功率、温度系数或稳定性等级、端接、壳体或封装及适用电气检验准则 |
| How long or cycle | 在工厂门代表的一个生产批次或报告期生产活动；使用寿命不属于参考数量 |
| reference_flow_link | 功能单位由下述天工产品流和质量参考实现；前景数据包按 1 kg 合格输出归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电阻器（加热电阻器除外） `9bee079d-ab55-44db-b1a4-72d61a856d61` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 固定或可变电阻器系列；电阻元件技术；表面贴装、引线式、底盘安装式、预调式、单圈或多圈形式；电阻值或调节范围；公差；额定耗散功率；温度系数或稳定性等级；端接及壳体或封装；生产地域和期间；生产组合；工厂门；产品净质量；合格判定依据 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品电阻器输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单数量按申报工厂门 1 kg 合格成品净质量归一化；包装单独编制清单，不计入产品净质量。 |
| `piece_to_mass_conversion` | 仅有件数记录的数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用所代表批次的产品特定平均净质量把件数换算为质量；该平均值必须来自有记录的样品实测，并记录样品数量、样品总质量、秤具标识和计算过程。 |
| `wet_or_solution_mass` | 以溶液形式报告的过程化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和浓度；没有明确计算记录时，不得用活性物质质量替代外购溶液总质量。 |
| `internal_rework_mass` | 内部循环的电阻器材料或单元 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将内部返工与外部投入及可销售输出分开追踪，避免重复计算循环质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景生产 | 纳入构成材料和零件的接收与准备、电阻元件成形、端接与机械装配、路线适用的涂覆或封装、电气测试、标识及包装，直至工厂门的合格产品。 | `vishay-fixed-resistor-basics-2008` |
| `boundary_route_declaration` | 所有代表的产品系列 | 声明产品为固定或可变类型，并识别实际技术和形式；仅在存在时纳入触点、滑动端、调节机构、轴、壳体或多圈装配，不得加入未发生的路线步骤。 | `iec-60115-1-2020`; `iec-60393-1-2008`; `vishay-fixed-resistor-basics-2008` |
| `boundary_upstream_links` | 外购产品和服务 | 将外购基材、芯体、电阻材料、线材或箔材、端接和触点材料、壳体、涂料、封装材料、过程化学品、包装、能源载体、水和外部处理服务连接到合适的上游数据集；有供应商初级数据时予以保留。 | `eu-pef-2021-2279` |
| `boundary_direct_releases` | 场址控制的作业 | 纳入所包括过程中实测或按许可证计算的直接大气排放、废水排放和废物，并声明其处理或去向。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 下游和资本活动 | 排除工厂门后的分销、安装、使用、维护和寿命终止。仅在研究方法允许时排除资本品并披露该排除；不得仅因物流数量小而排除材料或能源流。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收的外购构成材料、零件、公用工程以及任何同类别中间电阻器产品 |
| starting_condition_role | 具有上游连接并声明供应商或内部生产状态的门到门前景起始清单 |
| product_classification_scope | CPC 3.0 `47120`，包括固定和可变电阻器，排除加热电阻器 |
| recursive_input_rule | 将同类别电阻器投入作为明确产品投入记录其质量和生产状态；其上游负荷只连接一次，不在同一前景数据包内递归应用本 PCR 重建。 |
| upstream_dataset_requirement | 对所有外购材料投入、公用工程、包装和外部处理服务使用在地域、时间和技术上具有代表性的上游数据集；披露代理数据和数据缺口。 |
| disclosure | 声明产品系列、技术、形式、工厂位置、报告期、所纳入生产阶段、同类别投入、外包步骤、包装基准、排除项和上游数据集选择。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| material_receiving_and_preparation | 材料接收与准备 | required |  | 前景材料准备 | kg 已准备构成材料和零件 |
| resistive_element_formation | 电阻元件成形 | required | 纳入所声明的薄膜、箔式、合成式、线绕式、金属条式或其他合格电阻器路线；仅在实际实施时纳入路线特定的沉积、印刷、压制、绕制、蚀刻、切割和修调作业。 | 前景元件制造 | kg 合格已成形电阻元件 |
| termination_and_mechanical_assembly | 端接与机械装配 | required | 纳入固定电阻器端接和本体装配；对适用的可变电阻器，还须纳入触点、滑动端、调节机构、轴、壳体或多圈装配。 | 前景产品装配 | kg 最终精整和测试前的已装配电阻器 |
| finishing_testing_and_packout | 精整、电气测试、标识与包装 | required | 纳入路线适用的涂覆、封装、固化、电镀、标识、筛选、最终检验和包装。 | 前景精整与放行 | kg 合格成品电阻器 |

### 过程：材料接收与准备（`material_receiving_and_preparation`）

#### 输入

##### 产品流

###### 外购构成材料和零件（`purchased_constituent_materials_and_parts`）

记录进入生产的所有外购基材或芯体、电阻材料、线材、箔材或金属条、端接及触点材料、壳体、调节零件、涂料、封装材料、过程化学品和其他零件。保留产品系列和供应商批次标识。

- 选定流：为每种构成材料或零件选择供应商和材料特定的产品流
- 流属性/单位：质量 / kg
- 数量规则：实测接收或领用质量，并按有记录的退货和库存变化修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 向所纳入生产发出的合格已准备材料和零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_material_records`
- 来源：`vishay-fixed-resistor-basics-2008`
- 数量范围：临时材料投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：kg/kg 合格已准备材料和零件
  - 基准：每 kg 发往生产的合格已准备材料和零件；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 发往生产的已准备材料和零件（`prepared_materials_and_parts`）

记录从接收、准备、混合、切割或配料环节放行至下一纳入过程的已称量材料和零件。保持路线特定材料组可分别识别。

- 选定流：选择材料或零件特定的中间产品流
- 流属性/单位：质量 / kg
- 数量规则：实测发出质量加有记录的已准备库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_material_output`
- 来源：

##### 废物流

###### 拒收来料和准备废物（`receiving_and_preparation_waste`）

按材料和处理去向分别记录离开过程的拒收、溢洒、修边、过期或其他废弃材料。

- 选定流：选择材料和处理特定的废物流
- 流属性/单位：质量 / kg
- 数量规则：实测外运质量或按废物流核对的容器质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发往生产的合格已准备材料和零件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_waste_records`
- 来源：
- 数量范围：临时接收废物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格已准备材料和零件
  - 基准：每 kg 发往生产的合格已准备材料和零件；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：电阻元件成形（`resistive_element_formation`）

#### 输入

##### 产品流

###### 已准备电阻元件材料（`prepared_resistive_element_materials`）

记录所声明路线使用的已准备陶瓷或其他基体、电阻薄膜或浆料成分、合成物料、电阻丝、箔材或金属条。

- 选定流：选择技术特定的已准备材料产品流
- 流属性/单位：质量 / kg
- 数量规则：按材料和生产批次实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格已成形电阻元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_element_material_records`
- 来源：`vishay-fixed-resistor-basics-2008`
- 数量范围：临时元件材料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：kg/kg 合格已成形电阻元件
  - 基准：每 kg 合格已成形电阻元件；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 成形过程电力（`element_formation_electricity`）

记录路线适用的沉积、印刷、压制、固化、绕制、蚀刻、切割、激光修调和机械修调作业的计量电力。

- 选定流：选择地域和电压等级特定的供电流
- 流属性/单位：能量 / kWh
- 数量规则：分表计量；或基于机器运行时间和额定或实测负荷，从经校准共用电表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形电阻元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_element_utility_records`
- 来源：`vishay-fixed-resistor-basics-2008`
- 数量范围：临时成形电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：1000
  - 单位：kWh/kg 合格已成形电阻元件
  - 基准：每 kg 合格已成形电阻元件；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 合格已成形电阻元件（`accepted_formed_resistive_elements`）

记录在路线适用的修调或中间检验后，转移至端接和装配环节的合格已成形元件实测质量。

- 选定流：选择技术特定的已成形电阻元件中间产品流
- 流属性/单位：质量 / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_element_output_records`
- 来源：
- 数量范围：过程定量参考恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：以 1 kg 合格已成形电阻元件作为过程定量参考
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 元件成形废料和残余物（`element_formation_scrap_and_residues`）

按材料组成和处理去向记录边角料、废浆料或溶液、不合格元件、污泥及其他残余物。返回同一过程的材料作为返工追踪，不作为外部废物。

- 选定流：选择材料和处理特定的废物流
- 流属性/单位：质量 / kg
- 数量规则：实测废物运输或容器质量，并与批次废料记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格已成形电阻元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_element_waste_records`
- 来源：
- 数量范围：临时元件废物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格已成形电阻元件
  - 基准：每 kg 合格已成形电阻元件；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 电阻元件成形的直接排放（`element_formation_direct_releases`）

记录路线适用的涂覆、印刷、蚀刻、清洗、干燥、固化、切割和修调作业向空气或水体的实测或许可证计算直接排放；不得用外购化学品质量替代排放量。

- 选定流：选择物质和环境区室特定的基本流
- 流属性/单位：质量 / kg
- 数量规则：实测排放，或根据监测浓度和经处理废气或废水体积计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形电阻元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_element_release_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：临时直接排放筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格已成形电阻元件
  - 基准：每 kg 合格已成形电阻元件；用实测或许可证计算记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：端接与机械装配（`termination_and_mechanical_assembly`）

#### 输入

##### 产品流

###### 用于装配的已成形电阻元件（`formed_elements_for_assembly`）

记录进入端接和装配的合格已成形元件，并保留技术和批次标识。

- 选定流：选择匹配技术的已成形电阻元件中间产品流
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 最终精整和测试前的已装配电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_input_records`
- 来源：
- 数量范围：临时已成形元件投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：kg/kg 已装配电阻器
  - 基准：每 kg 最终精整和测试前的已装配电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 端接、触点和机械零件（`termination_contact_and_mechanical_parts`）

记录端子、引线、端帽、金属化或电镀化学品、导电连接材料及本体或壳体零件。对可变电阻器，在存在时还要记录触点、滑动端、电阻轨、调节机构、轴和多圈零件。

- 选定流：选择零件和材料特定的产品流
- 流属性/单位：质量 / kg
- 数量规则：实测领用质量，或用有记录的产品特定零件质量把件数换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 最终精整和测试前的已装配电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_part_records`
- 来源：`iec-60393-1-2008`; `vishay-fixed-resistor-basics-2008`

###### 装配电力（`assembly_electricity`）

记录本过程实施的焊接、钎焊、软钎焊、压接、紧固、电镀、固化和机械调节所用计量电力。

- 选定流：选择地域和电压等级特定的供电流
- 流属性/单位：能量 / kWh
- 数量规则：分表计量；或基于机器运行时间和额定或实测负荷，从经校准共用电表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 最终精整和测试前的已装配电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_utility_records`
- 来源：
- 数量范围：临时装配电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：1000
  - 单位：kWh/kg 已装配电阻器
  - 基准：每 kg 最终精整和测试前的已装配电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 最终精整和测试前的已装配电阻器（`assembled_resistors`）

记录转移至最终精整和测试环节的已装配固定或可变电阻器实测质量。

- 选定流：选择匹配的已装配电阻器中间产品流
- 流属性/单位：质量 / kg
- 数量规则：实测合格转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_records`
- 来源：
- 数量范围：过程定量参考恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：以 1 kg 已装配电阻器作为过程定量参考
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 装配废料和不合格零件（`assembly_scrap_and_rejected_parts`）

按材料和处理去向记录不合格元件、端接和引线废料、触点和壳体不合格品、连接残余物及电镀废物。

- 选定流：选择材料和处理特定的废物流
- 流属性/单位：质量 / kg
- 数量规则：实测废物质量，并与生产不合格品及外运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 最终精整和测试前的已装配电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_waste_records`
- 来源：
- 数量范围：临时装配废物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 已装配电阻器
  - 基准：每 kg 最终精整和测试前的已装配电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：精整、电气测试、标识与包装（`finishing_testing_and_packout`）

#### 输入

##### 产品流

###### 用于精整的已装配电阻器（`assembled_resistors_for_finishing`）

记录进入路线适用的涂覆、封装、固化、电镀、标识、电气测试和包装环节的已装配固定或可变电阻器。

- 选定流：选择匹配的已装配电阻器中间产品流
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_input_records`
- 来源：
- 数量范围：临时已装配产品投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：20
  - 单位：kg/kg 合格成品电阻器
  - 基准：每 kg 合格成品电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精整、标识和包装材料（`finishing_marking_and_packaging_materials`）

记录路线适用的涂料、封装材料、清漆、标识介质、清洗化学品、载带、卷盘、托盘、袋、纸箱及其他包装，并与产品净质量分开。

- 选定流：选择材料特定的产品流
- 流属性/单位：质量 / kg
- 数量规则：实测领用或采购质量，并按有记录的库存变化和退货修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_material_records`
- 来源：`vishay-fixed-resistor-basics-2008`
- 数量范围：临时精整材料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 合格成品电阻器
  - 基准：每 kg 合格成品电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 精整和测试电力（`finishing_and_test_electricity`）

记录涂覆或封装、固化、标识、电气筛选、检验、搬运和包装设备的计量电力。

- 选定流：选择地域和电压等级特定的供电流
- 流属性/单位：能量 / kWh
- 数量规则：分表计量；或基于机器运行时间和额定或实测负荷，从经校准共用电表进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_utility_records`
- 来源：
- 数量范围：临时精整和测试电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：1000
  - 单位：kWh/kg 合格成品电阻器
  - 基准：每 kg 合格成品电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 合格成品电阻器（`accepted_finished_electrical_resistors`）

记录完成电气测试、检验、标识和放行后的合格输出。将完整前景清单按该输出 1 kg 净质量归一化。

- 选定流：电阻器（加热电阻器除外） `9bee079d-ab55-44db-b1a4-72d61a856d61`
- 流属性/单位：质量 / kg
- 数量规则：实测合格成品净质量；将报告数据集归一化为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品电阻器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_and_qc_records`
- 来源：`iec-60115-1-2020`; `iec-60393-1-2008`
- 数量范围：参考流恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：以 1 kg 合格成品电阻器作为参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 不合格产品和精整废物（`off_specification_product_and_finishing_waste`）

按材料和处理去向记录未内部返工的不合格单元、涂覆和封装残余物、废清洗材料、标识废物和包装废料。

- 选定流：选择材料和处理特定的废物流
- 流属性/单位：质量 / kg
- 数量规则：实测不合格或外运废物质量，并扣除有记录的内部返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_waste_records`
- 来源：
- 数量范围：临时精整废物筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格成品电阻器
  - 基准：每 kg 合格成品电阻器；用采集记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 精整过程直接排放（`finishing_direct_releases`）

记录涂覆、封装、固化、清洗、标识和其他纳入精整作业向空气和水体的实测或许可证计算排放。

- 选定流：选择物质和环境区室特定的基本流
- 流属性/单位：质量 / kg
- 数量规则：实测排放，或根据监测浓度和经处理废气或废水体积计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品电阻器
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_release_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：临时精整排放筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 合格成品电阻器
  - 基准：每 kg 合格成品电阻器；用实测或许可证计算记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可独立计量的产品、生产线或批次 | 只要投入和产出能够分别计量，就应通过细分产品系列、生产线、批次和过程记录避免分配。 | `eu-pef-2021-2279` |
| `allocation_internal_rework` | 内部返工和循环 | 将返工保留在其重新使用的过程内，记录其质量，仅计算返工造成的额外投入、公用工程、直接排放和最终损失；不得将循环质量作为新的外部投入或可销售共产品。 | `eu-pef-2021-2279` |
| `allocation_shared_utilities` | 共用计量和公共服务 | 共用电力、燃料、压缩空气、水及公共处理首先按实测过程消耗分配；无法测量时，使用机器运行时间乘以实测或额定负荷等有记录的因果物理驱动因素。 | `eu-pef-2021-2279` |
| `allocation_co_products` | 联合生产的可销售产品 | 在穷尽细分后，使用反映因果生产关系且有记录的物理关系；若无法建立可辩护的物理关系，则按具有代表性的价格期间进行经济分配并报告敏感性。 | `eu-pef-2021-2279` |
| `allocation_scrap` | 可回收废料和残余物 | 记录到前景边界为止的处理，并披露所用回收或替代约定。没有支配性研究方法和明确证据时，不得赋予避免产品抵扣或零负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receiving_material_records | material_receiving_and_preparation | 外购构成材料和零件 | 采购、接收、领用和库存记录 | 材料或零件标识；供应商；批次；质量或件数；适用时浓度；接收和领用日期；期初和期末库存；退货 | 校准称量，或用有记录的零件质量进行件数换算，并与库存核对 | kg | 每次接收和领用 | 有代表性的报告期，通常至少连续十二个月；更短的生产活动须论证 | 申报制造场址 | 按材料和批次求和；加期初库存并减期末库存和退货；按已准备输出归一化 | 秤具校准；供应商规格；库存核对 |
| cp_prepared_material_output | material_receiving_and_preparation | 发往生产的已准备材料和零件 | 准备和领用记录 | 材料标识；批次；发出质量；已准备库存变化；目标过程 | 校准称量和库存领用记录 | kg | 每批或每次领用 | 与所代表生产相同期间 | 申报制造场址 | 按路线汇总合格发出量和库存变化 | 秤具校准；签发的领用记录 |
| cp_receiving_waste_records | material_receiving_and_preparation | 拒收来料和准备废物 | 废物日志和外运记录 | 废物标识；组成；质量；日期；去向；内部返工状态 | 校准称量或核对容器质量 | kg | 每次废物移动 | 与所代表生产相同期间 | 申报制造场址 | 按废物流汇总外部废物；排除有记录的内部返工 | 废物联单；秤具校准 |
| cp_element_material_records | resistive_element_formation | 已准备电阻元件材料 | 批次领用记录 | 材料标识；批次；领用质量；退回质量；路线；生产批次标识 | 校准称量和批次核对 | kg | 每批 | 与所代表生产相同期间 | 申报场址的元件成形区域 | 按材料和路线汇总净领用质量 | 秤具校准；批次记录 |
| cp_element_utility_records | resistive_element_formation | 成形过程电力 | 分表或设备能源记录 | 电表标识；起止读数；机器标识；运行时间；实测或额定负荷；批次标识 | 优先使用校准分表；否则使用有记录的因果分配 | kWh | 连续、每班或每批 | 与所代表生产相同期间 | 申报场址的元件成形区域 | 读数相减，仅分配有记录的共用消耗 | 仪表校准；分配工作表 |
| cp_element_output_records | resistive_element_formation | 合格已成形电阻元件 | 转移和检验记录 | 批次；技术；毛质量；合格质量；不合格质量；日期 | 转移时校准称量 | kg | 每批 | 与所代表生产相同期间 | 申报场址的元件成形区域 | 按技术汇总合格转移质量 | 秤具校准；检验放行 |
| cp_element_waste_records | resistive_element_formation | 元件成形废料和残余物 | 废料日志、废物联单和库存核对 | 废物标识；组成；质量；日期；去向；返工数量 | 校准称量或容器核对 | kg | 每批和每次外运 | 与所代表生产相同期间 | 申报场址的元件成形区域 | 按废物流汇总外部废物，并移除有记录的返工 | 废物联单；物料平衡核对 |
| cp_element_release_records | resistive_element_formation | 电阻元件成形的直接排放 | 监测和许可证记录 | 物质；环境区室；浓度；废气或废水体积；时间；处理状态 | 直接监测或浓度-体积计算 | kg | 每次监测，且覆盖报告期 | 与所代表生产相同期间 | 申报场址的受控排放点 | 按物质和环境区室计算并汇总排放 | 实验室报告；仪器校准；计算表 |
| cp_assembly_input_records | termination_and_mechanical_assembly | 用于装配的已成形电阻元件 | 转移记录 | 批次；技术；转移质量；日期 | 校准称量 | kg | 每批 | 与所代表生产相同期间 | 申报场址的装配区域 | 按所代表产品系列汇总转移质量 | 秤具校准；转移记录 |
| cp_assembly_part_records | termination_and_mechanical_assembly | 端接、触点和机械零件 | 领用和物料清单记录 | 零件或材料标识；批次；质量或件数；产品特定零件质量；退回数量；产品系列 | 校准称量，或用有记录的样品进行件数到质量换算 | kg | 每批 | 与所代表生产相同期间 | 申报场址的装配区域 | 按零件和产品系列汇总净领用 | 秤具校准；物料清单；抽样记录 |
| cp_assembly_utility_records | termination_and_mechanical_assembly | 装配电力 | 分表或设备能源记录 | 电表标识；读数；机器标识；运行时间；负荷；批次标识 | 优先使用校准分表；否则使用有记录的因果分配 | kWh | 连续、每班或每批 | 与所代表生产相同期间 | 申报场址的装配区域 | 读数相减，仅分配有记录的共用消耗 | 仪表校准；分配工作表 |
| cp_assembly_output_records | termination_and_mechanical_assembly | 最终精整和测试前的已装配电阻器 | 转移和检验记录 | 批次；产品系列；毛质量；合格质量；不合格质量；日期 | 转移时校准称量 | kg | 每批 | 与所代表生产相同期间 | 申报场址的装配区域 | 按产品系列汇总合格转移质量 | 秤具校准；检验放行 |
| cp_assembly_waste_records | termination_and_mechanical_assembly | 装配废料和不合格零件 | 废料日志和废物联单 | 废物标识；组成；质量；日期；去向；返工数量 | 校准称量或容器核对 | kg | 每批和每次外运 | 与所代表生产相同期间 | 申报场址的装配区域 | 按废物流汇总外部废物，并移除有记录的返工 | 废物联单；物料平衡核对 |
| cp_finishing_input_records | finishing_testing_and_packout | 用于精整的已装配电阻器 | 转移记录 | 批次；产品系列；转移质量；日期 | 校准称量 | kg | 每批 | 与所代表生产相同期间 | 申报场址的精整区域 | 按产品系列汇总转移质量 | 秤具校准；转移记录 |
| cp_finishing_material_records | finishing_testing_and_packout | 精整、标识和包装材料 | 领用、采购和库存记录 | 材料标识；批次；领用质量；采购质量；期初和期末库存；退货；包装类型 | 校准称量和库存核对 | kg | 每次领用并在报告期核对 | 与所代表生产相同期间 | 申报场址的精整和包装区域 | 按材料汇总净消耗；包装与产品质量分开报告 | 秤具校准；库存核对 |
| cp_finishing_utility_records | finishing_testing_and_packout | 精整和测试电力 | 分表或设备能源记录 | 电表标识；读数；机器标识；运行时间；负荷；批次标识 | 优先使用校准分表；否则使用有记录的因果分配 | kWh | 连续、每班或每批 | 与所代表生产相同期间 | 申报场址的精整、测试和包装区域 | 读数相减，仅分配有记录的共用消耗 | 仪表校准；分配工作表 |
| cp_final_product_and_qc_records | finishing_testing_and_packout | 合格成品电阻器 | 生产、称量和质量放行记录 | 产品编码；批次；固定或可变系列；技术；形式；电阻值或范围；公差；额定耗散功率；稳定性描述；合格净质量；包装质量；测试状态；日期 | 与电气测试和放行记录关联的校准净质量称量 | kg | 每个放行批次 | 与所代表生产相同期间 | 申报制造场址和工厂门 | 汇总合格产品净质量；所有纳入流按 1 kg 归一化 | 秤具和测试设备校准；批次放行；产品规格 |
| cp_finishing_waste_records | finishing_testing_and_packout | 不合格产品和精整废物 | 不合格、返工和废物外运记录 | 产品或废物标识；组成；质量；返工数量；日期；去向 | 校准称量和不合格品核对 | kg | 每批和每次外运 | 与所代表生产相同期间 | 申报场址的精整和包装区域 | 扣除有记录的内部返工后汇总外部废物 | 不合格品日志；废物联单；物料平衡 |
| cp_finishing_release_records | finishing_testing_and_packout | 精整过程直接排放 | 监测和许可证记录 | 物质；环境区室；浓度；废气或废水体积；时间；处理状态 | 直接监测或浓度-体积计算 | kg | 每次监测，且覆盖报告期 | 与所代表生产相同期间 | 申报场址的受控排放点 | 按物质和环境区室计算并汇总排放 | 实验室报告；仪器校准；计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 所有纳入的清单行 | 归一化数量 = 报告期数量 / 合格成品净质量 × 1 kg | 汇总的协议记录；来自 `cp_final_product_and_qc_records` 的合格产品净质量 | 每 1 kg 合格成品电阻器的数量 | `eu-pef-2021-2279` |
| `convert_count_to_mass` | 仅以件数提供的零件或产品记录 | 质量 = 件数 × 产品特定的实测平均单件质量；平均值为校准样品总质量除以样品件数 | 件数记录；样品件数；校准样品质量 | 材料、零件或合格产品的 kg 数量 |  |
| `calculate_direct_release` | 浓度和体积排放记录 | 排放质量 = 监测浓度 × 经处理废气或废水体积，并进行明确且兼容的单位换算和处理状态声明 | 浓度；流量或体积；监测期间；单位换算 | 排入所声明环境区室的物质 kg 数量 | `eu-pef-2021-2279` |
| `reconcile_process_mass` | 每个过程和报告期 | 质量差异 = 外部材料投入 + 期初在制品 − 合格转移量 − 外部废物 − 期末在制品；内部返工须报告，但在外部平衡中抵消 | 材料、输出、废物、库存和返工协议 | 有记录的物料平衡差异及调查状态 | `eu-pef-2021-2279` |
| `allocate_shared_energy` | 共用电力或燃料计量 | 过程能源 = 共用表消耗 × 本过程有记录的因果驱动因素 / 所有用户相同驱动因素之和 | 仪表读数；运行时间；实测或额定负荷，或其他有论证的物理驱动因素 | 分配给所纳入过程的 kWh 或 MJ | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和生产组合 | 保留产品编码和批次与固定或可变系列、技术、形式、电阻值或范围、公差、额定耗散功率、稳定性描述、端接、壳体或封装及合格结果的关联。 | 产品规格；物料清单；工艺路线单；批次放行记录 |
| `dq_technological_representativeness` | 前景和上游数据 | 前景记录必须代表所声明的电阻器技术和形式；在材料性显著时，上游数据集必须匹配材料等级和生产技术。记录任何代理数据。 | 技术覆盖矩阵；供应商数据；代理理由 |
| `dq_geographical_representativeness` | 公用工程、上游投入和处理 | 使用代表所声明制造场址及供应商或处理地域的数据集和组合；记录不匹配情况。 | 场址地址；供应商来源地；公用工程合同；数据集元数据 |
| `dq_time_representativeness` | 报告期数据 | 优先采用覆盖季节和生产组合变化的连续代表性期间，通常至少连续十二个月；论证更短生产活动并披露数据年龄。 | 报告日历；生产计划；带日期记录 |
| `dq_measurement_and_precision` | 实测质量、能源和排放 | 识别计量设备、校准状态、分辨率、抽样方法和计算步骤，使材料数量和直接排放可复现。 | 校准证书；抽样计划；计算工作簿 |
| `dq_completeness_and_balance` | 所有纳入过程 | 核对材料投入、合格转移、产品、在制品变化、内部返工、废物和直接排放；调查材料差异，并在不使用无记录截断的情况下披露未解决缺口。 | 过程物料平衡；异常日志；完整性审查 |
| `dq_primary_and_secondary_data` | 前景采集和上游连接 | 对直接控制的前景过程使用场址或企业特定初级数据，并记录每个次级数据集的来源、代表性和质量。 | 仪表和生产记录；供应商记录；次级数据集登记；数据质量评级 |
| `dq_restricted_substances` | 投放受监管市场的产品 | 适用时，维护现行材料声明、豁免状态和基于风险的受限物质分析证据；筛查和确证测试必须使用适用的现行 IEC 62321 部分及司法辖区要求。 | 供应商声明；物料清单；豁免登记；认可实验室报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_identity` | 产品类别和参考流 | 所代表输出必须是 CPC 47120 范围内的固定或可变成品电阻器，不得是加热电阻器、通用电阻材料、未组装元件、更宽泛电子元件组合或主要功能为其他用途的含电阻器组件。 | `unsd-cpc-3-0-structure`; `iec-60115-1-2020`; `iec-60393-1-2008` |
| `validate_reference_flow` | 功能单位和定量参考 | 参考输出必须使用产品流 `9bee079d-ab55-44db-b1a4-72d61a856d61`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并精确归一化为 1 kg 合格成品净质量。 |  |
| `validate_required_qualifiers` | 前景数据包元数据 | 第 3 节的每项必需限定信息都必须存在，并与产品、物料清单、路线、测试和放行记录一致。 | `iec-60115-1-2020`; `iec-60393-1-2008` |
| `validate_process_route` | 过程图和清单 | 每个纳入的路线步骤和条件性可变电阻器装配必须匹配所声明产品系列和技术；不得为未发生的作业虚构流，外包作业必须连接并披露。 | `vishay-fixed-resistor-basics-2008` |
| `validate_collection_links` | 采集或计算的清单行 | 每个采集或计算数量必须连接到所列采集协议，并保留规定的原始字段、期间、场址范围、汇总方法和质量证据。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 各过程和完整前景系统 | 必须核对材料投入、合格转移、库存变化、内部返工、产品、废物和直接排放；任何未解决差异都必须定量，并使校验结论为不确定。 | `eu-pef-2021-2279` |
| `validate_allocation` | 共用过程、共产品和可回收废料 | 所应用的细分、因果驱动因素、分配基准、价格期间、回收约定和敏感性必须符合第 7 节，并在相关处披露。 | `eu-pef-2021-2279` |
| `validate_completeness` | 纳入的清单 | 不得仅因数量小而遗漏任何材料、能源、水、直接排放、废物或处理流；所有排除项、数据缺口和代理都必须披露并论证。 | `eu-pef-2021-2279` |
| `validate_restricted_substance_evidence` | 受监管市场合格披露 | 如声称符合受限物质要求，必须记录适用司法辖区、现行豁免、供应商证据、测试方法、实验室、样品、日期和结果；筛查结果不得表述为普遍法律合规。 | `eu-rohs-2011-65-eu`; `iec-62321-series` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品系统；单元过程或聚合过程数据集 |
| downstream_use | 前景数据包；process；lifecyclemodel；在范围匹配条件下的比较或非比较 LCA |
| allowed_use | 当产品系列、技术、形式、性能限定信息、地域、期间、生产组合和工厂门与数据相符时，用于成品电阻器（加热电阻器除外）的生产 |
| excluded_use | 加热电阻器；原始或未组装电阻材料；通用电子元件；没有附加数据集的下游分销、安装、使用、维护或寿命终止建模 |
| required_metadata | 规范 PCR id；CPC 3.0 编码；参考流 UUID；必需限定信息；工厂和地域；报告期；生产组合；过程覆盖；外包步骤；上游数据集；分配和回收约定；合格判定依据 |
| required_quality_disclosure | 协议覆盖；初级数据占比；技术、地域和时间代表性；计量和抽样证据；物料平衡结果；代理；缺口；排除项；分配敏感性；声称合规时的受限物质证据 |
| update_trigger | 产品范围、电阻器技术或形式、工厂或路线、物料清单、能源或处理系统、分配约定、适用法规或标准、天工标识发生变化，或数据早于所声明代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure` | official_guidance | 联合国统计司，《产品总分类》第 3.0 版结构，CPC 47120，2023，https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf，检索于 2026-08-09 | 官方产品类别标识和加热电阻器排除范围 |
| `iec-60115-1-2020` | standard | IEC 60115-1:2020，电子设备用固定电阻器——第 1 部分：总规范，https://webstore.iec.ch/en/publication/28476，检索于 2026-08-09 | 固定电阻器范围、术语、性能限定信息、检验和测试背景 |
| `iec-60393-1-2008` | standard | IEC 60393-1:2008，电子设备用电位器——第 1 部分：总规范，https://webstore.iec.ch/en/publication/2017，检索于 2026-08-09 | 可变电阻器和电位器范围、形式、术语、检验和测试背景 |
| `vishay-fixed-resistor-basics-2008` | handbook | Vishay，Basics of Linear Fixed Resistors，技术说明 TN0002，2008-10-23 修订，https://www.vishay.com/docs/28771/basics.pdf，检索于 2026-08-09 | 固定电阻技术系列、材料、成形、端接、修调、涂覆、标识和测试路线证据 |
| `eu-rohs-2011-65-eu` | standard | 关于限制电气电子设备中有害物质的 2011/65/EU 指令，现行合并文本，https://eur-lex.europa.eu/eli/dir/2011/65/2026-07-01/eng，检索于 2026-08-09 | 司法辖区特定的受限物质合格与豁免证据 |
| `iec-62321-series` | standard | IEC 62321 系列，电工产品中某些物质的测定；现行 IEC 62321-3-1:2026 筛查方法页面，https://webstore.iec.ch/en/publication/66313，检索于 2026-08-09 | 基于风险的受限物质筛查和分析方法披露 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于使用环境足迹方法的建议 (EU) 2021/2279 合并文本，https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02021H2279-20211230，检索于 2026-08-09 | 前景初级数据、细分与分配、不得无记录截断、计算、代表性、完整性和数据质量规则 |
