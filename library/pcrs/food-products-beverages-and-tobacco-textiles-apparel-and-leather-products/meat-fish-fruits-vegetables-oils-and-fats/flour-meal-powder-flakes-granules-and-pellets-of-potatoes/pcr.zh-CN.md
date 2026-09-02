---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flour-meal-powder-flakes-granules-and-pellets-of-potatoes
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 马铃薯粉、粗粉、粉末、薄片、颗粒和团粒

## 1. 范围与适用性

本 PCR 适用于在工厂大门处交付、保留加工马铃薯材料身份的马铃薯粉、粗粉、粉末、薄片、颗粒和团粒产品。食品级和明确声明的非食品级产品只有在满足本产品边界时才属于范围内。食品卫生要求仅适用于食品级生产；非食品级数据集应保持非食品边界并声明预期工业用途。

不包括马铃薯淀粉、变性淀粉、鲜马铃薯或仅经保藏的马铃薯、马铃薯预制菜、油炸零食、主要身份并非马铃薯材料的复配产品、动物饲料以及主要由其他作物制成的产品。生产者应声明产品形态、预期用途、配方、生产路线、市场状态，以及产品是成品配料还是中间品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flour-meal-powder-flakes-granules-and-pellets-of-potatoes |
| classification_refs | CPC 3.0：21392，精确范围 |
| covered_products | 主要由马铃薯块茎制成并保留加工马铃薯身份的马铃薯粉、粗粉、粉末、薄片、颗粒和团粒 |
| excluded_products | 马铃薯淀粉或变性淀粉；鲜、冻或仅经保藏的马铃薯；预制菜和油炸零食；非以马铃薯为主的复配产品；动物饲料；主要由其他作物制成的产品 |
| representative_product | 通用的合格马铃薯粉、粗粉、粉末、薄片、颗粒或团粒，并声明所选形态 |
| production_route | 仅声明一条转化路线：熟薯泥干燥成形，或生薯片干燥和粒度加工；所选路线之后进行整理和包装 |
| market_state | 工厂大门处经质量放行的产品；散装或包装；食品级或明确声明的非食品级；声明水分和适用的质量限定条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明形态和等级提供加工马铃薯材料的合格马铃薯粉、粗粉、粉末、薄片、颗粒或团粒 |
| How much | 工厂大门处 1 kg 产品净质量，不含包装、托盘、冰衣和游离液体 |
| How well | 满足生产者对产品形态、水分、粒度或片形、配方、预期用途以及适用时食品级状态的放行规范 |
| How long or cycle | 一个生产批次或生产活动直至质量放行；不规定使用阶段持续时间 |
| reference_flow_link | 功能单位由下列单一 Tiangong 参考产品流的 1 kg 合格产品净质量实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | 马铃薯面粉、粉末、片状、粒状和颗粒状食品 `ab16817e-97bc-46df-99e6-362d7a934676` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；生产路线；预期用途及食品级状态；净质量基准；销售状态湿基水分；适用时添加盐含量或盐度；适用时冰衣状态及扣除冰衣的质量；存在游离液体时的沥干质量基准；配方及留在产品中的加工助剂；包装状态；放行规范 |

Tiangong 流是精确的通用 CPC 21392 产品流。具体数据包应在元数据、过程说明、参考流备注或等效字段中声明全部必需限定信息。冰衣和沥干质量对这类干制品通常不适用；仍应明确标为不适用，或在实际存在时按规定的扣除质量基准测量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有结果均归一化到工厂大门处 1 kg 经质量放行的产品净质量。 |
| `net_product_mass` | 参考产品和批次得率 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量不含包装、托盘、冰衣和游离液体；存在游离液体时同时记录毛质量和沥干质量，并以沥干质量作为参考数量。 |
| `moisture_basis` | 产品和马铃薯材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和百分比 | 按销售状态湿基质量百分比报告水分并保留取样方法；干物质等于净质量乘以一减水分质量分数。 |
| `salt_and_glaze_condition` | 添加盐、盐水、冰衣或游离液体的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和百分比 | 声明添加盐含量或实测盐度，并在适用时单独披露扣除冰衣或沥干后的质量；不得把被扣除的冰衣或游离液体计入 1 kg 参考数量。 |
| `route_exclusivity` | 转化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同质产品批次仅启用一条转化路线；同一产出不得叠加熟薯泥路线和生薯片路线清单。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料马铃薯块茎在前景设施大门处接收，并声明供应商、产地、批次质量和验收状态 |
| starting_condition_role | 进入直接控制的接收和加工系统的外购来源材料 |
| product_classification_scope | CPC 3.0 代码 21392 所代表语义产品边界内的马铃薯粉、粗粉、粉末、薄片、颗粒和团粒 |
| recursive_input_rule | 若使用同类别合格马铃薯产品作为投入，应将其保留为可见的外购产品投入并关联上游数据集，前景核算从其接收开始，不在本数据包中重建其上游生产 |
| upstream_dataset_requirement | 原料马铃薯、配料、能源载体、供水、包装及其他外购投入应关联在地理和技术上具有代表性的上游数据集 |
| disclosure | 声明产品形态、所选路线、起始材料状态、食品级或非食品级状态、设施和地域、时间覆盖、截断项、排除操作及是否计入包装 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 所有合格路线 | 纳入接收、检验、清洁和制备、恰好一条转化路线、整理、质量放行、实际发生的包装、直接使用的公用工程、直接排放、废水、不合格品和废物，直至工厂大门。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入 | 保持外购投入可见并关联有代表性的上游数据集；场址记录存在时，不得用通用数量替代前景一次数据。 | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 转化路线 | 每个同质批次选择熟薯泥路线或生薯片路线之一；只有将物理分离的产品数量建模为独立批次或加权数据集时，组合清单才符合要求。 |  |
| `boundary_grade_condition` | 预期用途 | 仅对食品级生产应用 Codex 食品卫生控制。非食品级产品应声明工业预期用途，并排除仅用于食品的卫生、配料和食品接触假设，除非这些活动实际发生。 | `codex-cxc-1-1969` |
| `boundary_packaging` | 包装产品 | 纳入用于放行声明产品的初级和次级包装；包装不计入 1 kg 产品净质量，并披露被排除的三级运输包装。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

以下所有 `reasoned_estimate` 范围都是暂定筛选校验范围，不是生产默认值或最终允许范围。它们仅在缺乏代表性前景数据时适用；当至少三个代表性生产活动、一个完整代表性生产期或更强的可转移产品特定证据可用时，应予替换。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `potato_receiving_preparation` | 马铃薯接收与制备 | required | 从设施大门接收到制备后的马铃薯材料，始终纳入 | 前景制备 | 每 kg 合格产品净质量 |
| `cooked_mash_conversion` | 熟薯泥干燥与成形 | conditional | 仅当声明路线在干燥和成形前对马铃薯进行蒸煮或制泥时纳入；同一同质批次与 `raw_piece_conversion` 互斥 | 前景转化 | 每 kg 本路线合格产品净质量 |
| `raw_piece_conversion` | 生薯片干燥与粒度加工 | conditional | 仅当声明路线先干燥马铃薯片、再制粉、制粒或压团时纳入；同一同质批次与 `cooked_mash_conversion` 互斥 | 前景转化 | 每 kg 本路线合格产品净质量 |
| `finishing_packaging` | 整理、质量放行与包装 | required | 始终纳入；仅在放行产品有包装时记录包装投入 | 前景整理 | 1 kg 合格产品净质量 |

### 过程：马铃薯接收与制备（`potato_receiving_preparation`）

#### 输入

##### 产品流

###### 验收合格的原料马铃薯（`raw_potatoes`）

记录跨越设施大门的合格马铃薯块茎，包括供应商批次、接收质量、验收状态以及可用时的水分或固形物信息。

- 选定流：Raw potatoes
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配给生产批次的实测验收合格原料马铃薯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_quality`
- 数量范围：暂定原料马铃薯投入筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏代表性路线得率记录时适用；取得三个代表性生产活动或更强产品特定证据后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用水（`preparation_water`）

记录用于清洗、去皮辅助、切分或其他制备操作的计量或核算用水。

- 选定流：过程用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于该批次的实测制备用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_resources`
- 数量范围：暂定制备用水筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 产品净质量
  - 基准：仅在无代表性仪表核算时适用；当计量数据覆盖所选制备技术时替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用电（`preparation_electricity`）

记录输送、清洗、分选、去皮、切分和直接控制的制备设备用电。

- 选定流：Electricity, supplied to facility
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或设备负荷乘运行时间并与批次核算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_resources`
- 数量范围：暂定制备用电筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 产品净质量
  - 基准：仅在缺乏路线分表数据时适用；取得代表性计量或经核验设备记录后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后的马铃薯材料（`prepared_potato_material`）

记录转入所选转化路线的实测制备后马铃薯质量，并关联批次水分或固形物信息。

- 选定流：Prepared potato material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入恰好一条所选转化路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定制备材料质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏代表性制备得率时适用；实测投入、不合格品和转移质量对代表性生产活动实现闭合后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 马铃薯不合格品和制备残余物（`preparation_rejects`）

当处理或去向不同时，分别记录带土不合格品、薯皮、修整料和不合格马铃薯材料。

- 选定流：Potato preparation residues
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测残余物和不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定制备残余物筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 产品净质量
  - 基准：仅在无称量记录时适用；取得按去向记录并闭合制备质量平衡后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开前景边界的废水数量和处理去向，不得重复计算产品或残余物中保留的水。

- 选定流：Wastewater from potato preparation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于批次的计量排放量或用水平衡核算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- 数量范围：暂定制备废水筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 产品净质量
  - 基准：仅在无排放计量或用水平衡时适用；以代表性实测排放数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：熟薯泥干燥与成形（`cooked_mash_conversion`）

#### 输入

##### 产品流

###### 熟薯泥路线的制备后马铃薯投入（`wet_route_feed`）

仅记录进入本路线蒸煮、制泥、干燥、压片、制粒或压团操作的制备后马铃薯材料。

- 选定流：Prepared potato material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从制备过程转入本路线的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定熟制路线投入筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏代表性熟制路线得率时适用；投入、产品、水损失和残余物对代表性生产活动闭合后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 熟制路线过程热（`wet_route_heat`）

记录蒸煮和干燥使用的外购蒸汽、热或燃料；场内燃烧燃料时，还应依据实测燃料组成或适用排放记录记录直接烟气排放。

- 选定流：Process heat or fuel, route-specific
- 流属性/单位：Energy / MJ
- 数量规则：计量热量、蒸汽焓计算或实测燃料用量折算的能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定熟制路线热耗筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ/kg 产品净质量
  - 基准：仅在缺乏技术特定热量记录时适用；以代表性蒸汽、热或燃料计量及经核验换算因子替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 熟制路线用电（`wet_route_electricity`）

记录所选路线蒸煮辅助、制泥、输送、干燥辅助、压片、制粒、压团和除尘用电。

- 选定流：Electricity, supplied to facility
- 流属性/单位：Energy / kWh
- 数量规则：分表电量或设备负荷和运行时间核算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定熟制路线用电筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 产品净质量
  - 基准：仅在无路线分表或经核验设备记录时适用；以代表性熟制路线用电记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 熟制路线马铃薯中间品（`wet_route_intermediate`）

记录转入整理过程的干燥成形马铃薯中间品，并记录转移时的产品形态和水分。

- 选定流：Cooked-route potato intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入整理过程的实测中间品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定熟制路线中间品得率校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏实测整理得率时适用；中间品和最终产品质量覆盖代表性生产活动后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 熟制路线废水和不合格品（`wet_route_waste`）

在可行时按实测质量和处理去向分别记录路线废水、不合格薯泥、细料和不合格品。

- 选定流：Cooked-route wastewater and rejects
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向实测废水和不合格品数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定熟制路线废物筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏路线排放和不合格品测量时适用；以按去向实测记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 熟制路线干燥蒸发到空气的水（`wet_route_water_to_air`）

根据实测投入和产品水分及核算用水计算进入空气的水，不得作为化石二氧化碳或与废水重复计算。

- 选定流：水，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：利用实测质量和水分分数计算用水平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 熟薯泥路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_route_records`
- 数量范围：暂定蒸发水质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏经验证的水分和质量平衡时适用；以代表性实测数据计算的生产活动值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：生薯片干燥与粒度加工（`raw_piece_conversion`）

#### 输入

##### 产品流

###### 生薯片路线的制备后马铃薯投入（`dry_route_feed`）

记录进入干燥及后续制粉、研磨、压片、制粒或压团的制备后马铃薯片。

- 选定流：Prepared potato material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从制备过程转入本路线的实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定生薯片路线投入筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏代表性生薯片路线得率时适用；投入、产品、水损失和残余物对代表性生产活动闭合后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生薯片路线过程热（`dry_route_heat`）

记录干燥和热调质使用的外购热或燃料；场内燃烧应另行记录直接排放。

- 选定流：Process heat or fuel, route-specific
- 流属性/单位：Energy / MJ
- 数量规则：计量热量或实测燃料用量折算的能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定生薯片路线热耗筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ/kg 产品净质量
  - 基准：仅在缺乏技术特定热量记录时适用；以代表性计量热量或燃料数据及经核验换算因子替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生薯片路线用电（`dry_route_electricity`）

记录输送、干燥辅助、制粉、筛分、压片、制粒、压团和除尘用电。

- 选定流：Electricity, supplied to facility
- 流属性/单位：Energy / kWh
- 数量规则：分表电量或设备负荷和运行时间核算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定生薯片路线用电筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh/kg 产品净质量
  - 基准：仅在无路线分表或经核验设备记录时适用；以代表性生薯片路线用电记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生薯片路线马铃薯中间品（`dry_route_intermediate`）

记录转入整理过程的干燥和粒度加工后马铃薯中间品，包括转移时的形态和水分。

- 选定流：Raw-piece-route potato intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入整理过程的实测中间品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定生薯片路线中间品得率校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏实测整理得率时适用；中间品和最终产品质量覆盖代表性生产活动后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 生薯片路线不合格品和细料（`dry_route_rejects`）

按去向分别记录不合格薯片、制粉不合格品以及回收或弃置的细料。

- 选定流：Raw-piece-route rejects and fines
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按再利用、回收或处理去向实测不合格品和细料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定生薯片路线不合格品筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏按去向记录时适用；以实测生产活动记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 生薯片干燥蒸发到空气的水（`dry_route_water_to_air`）

根据实测投入和产品水分计算进入空气的水；被捕集粉尘或直接燃烧排放跨越边界时应另行记录。

- 选定流：水，排入空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：利用实测质量和水分分数计算用水平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定蒸发水质量平衡校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏经验证的水分和质量平衡时适用；以代表性实测数据计算的生产活动值替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未捕集颗粒物（`dry_route_particulate`）

当制粉、筛分或成形产生直接排放时，记录治理后的实测颗粒物空气排放；被捕集粉尘作为废物流或回收产品流。

- 选定流：Particulate matter, to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测出口浓度乘实测气体流量和运行时间，或经评审的场址特定估算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 生薯片路线合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_route_records`
- 数量范围：暂定颗粒物排放筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 产品净质量
  - 基准：仅用于缺乏代表性排放测量时的筛选；以实测或监管评审的场址证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：整理、质量放行与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 所选路线的中间品（`selected_route_intermediate`）

记录来自恰好一条所选转化路线的中间品，并在批次记录中保留路线标识。

- 选定流：Potato product intermediate from selected route
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入整理过程的实测中间品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：暂定整理投入筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏代表性整理得率时适用；中间品和放行产品实测质量对代表性生产活动闭合后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明配料和留存加工助剂（`declared_ingredients`）

记录产品中留存的盐、允许配料或加工助剂；非食品级模型不得加入实际未使用的食品级配料。

- 选定流：Declared ingredient or retained processing aid
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按配料计量的领用量减有记录的退回或损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：暂定声明配料筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在配方和领用记录不可用时适用；取得放行配方和批次领用记录后立即替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料记录初级和次级包装及实测领用数量；包装不属于 1 kg 参考产品质量。

- 选定流：Packaging materials, by material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格包装单元的包装领用量减有记录的未用退回量，再按产品净质量归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：暂定包装筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 产品净质量
  - 基准：仅在无包装物料清单和领用记录时适用；以产品形式特定的包装记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理和包装用电（`finishing_electricity`）

记录实际用于最终制粉、筛分、混合、团聚、压团、质量放行辅助和包装的电力。

- 选定流：Electricity, supplied to facility
- 流属性/单位：Energy / kWh
- 数量规则：分表电量或设备负荷和运行时间核算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：暂定整理用电筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：5
  - 单位：kWh/kg 产品净质量
  - 基准：仅在无整理和包装计量数据时适用；以代表性技术特定记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经质量放行的参考产品（`reference_product_output`）

这是精确的通用 Tiangong CPC 21392 产品流。记录带全部必需限定信息的 1 kg 产品净质量，不含包装、冰衣和游离液体。

- 选定流：马铃薯面粉、粉末、片状、粒状和颗粒状食品 `ab16817e-97bc-46df-99e6-362d7a934676`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考产出 1 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：精确参考流合规区间
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：扣除包装、冰衣和游离液体后的精确产品净质量参考数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 整理不合格品和包装废物（`finishing_waste`）

按去向分别记录不合格产品、未返回产品的捕集细料和包装废物；内部返工不得作为新投入和新产出重复计算。

- 选定流：Finishing rejects and packaging waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向实测废物及不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 数量范围：暂定整理废物筛选校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 产品净质量
  - 基准：仅在缺乏按去向整理和包装废物记录时适用；以实测生产活动记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 路线、批次和可分离操作 | 首先按设施、生产线、路线、产品批次和直接计量操作细分记录，使负荷保持因果关联，并在可行时避免分配。 | `eu-pef-2021-2279` |
| `allocation_internal_rework` | 内部返工 | 内部返工保留在前景质量平衡内；除非其作为有记录的共产品跨越系统边界，不得单独给予替代产品抵扣。 | `eu-pef-2021-2279` |
| `allocation_co_products` | 可销售共产品 | 细分不能解决共同负荷时，仅在能反映基础因果关系的情况下采用实测干质量等物理关系；否则采用有记录的经济关系并报告敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物和可回收残余物 | 一致报告去向、处理和所选系统模型中的抵扣；不得把同一残余物同时作为已分配共产品和未分配废物。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_quality` | `potato_receiving_preparation` | 验收原料马铃薯和起始状态 | 地磅、接收、供应商和质量记录 | supplier; origin; lot_id; gross_mass; tare_mass; accepted_mass; rejection_mass; moisture_or_solids; acceptance_result | 校准地磅或秤，并进行代表性质量取样 | kg; percent | 每个接收批次 | 代表性生产期，通常至少 12 个月；季节性生产覆盖全部生产活动 | 可归属于声明设施和产品的全部供应批次 | 按批次汇总验收质量，保留加权质量结果后再归一化 | 校准记录；取样方法；供应商和批次追溯；验收记录 |
| `cp_preparation_resources` | `potato_receiving_preparation` | 水和电力投入 | 仪表、账单和设备日志 | meter_start; meter_end; allocation_period; production_time; equipment_load; lot_output | 优先直接计量，否则核算账单或经核验的负荷-时间计算 | kg water; kWh | 每批次或最短代表性计量间隔 | 与产品产出相同期间 | 直接控制的制备操作 | 扣除无关使用，仅对不可避免的共享总量按披露基准分配，并归一化到放行产品净质量 | 仪表标识；校准或账单核算；运行日志 |
| `cp_preparation_outputs` | `potato_receiving_preparation` | 制备后材料、残余物和废水 | 转移秤、废物票据和排放计量 | prepared_mass; prepared_moisture; residue_mass_by_destination; wastewater_volume_or_mass; lot_id | 校准秤及排放计量，或闭合用水平衡 | kg; percent | 每批次或生产活动 | 与关联投入记录相同期间 | 声明产品的全部制备产出 | 核算马铃薯和水投入与转移料、残余物、废水及保留或蒸发水 | 秤校准；去向票据；用水平衡闭合 |
| `cp_wet_route_records` | `cooked_mash_conversion` | 熟制路线投入、公用工程、产出和用水平衡 | 批次单、秤、仪表、燃料记录、水分检测和废物记录 | route_id; feed_mass; feed_moisture; steam_or_fuel; electricity; intermediate_mass; product_moisture; wastewater; rejects; operating_time | 批次计量、直接计量和代表性水分检测 | kg; percent; MJ; kWh | 每批次或最短代表性计量间隔 | 声明期间的全部熟制路线生产活动 | 仅熟薯泥路线 | 核算质量、水分、能源、废物和产出，仅归一化到本路线产品 | 路线锁定；仪表和秤记录；检测方法；质量和用水平衡闭合 |
| `cp_dry_route_records` | `raw_piece_conversion` | 生薯片路线投入、公用工程、产出、水、不合格品和颗粒物 | 批次单、秤、仪表、水分检测、废物记录和排放监测 | route_id; feed_mass; feed_moisture; heat_or_fuel; electricity; intermediate_mass; product_moisture; rejects; captured_dust; outlet_concentration; gas_flow; operating_time | 批次计量、直接计量、水分检测，以及发生排放时的场址排放测量 | kg; percent; MJ; kWh; concentration; gas volume | 每批次；排放按适用监测频率 | 声明期间的全部生薯片路线生产活动 | 仅生薯片路线 | 核算质量、水分、能源、废物、产出和实测排放，仅归一化到本路线产品 | 路线锁定；校准；检测方法；废物票据；监测记录；质量和用水平衡闭合 |
| `cp_finishing_records` | `finishing_packaging` | 中间品、配料、包装、电力、放行产品和废物 | 批次配方、领用、秤、仪表、包装物料清单、放行和废物记录 | route_id; intermediate_mass; ingredient_issue_and_return; packaging_issue_and_return; electricity; gross_product_mass; net_product_mass; moisture; salt_or_salinity; glaze_mass; drained_mass; rejects; release_status | 校准秤、配方核算、直接计量或经核验的负荷-时间记录及质量检测 | kg; percent; kWh | 每个整理批次或生产活动 | 声明期间的全部放行批次 | 声明产品的全部整理和包装操作 | 纳入放行批次和可归属不合格品，从产品净质量中扣除包装及适用的冰衣或游离液体，并归一化到放行净质量 | 配方批准；包装规范；校准；检测方法；放行和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 放行产品 | 参考净质量等于灌装后产品系统毛质量减包装、托盘、适用冰衣和游离液体；存在液体时使用实测沥干产品质量。 | 毛质量；皮重和包装质量；冰衣质量；沥干质量；放行状态 | kg 合格产品净质量 |  |
| `calc_dry_matter` | 马铃薯、中间品和产品 | 干物质等于实测质量乘以一减湿基水分分数；参考基准仍保留实测销售状态质量。 | 实测质量；湿基水分百分比 | kg 干物质和 kg 销售状态质量 |  |
| `calc_route_normalization` | 每个同质路线批次 | 将可归属投入、废物和直接排放除以相同路线和期间的放行产品净质量；不得在路线特定归一化前合并路线总量。 | 带路线标识的清单；放行产品净质量 | 各路线每 kg 产品净质量清单 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每个过程和批次 | 核算实测投入与产品、废物、保留水、蒸发水和库存变化；超过设施记录测量不确定度的实质性不平衡应调查。 | 投入和产出质量；水分；库存变化 | 披露的质量和用水平衡 | `eu-pef-2021-2279` |
| `calc_shared_burden` | 不可避免的共享操作 | 应用第 7 节分配层级，保留所选因子和基准；采用经济回退时报告敏感性。 | 共享负荷；共产品数量；物理或经济因子 | 各产品分配后清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 全部批次 | 保留供应商、马铃薯产地、设施、产品形态、路线、配方、预期用途、等级和批次直至放行的关联。 | 接收、批次、配方和放行记录；CPC 身份依据 `unsd-cpc-3-0-21392` |
| `dq_measurement` | 质量、水分、盐度、能源、水和排放 | 使用经校准或核验的仪器，并保留检测方法、仪表边界、换算因子以及不确定度或核算证据。 | 校准、实验室、仪表、账单核算和监测记录 |
| `dq_temporal_coverage` | 前景清单 | 覆盖有代表性的生产期，并披露季节性、停机、异常批次及任何取样或外推。 | 与 `eu-pef-2021-2279` 一致的期间覆盖报告 |
| `dq_completeness` | 过程清单 | 核算所选路线的材料、水、能源、包装、废物和直接排放；记录排除项并闭合质量和用水平衡。 | 与 `eu-pef-2021-2279` 一致的平衡工作表和完整性审查 |
| `dq_food_grade_condition` | 仅食品级批次 | 保留适用于食品生产的卫生控制和追溯证据；非食品级批次不得声称符合 Codex。 | 以 `codex-cxc-1-1969` 为指导的食品安全计划和记录 |
| `dq_estimate_replacement` | 暂定范围 | 识别每个用于筛选的 `reasoned_estimate`，并在激活前以代表性前景证据或经评审的可转移证据替换，除非审查者明确接受继续暂定使用。 | 范围替换记录和方法审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_category_identity` | 产品身份 | 确认产品主要为一种范围内形态的加工马铃薯材料，且不是马铃薯淀粉、变性淀粉、预制菜、零食、饲料或其他排除产品。 | `unsd-cpc-3-0-21392` |
| `validation_reference_flow` | 参考流 | 确认产出使用产品流 `ab16817e-97bc-46df-99e6-362d7a934676`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，且恰好为 1 kg 合格产品净质量。 |  |
| `validation_mass_qualifiers` | 产品放行 | 要求产品形态、路线、预期用途、净质量基准、水分、适用的盐或盐度、适用的扣除冰衣或沥干质量、配方、包装状态和放行规范；不适用项应明确标注。 |  |
| `validation_route_exclusivity` | 过程图 | 确认每个同质批次恰好启用一条转化路线，未启用路线的投入、产出和负荷为零而不是合并。 |  |
| `validation_balance_and_inventory` | 前景清单 | 确认每个必需过程均有记录，全部外购投入有关联上游数据集，废物有去向，发生直接排放时已报告，并已核算路线特定的质量和用水平衡。 | `eu-pef-2021-2279` |
| `validation_grade_boundary` | 预期用途 | 确认食品级批次保留适用卫生证据，非食品级批次明确保持非食品边界且不假定仅用于食品的控制。 | `codex-cxc-1-1969` |
| `validation_provisional_ranges` | 推理估算 | 所有推理范围仅作为筛选发现；当代表性生产活动或更强可转移证据可用时，应替换或取得审查者明确接受。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明合格马铃薯产品的前景数据包，以及单元过程或汇总的工厂大门数据集 |
| downstream_use | 当地域、技术、路线、等级和产品形态具有代表性时，可在 process 和 lifecyclemodel 投影中作为 secondary_dataset 或 background_dataset 使用 |
| allowed_use | 对具有完整限定信息和已披露分配的声明马铃薯粉、粗粉、粉末、薄片、颗粒或团粒进行工厂大门建模 |
| excluded_use | 马铃薯淀粉或变性淀粉；鲜马铃薯或仅经保藏的马铃薯；预制食品或零食；动物饲料；其他作物产品；未披露的互斥路线混合；无理由跨食品级和非食品级边界替代 |
| required_metadata | PCR id；CPC 引用；Tiangong 参考流 UUID；产品形态；路线；设施和地域；预期用途和等级；配方；适用的净质量、水分、盐或盐度、冰衣及沥干质量限定信息；时间覆盖；分配；上游关联；包装状态；放行规范 |
| required_quality_disclosure | 一次数据占比；仪表和秤质量；取样和检测方法；质量和用水平衡；路线覆盖；分配敏感性；排除项；废物去向；直接排放方法；剩余推理估算及其替换状态 |
| update_trigger | 产品形态、路线、技术、配方、预期用途、放行规范、水分或质量基准、包装、分配、设施代表性、来源规则、Tiangong 身份发生变化，或获得可替换推理估算的证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21392` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版，代码 21392，“Flour, meal, powder, flakes, granules and pellets of potatoes”；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；访问日期 2026-08-11 | 精确类别身份及覆盖产品形态 |
| `codex-cxc-1-1969` | 标准（`standard`） | Codex Alimentarius，CXC 1-1969，General Principles of Food Hygiene；https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/；访问日期 2026-08-11 | 条件适用的卫生、追溯和食品级数据质量规则；不用于非食品级生产 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279；https://eur-lex.europa.eu/eli/reco/2021/2279/oj；访问日期 2026-08-11 | 生命周期清单边界、一次数据优先、分配层级、归一化、完整性和数据质量披露 |
