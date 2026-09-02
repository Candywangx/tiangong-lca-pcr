---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-containing-85-or-more-by-weight-of-wool-not-put-up-for-retail-sale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含羊毛重量达到或超过 85%、非供零售的羊毛纱

## 1. 范围与适用性

本 PCR 适用于羊毛质量分数至少为 85%、以非零售形态离开纱厂的工业羊毛纱门到门前景数据包。范围覆盖从已声明的备纺羊毛起始状态，经纤维准备、粗梳或按路线适用的精梳和牵伸、纺纱、络筒、最终调湿及工业包装的粗纺和精纺路线。

数据包应区分粗纺和精纺路线，并说明起始状态是已洗羊毛、羊毛毛条还是另一种具体识别的备纺羊毛投入。原毛洗涤、纤维染色、纱线染色、织造、针织、服装制造、使用和生命终结不在默认前景边界内。若报告场址实施任何被排除活动，应显式增加相应过程及每一项原子交换，不得将其隐藏在纺纱汇总项中。

本 PCR 不覆盖羊毛质量分数低于 85% 的纱、零售纱线包装、缝纫线、主要由其他动物毛制成的纱或成品织物。只有在满足类别阈值时才允许加入其他纤维，且前景数据包应将每一种其他纤维作为独立产品投入识别和编制清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-containing-85-or-more-by-weight-of-wool-not-put-up-for-retail-sale |
| classification_refs | CPC 3.0：26320，精确语义参考 |
| covered_products | 羊毛质量分数至少 85%、以非零售形态供应的单纱、股线或缆线工业羊毛纱 |
| excluded_products | 羊毛质量分数低于 85% 的纱；零售纱线包装；缝纫线；主要由羊毛以外细毛或粗毛制成的纱；机织、针织、簇绒或其他成品织物 |
| representative_product | 羊毛质量分数至少 85%、为工业交付完成卷绕的散装成品羊毛纱 |
| production_route | 从备纺羊毛投入，经纺纱、络筒、调湿和工业包装的已声明粗纺或精纺路线 |
| market_state | 纱厂门口、非零售工业纱，并声明纤维组成、染色状态、线密度、捻向和捻度、股数、卷绕形式及调湿状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适用于已声明下游织造、针织或其他纺织转换的工业羊毛纱 |
| How much | 处于已声明调湿状态的 1 kg 成品纱 |
| How well | 羊毛质量分数至少 85%，并符合已声明的线密度、捻向和捻度、股数、染色状态、卷绕形式及质量规范 |
| How long or cycle | 在纱厂门口计量的一个完整生产批次或生产周期 |
| reference_flow_link | wool_yarn_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 含羊毛重量达85%或85%以上的羊毛纱，不供零售 `10c7de33-bef0-4310-98e7-734d8e2e4c9f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 羊毛质量分数；粗纺或精纺路线；原生、再生或混合羊毛原料；纤维来源和供应商；染色或未染色状态；以 tex 表示的线密度；捻向和捻度；股数；卷绕形式；含湿或调湿状态；场址；地理范围；生产期间 |

构建前景数据包时，所有必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息将使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 最终参考纱及所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在已声明调湿状态下计量合格成品纱质量，并用同一状态进行批次归一化；披露任何水分修正。 |
| yarn_linear_density | 最终参考纱 | Linear density | tex | 以 tex 报告纱线线密度，或采用与 ISO 1144 一致且有文件记录的换算将已声明支数制转换为 tex。 |
| packaged_product_separation | 最终纱和工业包装 | Mass | kg | 将纱线净质量与纸管、纸箱及其他逐项识别的包装组件质量分开报告。 |
| electricity_energy | 电力交换 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留以 kWh 计的电表读数；如采用其他能量单位，应记录换算并保留已核验的低于 1 kV 用户端消费混合身份。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在纱厂接收的已洗羊毛、羊毛毛条或另一种具体命名的备纺羊毛投入 |
| starting_condition_role | 上游产品投入；此前养殖、洗毛、炭化、染色或制条负荷由供应商数据集或二手数据集表示 |
| product_classification_scope | 符合 CPC 3.0 代码 26320 的成品纱；分类不能替代已声明的物理产品边界 |
| recursive_input_rule | 已符合本类别的再加工纱应作为一个原子纱线产品投入记录，并关联自身上游数据集；不得在同一前景过程中通过本 PCR 递归展开 |
| upstream_dataset_requirement | 每项跨越前景边界的羊毛、其他纤维、化学品、公用工程和包装投入均需要地理、技术及时间适宜的上游数据集或有文件记录的数据缺口 |
| disclosure | 声明起始材料状态、纤维组成、路线、场内与外包步骤、染色状态、调湿方法、能源供应、废物去向、回收共产品、包装形式、地理范围、场址和生产期间 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_starting_condition | 所有前景数据包 | 从物理声明的备纺羊毛接收点开始，纳入全部场内作业，直至工厂门口合格的非零售纱。 | `bianco-et-al-2023-wool-lca` |
| boundary_route_separation | 粗纺和精纺路线 | 识别路线特定的粗梳、针梳、精梳、牵伸、粗纱、纺纱和络筒步骤；若不报告其按产量加权的份额，不得平均具有实质差异的路线。 | `bianco-et-al-2023-wool-lca` |
| boundary_secondary_fibres | 羊毛含量低于 100% 的纱 | 将每一种非羊毛纤维作为独立、具体命名的产品投入记录，并核验最终纱的羊毛质量分数至少为 85%。 | `unsd-cpc-3-2025` |
| boundary_wet_processing | 场内洗毛、染色、水洗或整理 | 这些活动不在默认边界内；若在场内实施，应将其用水、能源、工艺化学品、废水、废气和废物作为独立原子交换加入，并采用相关纺织 BAT 监测。 | `ec-jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fibre_preparation | 纤维准备、混合及路线特定的粗梳或精梳 | required | 仅纳入报告纱厂实施的作业；若制条或梳理已包含在采购毛条或条子的上游投入中，应作为上游作业披露 | 前景备纺纤维生产 | 转入纺纱的备纺羊毛条 kg |
| spinning_and_winding | 纺纱、按需并捻和络筒 | required | 仅股线或缆线纱纳入并捻；所有报告产品均需纳入纺纱和络筒 | 前景纱线形成 | 转入最终调湿和包装的未调湿散装羊毛纱 kg |
| conditioning_and_packing | 最终调湿和工业包装 | required | 只有直接用水跨越过程边界时才纳入；每个实际包装组件均单独记录 | 前景成品准备 | 处于已声明调湿状态的合格成品羊毛纱 kg |

### 过程：纤维准备、混合及路线特定的粗梳或精梳（`fibre_preparation`）

#### 输入

##### 产品流

###### 接收的已洗羊毛（`scoured_wool_input`）

当已洗、脱脂羊毛作为场内开松、混合或粗梳的备纺起始投入时记录。不得用本行表示含脂原毛。

- 选定流：洗净毛 `1f286780-8831-47b4-88dd-582d6b7f8947`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收质量，并与报告批次库存变动核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_materials`
- 来源：`bianco-et-al-2023-wool-lca`

###### 接收的羊毛毛条（`wool_top_input`）

只有采购羊毛毛条作为单独计量的原料跨越前景边界时才记录。检索候选带有不相容的纱线分类，因此其 UUID 保持未解析。

- 选定流：Wool top
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量，并与报告批次库存变动核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_materials`
- 来源：`bianco-et-al-2023-wool-lca`

###### 纤维准备使用的低于 1 kV 电网电力（`fibre_preparation_electricity_input`）

记录本过程中开松、混合、粗梳、针梳、精梳、牵伸、粗纱、抽风及可直接归属辅助设备的耗电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：过程分表读数或有文件记录的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_energy`
- 来源：`bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入纺纱的备纺羊毛条（`prepared_wool_sliver_output`）

记录离开纤维准备过程的单一备纺羊毛条中间产品。在批次记录中保留粗纺或精纺路线身份。

- 选定流：Prepared wool sliver
- 流属性/单位：Mass / kg
- 数量规则：过程交接点的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_materials`
- 来源：`bianco-et-al-2023-wool-lca`

##### 废物流

###### 纤维准备产生的羊毛纤维废物（`fibre_preparation_waste_output`）

记录开松、粗梳、精梳及相关准备过程中清除的实测羊毛纤维废物。披露其回用、出售、处理或处置去向。

- 选定流：Wool fibre preparation waste
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_waste`
- 来源：`bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### 基本流

###### 经城市空气高架源排放的 PM10（`fibre_preparation_pm10_output`）

只有纤维准备的有组织排放进入已核验的城市空气高架源环境舱时才记录 PM10。实际接收环境舱不同时应使用另一条原子基本流。

- 选定流：颗粒物 (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放质量，或根据风量和浓度记录进行有文件依据的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的备纺羊毛条
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fibre_air_emissions`
- 来源：`eu-textiles-bat-2022`

### 过程：纺纱、按需并捻和络筒（`spinning_and_winding`）

#### 输入

##### 产品流

###### 从纤维准备接收的备纺羊毛条（`prepared_wool_sliver_input`）

记录从上一前景过程转入的同一物理备纺羊毛条。

- 选定流：Prepared wool sliver
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，并与 prepared_wool_sliver_output 核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_materials`
- 来源：`bianco-et-al-2023-wool-lca`

###### 纺纱和络筒使用的低于 1 kV 电网电力（`spinning_electricity_input`）

记录纺纱、按需并捻、络筒、抽风、可归属本过程的压缩空气产生及辅助设备耗电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：过程分表读数或有文件记录的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_energy`
- 来源：`bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

###### 矿物油基羊毛纺纱润滑剂（`spinning_lubricant_input`）

只有实际投加矿物油基羊毛纺纱润滑剂时才记录。其他润滑剂应作为各自独立的原子产品流增加，不得替换到本行。

- 选定流：Mineral-oil-based wool spinning lubricant
- 流属性/单位：Mass / kg
- 数量规则：报告批次领用量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_materials`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入最终准备的未调湿散装羊毛纱（`unconditioned_wool_yarn_output`）

记录最终调湿和包装前的单一非零售纱线中间产品。其羊毛质量分数应至少为 85%。

- 选定流：Unconditioned bulk wool yarn containing at least 85% wool by mass
- 流属性/单位：Mass / kg
- 数量规则：最终调湿和工业包装前的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_materials`
- 来源：`bianco-et-al-2023-wool-lca`

##### 废物流

###### 纺纱和络筒产生的羊毛纤维废物（`spinning_waste_output`）

只有软回丝和硬回丝采用相同处理路线时，才将纺纱和络筒产生的实测废物记录为这一条羊毛纺纱废物流；处理路线不同的废物应拆成不同原子行。

- 选定流：羊毛纺纱废料 `db23708c-5c2f-4b7e-9098-910948275caa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_waste`
- 来源：`bianco-et-al-2023-wool-lca`; `eu-textiles-bat-2022`

##### 基本流

###### 纺纱期间经城市空气高架源排放的 PM10（`spinning_pm10_output`）

只有纺纱或络筒的有组织排放进入已核验的城市空气高架源环境舱时才记录 PM10。实际接收环境舱不同时应使用另一条原子基本流。

- 选定流：颗粒物 (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测排放质量，或根据风量和浓度记录进行有文件依据的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入最终调湿和包装的未调湿散装羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_spinning_air_emissions`
- 来源：`eu-textiles-bat-2022`

### 过程：最终调湿和工业包装（`conditioning_and_packing`）

#### 输入

##### 产品流

###### 接收用于最终准备的未调湿散装羊毛纱（`unconditioned_wool_yarn_input`）

记录从纺纱和络筒转入的同一物理未调湿纱。

- 选定流：Unconditioned bulk wool yarn containing at least 85% wool by mass
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，并与 unconditioned_wool_yarn_output 核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_materials`

###### 调湿和包装使用的低于 1 kV 电网电力（`conditioning_electricity_input`）

记录调湿设备、最终络筒、检验、抽风及包装设备耗电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：过程分表读数或有文件记录的总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_energy`
- 来源：`eu-textiles-bat-2022`

###### 直接纱线调湿使用的工艺水（`conditioning_process_water_input`）

只有工艺水跨越过程边界用于直接加湿或调湿纱线时才记录。场外公用工程使用的水保留在该公用工程数据集中。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测送入调湿作业的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water`
- 来源：`eu-textiles-bat-2022`

###### 纱线卷绕纸管（`paperboard_tube_input`）

记录纳入工业纱线交付形式的纸板管或纸芯。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于合格产品的纸管实测质量或采购记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_materials`

###### 工业运输用瓦楞纸箱（`corrugated_box_input`）

记录非零售工业交付使用的瓦楞纸箱。不得用本行表示纸芯、塑料薄膜、托盘或其他包装组件。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用于合格产品的纸箱实测质量或采购记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品羊毛纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_materials`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的非零售成品羊毛纱（`wool_yarn_output`）

记录通过最终调湿和工业包装检查后的合格成品纱。参考数量不包括包装质量。

- 选定流：含羊毛重量达85%或85%以上的羊毛纱，不供零售 `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：已声明调湿状态下合格纱线净质量的实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品羊毛纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product`
- 来源：`unsd-cpc-3-2025`; `iso-2060-1994`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision_first | 单独计量的作业和产品 | 只要能独立记录投入和产出，就通过细分纤维准备、纺纱、络筒、调湿及包装来避免分配。 | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |
| allocation_internal_recycling | 返回同一批次或过程的羊毛废物 | 将内部返回羊毛纤维作为内部循环，报告废物毛量和返回量，不在同一前景过程中建立避免产品抵扣。 | `bianco-et-al-2023-wool-lca` |
| allocation_exported_co_products | 离开系统的落毛、可回收纤维或其他有价值产出 | 单独报告每个外送共产品；若无法细分或系统扩展，应记录并论证所选物理或经济分配，并在其对纱线负荷产生实质影响时提供敏感性结果。 | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |
| allocation_waste_treatment | 送往处理的废物 | 按已声明的废物处理数据集一致分配收集和处理负荷，并披露任何截断、回收或替代约定。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fibre_materials | fibre_preparation | scoured_wool_input; wool_top_input; prepared_wool_sliver_output | 地磅、秤和库存记录 | batch_id, material_id, fibre_composition, opening_stock, received_mass, closing_stock, transfer_mass, moisture_state | 校准秤并进行库存核对 | kg | 每批 | 报告期全部批次 | 每个报告纱厂 | 汇总批次投入和转移量，再按备纺条子产出归一化 | 校准记录、供应商规范、库存核对 |
| cp_fibre_energy | fibre_preparation | fibre_preparation_electricity_input | 电表 | meter_id, start_reading, end_reading, shared_load_basis, batch_output | 过程分表或有文件记录的总表分配 | kWh | 每批或每班 | 具有代表性的完整报告期 | 每个报告纱厂 | 将净耗电分配至纤维准备并按备纺条子产出归一化 | 电表校准和分配工作表 |
| cp_fibre_waste | fibre_preparation | fibre_preparation_waste_output | 废物秤和转移记录 | batch_id, waste_type, gross_mass, tare_mass, destination, returned_mass | 称量每个废物容器或核对转移记录 | kg | 每批及每次转移 | 报告期全部批次 | 每个报告纱厂 | 按去向汇总净废物并按备纺条子产出归一化 | 秤校准、转移单、去向证据 |
| cp_fibre_air_emissions | fibre_preparation | fibre_preparation_pm10_output | 烟道监测记录 | stack_id, airflow, PM10_concentration, operating_time, treated_output | 直接测量或根据实测风量和浓度计算 | kg | 监测周期和运行期间 | 能代表报告运行的期间 | 每个适用排放点 | 计算排放质量并按备纺条子产出归一化 | 方法、仪器校准、采样报告 |
| cp_spinning_materials | spinning_and_winding | prepared_wool_sliver_input; spinning_lubricant_input; unconditioned_wool_yarn_output | 秤、领用记录和批次生产日志 | batch_id, material_id, input_mass, lubricant_issued, lubricant_returned, yarn_transfer_mass, fibre_composition | 校准秤和库房核对 | kg | 每批 | 报告期全部批次 | 每个报告纱厂 | 按批次汇总净投入和产出，再按未调湿纱产出归一化 | 校准记录、领料凭证、批次核对 |
| cp_spinning_energy | spinning_and_winding | spinning_electricity_input | 电表 | meter_id, start_reading, end_reading, shared_load_basis, yarn_output | 过程分表或有文件记录的总表分配 | kWh | 每批或每班 | 具有代表性的完整报告期 | 每个报告纱厂 | 将净耗电分配至纺纱和络筒并按未调湿纱产出归一化 | 电表校准和分配工作表 |
| cp_spinning_waste | spinning_and_winding | spinning_waste_output | 废物秤和转移记录 | batch_id, waste_type, gross_mass, tare_mass, destination, returned_mass | 称量每个废物容器或核对转移记录 | kg | 每批及每次转移 | 报告期全部批次 | 每个报告纱厂 | 按去向汇总净废物并按未调湿纱产出归一化 | 秤校准、转移单、去向证据 |
| cp_spinning_air_emissions | spinning_and_winding | spinning_pm10_output | 烟道监测记录 | stack_id, airflow, PM10_concentration, operating_time, yarn_output | 直接测量或根据实测风量和浓度计算 | kg | 监测周期和运行期间 | 能代表报告运行的期间 | 每个适用排放点 | 计算排放质量并按未调湿纱产出归一化 | 方法、仪器校准、采样报告 |
| cp_final_materials | conditioning_and_packing | unconditioned_wool_yarn_input | 秤和转移记录 | batch_id, input_mass, moisture_state, transfer_time | 在过程接收点使用校准秤 | kg | 每批 | 报告期全部批次 | 每个报告纱厂 | 汇总过程投入并与上游转移量核对 | 校准和核对记录 |
| cp_final_energy | conditioning_and_packing | conditioning_electricity_input | 电表 | meter_id, start_reading, end_reading, shared_load_basis, accepted_yarn_mass | 过程分表或有文件记录的总表分配 | kWh | 每批或每班 | 具有代表性的完整报告期 | 每个报告纱厂 | 将净耗电分配至最终准备并按合格纱归一化 | 电表校准和分配工作表 |
| cp_conditioning_water | conditioning_and_packing | conditioning_process_water_input | 水表 | meter_id, start_reading, end_reading, operating_time, accepted_yarn_mass | 直接过程水表 | kg | 每批或每班 | 具有代表性的完整报告期 | 每个报告纱厂 | 将直接调湿净用水按合格纱归一化 | 水表校准和水平衡 |
| cp_packing_materials | conditioning_and_packing | paperboard_tube_input; corrugated_box_input | 采购、领用和质量记录 | component_id, component_mass, quantity_issued, quantity_returned, accepted_yarn_mass | 称量代表性组件并核对领用量 | kg | 每个包装批次 | 报告期全部批次 | 每个报告纱厂 | 将组件净消耗质量按合格纱归一化 | 秤校准、采购规范、领用记录 |
| cp_final_product | conditioning_and_packing | wool_yarn_output | 最终秤量和质量放行记录 | batch_id, gross_mass, packing_mass, net_yarn_mass, moisture_state, wool_fraction, linear_density_tex, twist, ply_count, dye_state, winding_form, accepted_quantity | 校准成品秤并结合实验室或证书核查 | kg | 每个放行批次 | 报告期全部放行批次 | 每个报告纱厂 | 仅汇总合格纱净质量 | 校准、测试报告、放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_process_normalization | 每个过程清单行 | 用批次或期间交换量除以该过程匹配的合格产出质量；分子和分母不得混用不同含湿状态。 | 采集的交换量、匹配过程产出、已声明含湿状态 | 每 kg 过程产出的交换量 | `iso-14044-2006` |
| calc_net_packing_mass | 最终参考纱 | 合格纱净质量等于实测包装毛质量减去逐项实测的每个包装组件质量。 | 包装毛质量、纸芯质量、纸箱质量、其他逐项记录的包装质量 | 合格纱净质量 | `iso-2060-1994` |
| calc_pm10_mass | 有组织 PM10 行 | 使用相容单位，根据实测浓度、实测干气流量和运行时间计算排放质量；保留采样和平均元数据。 | PM10 浓度、风量、运行时间 | PM10 排放质量 | `eu-textiles-bat-2022` |
| calc_route_weighting | 多路线汇总数据集 | 按合格产量对路线特定归一化清单加权，并披露每条路线份额；保留路线特定结果。 | 路线清单、各路线合格质量 | 按产量加权的汇总清单 | `bianco-et-al-2023-wool-lca` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product_identity | 参考纱 | 对每个放行产品族确认羊毛质量分数至少 85%、非零售市场状态以及所有必需限定信息。 | 配方或纤维测试、产品规范、放行记录 |
| dq_mass_consistency | 所有材料流 | 对每个过程核对实测投入、产出、内部返回、库存变动和损失，并解释未闭合质量差。 | 批次质量平衡和库存核对 |
| dq_metering | 电力、水和有组织排放 | 使用校准仪表或有文件记录的分配及监测方法；保留仪表覆盖和共享负荷假设。 | 校准证书、仪表图、监测报告 |
| dq_temporal_coverage | 所有前景行 | 覆盖有代表性的报告期，在具有实质影响时纳入季节或产品组合变化，并识别排除的停机或异常运行。 | 生产日历和覆盖评估 |
| dq_route_representation | 粗纺和精纺生产 | 在进行任何按产量加权的汇总前保留路线特定记录。 | 带路线编码的批次记录和加权工作表 |
| dq_source_traceability | 所有外部和上游数据 | 对每个上游数据集记录供应商、地理、技术、时间期间、数据集版本和替代理由。 | 数据集登记表和供应商证据 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_identity | 参考流 | 最终输出 UUID 应为 `10c7de33-bef0-4310-98e7-734d8e2e4c9f`，流类型应为 Product flow，CPC 叶应为 26320，流属性应为 Mass。 | `unsd-cpc-3-2025` |
| validate_wool_fraction | 最终纱 | 声明或测试的羊毛质量分数低于 85% 时拒绝数据包。 | `unsd-cpc-3-2025` |
| validate_reference_amount | 最终纱 | 确认参考数量为已声明调湿状态下 1 kg 合格纱净质量，且不含工业包装质量。 | `iso-2060-1994` |
| validate_required_qualifiers | 最终纱 | 参考流定义中的任何必需限定信息缺失时，拒绝不完整数据包。 | `iso-1144-2016`; `iso-2060-1994` |
| validate_required_processes | 过程图 | 要求 fibre_preparation、spinning_and_winding 和 conditioning_and_packing 记录；只有已证明某项命名作业或交换不存在时，才允许显式零值或不适用证据。 | `bianco-et-al-2023-wool-lca` |
| validate_atomic_inventory | 每个清单行 | 每个交换应识别一个产品、废物或基本流；组合能源载体、组合包装材料、选择指令和复数兜底流均无效。 | `eu-textiles-bat-2022` |
| validate_flow_identity | 带 UUID 的清单行 | 使用前确认 state code 100、已声明的 Product、Waste 或 Elementary 流类型、语义名称、参考属性及适用时的接收环境舱。 |  |
| validate_unresolved_rows | 无 UUID 的行 | 要求精确 row_id 和选定单一流名称与 manifest unresolved_identity 一致，并禁止在身份缺口解决或正式审查前发布。 |  |
| validate_mass_balance | 每个前景过程 | 核对产品和材料投入、产品产出、废物、内部返回、库存变化和实测损失；报告并论证残余不平衡。 | `eu-textiles-bat-2022` |
| validate_allocation | 多产出过程 | 确认优先细分，并披露任何物理或经济分配基础、数据和敏感性结果。 | `iso-14044-2006`; `bianco-et-al-2023-wool-lca` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 非零售羊毛纱制造的前景生产数据集 |
| downstream_use | 经审查发布后可作为 secondary_dataset；background_dataset |
| allowed_use | 与已声明纱线和地理范围相符的织造、针织、纺织转换、产品 LCA、供应链筛查和路线特定基准比较 |
| excluded_use | 羊毛含量低于 85% 的纱；零售纱；其他动物毛纱；织物或服装生产；未披露的路线平均；清单未表示的湿法加工 |
| required_metadata | canonical PCR id、CPC 26320 参考、产品 UUID、羊毛分数、粗纺或精纺路线、纤维来源、其他纤维、染色状态、tex、捻度、股数、卷绕形式、调湿状态、净质量、场址、地理、期间、上游数据集、废物去向、分配和未解决数据缺口 |
| required_quality_disclosure | 测量覆盖、校准、质量平衡、路线份额、供应商数据质量、时间和地理代表性、分配敏感性、排除项和不确定性 |
| update_trigger | 纤维组成、备纺羊毛起始状态、路线、设备、能源供应、润滑剂、调湿、包装、废物去向、分配、场址、地理或生产期间发生对归一化清单有实质影响的变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | 联合国统计司，《Central Product Classification Version 3.0 explanatory notes》，代码 26320，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索日期 2026-08-12 | 类别身份、羊毛含量阈值、非零售市场状态 |
| ec-jrc-textiles-bref-2023 | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Textiles Industry》，JRC131874，EUR 31392 EN，DOI 10.2760/355887，https://publications.jrc.ec.europa.eu/repository/handle/JRC131874，检索日期 2026-08-12 | 纤维准备和湿法加工边界、投入产出清单、监测和质量控制 |
| eu-textiles-bat-2022 | official_guidance | Commission Implementing Decision (EU) 2022/2508，https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022D2508，检索日期 2026-08-12 | 材料、水、能源、化学品、排放、废物监测和过程级记录要求 |
| iso-1144-2016 | standard | ISO 1144:2016，Textiles — Universal system for designating linear density (Tex System)，https://www.iso.org/standard/70774.html，检索日期 2026-08-12 | tex 报告和支数制转换 |
| iso-2060-1994 | standard | ISO 2060:1994，Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method，https://www.iso.org/standard/6837.html，检索日期 2026-08-12 | 纱线质量和线密度计量语境 |
| iso-14044-2006 | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html，检索日期 2026-08-12 | LCI 一致性、分配、文件记录和解释 |
| bianco-et-al-2023-wool-lca | literature | Bianco, I., Picerno, G., and Blengini, G.A. (2023)，Life Cycle Assessment (LCA) of Worsted and Woollen processing in wool production: ReviWool noils and other wool co-products，Journal of Cleaner Production 415，137877，DOI 10.1016/j.jclepro.2023.137877 | 粗纺和精纺过程分解、中间产品、废物流、电力、路线区分和分配 |
